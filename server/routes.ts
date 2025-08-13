import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from 'resend';

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize Resend
  const resend = new Resend(process.env.RESEND_API_KEY);
  // Maps configuration endpoint
  app.get("/api/maps-config", (req, res) => {
    res.json({ 
      apiKey: process.env.GOOGLE_MAPS_API_KEY || '' 
    });
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification using Resend
      try {
        const emailResult = await resend.emails.send({
          from: 'Tartech Website <noreply@resend.dev>',
          to: ['tawandajaujau@gmail.com'],
          subject: `New Contact Form Submission - ${validatedData.service}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #333; margin: 0 0 10px 0;">New Contact Form Submission</h2>
                <p style="color: #666; margin: 0;">Received from Tartech Contracting website</p>
              </div>
              
              <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333; width: 30%;">Name:</td>
                    <td style="padding: 8px 0; color: #666;">${validatedData.firstName} ${validatedData.lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                    <td style="padding: 8px 0; color: #666;">${validatedData.email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333;">Company:</td>
                    <td style="padding: 8px 0; color: #666;">${validatedData.company || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333;">Service:</td>
                    <td style="padding: 8px 0; color: #666;">${validatedData.service}</td>
                  </tr>
                </table>
                
                <h3 style="color: #333; margin: 20px 0 10px 0;">Project Details</h3>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #FFD700;">
                  <p style="margin: 0; color: #333; line-height: 1.5;">${validatedData.message}</p>
                </div>
                
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                  <p style="color: #666; font-size: 14px; margin: 0;">
                    Submitted on: ${new Date().toLocaleString('en-ZW', { timeZone: 'Africa/Harare' })}
                  </p>
                </div>
              </div>
            </div>
          `
        });
        
        console.log("Email sent successfully:", emailResult.data?.id);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Continue with the response even if email fails
      }
      
      res.status(201).json({ 
        message: "Contact form submitted successfully",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

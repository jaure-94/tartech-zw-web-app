import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import { gsap } from '@/lib/gsap';
import { GoogleMap } from '@/components/GoogleMap';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Contact Us - Tartech Contracting';
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      service: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      setShowSuccess(true);
      form.reset();
      
      // Animate success message
      const successMessage = document.getElementById('success-message');
      if (successMessage) {
        gsap.fromTo(successMessage,
          {
            opacity: 0,
            y: 20,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          }
        );
      }

      // Hide success message after 5 seconds
      setTimeout(() => {
        if (successMessage) {
          gsap.to(successMessage, {
            opacity: 0,
            y: -20,
            scale: 0.9,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              setShowSuccess(false);
            }
          });
        }
      }, 5000);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      
      {/* Contact Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h1 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 md:mb-6">
              GET IN <span className="text-construction-yellow">TOUCH</span>
            </h1>
            <p className="animate-fade-in text-base sm:text-lg text-industrial-gray max-w-3xl mx-auto leading-relaxed">
              Ready to start your next industrial project? Contact our expert team for a consultation and detailed quote tailored to your specific requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="bg-white rounded-xl md:rounded-2xl shadow-xl">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs md:text-sm font-bold text-industrial-black">FIRST NAME *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your first name" 
                                  {...field}
                                  className="bg-white border-gray-300 text-industrial-black placeholder-gray-500 focus:border-construction-yellow focus:ring-construction-yellow"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs md:text-sm font-bold text-industrial-black">LAST NAME *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your last name" 
                                  {...field}
                                  className="bg-white border-gray-300 text-industrial-black placeholder-gray-500 focus:border-construction-yellow focus:ring-construction-yellow"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs md:text-sm font-bold text-industrial-black">EMAIL ADDRESS *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="your.email@example.com" 
                                {...field}
                                className="bg-white border-gray-300 text-industrial-black placeholder-gray-500 focus:border-construction-yellow focus:ring-construction-yellow"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs md:text-sm font-bold text-industrial-black">COMPANY</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your company name" 
                                {...field}
                                className="bg-white border-gray-300 text-industrial-black placeholder-gray-500 focus:border-construction-yellow focus:ring-construction-yellow"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs md:text-sm font-bold text-industrial-black">SERVICE REQUIRED *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white border-gray-300 text-industrial-black focus:border-construction-yellow focus:ring-construction-yellow">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="mining">Mining Operations</SelectItem>
                                <SelectItem value="construction">Construction</SelectItem>
                                <SelectItem value="agriculture">Agriculture Infrastructure</SelectItem>
                                <SelectItem value="consultation">General Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs md:text-sm font-bold text-industrial-black">PROJECT DETAILS *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                                className="bg-white border-gray-300 text-industrial-black placeholder-gray-500 focus:border-construction-yellow focus:ring-construction-yellow resize-none"
                                rows={6}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-construction-yellow text-industrial-black hover:bg-industrial-black hover:text-white font-bold text-base md:text-lg py-3 md:py-4 transition-colors duration-300"
                        disabled={contactMutation.isPending}
                      >
                        <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        {contactMutation.isPending ? 'SENDING...' : 'SEND MESSAGE'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
              
              {/* Success Message */}
              {showSuccess && (
                <div id="success-message" className="mt-4 md:mt-6 p-4 md:p-6 bg-green-600 rounded-lg text-center text-white">
                  <CheckCircle className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2" />
                  <h3 className="font-bold text-base md:text-lg mb-2">MESSAGE SENT SUCCESSFULLY!</h3>
                  <p className="text-xs md:text-sm opacity-90">Thank you for contacting Tartech Contracting. We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <Card className="bg-white rounded-xl md:rounded-2xl shadow-xl mb-6 md:mb-8">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-construction-yellow mb-4 md:mb-6">CONTACT INFORMATION</h3>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-construction-yellow h-5 w-5 md:h-6 md:w-6 mr-3 md:mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1 text-sm md:text-base text-industrial-black">HEAD OFFICE</h4>
                        <p className="text-xs md:text-sm text-industrial-gray">6 Beryl Road, Msasa<br />Harare, Zimbabwe</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-construction-yellow h-5 w-5 md:h-6 md:w-6 mr-3 md:mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1 text-sm md:text-base text-industrial-black">PHONE</h4>
                        <div className="space-y-1">
                          <p className="text-xs md:text-sm text-industrial-gray hover:text-construction-yellow transition-colors duration-300 cursor-pointer">+263 785 881 520</p>
                          <p className="text-xs md:text-sm text-industrial-gray hover:text-construction-yellow transition-colors duration-300 cursor-pointer">+263 785 990 836</p>
                          <p className="text-xs md:text-sm text-industrial-gray hover:text-construction-yellow transition-colors duration-300 cursor-pointer">+263 785 834 557</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="text-construction-yellow h-5 w-5 md:h-6 md:w-6 mr-3 md:mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1 text-sm md:text-base text-industrial-black">EMAIL</h4>
                        <a href="mailto:info@tartech.co.zw" className="text-xs md:text-sm text-industrial-gray hover:text-construction-yellow transition-colors duration-300">info@tartech.co.zw</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-construction-yellow h-5 w-5 md:h-6 md:w-6 mr-3 md:mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1 text-sm md:text-base text-industrial-black">BUSINESS HOURS</h4>
                        <div className="text-xs md:text-sm text-industrial-gray leading-relaxed">
                          <span className="block">Mon - Fri: 7:00 AM - 6:00 PM</span>
                          <span className="block">Sat: 8:00 AM - 4:00 PM</span>
                          <span className="block text-construction-yellow font-medium">Emergency: 24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Google Maps */}
              <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                <Card className="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden h-full w-full">
                  <CardContent className="p-0 h-full w-full">
                    <GoogleMap 
                      address="6 beryl road, msasa, harare, zimbabwe"
                      className="rounded-xl md:rounded-2xl"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

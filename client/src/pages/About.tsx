import React, { useEffect, useState, Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Target,
  Eye,
  Shield,
  Heart,
  Users,
  Lightbulb,
  CheckCircle,
  Award,
  FileCheck,
  Building2,
  Settings,
  Mail,
  Phone,
} from "lucide-react";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import PageLoader from "@/components/PageLoader";
import LoadingScreen from "@/components/LoadingScreen";
import SEOHead from "@/components/SEOHead";
import { gsap, initializePageAnimations } from "@/lib/gsap";
import { trackPageView } from "@/lib/analytics";
import tartechLogo from "@assets/tartech-logo-symbol_1755071044733.png";
import constructionSiteImage from "@assets/construction-site-min_1755117902164.jpg";
import cityImage from "@assets/city-568208_1280_1755188153811.jpg";
import cityOfHarareLogo from "@assets/city-of-harare_1755190481288.png";
import cityOfMaronderaLogo from "@assets/city-of-marondera_1755190481288.png";
import bikitaMineralsLogo from "@assets/bikita-logo_1755190481286.png";
import ministryOfTransportLogo from "@assets/min-trans_1755190481289.png";
import fredaRebeccaLogo from "@assets/reda_1755190481290.png";
import binduraNickelLogo from "@assets/bnc-logo_1755190481287.png";
import khayaLogo from "@assets/khaya-logo_1756283910285.png";
import zimplatsLogo from "@assets/zimplats-logo_1756283910288.png";

// Import certification logos
import zbcaLogo from "@assets/zbca-logo-resized_1756292941950.png";
import prazLogo from "@assets/praz-logo-resized_1756292941950.png";
import necLogo from "@assets/nec-logo-resized_1756292941948.png";
import cifozLogo from "@assets/cifoz-logo-resized_1756292941947.png";
import nssaLogo from "@assets/nssa-logo-resized_1756292941949.png";
import localGovLogo from "@assets/local-gvt-logo_1756293961486.png";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    trackPageView('/about', 'About Us - Tartech Contracting Zimbabwe');
    
    // Initialize animations and hide loader
    const initializeAndHideLoader = () => {
      const loadingElement = document.querySelector('.loading-screen');
      if (loadingElement) {
        gsap.to(loadingElement, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            setIsLoading(false);
            setTimeout(() => {
              initializePageAnimations();
            }, 100);
          }
        });
      } else {
        setIsLoading(false);
        setTimeout(() => {
          initializePageAnimations();
        }, 100);
      }
    };

    const loadingTimer = setTimeout(initializeAndHideLoader, 300);
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <Suspense fallback={<LoadingScreen title="ABOUT US" />}>
      <SEOHead 
        title="About Us - Tartech Contracting Zimbabwe"
        description="Learn about Tartech Contracting, Zimbabwe's leading industrial contracting company with over 15 years of experience in construction, mining, agriculture, and infrastructure development."
        keywords="about Tartech Contracting, industrial contractors Zimbabwe, construction company history, mining contractors Zimbabwe"
      />
      <div className="min-h-screen">
        {isLoading && <LoadingScreen title="ABOUT US" />}

      <PageLoader enableHeroAnimation={!isLoading}>
        <ScrollAnimations />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-industrial-black via-gray-900 to-industrial-black overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Primary Background Image */}
            <img
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Professional construction team in hard hats and safety gear on industrial site"
              className="w-full h-full object-cover opacity-30 animate-zoom-in"
            />

            {/* Dynamic Overlay with Animation */}
            <div className="absolute inset-0 bg-black/75 animate-fade-in"></div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-construction-yellow"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#grid)"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-construction-yellow rounded-full opacity-60 animate-float-slow"></div>
              <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-safety-orange rounded-full opacity-40 animate-float-medium"></div>
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-construction-yellow/30 rounded-full animate-float-fast"></div>
              <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-float-slow"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 pb-20 md:pb-24 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left Column - Main Content */}
              <div className="space-y-8 md:space-y-12 lg:space-y-16">
                {/* Animated Title */}
                <div className="space-y-4">
                  <div className="animate-slide-up-delay-1">
                    <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-construction-yellow/20 backdrop-blur-sm rounded-full border border-construction-yellow/30 mb-4 md:mb-6">
                      <span className="text-construction-yellow text-xs sm:text-sm font-bold tracking-wider">
                        TARTECH CONTRACTING
                      </span>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-construction-yellow rounded-full ml-2 animate-pulse"></div>
                    </div>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight animate-slide-up-delay-2">
                    WHO{" "}
                    <span className="text-construction-yellow relative">
                      WE ARE
                      <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-construction-yellow to-safety-orange animate-expand-width"></div>
                    </span>
                  </h1>
                </div>

                {/* Animated Description */}
                <div className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl animate-slide-up-delay-3 space-y-4 md:space-y-6">
                  <p>
                    Tartech Contracting is a diverse contractor with proven
                    expertise in multi-disciplined construction services, mining
                    and agriculture solutions, and significant social
                    contributions across Zimbabwe.
                  </p>
                  <p>
                    With over a decade of hands on expertise we deliver
                    end-to-end construction, mining, and agriculture services—on
                    time and on budget. From pre-construction planning to
                    flawless execution, Tartech combines innovation, efficiency,
                    and a commitment to excellence to bring your vision to life.
                  </p>
                  <p>
                    Operating throughout Sub-Saharan Africa our executive and
                    management teams adopt a hands-on solutions-driven approach.
                    We are committed to building Africa and creating
                    opportunities by employing local people when possible to
                    develop the skills of the local workforce and uplift
                    surrounding communities.
                  </p>
                </div>
              </div>

              {/* Right Column - Mission & Vision */}
              <div className="space-y-6 md:space-y-8 animate-slide-up-delay-6">
                <div className="space-y-6 md:space-y-8">
                  {/* Mission Card */}
                  <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-white/20 hover:border-construction-yellow/30 transition-all duration-500 hover:shadow-xl hover:shadow-construction-yellow/10">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-construction-yellow rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Target className="h-5 w-5 md:h-6 md:w-6 text-industrial-black" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-construction-yellow mb-3 md:mb-4 group-hover:text-construction-yellow/90 transition-colors duration-300">
                          OUR MISSION
                        </h3>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                          To deliver industrial-grade contracting solutions that
                          exceed safety standards and performance expectations,
                          empowering Zimbabwe's construction, mining, and
                          agricultural sectors with world-class expertise.
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-2 h-2 md:w-3 md:h-3 bg-construction-yellow/30 rounded-full group-hover:bg-construction-yellow/60 transition-colors duration-300"></div>
                  </div>

                  {/* Vision Card */}
                  <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-white/20 hover:border-construction-yellow/30 transition-all duration-500 hover:shadow-xl hover:shadow-construction-yellow/10">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-safety-orange rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Eye className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-construction-yellow mb-3 md:mb-4 group-hover:text-construction-yellow/90 transition-colors duration-300">
                          OUR VISION
                        </h3>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                          To be Zimbabwe's most trusted industrial contractor,
                          recognized for our unwavering commitment to safety,
                          innovation, and excellence in the harshest working
                          environments.
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-2 h-2 md:w-3 md:h-3 bg-safety-orange/30 rounded-full group-hover:bg-safety-orange/60 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
            <div className="w-6 h-10 border-2 border-construction-yellow/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-construction-yellow rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <h2 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 md:mb-6">
                OUR <span className="text-construction-yellow">VALUES</span>
              </h2>
              <p className="animate-fade-in text-base sm:text-lg text-industrial-gray max-w-3xl mx-auto leading-relaxed">
                Our core values guide every decision we make and define how we
                conduct business across all our operations in Zimbabwe.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
              {/* Safety */}
              <div className="animate-slide-in-left">
                <Card className="h-full text-center p-4 md:p-6 lg:p-8 border-4 border-transparent hover:border-construction-yellow transition-all duration-500 shadow-xl">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <Shield className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-industrial-black" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-industrial-black mb-3 md:mb-4">
                      SAFETY
                    </h3>
                    <div className="space-y-1 md:space-y-2 text-industrial-gray">
                      <p className="font-semibold text-sm md:text-base">
                        HEALTH
                      </p>
                      <p className="font-semibold text-sm md:text-base">
                        QUALITY
                      </p>
                      <p className="font-semibold text-sm md:text-base">
                        ENVIRONMENT
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Integrity */}
              <div className="animate-slide-in-left">
                <Card className="h-full text-center p-4 md:p-6 lg:p-8 border-4 border-transparent hover:border-construction-yellow transition-all duration-500 shadow-xl">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-industrial-black rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <Heart className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-construction-yellow" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-industrial-black mb-3 md:mb-4">
                      INTEGRITY
                    </h3>
                    <div className="space-y-1 md:space-y-2 text-industrial-gray">
                      <p className="font-semibold text-sm md:text-base">
                        HONESTY
                      </p>
                      <p className="font-semibold text-sm md:text-base">
                        RESPONSIBILITY
                      </p>
                      <p className="font-semibold text-sm md:text-base">
                        ACCOUNTABILITY
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* People */}
              <div className="animate-slide-in-right">
                <Card className="h-full text-center p-4 md:p-6 lg:p-8 border-4 border-transparent hover:border-construction-yellow transition-all duration-500 shadow-xl">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-safety-orange rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <Users className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-industrial-black mb-3 md:mb-4">
                      PEOPLE
                    </h3>
                    <div className="space-y-1 md:space-y-2 text-industrial-gray">
                      <p className="font-semibold text-sm md:text-base">
                        COLLABORATION
                      </p>
                      <p className="font-semibold text-sm md:text-base">
                        DEVELOPMENT
                      </p>
                      <p className="font-semibold text-sm md:text-base">
                        OPPORTUNITY
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Innovation */}
              <div className="animate-slide-in-right">
                <Card className="h-full text-center p-4 md:p-6 lg:p-8 border-4 border-transparent hover:border-construction-yellow transition-all duration-500 shadow-xl">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <Lightbulb className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-industrial-black" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-industrial-black mb-3 md:mb-4">
                      INNOVATION
                    </h3>
                    <div className="space-y-1 md:space-y-2 text-industrial-gray">
                      <p className="font-semibold text-sm md:text-base">
                        INSPIRE
                      </p>
                      <p className="font-semibold text-sm md:text-base">
                        EVOLVE
                      </p>
                      <p className="font-semibold text-sm md:text-base">
                        IMPROVE
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enabling Approach Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-light-industrial">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <h2 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 md:mb-6">
                OUR{" "}
                <span className="text-construction-yellow">
                  ENABLING APPROACH
                </span>
              </h2>
              <p className="animate-fade-in text-base sm:text-lg text-industrial-gray max-w-4xl mx-auto leading-relaxed">
                We are differentiated by the breadth of our construction
                capability based on the following attributes:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div className="animate-slide-in-left">
                <img
                  src={constructionSiteImage}
                  alt="Professional construction management team reviewing project plans"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>

              <div className="animate-slide-in-right space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    Our{" "}
                    <strong>
                      highly qualified and experienced management team
                    </strong>{" "}
                    has extensive abilities and experience in project
                    management. The team's combined construction experience and
                    capabilities ensure successful implementation of projects
                    from initiation to commissioning.
                  </p>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    We implement{" "}
                    <strong>
                      project risk assessments & management systems
                    </strong>
                    ; procurement planning and program management to ensure
                    safe, efficient and timeous delivery of projects.
                  </p>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    We forge <strong>strategic alliances</strong> with other
                    industry players and suppliers in line with project demands
                    to ensure adequate project resourcing.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-slide-in-left space-y-4 md:space-y-6 lg:order-2">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    We <strong>attract and retain best people</strong>, win the
                    most interesting and challenging projects from the best
                    customers and develop the best relationships.
                  </p>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    We will <strong>set the industry standards</strong> for
                    ethics, safety, sustainability and the way we treat
                    customers and our people. This gives our customers,
                    employees, partners, investors and the many communities that
                    we serve the confidence to trust us and do business with us.
                  </p>
                </div>
              </div>

              <div className="animate-slide-in-right lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Industrial construction site with advanced equipment and safety protocols"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Strengths Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <h2 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 md:mb-6">
                KEY <span className="text-construction-yellow">STRENGTHS</span>
              </h2>
              <p className="animate-fade-in text-base sm:text-lg text-industrial-gray max-w-4xl mx-auto leading-relaxed">
                Our strategic advantages and core competencies that set us apart
                in the competitive construction landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="animate-slide-in-left space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    <strong>Diversity and strategic positioning</strong> within
                    the Zimbabwean construction landscape
                  </p>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    The <strong>solution-based culture</strong> it brings to the
                    project teams it is involved with
                  </p>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    <strong>Technologically advanced approach</strong> to
                    managing construction sites
                  </p>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    <strong>
                      Commitment to sustainability and transformation
                    </strong>{" "}
                    in all project delivery
                  </p>
                </div>
              </div>

              <div className="animate-slide-in-right space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    <strong>Successful recruitment and up-skilling</strong> of
                    local communities as part of project deliverables
                  </p>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    <strong>Single-point of accountability</strong> removing the
                    interface risk from the client domain
                  </p>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    Ability to{" "}
                    <strong>
                      leverage experience in creating support and project
                      infrastructure
                    </strong>{" "}
                    in even the harshest environments
                  </p>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-industrial-black" />
                  </div>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed">
                    <strong>
                      Streamlined shared services, management systems and
                      policies
                    </strong>{" "}
                    for optimal efficiency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Track Record Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-light-industrial">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <h2 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 md:mb-6">
                TRACK <span className="text-construction-yellow">RECORD</span>
              </h2>
              <p className="animate-fade-in text-sm sm:text-base md:text-lg text-industrial-gray max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed">
                Our history speaks for itself. Since its inception, the company
                has sought to acquire new skills and to improve upon established
                methods. This philosophy has provided the company a platform to
                successfully develop a multi-disciplinary construction
                capability.
              </p>
              <p className="animate-fade-in text-sm sm:text-base md:text-lg text-industrial-gray max-w-4xl mx-auto leading-relaxed">
                Tartech is a company that has already been tried and proven and
                has outstood the test of time as it has managed to make a
                tremendous impact on the market and has gained the satisfaction
                and faith of a wide spectrum of clients.
              </p>
            </div>

            <div className="mb-12 md:mb-16">
              <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start mb-8 md:mb-12">
                <div className="animate-slide-in-left flex-1">
                  <img
                    src={cityImage}
                    alt="Zimbabwe city skyline showcasing urban development and construction projects"
                    className="rounded-xl shadow-2xl w-full"
                  />
                </div>

                <div className="animate-slide-in-right flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-industrial-black mb-6 md:mb-8">
                    TRUSTED BY LEADING ORGANIZATIONS
                  </h3>
                  <p className="text-sm sm:text-base text-industrial-gray leading-relaxed mb-6">
                    Our diverse portfolio spans across Zimbabwe's leading organizations, from municipal governments to major mining corporations, demonstrating our versatility and reliability in delivering complex industrial projects.
                  </p>
                </div>
              </div>

              {/* Client Cards Grid - Full Width */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  <Card className="py-4 px-3 md:py-6 md:px-4 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4 md:space-x-5">
                        <img 
                          src={cityOfHarareLogo} 
                          alt="City of Harare"
                          className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm md:text-base text-industrial-black">
                            City of Harare
                          </h4>
                          <p className="text-xs md:text-sm text-industrial-gray">
                            Municipal Infrastructure
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="py-4 px-3 md:py-6 md:px-4 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4 md:space-x-5">
                        <img 
                          src={cityOfMaronderaLogo} 
                          alt="City of Marondera"
                          className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm md:text-base text-industrial-black">
                            City of Marondera
                          </h4>
                          <p className="text-xs md:text-sm text-industrial-gray">
                            Urban Development
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="py-4 px-3 md:py-6 md:px-4 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4 md:space-x-5">
                        <img 
                          src={bikitaMineralsLogo} 
                          alt="Bikita Minerals"
                          className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm md:text-base text-industrial-black">
                            Bikita Minerals
                          </h4>
                          <p className="text-xs md:text-sm text-industrial-gray">
                            Mining Infrastructure
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="py-4 px-3 md:py-6 md:px-4 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4 md:space-x-5">
                        <img 
                          src={ministryOfTransportLogo} 
                          alt="Ministry of Transport"
                          className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm md:text-base text-industrial-black">
                            Min of Transport
                          </h4>
                          <p className="text-xs md:text-sm text-industrial-gray">
                            Department of Roads
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="py-4 px-3 md:py-6 md:px-4 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4 md:space-x-5">
                        <img 
                          src={fredaRebeccaLogo} 
                          alt="Freda Rebecca Mines"
                          className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm md:text-base text-industrial-black">
                            Freda Rebecca Mines
                          </h4>
                          <p className="text-xs md:text-sm text-industrial-gray">
                            Gold Mining Operations
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="py-4 px-3 md:py-6 md:px-4 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4 md:space-x-5">
                        <img 
                          src={binduraNickelLogo} 
                          alt="Bindura Nickel Corporation"
                          className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm md:text-base text-industrial-black">
                            Bindura Nickel Corporation
                          </h4>
                          <p className="text-xs md:text-sm text-industrial-gray">
                            Nickel Mining
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="py-4 px-3 md:py-6 md:px-4 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4 md:space-x-5">
                        <img 
                          src={khayaLogo} 
                          alt="Khaya Cement"
                          className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm md:text-base text-industrial-black">
                            Khaya Cement
                          </h4>
                          <p className="text-xs md:text-sm text-industrial-gray">
                            Industrial Manufacturing
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="py-4 px-3 md:py-6 md:px-4 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4 md:space-x-5">
                        <img 
                          src={zimplatsLogo} 
                          alt="Zimplats"
                          className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm md:text-base text-industrial-black">
                            Zimplats
                          </h4>
                          <p className="text-xs md:text-sm text-industrial-gray">
                            Platinum Mining
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-industrial-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <h2 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
                CERTIFICATION &{" "}
                <span className="text-construction-yellow">MEMBERSHIP</span>
              </h2>
              <p className="animate-fade-in text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our professional affiliations and certifications demonstrate our
                commitment to industry standards and regulatory compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
              <div className="animate-fade-in">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 lg:p-6 text-center hover:border-construction-yellow transition-all duration-500 h-full">
                  <CardContent className="p-0 flex flex-col items-center justify-center">
                    <img 
                      src={zbcaLogo} 
                      alt="ZBCA Logo"
                      className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain mx-auto mb-2 md:mb-3"
                    />
                    <h3 className="text-white font-bold mb-1 md:mb-2 text-xs md:text-sm lg:text-base">
                      ZBCA
                    </h3>
                    <p className="text-gray-300 text-xs leading-tight">
                      Zimbabwe Building Contractors Association
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-fade-in">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 lg:p-6 text-center hover:border-construction-yellow transition-all duration-500 h-full">
                  <CardContent className="p-0 flex flex-col items-center justify-center">
                    <img 
                      src={prazLogo} 
                      alt="PRAZ Logo"
                      className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain mx-auto mb-2 md:mb-3"
                    />
                    <h3 className="text-white font-bold mb-1 md:mb-2 text-xs md:text-sm lg:text-base">
                      PRAZ
                    </h3>
                    <p className="text-gray-300 text-xs leading-tight">
                      Procurement Regulatory Authority
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-fade-in">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 lg:p-6 text-center hover:border-construction-yellow transition-all duration-500 h-full">
                  <CardContent className="p-0 flex flex-col items-center justify-center">
                    <img 
                      src={necLogo} 
                      alt="NEC Logo"
                      className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain mx-auto mb-2 md:mb-3"
                    />
                    <h3 className="text-white font-bold mb-1 md:mb-2 text-xs md:text-sm lg:text-base">
                      NEC
                    </h3>
                    <p className="text-gray-300 text-xs leading-tight">
                      National Employment Council for Construction
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-fade-in">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 lg:p-6 text-center hover:border-construction-yellow transition-all duration-500 h-full">
                  <CardContent className="p-0 flex flex-col items-center justify-center">
                    <img 
                      src={cifozLogo} 
                      alt="CIFOZ Logo"
                      className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain mx-auto mb-2 md:mb-3"
                    />
                    <h3 className="text-white font-bold mb-1 md:mb-2 text-xs md:text-sm lg:text-base">
                      CIFOZ
                    </h3>
                    <p className="text-gray-300 text-xs leading-tight">
                      Construction Industry Federation of Zimbabwe
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-fade-in">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 lg:p-6 text-center hover:border-construction-yellow transition-all duration-500 h-full">
                  <CardContent className="p-0 flex flex-col items-center justify-center">
                    <img 
                      src={nssaLogo} 
                      alt="NSSA Logo"
                      className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain mx-auto mb-2 md:mb-3"
                    />
                    <h3 className="text-white font-bold mb-1 md:mb-2 text-xs md:text-sm lg:text-base">
                      NSSA
                    </h3>
                    <p className="text-gray-300 text-xs leading-tight">
                      National Social Security Authority
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-fade-in">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 lg:p-6 text-center hover:border-construction-yellow transition-all duration-500 h-full">
                  <CardContent className="p-0 flex flex-col items-center justify-center">
                    <img 
                      src={localGovLogo} 
                      alt="Local Government Logo"
                      className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain mx-auto mb-2 md:mb-3"
                    />
                    <h3 className="text-white font-bold mb-1 md:mb-2 text-xs md:text-sm lg:text-base">
                      Local Government
                    </h3>
                    <p className="text-gray-300 text-xs leading-tight">
                      Ministry of Local Government Public Works
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-construction-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="animate-fade-in text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-industrial-black mb-4 md:mb-6 leading-tight">
              READY TO WORK WITH ZIMBABWE'S MOST TRUSTED CONTRACTOR?
            </h2>
            <p className="animate-fade-in text-sm sm:text-base md:text-lg text-industrial-black mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Partner with us for your next construction, mining, or
              agricultural project. Experience the Tartech difference - where
              safety, quality, and excellence meet.
            </p>
            <div className="animate-fade-in flex justify-center">
              <Button
                size="lg"
                className="bg-industrial-black text-construction-yellow hover:bg-gray-800 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              >
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                GET QUOTE
              </Button>
            </div>
          </div>
        </section>
      </PageLoader>
      </div>
    </Suspense>
  );
}

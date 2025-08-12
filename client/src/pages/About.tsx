import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
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
  Phone
} from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function About() {
  useEffect(() => {
    document.title = 'Who We Are - Tartech Contracting Zimbabwe';
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-industrial-black via-gray-900 to-industrial-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Professional construction team in hard hats and safety gear on industrial site" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-black/95 via-industrial-black/90 to-industrial-black/95"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                WHO <span className="text-construction-yellow">WE ARE</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Three decades of industrial excellence, delivering world-class contracting solutions across Zimbabwe's construction, mining, and agricultural sectors with unwavering commitment to safety and innovation.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-construction-yellow/90 backdrop-blur-sm p-4 rounded-lg text-center border border-construction-yellow/20">
                  <div className="text-2xl lg:text-3xl font-black text-industrial-black">500+</div>
                  <div className="text-xs lg:text-sm font-bold text-industrial-black">PROJECTS</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/20">
                  <div className="text-2xl lg:text-3xl font-black text-construction-yellow">30+</div>
                  <div className="text-xs lg:text-sm font-bold text-white">YEARS</div>
                </div>
                <div className="bg-safety-orange/90 backdrop-blur-sm p-4 rounded-lg text-center border border-safety-orange/20">
                  <div className="text-2xl lg:text-3xl font-black text-white">100%</div>
                  <div className="text-xs lg:text-sm font-bold text-white">SAFETY</div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-construction-yellow mb-4 flex items-center">
                    <Target className="text-construction-yellow mr-3 h-6 w-6" />
                    OUR MISSION
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    To deliver industrial-grade contracting solutions that exceed safety standards and performance expectations, empowering Zimbabwe's construction, mining, and agricultural sectors with world-class expertise.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-construction-yellow mb-4 flex items-center">
                    <Eye className="text-construction-yellow mr-3 h-6 w-6" />
                    OUR VISION
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    To be Zimbabwe's most trusted industrial contractor, recognized for our unwavering commitment to safety, innovation, and excellence in the harshest working environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              OUR <span className="text-construction-yellow">VALUES</span>
            </h2>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-3xl mx-auto">
              Our core values guide every decision we make and define how we conduct business across all our operations in Zimbabwe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Safety */}
            <div className="animate-slide-in-left">
              <Card className="h-full text-center p-8 border-4 border-transparent hover:border-construction-yellow transition-all duration-500 shadow-xl">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-industrial-black" />
                  </div>
                  <h3 className="text-2xl font-black text-industrial-black mb-4">SAFETY</h3>
                  <div className="space-y-2 text-industrial-gray">
                    <p className="font-semibold">HEALTH</p>
                    <p className="font-semibold">QUALITY</p>
                    <p className="font-semibold">ENVIRONMENT</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Integrity */}
            <div className="animate-slide-in-left">
              <Card className="h-full text-center p-8 border-4 border-transparent hover:border-construction-yellow transition-all duration-500 shadow-xl">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-industrial-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-construction-yellow" />
                  </div>
                  <h3 className="text-2xl font-black text-industrial-black mb-4">INTEGRITY</h3>
                  <div className="space-y-2 text-industrial-gray">
                    <p className="font-semibold">HONESTY</p>
                    <p className="font-semibold">RESPONSIBILITY</p>
                    <p className="font-semibold">ACCOUNTABILITY</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* People */}
            <div className="animate-slide-in-right">
              <Card className="h-full text-center p-8 border-4 border-transparent hover:border-construction-yellow transition-all duration-500 shadow-xl">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-safety-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-industrial-black mb-4">PEOPLE</h3>
                  <div className="space-y-2 text-industrial-gray">
                    <p className="font-semibold">COLLABORATION</p>
                    <p className="font-semibold">DEVELOPMENT</p>
                    <p className="font-semibold">OPPORTUNITY</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Innovation */}
            <div className="animate-slide-in-right">
              <Card className="h-full text-center p-8 border-4 border-transparent hover:border-construction-yellow transition-all duration-500 shadow-xl">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-8 w-8 text-industrial-black" />
                  </div>
                  <h3 className="text-2xl font-black text-industrial-black mb-4">INNOVATION</h3>
                  <div className="space-y-2 text-industrial-gray">
                    <p className="font-semibold">INSPIRE</p>
                    <p className="font-semibold">EVOLVE</p>
                    <p className="font-semibold">IMPROVE</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enabling Approach Section */}
      <section className="py-20 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              OUR <span className="text-construction-yellow">ENABLING APPROACH</span>
            </h2>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-4xl mx-auto">
              We are differentiated by the breadth of our construction capability based on the following attributes:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional construction management team reviewing project plans" 
                className="rounded-xl shadow-2xl w-full" 
              />
            </div>
            
            <div className="animate-slide-in-right space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  Our <strong>highly qualified and experienced management team</strong> has extensive abilities and experience in project management. The team's combined construction experience and capabilities ensure successful implementation of projects from initiation to commissioning.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  We implement <strong>project risk assessments & management systems</strong>; procurement planning and program management to ensure safe, efficient and timeous delivery of projects.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  We forge <strong>strategic alliances</strong> with other industry players and suppliers in line with project demands to ensure adequate project resourcing.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left space-y-6 lg:order-2">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  We <strong>attract and retain best people</strong>, win the most interesting and challenging projects from the best customers and develop the best relationships.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  We will <strong>set the industry standards</strong> for ethics, safety, sustainability and the way we treat customers and our people. This gives our customers, employees, partners, investors and the many communities that we serve the confidence to trust us and do business with us.
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              KEY <span className="text-construction-yellow">STRENGTHS</span>
            </h2>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-4xl mx-auto">
              Our strategic advantages and core competencies that set us apart in the competitive construction landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-slide-in-left space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  <strong>Diversity and strategic positioning</strong> within the Zimbabwean construction landscape
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  The <strong>solution-based culture</strong> it brings to the project teams it is involved with
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  <strong>Technologically advanced approach</strong> to managing construction sites
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  <strong>Commitment to sustainability and transformation</strong> in all project delivery
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  <strong>Successful recruitment and up-skilling</strong> of local communities as part of project deliverables
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  <strong>Single-point of accountability</strong> removing the interface risk from the client domain
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  Ability to <strong>leverage experience in creating support and project infrastructure</strong> in even the harshest environments
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-industrial-black" />
                </div>
                <p className="text-industrial-gray leading-relaxed">
                  <strong>Streamlined shared services, management systems and policies</strong> for optimal efficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-20 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              TRACK <span className="text-construction-yellow">RECORD</span>
            </h2>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-4xl mx-auto mb-8">
              Our history speaks for itself. Since its inception, the company has sought to acquire new skills and to improve upon established methods. This philosophy has provided the company a platform to successfully develop a multi-disciplinary construction capability.
            </p>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-4xl mx-auto">
              Tartech is a company that has already been tried and proven and has outstood the test of time as it has managed to make a tremendous impact on the market and has gained the satisfaction and faith of a wide spectrum of clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern city skyline showcasing successful construction projects" 
                className="rounded-xl shadow-2xl w-full" 
              />
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-black text-industrial-black mb-8">TRUSTED BY LEADING ORGANIZATIONS</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-6 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-6 w-6 text-construction-yellow" />
                      <div>
                        <h4 className="font-bold text-industrial-black">City of Harare</h4>
                        <p className="text-sm text-industrial-gray">Municipal Infrastructure</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-6 w-6 text-construction-yellow" />
                      <div>
                        <h4 className="font-bold text-industrial-black">City of Marondera</h4>
                        <p className="text-sm text-industrial-gray">Urban Development</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3">
                      <Settings className="h-6 w-6 text-construction-yellow" />
                      <div>
                        <h4 className="font-bold text-industrial-black">Bikita Minerals</h4>
                        <p className="text-sm text-industrial-gray">Mining Infrastructure</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3">
                      <Target className="h-6 w-6 text-construction-yellow" />
                      <div>
                        <h4 className="font-bold text-industrial-black">Min of Transport</h4>
                        <p className="text-sm text-industrial-gray">Department of Roads</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3">
                      <Settings className="h-6 w-6 text-construction-yellow" />
                      <div>
                        <h4 className="font-bold text-industrial-black">Freda Rebecca Mines</h4>
                        <p className="text-sm text-industrial-gray">Gold Mining Operations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3">
                      <Settings className="h-6 w-6 text-construction-yellow" />
                      <div>
                        <h4 className="font-bold text-industrial-black">Bindura Nickel Corporation</h4>
                        <p className="text-sm text-industrial-gray">Nickel Mining</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-6 w-6 text-construction-yellow" />
                      <div>
                        <h4 className="font-bold text-industrial-black">Khaya Cement</h4>
                        <p className="text-sm text-industrial-gray">Industrial Manufacturing</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-l-4 border-construction-yellow shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3">
                      <Settings className="h-6 w-6 text-construction-yellow" />
                      <div>
                        <h4 className="font-bold text-industrial-black">Zimplats</h4>
                        <p className="text-sm text-industrial-gray">Platinum Mining</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-industrial-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-fade-in text-4xl sm:text-5xl font-black text-white mb-6">
              CERTIFICATION & <span className="text-construction-yellow">MEMBERSHIP</span>
            </h2>
            <p className="animate-fade-in text-lg text-gray-300 max-w-3xl mx-auto">
              Our professional affiliations and certifications demonstrate our commitment to industry standards and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center hover:border-construction-yellow transition-all duration-500">
                <CardContent className="p-0">
                  <Award className="h-12 w-12 text-construction-yellow mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">ZBCA</h3>
                  <p className="text-gray-300 text-sm">Zimbabwe Building Contractors Association</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center hover:border-construction-yellow transition-all duration-500">
                <CardContent className="p-0">
                  <FileCheck className="h-12 w-12 text-construction-yellow mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">PRAZ</h3>
                  <p className="text-gray-300 text-sm">Procurement Regulatory Authority</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center hover:border-construction-yellow transition-all duration-500">
                <CardContent className="p-0">
                  <Building2 className="h-12 w-12 text-construction-yellow mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">NEC</h3>
                  <p className="text-gray-300 text-sm">National Employment Council for Construction</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center hover:border-construction-yellow transition-all duration-500">
                <CardContent className="p-0">
                  <Settings className="h-12 w-12 text-construction-yellow mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">CIFOZ</h3>
                  <p className="text-gray-300 text-sm">Construction Industry Federation of Zimbabwe</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="animate-fade-in">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center hover:border-construction-yellow transition-all duration-500">
                <CardContent className="p-0">
                  <Shield className="h-12 w-12 text-construction-yellow mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">NSSA</h3>
                  <p className="text-gray-300 text-sm">National Social Security Authority</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in">
              <Card className="bg-white/5 backdrop-blur-md border border-construction-yellow/30 p-6 text-center">
                <CardContent className="p-0">
                  <p className="text-gray-300 mb-2">
                    <strong className="text-construction-yellow">Ministry of Local Government Public Works</strong>
                  </p>
                  <p className="text-gray-400 text-sm">Licensed and compliant with government construction standards</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-construction-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-fade-in text-4xl font-black text-industrial-black mb-6">
            READY TO WORK WITH ZIMBABWE'S MOST TRUSTED CONTRACTOR?
          </h2>
          <p className="animate-fade-in text-lg text-industrial-black mb-8 max-w-2xl mx-auto">
            Partner with us for your next construction, mining, or agricultural project. Experience the Tartech difference - where safety, quality, and excellence meet.
          </p>
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-industrial-black text-industrial-black hover:bg-industrial-black hover:text-construction-yellow text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                GET IN TOUCH
              </Button>
            </Link>
            <Button size="lg" className="bg-industrial-black text-construction-yellow hover:bg-gray-800 text-lg px-8 py-4">
              <Mail className="mr-2 h-5 w-5" />
              REQUEST QUOTE
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
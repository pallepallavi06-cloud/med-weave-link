import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Users, 
  Calendar, 
  FileText, 
  Activity,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Clock,
  Phone
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Complete patient records, medical history, and seamless registration process.",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Smart scheduling with availability tracking and automated reminders.",
  },
  {
    icon: FileText,
    title: "Medical Records",
    description: "Secure digital records with easy access to diagnoses, prescriptions, and lab results.",
  },
  {
    icon: Activity,
    title: "Real-time Analytics",
    description: "Comprehensive dashboards with insights on operations and patient care.",
  },
];

const benefits = [
  "HIPAA-compliant security",
  "Role-based access control",
  "Telemedicine ready",
  "Inventory management",
  "Billing & invoicing",
  "24/7 support",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-display font-bold">MediCare</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-primary-foreground space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">HIPAA Compliant & Secure</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight max-w-4xl mx-auto">
              Modern Hospital Management for{" "}
              <span className="text-primary-foreground/90">Better Patient Care</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Streamline your healthcare operations with our comprehensive platform. 
              Manage patients, appointments, records, and billing all in one secure place.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/register">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 px-8 h-12">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                  View Demo
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Everything You Need to Run Your Hospital
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete suite of tools designed specifically for healthcare providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="medical-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Built for Healthcare Excellence
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our platform is designed with healthcare professionals in mind, 
                ensuring compliance, security, and ease of use.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="p-1 rounded-full bg-success/10">
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/register">
                  <Button size="lg" className="gap-2">
                    Get Started Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="medical-card p-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Stethoscope className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold">24+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Active Doctors</p>
                </div>
                <div className="medical-card p-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-success/10">
                      <Users className="h-5 w-5 text-success" />
                    </div>
                    <span className="font-semibold">2,847</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Registered Patients</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="medical-card p-6 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-warning/10">
                      <Calendar className="h-5 w-5 text-warning" />
                    </div>
                    <span className="font-semibold">150+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Daily Appointments</p>
                </div>
                <div className="medical-card p-6 animate-scale-in" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-semibold">99.9%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Uptime Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="medical-card p-8 md:p-12 text-center hero-gradient rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Ready to Transform Your Hospital Operations?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join hundreds of healthcare facilities already using MediCare to 
              deliver better patient care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2">
                  Start Your Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <Phone className="h-4 w-4" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <span className="font-display font-bold">MediCare</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 MediCare Hospital Management System. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

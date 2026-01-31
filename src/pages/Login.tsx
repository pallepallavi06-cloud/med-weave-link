import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Mail, Lock, Eye, EyeOff, Activity, Shield, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement actual authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: "Login functionality will be implemented with backend.",
      });
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 flex flex-col justify-center p-12 text-primary-foreground">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm">
              <Heart className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold">MediCare</h1>
              <p className="text-primary-foreground/80 text-sm">Hospital Management System</p>
            </div>
          </div>
          
          <div className="space-y-8 max-w-md">
            <h2 className="text-4xl font-display font-bold leading-tight animate-fade-in">
              Streamline Your Healthcare Operations
            </h2>
            <p className="text-lg text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              A comprehensive solution for managing patients, appointments, medical records, billing, and inventory in one secure platform.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="p-2.5 rounded-xl bg-primary-foreground/20 backdrop-blur-sm">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">HIPAA Compliant</h3>
                  <p className="text-sm text-primary-foreground/70">Enterprise-grade security for sensitive data</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <div className="p-2.5 rounded-xl bg-primary-foreground/20 backdrop-blur-sm">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Real-time Analytics</h3>
                  <p className="text-sm text-primary-foreground/70">Monitor operations with live dashboards</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <div className="p-2.5 rounded-xl bg-primary-foreground/20 backdrop-blur-sm">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Role-Based Access</h3>
                  <p className="text-sm text-primary-foreground/70">Customized interfaces for each user type</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8 animate-scale-in">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="p-2 rounded-xl bg-primary/10">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">MediCare</span>
          </div>

          <Card className="border-0 shadow-xl bg-card">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-display font-bold text-center">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="doctor@medicare.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 h-11"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      New to MediCare?
                    </span>
                  </div>
                </div>

                <Link to="/register">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-11 font-semibold"
                  >
                    Create an Account
                  </Button>
                </Link>
              </form>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

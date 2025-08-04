import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import heroMockup from "@/assets/hero-phone-mockup.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(186_100%_60%/0.1),transparent_70%)]"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent leading-tight">
                Track Your Ride in{" "}
                <span className="text-primary">Real Time</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Your city commute, simplified and smarter. Never miss your bus again with live tracking and intelligent route suggestions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                <Download className="mr-2 group-hover:animate-bounce" />
                Download the App
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Live tracking active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>50k+ daily users</span>
              </div>
            </div>
          </div>
          
          {/* Right mockup */}
          <div className="relative">
            <div className="relative z-10 transform rotate-12 hover:rotate-6 transition-transform duration-700">
              <img 
                src={heroMockup} 
                alt="Bus tracking app interface" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating UI elements */}
            {/* <div className="absolute top-10 -left-4 bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-card animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Bus #42</p>
                  <p className="text-xs text-muted-foreground">2 min away</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-16 -right-4 bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-card animation-delay-1000 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Route saved</p>
                  <p className="text-xs text-muted-foreground">Home to work</p>
                </div>
              </div>
            </div> */}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Button } from "@/components/ui/button";
import { Apple, Play, Star } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(186_100%_60%/0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(186_70%_85%/0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          

          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
              Get Started <span className="text-primary">Today</span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of commuters who've already transformed their daily travel experience
            </p>
          </div>
          
    
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-secondary">4.8</div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                App Rating
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Live Tracking</div>
            </div>
          </div>
          

          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="group min-w-[200px]">
                <Apple className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
              </Button>
              
              <Button variant="hero" size="lg" className="group min-w-[200px]">
                <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              
            </p>
          </div>
          
 
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Trusted by commuters in</p>
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground/60">
              <span className="font-semibold">Cebu</span>
             
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
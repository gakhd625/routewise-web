import { ArrowRight, Download, MapPin, Calendar } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Download,
    title: "Download & Setup",
    description: "Get the app from your app store and complete the quick onboarding process.",
    color: "from-primary/20 to-primary/5"
  },
  {
    step: "02", 
    icon: MapPin,
    title: "Find Your Route",
    description: "Search for your destination and discover the best routes with real-time information.",
    color: "from-secondary/20 to-secondary/5"
  },
  {
    step: "03",
    icon: Calendar,
    title: "Track & Ride",
    description: "Follow live bus locations, get arrival alerts, and never miss your ride again.",
    color: "from-primary/20 to-primary/5"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and transform your daily commute
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="group bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-border/30 hover:border-primary/50 transition-all duration-500 hover:shadow-card">
                  <div className="space-y-6">
                    {/* Step number and icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-6xl font-bold text-primary/30">
                        {step.step}
                      </span>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow connector (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
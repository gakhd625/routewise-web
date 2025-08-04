import { MapPin, Route, Bell, Wifi } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Live Bus Tracking",
    description: "See exactly where your bus is in real-time with GPS precision and arrival predictions.",
    color: "text-primary"
  },
  {
    icon: Route,
    title: "Smart Route Planning", 
    description: "Get optimized routes with multiple transport options and live traffic updates.",
    color: "text-secondary"
  },
  {
    icon: Bell,
    title: "Schedule Alerts",
    description: "Never miss your ride with intelligent notifications and schedule change updates.",
    color: "text-primary"
  },
  {
    icon: Wifi,
    title: "Offline Maps",
    description: "Access routes and stops even without internet connection for reliable commuting.",
    color: "text-secondary"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(186_100%_60%/0.02)_25%,hsl(186_100%_60%/0.02)_50%,transparent_50%,transparent_75%,hsl(186_100%_60%/0.02)_75%)] bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need for 
            <span className="text-primary"> Smart Commuting</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to make your daily commute effortless and predictable
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
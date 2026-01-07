import { Twitter, Facebook, Instagram, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  product: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Updates", href: "#" },
    { name: "Beta", href: "#" }
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Status", href: "#" },
    { name: "FAQs", href: "#" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" }
  ]
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" }
];

const Footer = () => {
  return (
    <footer id="support" className="bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        
        {/* Main footer content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
              <Link to="/um,gae" className="flex items-center gap-3">
                  <div className="w-10 h-10 overflow-hidden rounded-xl">
                     <img
                       src="/Images/ePara.png"
                       alt="ePARA Logo"
                       className="w-full h-full object-cover"
                       />
                   </div>
                        <span className="text-2xl font-bold text-foreground">RouteWise</span>
              </Link>
            
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Making city commutes smarter, faster, and more reliable through real-time tracking and intelligent route planning.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links sections */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 RouteWise. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Under Beta Testing</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
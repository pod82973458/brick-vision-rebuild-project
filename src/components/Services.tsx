import { Card } from "@/components/ui/card";
import { Package, TrendingUp, Calculator, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track your brick and construction material inventory in real-time with our easy-to-use system."
    },
    {
      icon: TrendingUp,
      title: "Price Monitoring",
      description: "Stay updated with the latest market prices and trends for all types of construction materials."
    },
    {
      icon: Calculator,
      title: "Cost Estimation",
      description: "Calculate project costs accurately with our built-in estimation tools and current market rates."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Ensure material quality with our comprehensive tracking and verification system."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your construction material tracking needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
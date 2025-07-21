import { Card } from "@/components/ui/card";
import { Users, Target, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Users", value: "500+" },
    { icon: Target, label: "Projects Tracked", value: "1,200+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Clock, label: "Uptime", value: "99.9%" }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About BrickTracker
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering construction professionals with smart material tracking solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-4">
              At BrickTracker, we believe that efficient construction material management 
              is crucial for project success. Our platform provides real-time tracking, 
              market insights, and inventory management tools that help construction 
              professionals make informed decisions.
            </p>
            <p className="text-muted-foreground mb-4">
              Founded by industry experts, we understand the challenges faced in 
              construction projects. From price volatility to supply chain disruptions, 
              our solution addresses these pain points with innovative technology.
            </p>
            <p className="text-muted-foreground">
              Whether you're a contractor, builder, or material supplier, BrickTracker 
              provides the insights you need to optimize costs and improve project outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="p-8 bg-background">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Choose BrickTracker?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Real-Time Data</h4>
                <p className="text-muted-foreground text-sm">
                  Get up-to-date market prices and trends to make informed purchasing decisions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Easy Integration</h4>
                <p className="text-muted-foreground text-sm">
                  Seamlessly integrate with your existing project management workflows.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Expert Support</h4>
                <p className="text-muted-foreground text-sm">
                  Our team of construction industry experts is here to help you succeed.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Users", value: "2,500+" },
    { icon: Target, label: "Properties Tracked", value: "15,000+" },
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Clock, label: "Data Updates", value: "Daily" }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About PropertyTracker
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering real estate professionals and investors with comprehensive market intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-4">
              At PropertyTracker, we believe that informed decision-making is the key to successful 
              real estate investments. Our platform provides comprehensive market data, trend analysis, 
              and investment insights that help professionals and investors make smart property decisions.
            </p>
            <p className="text-muted-foreground mb-4">
              Founded by real estate experts and data scientists, we understand the complexities 
              of property markets. From price fluctuations to neighborhood trends, our solution 
              provides the intelligence you need to stay ahead of the market.
            </p>
            <p className="text-muted-foreground">
              Whether you're a real estate agent, investor, or property developer, PropertyTracker 
              delivers the market insights you need to maximize returns and minimize risks.
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
              Why Choose PropertyTracker?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Real-Time Data</h4>
                <p className="text-muted-foreground text-sm">
                  Get up-to-date property prices and market trends to make informed investment decisions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Market Intelligence</h4>
                <p className="text-muted-foreground text-sm">
                  Access comprehensive market analysis and neighborhood insights across major cities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Expert Analysis</h4>
                <p className="text-muted-foreground text-sm">
                  Benefit from our team of real estate experts and data analysts providing market insights.
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
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Track Real Estate Market Trends
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Monitor property prices, analyze market trends, and discover the best real estate investment opportunities across major cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToServices} size="lg">
              Explore Properties
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.querySelector('#market-trends')?.scrollIntoView({ behavior: 'smooth' })}>
              View Market Data
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
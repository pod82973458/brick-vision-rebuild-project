import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";

interface MarketData {
  location: string;
  price: number;
  change: number;
  type: string;
}

const MarketTrends = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  // Sample real estate data for demo
  const generateMarketData = (): MarketData[] => {
    const properties = [
      { name: 'Manhattan, NY', basePrice: 1250000, type: 'Condo' },
      { name: 'Brooklyn, NY', basePrice: 850000, type: 'Townhouse' },
      { name: 'Los Angeles, CA', basePrice: 950000, type: 'Single Family' },
      { name: 'Miami, FL', basePrice: 675000, type: 'Condo' },
      { name: 'Chicago, IL', basePrice: 425000, type: 'Condo' },
      { name: 'Austin, TX', basePrice: 550000, type: 'Single Family' }
    ];

    return properties.map(property => ({
      location: property.name,
      price: Math.round(property.basePrice + (Math.random() - 0.5) * 100000),
      change: Number(((Math.random() - 0.3) * 15).toFixed(2)),
      type: property.type
    }));
  };

  const fetchMarketData = async () => {
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, generate sample data
      const data = generateMarketData();
      setMarketData(data);
      setLastUpdated(new Date().toLocaleString());
    } catch (error) {
      console.error('Error fetching market data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  return (
    <section id="market-trends" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Market Trends
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Real-time property prices and market analysis across major US cities
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button 
              onClick={fetchMarketData} 
              disabled={loading}
              variant="outline"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh Data
            </Button>
            {lastUpdated && (
              <span className="text-sm text-muted-foreground">
                Last updated: {lastUpdated}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketData.map((item, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.location}
                </h3>
                <div className={`flex items-center ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {item.change >= 0 ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  <span className="text-sm font-medium">
                    {item.change >= 0 ? '+' : ''}{item.change}%
                  </span>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-foreground mb-1">
                ${item.price.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">
                Median {item.type} Price
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MarketTrends;
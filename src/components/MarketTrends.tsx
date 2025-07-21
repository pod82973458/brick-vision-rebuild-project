import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";

interface MarketData {
  material: string;
  price: number;
  change: number;
  unit: string;
}

const MarketTrends = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  // Sample data for demo - in real app, this would come from API
  const generateMarketData = (): MarketData[] => {
    const materials = [
      { name: 'Red Bricks', basePrice: 8.50, unit: 'per brick' },
      { name: 'Cement', basePrice: 12.30, unit: 'per kg' },
      { name: 'Steel Bars', basePrice: 45.80, unit: 'per kg' },
      { name: 'Sand', basePrice: 35.00, unit: 'per ton' },
      { name: 'Gravel', basePrice: 28.75, unit: 'per ton' },
      { name: 'Concrete Blocks', basePrice: 15.60, unit: 'per block' }
    ];

    return materials.map(material => ({
      material: material.name,
      price: Number((material.basePrice + (Math.random() - 0.5) * 2).toFixed(2)),
      change: Number(((Math.random() - 0.5) * 10).toFixed(2)),
      unit: material.unit
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
            Real-time construction material prices and market analysis
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
                  {item.material}
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
                ${item.price}
              </div>
              <div className="text-sm text-muted-foreground">
                {item.unit}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 bg-muted">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              API Reference
            </h3>
            <p className="text-muted-foreground">
              <strong>Demo Data:</strong> Using simulated construction material prices. 
              In production, you can integrate with APIs like:
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1">
              <li>• <strong>Alpha Vantage</strong> - Commodity prices API</li>
              <li>• <strong>Quandl/NASDAQ</strong> - Building materials indices</li>
              <li>• <strong>Federal Reserve Economic Data (FRED)</strong> - Construction price indices</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketTrends;
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded"></div>
            <span className="text-lg font-bold text-foreground">BrickTracker</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Smart construction material tracking for better project outcomes
          </p>
          <div className="text-muted-foreground text-xs">
            © 2024 BrickTracker. College Project - Educational Use Only.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
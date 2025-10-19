import React from 'react';
import { Button } from './ui/button';
import { ExternalLink, Play } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="glass-teal rounded-3xl p-12 mb-8 shadow-elegant">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ready to <span className="text-secondary text-glow-orange">Enter</span> Ravenbrook?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The Clocktower waits. The curse grows stronger. 
              Gather your team and step into the mystery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="premium" 
                size="xl" 
                className="text-lg group"
                onClick={() => window.open('https://horizon.meta.com/world/10163428610499954', '_blank')}
              >
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Enter Ravenbrook Manor
              </Button>
              <Button 
                variant="hero" 
                size="xl" 
                className="text-lg group"
                onClick={() => window.open('https://horizon.meta.com/world/10163428610499954', '_blank')}
              >
                <ExternalLink className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                View on Meta Horizon
              </Button>
            </div>
          </div>

          {/* Meta Logo */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Available on</span>
            <div className="glass px-6 py-2 rounded-full font-semibold text-foreground">
              Meta Horizon Worlds
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

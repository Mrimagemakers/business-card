import React from 'react';
import { Button } from './ui/button';
import { Book, ExternalLink, Star, ShoppingCart } from 'lucide-react';

export const Merchandise = () => {
  return (
    <section id="merchandise" className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-teal px-4 py-2 rounded-full mb-4">
            <Book size={16} className="text-secondary" />
            <span className="text-sm font-semibold text-secondary">Companion Content</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Beyond the <span className="text-secondary text-glow-orange">VR Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deeper into the world of Ravenbrook with our official coloring book
          </p>
        </div>

        {/* Coloring Book Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden shadow-elegant">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Left: Book Cover/Visual */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                
                {/* Book Cover Placeholder with Amazon styling */}
                <div className="relative glass-teal rounded-2xl p-8 flex items-center justify-center min-h-[400px] border-2 border-secondary/20 group-hover:border-secondary/40 transition-all">
                  <div className="text-center">
                    <Book className="text-secondary mx-auto mb-6 animate-float" size={80} />
                    <h3 className="font-display text-3xl font-bold mb-4">
                      Halloween Haunts
                    </h3>
                    <p className="text-xl text-muted-foreground mb-2">
                      A Spooky Coloring Adventure
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="text-secondary fill-secondary" size={16} />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">Available on Amazon</span>
                    </div>
                  </div>
                </div>

                {/* Amazon Badge */}
                <div className="absolute top-4 right-4 glass rounded-lg px-3 py-2 flex items-center gap-2">
                  <ShoppingCart className="text-accent" size={16} />
                  <span className="text-xs font-semibold">Shop Now</span>
                </div>
              </div>

              {/* Right: Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Halloween Haunts: A Spooky Coloring Adventure
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Step into the mysterious world of Ravenbrook beyond the VR experience. 
                    This beautifully illustrated coloring book brings the haunted manor, 
                    cursed carnival, and clocktower to life on every page.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Perfect for fans of all ages who want to explore the spooky scenery, 
                    iconic characters, and supernatural mysteries at their own pace.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Immersive Artwork</p>
                      <p className="text-xs text-muted-foreground">Detailed scenes from Ravenbrook's haunted locations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Character Illustrations</p>
                      <p className="text-xs text-muted-foreground">James, Rosa, and Alex in action-packed moments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Perfect for Halloween</p>
                      <p className="text-xs text-muted-foreground">Spooky designs ideal for the season</p>
                    </div>
                  </div>
                </div>

                {/* Author Credit */}
                <div className="glass-teal rounded-lg p-4 border-l-4 border-secondary">
                  <p className="text-xs text-muted-foreground mb-1">Created by</p>
                  <p className="text-sm font-semibold text-foreground">Darnell Clark</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    variant="premium" 
                    size="lg" 
                    className="group"
                    onClick={() => window.open('https://www.amazon.com/Halloween-Haunts-Spooky-Coloring-Adventure/dp/B0CKS6DVFM/', '_blank')}
                  >
                    <ShoppingCart className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                    Buy on Amazon
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://www.amazon.com/Halloween-Haunts-Spooky-Coloring-Adventure/dp/B0CKS6DVFM/', '_blank')}
                  >
                    View Details
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Text */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-muted-foreground text-sm">
            Available now on Amazon.com • Perfect for Halloween enthusiasts and coloring book collectors • 
            <span className="text-foreground font-semibold"> Expand your Ravenbrook experience</span>
          </p>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Button } from './ui/button';
import { Headset, Users, Zap, ExternalLink } from 'lucide-react';

export const MetaIntegration = () => {
  const features = [
    {
      icon: Headset,
      title: 'Full VR Immersion',
      description: 'Experience Ravenbrook in stunning virtual reality with Meta Quest 2 & 3',
    },
    {
      icon: Users,
      title: '1-3 Player Co-op',
      description: 'Team up with friends to solve puzzles and survive supernatural encounters',
    },
    {
      icon: Zap,
      title: 'Live on Horizon Worlds',
      description: 'Play now - no downloads required, instant access through Meta Horizon',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-card/30 via-background to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="glass rounded-3xl overflow-hidden shadow-glow-teal border-2 border-primary/20">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Left: Meta Horizon Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 glass-teal px-4 py-2 rounded-full mb-4">
                    <Headset size={16} className="text-primary" />
                    <span className="text-sm font-semibold text-primary">Now Available</span>
                  </div>
                  <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                    Play on <span className="text-primary">Meta Horizon Worlds</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Step into Ravenbrook Manor and experience the mystery in full virtual reality. 
                    Available now on Meta Horizon Worlds.
                  </p>
                </div>

                {/* World Name Badge */}
                <div className="glass-teal rounded-xl p-6 border-l-4 border-primary">
                  <p className="text-xs text-muted-foreground mb-2">Experience Name</p>
                  <h3 className="font-display text-2xl font-bold text-primary mb-1">Ravenbrook Manor</h3>
                  <p className="text-sm text-muted-foreground">A Halloween Haunts VR Experience</p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="text-primary" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    variant="premium" 
                    size="lg"
                    className="group"
                    onClick={() => window.open('https://horizon.meta.com/world/10163428610499954', '_blank')}
                  >
                    <Headset className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                    Launch Experience
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://horizon.meta.com/world/10163428610499954', '_blank')}
                  >
                    View on Meta
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </div>

              {/* Right: Visual/Badge Area */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Decorative VR Headset Visual */}
                  <div className="glass-teal rounded-2xl p-12 flex items-center justify-center border-2 border-primary/30 hover:border-primary/50 transition-all group cursor-pointer"
                       onClick={() => window.open('https://horizon.meta.com/world/10163428610499954', '_blank')}>
                    <div className="text-center">
                      <Headset className="text-primary mx-auto mb-6 animate-float group-hover:scale-110 transition-transform" size={120} />
                      <h3 className="font-display text-2xl font-bold mb-2">Meta Quest</h3>
                      <p className="text-muted-foreground mb-4">Ready to Play</p>
                      <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                        <span className="text-xs font-semibold">Live Now</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 glass rounded-full p-3 shadow-elegant animate-float" style={{ animationDelay: '0.5s' }}>
                    <Users className="text-secondary" size={24} />
                  </div>
                  <div className="absolute -bottom-4 -left-4 glass rounded-full p-3 shadow-elegant animate-float" style={{ animationDelay: '1s' }}>
                    <Zap className="text-accent" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Info */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Requires Meta Quest 2 or Meta Quest 3 • Free to play on Meta Horizon Worlds • 
              <span className="text-foreground font-semibold"> No additional downloads needed</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { BookOpen, MapPin } from 'lucide-react';

export const Story = () => {
  return (
    <section id="story" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-teal px-4 py-2 rounded-full mb-4">
              <BookOpen size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary">The Mystery Awaits</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              The <span className="text-primary">Clocktower</span> Curse
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ravenbrook holds dark secrets. The past bleeds into the present, 
              and only you can break the cycle.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="glass-teal rounded-xl p-6 transition-interactive hover-lift hover-glow-teal">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">The Town</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Ravenbrook, 1950s. A cursed manor where time itself has fractured. 
                      The Clocktower stands as a monument to tragedy, its hands frozen at midnight.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6 transition-interactive hover-lift">
                <h3 className="font-display text-xl font-bold mb-3">Your Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Explore the haunted grounds, switching between present day and 1950s echoes. 
                  Discover clues, solve environmental puzzles, and survive supernatural encounters.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="glass-teal px-3 py-1 rounded-full text-xs text-primary">Investigate</span>
                  <span className="glass-teal px-3 py-1 rounded-full text-xs text-primary">Survive</span>
                  <span className="glass-teal px-3 py-1 rounded-full text-xs text-primary">Escape</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="glass rounded-xl p-6 transition-interactive hover-lift">
                <h3 className="font-display text-xl font-bold mb-3">The Core Loop</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                    <span className="text-muted-foreground">Explore haunted locations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                    <span className="text-muted-foreground">Discover clues and artifacts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                    <span className="text-muted-foreground">Solve environmental puzzles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">4</div>
                    <span className="text-muted-foreground">Survive encounters</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">5</div>
                    <span className="text-muted-foreground">Unlock new wings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">!</div>
                    <span className="text-muted-foreground">Face the boss</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6 bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                <h3 className="font-display text-xl font-bold mb-2 text-secondary">Time is Running Out</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The Clocktower's curse grows stronger with each passing moment. 
                  Work together, trust your instincts, and remember: 
                  <span className="text-foreground font-semibold"> not everything is as it seems</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

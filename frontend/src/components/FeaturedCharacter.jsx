import React from 'react';
import { Shield, Users, Zap, Heart } from 'lucide-react';

export const FeaturedCharacter = () => {
  const stats = [
    { icon: Shield, label: 'Fear Resistance', value: '95%', color: 'secondary' },
    { icon: Zap, label: 'Strength', value: '90%', color: 'secondary' },
    { icon: Heart, label: 'Leadership', value: '85%', color: 'accent' },
    { icon: Users, label: 'Team Synergy', value: '88%', color: 'primary' },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-teal px-4 py-2 rounded-full mb-4">
            <Shield size={16} className="text-secondary" />
            <span className="text-sm font-semibold text-secondary">Featured Character</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Meet <span className="text-secondary text-glow-orange">James Carter</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The brave leader who keeps the team together through Ravenbrook's darkest moments
          </p>
        </div>

        {/* Character Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left: Character Image */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <img
                src="https://customer-assets.emergentagent.com/job_timeveil-escape/artifacts/jvb0cug9_file_000000004c2061f59e77e2d727ca5087.png"
                alt="James Carter - Team Leader"
                className="relative w-full h-auto rounded-2xl shadow-elegant transition-transform group-hover:scale-105"
              />
              
              {/* Character Badge */}
              <div className="absolute top-4 left-4 glass-teal rounded-xl px-4 py-2">
                <p className="text-xs text-muted-foreground mb-1">Role</p>
                <p className="text-secondary font-bold">Tank / Lead</p>
              </div>
            </div>
          </div>

          {/* Right: Character Details */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Bio Card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Shield className="text-secondary" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1">James Carter</h3>
                  <p className="text-muted-foreground text-sm">African American • Age 17</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Athletic build with a short fade haircut and brown eyes. Usually seen in his varsity jacket, 
                jeans, and sneakers. James is the natural leader—brave, logical, and protective of his team, 
                though he remains skeptical of the supernatural until confronted with undeniable evidence.
              </p>

              {/* Quote */}
              <div className="glass-teal rounded-lg p-4 border-l-4 border-secondary">
                <p className="text-foreground italic">
                  "Stay close, stay calm. We'll get through this together."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— James Carter</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="glass-teal rounded-xl p-4 transition-interactive hover-lift">
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className={`text-${stat.color}`} size={18} />
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                    <p className={`text-2xl font-bold text-${stat.color}`}>{stat.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Special Abilities */}
            <div className="glass rounded-xl p-6">
              <h4 className="font-display text-lg font-bold mb-4">Special Abilities</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="text-secondary" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Fear Shield</p>
                    <p className="text-xs text-muted-foreground">
                      Absorbs fear events better than others, protecting nearby teammates from psychological attacks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="text-secondary" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Heavy Lifter</p>
                    <p className="text-xs text-muted-foreground">
                      Can move heavy objects, brace doors, and create barricades to block hostile entities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personality Traits */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h4 className="font-display text-xl font-bold mb-6 text-center">Personality Profile</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/20 mx-auto mb-3 flex items-center justify-center">
                  <Shield className="text-secondary" size={24} />
                </div>
                <h5 className="font-semibold mb-2">Brave & Protective</h5>
                <p className="text-sm text-muted-foreground">
                  Always puts the team first, willing to face danger head-on
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 mx-auto mb-3 flex items-center justify-center">
                  <Zap className="text-accent" size={24} />
                </div>
                <h5 className="font-semibold mb-2">Logical Thinker</h5>
                <p className="text-sm text-muted-foreground">
                  Approaches problems methodically, even under extreme stress
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center">
                  <Heart className="text-primary" size={24} />
                </div>
                <h5 className="font-semibold mb-2">Slightly Skeptical</h5>
                <p className="text-sm text-muted-foreground">
                  Questions the supernatural but adapts when faced with evidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

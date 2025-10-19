import React from 'react';
import { Puzzle, Zap, Users2, Book } from 'lucide-react';

const features = [
  {
    icon: Puzzle,
    title: 'Environmental Puzzles',
    description: 'Solve intricate puzzles using objects, clues, and your wits. Mirror ciphers, sound matching, and gear synchronization.',
    color: 'primary',
  },
  {
    icon: Zap,
    title: 'Echo Shift Mechanic',
    description: 'Switch between present day and 1950s echoes to reveal hidden objects, clues, and pathways through time.',
    color: 'secondary',
  },
  {
    icon: Users2,
    title: 'Co-op Focused',
    description: 'Designed for teamwork. Coordinate roles, share discoveries, and work together to overcome supernatural challenges.',
    color: 'accent',
  },
  {
    icon: Book,
    title: 'Clue Journal System',
    description: 'Your diegetic journal auto-adds photos, glyph rubbings, and artifacts. Build a clue web to track the mystery.',
    color: 'primary',
  },
];

const vrFeatures = [
  { label: 'Full VR Immersion', value: 'Meta Quest 2/3' },
  { label: 'Comfort Options', value: 'Snap/Teleport, Vignette' },
  { label: 'Multiplayer', value: '1-3 Players' },
  { label: 'Platform', value: 'Horizon Worlds' },
];

export const Gameplay = () => {
  return (
    <section id="gameplay" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-teal px-4 py-2 rounded-full mb-4">
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Core Mechanics</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            How to <span className="text-secondary text-glow-orange">Play</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combine exploration, puzzle-solving, and teamwork to unravel Ravenbrook's mysteries.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-teal rounded-xl p-6 transition-interactive hover-lift hover-glow-teal group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${feature.color}/20 mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`text-${feature.color}`} size={24} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* VR Features Section */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold mb-6 text-center">
              Built for <span className="text-primary">VR</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {vrFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-4 glass-teal rounded-lg">
                  <span className="text-sm font-semibold text-foreground/80">{feature.label}</span>
                  <span className="text-sm text-primary font-bold">{feature.value}</span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p>
                  <span className="text-foreground font-semibold">Fear Meter:</span> Experience heightens tension with blur vignettes and rumble. Stay close to teammates to reduce fear.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p>
                  <span className="text-foreground font-semibold">Progression System:</span> Earn Ravenbrook Tokens to unlock character skins, filters, and props.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p>
                  <span className="text-foreground font-semibold">Accessibility:</span> Multiple comfort settings ensure everyone can enjoy the experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Church, TentTree, Clock } from 'lucide-react';

const chapters = [
  {
    number: 1,
    title: 'The Gates & Chapel',
    subtitle: 'The Haunted Wedding',
    icon: Church,
    duration: '12-18 min',
    color: 'primary',
    goal: 'Calm the Ghost Bride by reconstructing her timeline',
    spaces: ['Manor exterior gate', 'Chapel nave', 'Bridal antechamber'],
    mechanics: [
      'Echo Shift: Reveal 1950s overlay for 5 seconds',
      'Photo Archive: Take spectral photos',
      'Heavy Interact: Move pews and objects',
    ],
    reward: 'Clock Hand #1',
  },
  {
    number: 2,
    title: 'Midway of Shadows',
    subtitle: 'The Carnival',
    icon: Ferriswheel,
    duration: '12-18 min',
    color: 'secondary',
    goal: "Break the witches' glamour over the square",
    spaces: ['Carnival midway', 'Funhouse mirrors', 'Carousel hub'],
    mechanics: [
      'Mirror Cipher: Redirect moonlight into lens',
      'Sound Match: Match vintage tracks to scenes',
      'Clown Ambush: Timed dodges and cover',
    ],
    reward: 'Clock Hand #2',
  },
  {
    number: 3,
    title: 'The Clocktower',
    subtitle: 'Reset the Curse',
    icon: Clock,
    duration: '12-18 min',
    color: 'accent',
    goal: 'Install hands and set Midnight in both timelines',
    spaces: ['Gear stairwell', 'Belfry', 'Exterior catwalk'],
    mechanics: [
      'Co-op Gear Sync: Coordinate gear rotations',
      'Sigil Order: Decode and dial sequences',
      'Boss Fight: Block gusts, ring the bell on beat',
    ],
    reward: 'Freedom... or does the loop continue?',
  },
];

export const Chapters = () => {
  return (
    <section id="chapters" className="relative py-24 overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-teal px-4 py-2 rounded-full mb-4">
            <Clock size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">3-Chapter Journey</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Your Path Through <span className="text-primary">Ravenbrook</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each chapter brings new mysteries, challenges, and supernatural encounters. 
            Progress through the story to break the curse.
          </p>
        </div>

        {/* Chapter Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {chapters.map((chapter, index) => {
            const IconComponent = chapter.icon;
            return (
              <div
                key={chapter.number}
                className="glass rounded-2xl p-8 transition-interactive hover-lift hover:shadow-elegant group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Chapter Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className={`relative w-24 h-24 rounded-xl bg-${chapter.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`text-${chapter.color}`} size={40} />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center font-bold text-background text-sm">
                        {chapter.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Title */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-display text-2xl font-bold">{chapter.title}</h3>
                        <span className="glass-teal px-3 py-1 rounded-full text-xs text-primary">
                          {chapter.duration}
                        </span>
                      </div>
                      <p className={`text-${chapter.color} font-semibold italic`}>{chapter.subtitle}</p>
                    </div>

                    {/* Goal */}
                    <div className="glass-teal rounded-lg p-4">
                      <p className="text-sm font-semibold text-foreground/80 mb-1">Mission Goal:</p>
                      <p className="text-sm text-muted-foreground">{chapter.goal}</p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Spaces */}
                      <div>
                        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Locations</p>
                        <div className="space-y-1">
                          {chapter.spaces.map((space, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className={`w-1.5 h-1.5 rounded-full bg-${chapter.color}`} />
                              <span>{space}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mechanics */}
                      <div>
                        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Key Mechanics</p>
                        <div className="space-y-1">
                          {chapter.mechanics.map((mechanic, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className={`w-1.5 h-1.5 rounded-full bg-${chapter.color} mt-1.5 flex-shrink-0`} />
                              <span>{mechanic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Reward */}
                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Reward:</span>
                      <span className="text-sm font-semibold text-secondary">{chapter.reward}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

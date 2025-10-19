import React from 'react';
import { Shield, Eye, Cpu, Users } from 'lucide-react';

const characters = [
  {
    name: 'James Carter',
    role: 'Tank / Lead',
    icon: Shield,
    color: 'secondary',
    age: '17',
    ethnicity: 'African American',
    description: 'Athletic build, brave and logical. Natural leader who protects the group, though skeptical of the supernatural. Deep, calm voice that turns slightly sarcastic under stress.',
    abilities: [
      'High fear resistance',
      'Heavy object interaction',
      'Door bracing & barricading',
      'Team protection',
    ],
    quote: '"Stay close, stay calm. We\'ll get through this together."',
  },
  {
    name: 'Rosa Martinez',
    role: 'Seer / Insight',
    icon: Eye,
    color: 'primary',
    age: '16',
    ethnicity: 'Hispanic (Mexican-American)',
    description: 'Medium height with long wavy brown hair and gold hoop earrings, wearing a denim jacket with red flannel tied at her waist. Curious, witty, and intuitive—the heart of the team who senses paranormal danger first. Warm voice that turns sharp when afraid or excited.',
    abilities: [
      'Echo Shift ability',
      'Sense paranormal danger',
      'Read ancient inscriptions',
      'Spiritual presence detection',
    ],
    quote: '"The past is calling. We need to listen before it\'s too late."',
  },
  {
    name: 'Alex Chen',
    role: 'Tech / Scan',
    icon: Cpu,
    color: 'accent',
    age: '17',
    ethnicity: 'Chinese-American',
    description: 'Lean build with stylish glasses, usually wearing a graphic t-shirt and black hoodie with his camera slung across his chest. Tech-savvy problem solver who provides comic relief despite being anxious. Quick-thinking with energetic, slightly nerdy humor.',
    abilities: [
      'Photo documentation',
      'Gadget operation & hacking',
      'Signal decoding',
      'Anomaly scanning & recording',
    ],
    quote: '"Okay, so... haunted manor, cursed timeline, evil witches. This is either the best or worst field trip ever!"',
  },
];

export const Characters = () => {
  return (
    <section id="characters" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-teal px-4 py-2 rounded-full mb-4">
            <Users size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Choose Your Role</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Meet the <span className="text-secondary text-glow-orange">Investigators</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three unique roles, one shared mission. Each character brings special abilities 
            essential for solving Ravenbrook's mysteries.
          </p>
        </div>

        {/* Character Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {characters.map((character, index) => {
            const IconComponent = character.icon;
            return (
              <div
                key={character.name}
                className="glass-teal rounded-2xl p-6 transition-interactive hover-lift hover-glow-teal group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${character.color}/20 mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`text-${character.color}`} size={32} />
                </div>

                {/* Name & Role */}
                <h3 className="font-display text-2xl font-bold mb-1">{character.name}</h3>
                <p className={`text-${character.color} font-semibold text-sm mb-1`}>{character.role}</p>
                {character.age && (
                  <p className="text-muted-foreground text-xs mb-4">
                    {character.ethnicity} • Age {character.age}
                  </p>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {character.description}
                </p>

                {/* Quote */}
                {character.quote && (
                  <div className="glass-teal rounded-lg p-3 mb-4 border-l-2 border-secondary">
                    <p className="text-foreground/80 text-xs italic">{character.quote}</p>
                  </div>
                )}

                {/* Abilities */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Key Abilities</p>
                  {character.abilities.map((ability, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${character.color}`} />
                      <span className="text-sm text-muted-foreground">{ability}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Co-op Note */}
        <div className="mt-12 max-w-3xl mx-auto glass rounded-xl p-6 text-center">
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">Flexible roles:</span> Players can auto-assign or manually select their character. 
            All abilities are accessible in solo play, but teamwork unlocks the full potential.
          </p>
        </div>
      </div>
    </section>
  );
};

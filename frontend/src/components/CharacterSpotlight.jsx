import React, { useState } from 'react';
import { Shield, Eye, Cpu, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const characterData = {
  james: {
    name: 'James Carter',
    role: 'Tank / Lead',
    icon: Shield,
    color: 'secondary',
    age: '17',
    ethnicity: 'African American',
    image: 'https://customer-assets.emergentagent.com/job_timeveil-escape/artifacts/jvb0cug9_file_000000004c2061f59e77e2d727ca5087.png',
    look: 'Athletic build, short fade haircut, brown eyes, varsity jacket, jeans, and sneakers',
    personality: 'Brave, logical, natural leader but skeptical of the supernatural',
    voiceTone: 'Deep, calm, slightly sarcastic under stress',
    quote: '"Stay close, stay calm. We\'ll get through this together."',
    stats: [
      { label: 'Fear Resistance', value: '95%' },
      { label: 'Strength', value: '90%' },
      { label: 'Leadership', value: '85%' },
      { label: 'Team Synergy', value: '88%' },
    ],
    abilities: [
      { name: 'Fear Shield', desc: 'Absorbs fear events better, protecting nearby teammates from psychological attacks' },
      { name: 'Heavy Lifter', desc: 'Can move heavy objects, brace doors, and create barricades to block hostile entities' },
    ],
    traits: [
      { title: 'Brave & Protective', desc: 'Always puts the team first, willing to face danger head-on' },
      { title: 'Logical Thinker', desc: 'Approaches problems methodically, even under extreme stress' },
      { title: 'Slightly Skeptical', desc: 'Questions the supernatural but adapts when faced with evidence' },
    ],
  },
  alex: {
    name: 'Alex Chen',
    role: 'Tech / Scan',
    icon: Cpu,
    color: 'accent',
    age: '17',
    ethnicity: 'Chinese-American',
    image: 'https://customer-assets.emergentagent.com/job_timeveil-escape/artifacts/xrio0jax_file_000000008ac0622fb51c9b663e845a71.png',
    look: 'Lean build, stylish glasses, graphic t-shirt, black hoodie, camera slung across chest',
    personality: 'Tech-savvy, anxious but quick-thinking, comic relief',
    voiceTone: 'Energetic, slightly nerdy humor',
    quote: '"Okay, so... haunted manor, cursed timeline, evil witches. This is either the best or worst field trip ever!"',
    stats: [
      { label: 'Intelligence', value: '95%' },
      { label: 'Tech Mastery', value: '98%' },
      { label: 'Problem Solving', value: '92%' },
      { label: 'Anxiety Level', value: '75%' },
    ],
    abilities: [
      { name: 'Photo Archive', desc: 'Documents spectral phenomena with advanced camera tech, revealing hidden clues in images' },
      { name: 'Gadget Master', desc: 'Operates and hacks electronic devices, decodes signals, and records anomalies' },
    ],
    traits: [
      { title: 'Tech Genius', desc: 'Can operate any device and solve technical puzzles others can\'t' },
      { title: 'Comic Relief', desc: 'Lightens tense moments with nerdy humor and pop culture references' },
      { title: 'Quick Thinker', desc: 'Analyzes situations rapidly despite anxiety, finding creative solutions' },
    ],
  },
  rosa: {
    name: 'Rosa Martinez',
    role: 'Seer / Insight',
    icon: Eye,
    color: 'primary',
    age: '16',
    ethnicity: 'Hispanic (Mexican-American)',
    image: 'https://customer-assets.emergentagent.com/job_timeveil-escape/artifacts/oyifby8c_file_000000007234622faa372a93e4bd3c0f.png',
    look: 'Medium height, long wavy brown hair, gold hoop earrings, red flannel tied around waist, denim jacket',
    personality: 'Curious, witty, and intuitive — the one who senses paranormal danger first',
    voiceTone: 'Warm but sharp when afraid or excited',
    quote: '"The past is calling. We need to listen before it\'s too late."',
    stats: [
      { label: 'Intuition', value: '96%' },
      { label: 'Spiritual Sense', value: '94%' },
      { label: 'Empathy', value: '90%' },
      { label: 'Echo Mastery', value: '93%' },
    ],
    abilities: [
      { name: 'Echo Shift', desc: 'Reveals 1950s timeline overlay for 5 seconds, showing hidden objects and pathways' },
      { name: 'Glyph Reading', desc: 'Deciphers ancient inscriptions and ritual symbols others cannot see' },
    ],
    traits: [
      { title: 'Paranormal Intuition', desc: 'First to sense supernatural danger, warning the team before it strikes' },
      { title: 'The Heart of the Team', desc: 'Unravels the curse through empathy and spiritual connection' },
      { title: 'Curious & Witty', desc: 'Balances tension with humor while staying deeply connected to the mystery' },
    ],
  },
};

export const CharacterSpotlight = () => {
  const [activeChar, setActiveChar] = useState('alex');
  const char = characterData[activeChar];
  const IconComponent = char.icon;

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Character Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(characterData).map(([key, data]) => {
            const Icon = data.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveChar(key)}
                className={`glass-teal rounded-xl px-6 py-4 transition-all ${
                  activeChar === key
                    ? `ring-2 ring-${data.color} shadow-glow-${data.color === 'secondary' ? 'orange' : 'teal'}`
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <Icon className={`text-${data.color} mx-auto mb-2`} size={24} />
                <p className="text-xs font-semibold">{data.name.split(' ')[0]}</p>
              </button>
            );
          })}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-teal px-4 py-2 rounded-full mb-4">
            <IconComponent size={16} className={`text-${char.color}`} />
            <span className={`text-sm font-semibold text-${char.color}`}>Character Spotlight</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Meet <span className={`text-${char.color} ${char.color === 'secondary' ? 'text-glow-orange' : ''}`}>{char.name}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {char.role} • {char.ethnicity} • Age {char.age}
          </p>
        </div>

        {/* Character Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left: Character Image */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className={`absolute inset-0 bg-gradient-${char.color === 'secondary' ? 'secondary' : 'primary'} rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />
              <img
                src={char.image}
                alt={`${char.name} - ${char.role}`}
                className="relative w-full h-auto rounded-2xl shadow-elegant transition-transform group-hover:scale-105"
              />
              
              {/* Character Badge */}
              <div className="absolute top-4 left-4 glass-teal rounded-xl px-4 py-2">
                <p className="text-xs text-muted-foreground mb-1">Role</p>
                <p className={`text-${char.color} font-bold`}>{char.role}</p>
              </div>
            </div>
          </div>

          {/* Right: Character Details */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Bio Card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className={`bg-${char.color}/20 p-3 rounded-lg`}>
                  <IconComponent className={`text-${char.color}`} size={28} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1">{char.name}</h3>
                  <p className="text-muted-foreground text-sm">{char.ethnicity} • Age {char.age}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-foreground/60 font-semibold">Look: </span>
                  <span className="text-muted-foreground">{char.look}</span>
                </div>
                <div>
                  <span className="text-foreground/60 font-semibold">Personality: </span>
                  <span className="text-muted-foreground">{char.personality}</span>
                </div>
                <div>
                  <span className="text-foreground/60 font-semibold">Voice: </span>
                  <span className="text-muted-foreground">{char.voiceTone}</span>
                </div>
              </div>

              {/* Quote */}
              <div className={`glass-teal rounded-lg p-4 border-l-4 border-${char.color} mt-4`}>
                <p className="text-foreground italic text-sm">
                  {char.quote}
                </p>
                <p className="text-xs text-muted-foreground mt-2">— {char.name}</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {char.stats.map((stat, index) => (
                <div key={index} className="glass-teal rounded-xl p-4 transition-interactive hover-lift">
                  <p className="text-xs text-muted-foreground mb-2">{stat.label}</p>
                  <p className={`text-2xl font-bold text-${char.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Special Abilities */}
            <div className="glass rounded-xl p-6">
              <h4 className="font-display text-lg font-bold mb-4">Special Abilities</h4>
              <div className="space-y-3">
                {char.abilities.map((ability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full bg-${char.color}/20 flex items-center justify-center flex-shrink-0 mt-1`}>
                      <IconComponent className={`text-${char.color}`} size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{ability.name}</p>
                      <p className="text-xs text-muted-foreground">{ability.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personality Traits */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h4 className="font-display text-xl font-bold mb-6 text-center">Personality Profile</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {char.traits.map((trait, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 rounded-full bg-${char.color}/20 mx-auto mb-3 flex items-center justify-center`}>
                    <IconComponent className={`text-${char.color}`} size={24} />
                  </div>
                  <h5 className="font-semibold mb-2">{trait.title}</h5>
                  <p className="text-sm text-muted-foreground">{trait.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ready to choose your investigator?</p>
          <Button variant="premium" size="lg">
            Enter Ravenbrook <ChevronRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

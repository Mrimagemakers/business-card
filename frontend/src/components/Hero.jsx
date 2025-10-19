import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Clock, Users, Ghost } from 'lucide-react';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 bg-gradient-hero"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://customer-assets.emergentagent.com/job_6b917833-4da8-4dea-8164-690c35f3a680/artifacts/whu14zh3_Screenshot_20251017_190657_Drive.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Subtitle */}
        <div className="animate-fade-in mb-6">
          <span className="inline-block glass-teal px-6 py-2 rounded-full text-primary text-sm font-semibold tracking-wider">
            A VR Mystery Experience
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="text-secondary text-glow-orange">HALLOWEEN</span>
          <br />
          <span className="text-foreground">HAUNTS</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-display mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Welcome to Ravenbrook
        </p>

        <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Break the Clocktower Curse. Uncover the mystery. Escape the shadows.
          A 3-chapter, story-driven co-op VR experience for 1-3 players.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass px-6 py-3 rounded-lg flex items-center gap-2">
            <Users className="text-primary" size={20} />
            <span className="text-sm">1-3 Players</span>
          </div>
          <div className="glass px-6 py-3 rounded-lg flex items-center gap-2">
            <Clock className="text-secondary" size={20} />
            <span className="text-sm">3 Chapters</span>
          </div>
          <div className="glass px-6 py-3 rounded-lg flex items-center gap-2">
            <Ghost className="text-accent" size={20} />
            <span className="text-sm">Mystery & Puzzles</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button variant="premium" size="xl" className="text-lg">
            Enter Ravenbrook
          </Button>
          <Button variant="hero" size="xl" className="text-lg">
            Watch Trailer
          </Button>
        </div>

        {/* Character Showcase - The Three Investigators */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* James Carter */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <img
                src="https://customer-assets.emergentagent.com/job_timeveil-escape/artifacts/jvb0cug9_file_000000004c2061f59e77e2d727ca5087.png"
                alt="James Carter - The Team Leader"
                className="relative w-full h-auto rounded-2xl shadow-glow-orange group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-4 rounded-b-2xl">
                <h3 className="font-display text-lg font-bold mb-1">James Carter</h3>
                <p className="text-secondary font-semibold text-xs">Tank / Lead</p>
                <p className="text-muted-foreground text-xs mt-1">
                  The Protector
                </p>
              </div>
            </div>

            {/* Rosa Martinez */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <img
                src="https://customer-assets.emergentagent.com/job_timeveil-escape/artifacts/oyifby8c_file_000000007234622faa372a93e4bd3c0f.png"
                alt="Rosa Martinez - The Seer"
                className="relative w-full h-auto rounded-2xl shadow-glow-teal group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-4 rounded-b-2xl">
                <h3 className="font-display text-lg font-bold mb-1">Rosa Martinez</h3>
                <p className="text-primary font-semibold text-xs">Seer / Insight</p>
                <p className="text-muted-foreground text-xs mt-1">
                  The Heart
                </p>
              </div>
            </div>

            {/* Alex Chen */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <img
                src="https://customer-assets.emergentagent.com/job_timeveil-escape/artifacts/xrio0jax_file_000000008ac0622fb51c9b663e845a71.png"
                alt="Alex Chen - The Tech Genius"
                className="relative w-full h-auto rounded-2xl shadow-elegant group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-4 rounded-b-2xl">
                <h3 className="font-display text-lg font-bold mb-1">Alex Chen</h3>
                <p className="text-accent font-semibold text-xs">Tech / Scan</p>
                <p className="text-muted-foreground text-xs mt-1">
                  The Problem Solver
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Tagline */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Three unique roles. One terrifying mission. 
              <span className="text-foreground font-semibold"> Choose your investigator.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

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

        {/* Character Image */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <img
            src="https://customer-assets.emergentagent.com/job_6b917833-4da8-4dea-8164-690c35f3a680/artifacts/hclwky7v_file_0000000064e4622f9b2fac402d79de9d.png"
            alt="James, Rosa, and Alex - The Investigators"
            className="mx-auto max-w-4xl w-full h-auto rounded-lg shadow-elegant"
          />
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

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhoWeAre } from './components/WhoWeAre';
import { TechExpertise } from './components/TechExpertise';
import { HowWeWork } from './components/HowWeWork';
import { ArchitectureViewer } from './components/ArchitectureViewer';
import { CloudEstimator } from './components/CloudEstimator';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoExplainerModal } from './components/VideoExplainerModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [videoExplainerOpen, setVideoExplainerOpen] = useState(false);

  // Contact form pre-fill state
  const [contactInitialService, setContactInitialService] = useState('');
  const [contactInitialBudget, setContactInitialBudget] = useState('');
  const [contactInitialTimeline, setContactInitialTimeline] = useState('');
  const [contactInitialBrief, setContactInitialBrief] = useState('');

  // Active section observer for smooth navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'solutions',
        'about',
        'technology',
        'approach',
        'architecture',
        'estimator',
        'insights',
        'contact'
      ];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSolutions = () => {
    const el = document.getElementById('solutions') || document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactInitialService(serviceTitle);
    setContactInitialBrief(`Inquiring about our project requirements for ${serviceTitle}.`);
    scrollToContact();
  };

  const handleTransferEstimate = (estimateData: {
    service: string;
    budget: string;
    timeline: string;
    summary: string;
  }) => {
    setContactInitialService(estimateData.service);
    setContactInitialBudget(estimateData.budget);
    setContactInitialTimeline(estimateData.timeline);
    setContactInitialBrief(estimateData.summary);
    scrollToContact();
  };

  const handleClearInitialData = () => {
    setContactInitialService('');
    setContactInitialBudget('');
    setContactInitialTimeline('');
    setContactInitialBrief('');
  };

  return (
    <div className="min-h-screen bg-[#060b18] text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* US-01: Professional Navigation Header with Logo & Slogan */}
      <Navbar
        onOpenContact={scrollToContact}
        activeSection={activeSection}
        onOpenVideoExplainer={() => setVideoExplainerOpen(true)}
        onSelectService={(serviceTitle) => handleSelectServiceForContact(serviceTitle)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. US-02: Premium Hero Section with 3D-Inspired Tech Visual */}
        <Hero
          onOpenContact={scrollToContact}
          onExploreSolutions={scrollToSolutions}
        />

        {/* 2. US-02: Solutions We Can Build for Your Business (6 solutions) */}
        <ServicesSection
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* 3. US-03 & US-06: Your Vision. Our Technology Expertise. & Founder Introduction */}
        <WhoWeAre
          onScheduleCall={scrollToContact}
          onExploreServices={scrollToSolutions}
        />

        {/* 4. Technical Stack & Technology Capabilities */}
        <TechExpertise />

        {/* 5. US-04: From Your Idea to Reality — 4-Step Process Timeline */}
        <HowWeWork
          onScheduleCall={scrollToContact}
        />

        {/* 6. US-05: How We Design Modern Systems — Interactive Architecture */}
        <ArchitectureViewer />

        {/* 7. Interactive Project Cost Estimator */}
        <CloudEstimator
          onTransferToContact={handleTransferEstimate}
        />

        {/* 8. Engineering Insights & Industry Articles */}
        <BlogSection />

        {/* 9. US-07: Have an Idea? Let's Build Something Great. (Consultation & Lead Intake) */}
        <ContactSection
          initialService={contactInitialService}
          initialBudget={contactInitialBudget}
          initialTimeline={contactInitialTimeline}
          initialBrief={contactInitialBrief}
          onClearInitialData={handleClearInitialData}
          onOpenEstimator={scrollToEstimator}
        />
      </main>

      {/* 10. Multi-Column Professional Footer */}
      <Footer onOpenContact={scrollToContact} />

      {/* Video Explainer & Storyboard Modal */}
      <VideoExplainerModal
        isOpen={videoExplainerOpen}
        onClose={() => setVideoExplainerOpen(false)}
        onScheduleDiscovery={scrollToContact}
      />
    </div>
  );
}

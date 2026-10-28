import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Layers, Cloud, ShoppingCart, Store, Workflow, Headphones } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

interface NavbarProps {
  onOpenContact: (defaultService?: string) => void;
  activeSection: string;
  onSelectService?: (serviceName: string) => void;
  onOpenVideoExplainer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  activeSection,
  onSelectService,
  onOpenVideoExplainer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Solutions', href: '#solutions', hasDropdown: true },
    { label: 'About Us', href: '#about' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Layers className="w-4 h-4 text-amber-400" />;
      case 'ShoppingCart': return <ShoppingCart className="w-4 h-4 text-amber-400" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-cyan-400" />;
      case 'Store': return <Store className="w-4 h-4 text-amber-400" />;
      case 'Workflow': return <Workflow className="w-4 h-4 text-cyan-400" />;
      case 'Globe': return <Layers className="w-4 h-4 text-cyan-400" />;
      default: return <Layers className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#060b18]/95 backdrop-blur-md border-slate-800/90 shadow-xl'
            : 'bg-[#060b18]/85 backdrop-blur-sm border-slate-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-20 sm:h-22">
            {/* Logo Brand Zone with High-Contrast Gold-Accented Glow (No LLC) */}
            <a
              href="#home"
              className="flex items-center gap-3.5 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl py-1"
            >
              <div className="relative flex items-center justify-center">
                {/* Ambient Gold Glow Halo */}
                <div
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/40 via-yellow-400/50 to-amber-500/40 blur-md opacity-85 group-hover:opacity-100 group-hover:blur-lg transition-all duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                {/* High-Contrast Gold-Bordered Container */}
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-300 to-yellow-400 shadow-[0_0_22px_rgba(245,158,11,0.45),0_0_40px_rgba(251,191,36,0.25)] group-hover:shadow-[0_0_32px_rgba(245,158,11,0.7),0_0_55px_rgba(251,191,36,0.4)] transition-all duration-300">
                  <div className="bg-white rounded-[14px] px-3.5 py-1.5 sm:px-4 sm:py-2 flex items-center justify-center shadow-inner">
                    <img
                      src="/assets/aistudio/bk_logo_no_llc.png"
                      alt="B&K Tech Solutions Logo"
                      className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              <div className="hidden xl:flex flex-col justify-center">
                <span className="text-sm sm:text-base font-black tracking-tight text-white leading-tight group-hover:text-amber-300 transition-colors drop-shadow-sm">
                  B&amp;K TECH SOLUTIONS
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wide uppercase text-amber-400/95 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                  Solutions Today · A Brighter Tomorrow
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-300">
              <a
                href="#home"
                className={`transition-colors py-1 ${
                  activeSection === 'home' ? 'text-amber-400 font-bold' : 'hover:text-white'
                }`}
              >
                Home
              </a>

              {/* Solutions dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  className={`flex items-center gap-1.5 py-1 transition-colors ${
                    solutionsOpen || activeSection === 'solutions' || activeSection === 'services'
                      ? 'text-amber-400 font-bold'
                      : 'hover:text-white'
                  }`}
                  aria-expanded={solutionsOpen}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${solutionsOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'}`} />
                </button>

                {solutionsOpen && (
                  <div
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-88 rounded-2xl bg-[#0a1226] border border-slate-800 shadow-2xl p-3 space-y-1"
                  >
                    <div className="text-[11px] font-mono text-amber-400 px-3 py-1.5 font-bold uppercase tracking-wider">
                      Solutions We Can Build
                    </div>
                    {SERVICES_DATA.map((service) => (
                      <a
                        key={service.id}
                        href="#solutions"
                        onClick={() => {
                          setSolutionsOpen(false);
                          if (onSelectService) onSelectService(service.title);
                        }}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-[#060b18] border border-slate-800 mt-0.5 group-hover:border-amber-500/50">
                          {getServiceIcon(service.iconName)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-amber-300">
                            {service.title}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 leading-snug">
                            {service.tagline}
                          </div>
                        </div>
                      </a>
                    ))}
                    <div className="pt-2 border-t border-slate-800/80">
                      <a
                        href="#solutions"
                        onClick={() => setSolutionsOpen(false)}
                        className="block text-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 py-1"
                      >
                        View All 6 Solutions &amp; Blueprints →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#about"
                className={`transition-colors py-1 ${
                  activeSection === 'about' ? 'text-amber-400 font-bold' : 'hover:text-white'
                }`}
              >
                About Us
              </a>

              <a
                href="#approach"
                className={`transition-colors py-1 ${
                  activeSection === 'approach' ? 'text-amber-400 font-bold' : 'hover:text-white'
                }`}
              >
                Our Approach
              </a>

              <a
                href="#estimator"
                className={`transition-colors py-1 ${
                  activeSection === 'estimator' ? 'text-amber-400 font-bold' : 'hover:text-white'
                }`}
              >
                Estimator
              </a>

              <a
                href="#insights"
                className={`transition-colors py-1 ${
                  activeSection === 'insights' ? 'text-amber-400 font-bold' : 'hover:text-white'
                }`}
              >
                Insights
              </a>

              <a
                href="#contact"
                className={`transition-colors py-1 ${
                  activeSection === 'contact' ? 'text-amber-400 font-bold' : 'hover:text-white'
                }`}
              >
                Contact
              </a>
            </nav>

            {/* Primary Action Button (Gold / Amber Accent) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all shadow-md shadow-amber-950/40 hover:shadow-lg hover:shadow-amber-500/20 active:scale-98"
              >
                <span>Schedule a Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#060b18]/98 backdrop-blur-xl border-b border-slate-800">
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-amber-500/40 via-yellow-400/50 to-amber-500/40 blur-sm opacity-90 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative p-[1.5px] rounded-xl bg-gradient-to-tr from-amber-500 via-amber-300 to-yellow-400 shadow-[0_0_16px_rgba(245,158,11,0.4)]">
                  <div className="bg-white rounded-[10px] px-2.5 py-1 flex items-center justify-center">
                    <img
                      src="/assets/aistudio/bk_logo_no_llc.png"
                      alt="B&K Tech Solutions Logo"
                      className="h-10 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-white">B&amp;K Tech Solutions</span>
                <span className="text-[10px] font-bold text-amber-400">Solutions Today · A Brighter Tomorrow</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-amber-400" />
            </button>
          </div>

          <div className="px-6 py-6 space-y-3 flex-1 overflow-y-auto text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-200 hover:text-amber-400 py-2.5 border-b border-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-6">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg transition-transform active:scale-98"
              >
                <span>Schedule a Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

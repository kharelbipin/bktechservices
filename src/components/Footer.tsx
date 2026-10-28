import React, { useState } from 'react';
import { ArrowUp, ShieldCheck, Mail, Phone, FileText, X, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#040812] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main 4-Column Footer Grid (US-13) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
            {/* Column 1: Company Profile (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-xl px-3 py-1.5 shadow-lg border border-slate-700/80 inline-flex items-center justify-center">
                  <img
                    src="/assets/aistudio/bk_logo_no_llc.png"
                    alt="B&K Tech Solutions Logo"
                    className="h-12 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-base font-extrabold text-white tracking-tight block">
                    B&amp;K Tech Solutions
                  </span>
                  <span className="text-[11px] font-semibold text-cyan-400">
                    Solutions Today · A Brighter Tomorrow
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                We design and build bespoke custom software, high-performing websites, modern cloud foundations, and retail POS solutions that help businesses scale efficiently.
              </p>

              <div className="pt-2 text-xs space-y-1">
                <div className="text-slate-300 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <a href="mailto:bipinkharel52@gmail.com" className="hover:text-amber-300 transition-colors">
                    bipinkharel52@gmail.com
                  </a>
                </div>
                <div className="text-slate-400 text-[11px]">
                  General: inquiries@bktechandsolutions.com
                </div>
              </div>
            </div>

            {/* Column 2: Solutions We Can Build (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Solutions We Build
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#solutions" className="hover:text-amber-400 transition-colors">
                    Custom Business Applications
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-amber-400 transition-colors">
                    E-Commerce &amp; Online Stores
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-amber-400 transition-colors">
                    Point-of-Sale &amp; Inventory Systems
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-amber-400 transition-colors">
                    Cloud Infrastructure &amp; Applications
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-amber-400 transition-colors">
                    Websites &amp; Web Portals
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-amber-400 transition-colors">
                    Business Automation &amp; API Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation & Approach (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Navigation
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#home" className="hover:text-amber-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-amber-400 transition-colors">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-amber-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#approach" className="hover:text-amber-400 transition-colors">
                    Our Approach
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="hover:text-amber-400 transition-colors">
                    System Architecture
                  </a>
                </li>
                <li>
                  <a href="#estimator" className="hover:text-amber-400 transition-colors">
                    Cost Estimator
                  </a>
                </li>
                <li>
                  <a href="#insights" className="hover:text-amber-400 transition-colors">
                    Engineering Insights
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Consultations (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Start a Conversation
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Looking for architectural advice or ready to build? Schedule a free 30-minute discovery consultation.
              </p>
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all shadow-md active:scale-98"
              >
                Schedule a Consultation
              </button>
              <div className="text-[11px] text-slate-500 pt-1">
                Guaranteed response within 1 business day.
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal (US-13) */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <div>
              &copy; {new Date().getFullYear()} B&amp;K Tech Solutions. All rights reserved.
            </div>

            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="hover:text-slate-300 transition-colors"
              >
                Terms of Service
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-[#0a1226] shadow-2xl p-6 sm:p-8 my-8 text-left max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5 text-amber-400" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                <strong>B&amp;K Tech Solutions</strong> is committed to protecting your privacy and intellectual property. This Privacy Policy outlines how we handle information submitted through our website.
              </p>
              <h4 className="text-sm font-bold text-white mt-3">1. Information Collection</h4>
              <p>
                We collect personal information that you voluntarily provide when requesting a consultation or project estimate, including your name, business email, phone number, company name, and project description.
              </p>
              <h4 className="text-sm font-bold text-white mt-3">2. Confidentiality &amp; Non-Disclosure</h4>
              <p>
                All project requirements, business logic, system descriptions, and data shared with us remain strictly confidential. We provide mutual Non-Disclosure Agreements (NDAs) prior to detailed code or architectural review upon request.
              </p>
              <h4 className="text-sm font-bold text-white mt-3">3. No Data Selling or Sharing</h4>
              <p>
                We never sell, rent, or lease your contact information or project data to third-party advertisers. Information submitted is used exclusively by our engineering team to assess and respond to your inquiry.
              </p>
              <h4 className="text-sm font-bold text-white mt-3">4. Security</h4>
              <p>
                We maintain appropriate administrative and technical safeguards to protect your submitted information against unauthorized access or alteration.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-colors"
              >
                Close Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {termsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-[#0a1226] shadow-2xl p-6 sm:p-8 my-8 text-left max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <h3 className="text-xl font-bold text-white">Terms of Service</h3>
              <button
                type="button"
                onClick={() => setTermsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5 text-amber-400" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                Welcome to <strong>B&amp;K Tech Solutions</strong>. By accessing our website and services, you agree to these Terms of Service.
              </p>
              <h4 className="text-sm font-bold text-white mt-3">1. Scope of Engagement</h4>
              <p>
                Consulting estimates generated through our online calculator provide indicative project approximations. Official project scopes, timelines, milestone budgets, and warranties are governed by individual client Master Services Agreements (MSAs) and Statements of Work (SOWs).
              </p>
              <h4 className="text-sm font-bold text-white mt-3">2. Intellectual Property</h4>
              <p>
                Unless otherwise agreed in a specific client contract, all custom software codebases and deliverables created for a client are transferred fully to the client upon milestone payment completion.
              </p>
              <h4 className="text-sm font-bold text-white mt-3">3. Limitation of Liability</h4>
              <p>
                Website information is provided for general informational purposes. While we strive for accuracy, B&amp;K Tech Solutions disclaims liability for decisions made solely on web materials without written consultation.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setTermsOpen(false)}
                className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-colors"
              >
                Close Terms
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

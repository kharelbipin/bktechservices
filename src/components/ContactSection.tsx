import React, { useState, useEffect } from 'react';
import {
  Mail,
  Building,
  Send,
  CheckCircle2,
  Calendar,
  Clock,
  AlertCircle,
  FileText,
  Check,
  Phone,
  ShieldCheck,
  Sparkles,
  Calculator,
  ArrowRight
} from 'lucide-react';
import { LeadSubmission } from '../types';

interface ContactSectionProps {
  initialService?: string;
  initialBudget?: string;
  initialTimeline?: string;
  initialBrief?: string;
  onClearInitialData?: () => void;
  onOpenEstimator?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialBudget = '',
  initialTimeline = '',
  initialBrief = '',
  onClearInitialData,
  onOpenEstimator
}) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [serviceCategory, setServiceCategory] = useState(initialService || 'Custom Business Applications');
  const [budgetRange, setBudgetRange] = useState(initialBudget || '$15,000 – $35,000');
  const [timeline, setTimeline] = useState(initialTimeline || '6 to 12 weeks');
  const [projectBrief, setProjectBrief] = useState(initialBrief || '');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam protection

  const [consultationSlot, setConsultationSlot] = useState('Tomorrow · 10:00 AM EST');
  const [calendarBooked, setCalendarBooked] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadSubmission | null>(null);
  const [storedLeads, setStoredLeads] = useState<LeadSubmission[]>([]);

  const availableServices = [
    'Custom Business Applications',
    'E-Commerce & Online Stores',
    'Point-of-Sale & Inventory Systems',
    'Cloud Infrastructure & Applications',
    'Websites & Web Portals',
    'Business Automation & API Integrations'
  ];

  useEffect(() => {
    if (initialService) setServiceCategory(initialService);
    if (initialBudget) setBudgetRange(initialBudget);
    if (initialTimeline) setTimeline(initialTimeline);
    if (initialBrief) setProjectBrief(initialBrief);
  }, [initialService, initialBudget, initialTimeline, initialBrief]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('bk_tech_leads');
      if (saved) {
        setStoredLeads(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!workEmail.trim()) {
      errs.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) {
      errs.workEmail = 'Please provide a valid business email address';
    }
    if (!phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!companyName.trim()) errs.companyName = 'Company name is required';
    if (!projectBrief.trim()) {
      errs.projectBrief = 'Please briefly describe your project goals or requirements';
    } else if (projectBrief.trim().length < 15) {
      errs.projectBrief = 'Please provide a bit more detail (min 15 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent discard for bot spam
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newLead: LeadSubmission = {
        id: `BK-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName: fullName.trim(),
        workEmail: workEmail.trim(),
        phone: phone.trim(),
        companyName: companyName.trim(),
        serviceCategory,
        budgetRange,
        timeline,
        projectBrief: projectBrief.trim(),
        preferredConsultationDate: consultationSlot,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updated = [newLead, ...storedLeads];
      setStoredLeads(updated);
      try {
        localStorage.setItem('bk_tech_leads', JSON.stringify(updated));
      } catch {
        // ignore
      }

      setSubmittedLead(newLead);
      setIsSubmitting(false);

      if (onClearInitialData) onClearInitialData();
    }, 450);
  };

  const handleScrollToForm = () => {
    const el = document.getElementById('consultation-form-card');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-slate-800 bg-[#060b18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* US-07: Strong Consultation Header with Gold Gradient Callout */}
        <div className="mb-14 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0a1226] via-[#111f42] to-[#0a1226] border border-amber-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle gold decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
              Have an Idea? Let&apos;s Build Something Great.
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
              Whether you are an ambitious startup needing an MVP, a retailer upgrading your POS and inventory, or an established company looking to automate workflows and modernize cloud infrastructure, B&amp;K Tech Solutions is ready to help.
            </p>

            {/* US-07: Two Prominent Working Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleScrollToForm}
                className="px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all shadow-lg shadow-amber-950/50 hover:shadow-xl hover:shadow-amber-500/20 active:scale-98 inline-flex items-center gap-2"
              >
                <span>Schedule a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#estimator"
                className="px-7 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 bg-[#060b18]/80 hover:bg-[#0a1226] border border-slate-700/80 hover:border-amber-500/40 rounded-full transition-colors inline-flex items-center gap-2 backdrop-blur-sm"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Get a Project Estimate</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="consultation-form-card">
          {/* Left Column: Direct Consultation Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
                Direct Engineering Access
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                No Sales Runaround. Talk Directly With an Architect.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                When you reach out, you won&apos;t be routed through multiple junior salespeople. You speak directly with our software architects to analyze feasibility, discuss milestones, and receive a customized technical plan.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0a1226] border border-slate-800">
                <div className="p-2.5 rounded-lg bg-[#060b18] border border-slate-800 text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Direct Inquiries</div>
                  <div className="text-sm font-bold text-white">consulting@bktechandsolutions.com</div>
                  <div className="text-[11px] text-slate-500">Typical response within 24 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0a1226] border border-slate-800">
                <div className="p-2.5 rounded-lg bg-[#060b18] border border-slate-800 text-cyan-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Discovery Calls</div>
                  <div className="text-sm font-bold text-white">30-Minute Architecture Review</div>
                  <div className="text-[11px] text-slate-500">Virtual video consultation via Google Meet or Zoom</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-cyan-500/5 border border-amber-500/20">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Consultation Guarantee</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every consultation is strictly confidential. We are happy to execute standard Mutual Non-Disclosure Agreements (NDAs) prior to discussing proprietary project concepts.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Scoping Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#0a1226] p-6 sm:p-8 shadow-2xl">
              {submittedLead ? (
                <div className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Thank You, {submittedLead.fullName}!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your consultation request for <strong className="text-amber-400">{submittedLead.serviceCategory}</strong> has been received (Reference: <span className="font-mono text-cyan-400">{submittedLead.id}</span>).
                    </p>
                  </div>

                  {/* Calendar booking confirmation */}
                  <div className="p-5 rounded-xl bg-[#060b18] border border-slate-800 max-w-md mx-auto text-left space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-amber-400 border-b border-slate-800 pb-2">
                      <span>CONSULTATION APPOINTMENT</span>
                      <span>30 MIN</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-amber-400" />
                      <div>
                        <div className="text-sm font-bold text-white">{submittedLead.preferredConsultationDate}</div>
                        <div className="text-xs text-slate-400">Meeting link will be dispatched to {submittedLead.workEmail}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setSubmittedLead(null)}
                      className="px-6 py-2.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot for spam bots */}
                  <input
                    type="text"
                    name="website_url_check"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>Project Consultation Request</span>
                    </h3>
                    <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                      Step 1 of 1
                    </span>
                  </div>

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#060b18] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={workEmail}
                        onChange={(e) => {
                          setWorkEmail(e.target.value);
                          if (errors.workEmail) setErrors({ ...errors, workEmail: '' });
                        }}
                        placeholder="sarah@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#060b18] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                          errors.workEmail ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.workEmail && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.workEmail}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#060b18] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                          errors.phone ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => {
                          setCompanyName(e.target.value);
                          if (errors.companyName) setErrors({ ...errors, companyName: '' });
                        }}
                        placeholder="Company or Startup Name"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#060b18] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                          errors.companyName ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.companyName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Solution Category & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Solution Needed
                      </label>
                      <select
                        value={serviceCategory}
                        onChange={(e) => setServiceCategory(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060b18] border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      >
                        {availableServices.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Target Budget Range
                      </label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060b18] border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      >
                        <option value="Under $10,000">Under $10,000 (Small Automation / MVP)</option>
                        <option value="$10,000 – $25,000">$10,000 – $25,000 (Web App / Storefront)</option>
                        <option value="$25,000 – $50,000">$25,000 – $50,000 (Custom System / Cloud Migration)</option>
                        <option value="$50,000+">$50,000+ (Full Enterprise Platform)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Goals &amp; Overview *
                    </label>
                    <textarea
                      rows={4}
                      value={projectBrief}
                      onChange={(e) => {
                        setProjectBrief(e.target.value);
                        if (errors.projectBrief) setErrors({ ...errors, projectBrief: '' });
                      }}
                      placeholder="Tell us what you want to build, existing systems or tools you use, and your target timeline..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#060b18] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                        errors.projectBrief ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.projectBrief && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.projectBrief}
                      </p>
                    )}
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Preferred Consultation Slot
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        'Tomorrow · 10:00 AM EST',
                        'Tomorrow · 2:00 PM EST',
                        'In 2 Days · 11:30 AM EST'
                      ].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setConsultationSlot(slot)}
                          className={`p-2 rounded-lg border text-left text-xs transition-colors flex items-center justify-between ${
                            consultationSlot === slot
                              ? 'bg-amber-500/10 border-amber-500/80 text-white font-semibold'
                              : 'bg-[#060b18] border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span className="truncate">{slot}</span>
                          {consultationSlot === slot && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all shadow-lg shadow-amber-950/40 hover:shadow-xl hover:shadow-amber-500/20 active:scale-98 disabled:opacity-50 inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting Your Request...</span>
                      ) : (
                        <>
                          <span>Submit &amp; Schedule Free Consultation</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center">
                    We value your privacy. We never share or sell contact information, and standard NDAs are readily available upon request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

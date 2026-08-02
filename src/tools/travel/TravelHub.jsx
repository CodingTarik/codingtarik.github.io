import React, { useState, useEffect } from 'react';
import {
  Wallet, Clock, FileCheck, BookOpen, ShieldAlert,
  ArrowLeftRight, Map, Globe, ChevronLeft, Menu, X
} from 'lucide-react';
import countries from './data/countries';
import BudgetTracker from './components/BudgetTracker';
import TimezoneDashboard from './components/TimezoneDashboard';
import VisaChecker from './components/VisaChecker';
import TravelJournal from './components/TravelJournal';
import EmergencyInfo from './components/EmergencyInfo';
import UnitConverter from './components/UnitConverter';
import CountryGuides from './components/CountryGuides';

const sections = [
  { id: 'budget', name: 'Budget', icon: Wallet, color: 'from-emerald-400 to-teal-500' },
  { id: 'timezones', name: 'Zeitzonen', icon: Clock, color: 'from-blue-400 to-indigo-500' },
  { id: 'visa', name: 'Visa & Docs', icon: FileCheck, color: 'from-amber-400 to-orange-500' },
  { id: 'journal', name: 'Tagebuch', icon: BookOpen, color: 'from-pink-400 to-rose-500' },
  { id: 'emergency', name: 'Notfall', icon: ShieldAlert, color: 'from-red-400 to-rose-600' },
  { id: 'converter', name: 'Umrechner', icon: ArrowLeftRight, color: 'from-violet-400 to-purple-500' },
  { id: 'guides', name: 'Guides', icon: Map, color: 'from-cyan-400 to-blue-500' },
];

export default function TravelHub() {
  const [activeSection, setActiveSection] = useState('budget');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on section change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'budget': return <BudgetTracker countries={countries} />;
      case 'timezones': return <TimezoneDashboard countries={countries} />;
      case 'visa': return <VisaChecker countries={countries} />;
      case 'journal': return <TravelJournal countries={countries} />;
      case 'emergency': return <EmergencyInfo countries={countries} />;
      case 'converter': return <UnitConverter countries={countries} />;
      case 'guides': return <CountryGuides countries={countries} />;
      default: return <BudgetTracker countries={countries} />;
    }
  };

  const activeSectionData = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-[#060d1e] text-slate-100" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#060d1e]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                import('../../utils/navigation').then(({ navigate }) => navigate('/tools'));
              }}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">Zurück</span>
            </button>
            <div className="w-px h-6 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                <Globe size={18} className="text-white" />
              </div>
              <div>
                <h1 className="text-base font-bold tracking-tight">Travel Hub</h1>
                <p className="text-[10px] text-slate-500 -mt-0.5 hidden sm:block">Weltreise-Toolkit</p>
              </div>
            </div>
          </div>

          {/* Desktop nav pills */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-xl p-1">
            {sections.map(section => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${isActive
                      ? 'bg-white/10 text-white shadow-lg'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                >
                  <Icon size={14} />
                  <span>{section.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-white/10 transition"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/5 bg-[#0a1128]/95 backdrop-blur-xl">
            <div className="grid grid-cols-4 gap-1 p-3">
              {sections.map(section => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl text-xs transition-all ${isActive
                        ? 'bg-white/10 text-white'
                        : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                      }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{section.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Section indicator bar */}
      <div className={`h-0.5 bg-gradient-to-r ${activeSectionData?.color || 'from-teal-400 to-cyan-500'}`} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-6">
        {renderSection()}
      </main>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a1128]/95 backdrop-blur-xl border-t border-white/5">
        <div className="flex items-center justify-around px-2 py-1.5">
          {sections.map(section => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex flex-col items-center gap-0.5 py-1.5 px-1.5 rounded-xl transition-all min-w-0 ${isActive
                    ? 'text-teal-400'
                    : 'text-slate-500'
                  }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[9px] font-medium truncate">{section.name}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Bottom padding for mobile nav */}
      <div className="lg:hidden h-16" />
    </div>
  );
}

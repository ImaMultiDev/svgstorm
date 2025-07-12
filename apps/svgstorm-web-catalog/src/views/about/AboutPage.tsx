"use client";

import {
  AboutHero,
  AboutDeveloper,
  AboutIntention,
  AboutComponents,
  AboutTechnologies,
  AboutContact,
} from "./components";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <AboutHero />
      <AboutDeveloper />
      <AboutIntention />
      <AboutComponents />
      <AboutTechnologies />
      <AboutContact />
    </div>
  );
}

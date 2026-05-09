// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Profile Panel
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface ProfilePanelProps {}

export function ProfilePanel(props: ProfilePanelProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-0 md:left-[240px] h-16 border-b border-outline-variant bg-surface flex items-center justify-between px-margin-mobile md:px-margin-desktop w-full md:w-[calc(100%-240px)] z-20">
      <div className="flex items-center gap-md">
      <span className="font-headline-md text-headline-md font-bold text-on-surface">OpsLoop</span>
      </div>
      <div className="flex items-center gap-md">
      <div className="flex items-center gap-sm">
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors focus-within:ring-2 focus-within:ring-primary-container">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors focus-within:ring-2 focus-within:ring-primary-container">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      </div>
      <img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A professional headshot of a corporate administrator, taken in a bright, modern office space. The subject has a confident, approachable expression. The lighting is soft and flattering, highlighting the details of the face while maintaining a polished, high-end corporate aesthetic suitable for a dashboard avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbQh4xsJO3aUayj1kFPLwtnqo4WCPfqOoiEwgCPvocUliwT_UVoSv5kHIVNdlnnTyB3oZcPZ_4RT8MgOMZKZ9h3wrd7otnFog-x6y6eDQ7j90cgMuA_eMfkhuGjRvN8su2jvAkRQ6-dsiJQW3doJeuGWQcywRKnLwMHAwM5YqgBLgH5G_nLe-3xHRMaisn5peXfIqlRr33GFnZyIUPHWTyCsaaKMRXyJakOhzBf3zerTc3STS1brP6O4t1SVrwFZ4YbiBpa_JZNtQ" />
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant bg-surface-container flex-col py-xl z-30">
      <div className="px-lg mb-xl flex flex-col gap-sm">
      <h1 className="font-title-sm text-title-sm font-bold text-primary tracking-tight">OpsLoop</h1>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Quality Management</span>
      </div>
      <ul className="flex flex-col gap-sm px-sm flex-grow">
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-label-caps text-label-caps">Dashboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined">assignment_add</span>
      <span className="font-label-caps text-label-caps">Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined">analytics</span>
      <span className="font-label-caps text-label-caps">Insights</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-caps text-label-caps">Settings</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined">account_circle</span>
      <span className="font-label-caps text-label-caps">Profile</span>
      </a>
      </li>
      </ul>
      <div className="px-lg mt-auto">
      <img alt="OpsLoop Corporate Logo" className="w-12 h-12 object-contain opacity-50 grayscale" data-alt="A clean, abstract corporate logo graphic featuring intersecting geometric shapes in deep blues and slate grays. The design is modern, professional, and subtle, sitting cleanly on a dark background. It conveys trust, precision, and technological capability, suitable for a bottom-corner branding mark in a software application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7DIqbslKsiXDP51pGLUjaShd-WxW_ja4EJEUFSRpS3G2yrv6givdvXhZMc7cfMZNUN3HDmkwkq15MIQng2CT36KarviBLtNPNQIT06owlBTATHmw8fJlNNVZcrboFn-O7_Rn9WLVZSX6FK6jA5esNvVyOJFN3EC-AYeGupkNolHnuyXijjKFXlqS6IXOXvhHP5hOjkWnQFG2gRyERZqHb7AITeN-Wb6Snb7qmd7ImkPUvzGbBxeyTWf-7wqxm9DL5b6MSuF1Aph4" />
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 ml-0 md:ml-[240px] mt-16 p-margin-mobile md:p-margin-desktop flex justify-end">
      {/* Profile Panel / Drawer */}
      <div className="w-full max-w-md bg-surface border border-outline-variant rounded-xl overflow-hidden flex flex-col h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="p-lg border-b border-outline-variant flex items-start gap-lg bg-surface-container-low">
      <div className="relative">
      <img alt="Administrator Profile Large" className="w-20 h-20 rounded-full border-2 border-outline-variant object-cover" data-alt="A close-up, high-quality headshot of a corporate professional, smiling slightly. The background is a blurred, modern office setting with cool, neutral tones. The lighting is professional and crisp, creating a clear, authoritative yet approachable avatar for a user profile panel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi9Bz72xzGbps1PVzHQEYl9XtSws1X3C7Gbm3GsSRtRfTJxaibu1EufpxWTaOLbvkuOmeJqaQru22GN_us_O42ytKlnSRDvsythCbAFAFwyj_bEzaPbSpe1kobyFrzBCJBT8QEetQ-6tLIjT9Eknzri0fgJtl7qt0AFZD4QOyF_DhJRWrDzvyfJli5ZyJ6kiofy1VmEoC4jLDAT4D1jSTicC46lcy2-KXNIJj7hQi30YNJw3PFL3YwLis95TuO6BA0Fl0YdCcAae0" />
      <button className="absolute bottom-0 right-0 bg-surface-container-highest border border-outline-variant rounded-full p-1 text-on-surface hover:text-primary transition-colors">
      <span className="material-symbols-outlined" style={{fontSize: "16px"}}>edit</span>
      </button>
      </div>
      <div className="flex flex-col gap-xs pt-xs">
      <h2 className="font-headline-md text-headline-md text-on-surface">Alex Mercer</h2>
      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
      <span className="material-symbols-outlined" style={{fontSize: "14px"}}>badge</span>
                              Lead Operations Manager
                          </span>
      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
      <span className="material-symbols-outlined" style={{fontSize: "14px"}}>mail</span>
                              alex.mercer@opsloop.com
                          </span>
      </div>
      </div>
      {/* Content Area (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-lg flex flex-col gap-xl">
      {/* Section: Account Settings */}
      <section className="flex flex-col gap-md">
      <h3 className="font-title-sm text-title-sm text-on-surface border-b border-outline-variant pb-xs">Account Preferences</h3>
      <div className="flex flex-col gap-sm">
      {/* Toggle Item 1 */}
      <div className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface">Two-Factor Authentication</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Require secondary verification</span>
      </div>
      {/* Fake Toggle */}
      <div className="w-10 h-6 bg-primary-container rounded-full relative cursor-pointer border border-[#334155]">
      <div className="w-4 h-4 bg-on-primary-container rounded-full absolute right-1 top-1"></div>
      </div>
      </div>
      {/* Toggle Item 2 */}
      <div className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface">Email Notifications</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Daily summary reports</span>
      </div>
      {/* Fake Toggle */}
      <div className="w-10 h-6 bg-surface-container-highest rounded-full relative cursor-pointer border border-[#334155]">
      <div className="w-4 h-4 bg-on-surface-variant rounded-full absolute left-1 top-1"></div>
      </div>
      </div>
      {/* Toggle Item 3 */}
      <div className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface">Beta Features</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Opt-in to experimental UI</span>
      </div>
      {/* Fake Toggle */}
      <div className="w-10 h-6 bg-primary-container rounded-full relative cursor-pointer border border-[#334155]">
      <div className="w-4 h-4 bg-on-primary-container rounded-full absolute right-1 top-1"></div>
      </div>
      </div>
      </div>
      </section>
      {/* Section: Security Information */}
      <section className="flex flex-col gap-md">
      <h3 className="font-title-sm text-title-sm text-on-surface border-b border-outline-variant pb-xs">Security</h3>
      <div className="flex flex-col gap-xs">
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Last Login</span>
      <span className="font-code-sm text-code-sm text-on-surface">Today, 09:41 AM (IP: 192.168.1.5)</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Password Updated</span>
      <span className="font-code-sm text-code-sm text-on-surface">42 days ago</span>
      </div>
      </div>
      </section>
      </div>
      {/* Footer Actions */}
      <div className="p-lg border-t border-outline-variant bg-surface-container-low mt-auto">
      <button className="w-full flex items-center justify-center gap-sm py-3 px-4 border border-outline-variant rounded-lg font-label-caps text-label-caps text-error hover:bg-surface-container-highest transition-colors focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-offset-2 focus-within:ring-offset-background">
      <span className="material-symbols-outlined">logout</span>
                          Log Out
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}

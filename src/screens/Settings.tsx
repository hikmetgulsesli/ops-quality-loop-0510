// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SettingsProps {}

export function Settings(props: SettingsProps) {
  return (
    <>
      {/* Top Navigation Bar */}
      <header className="fixed top-0 right-0 left-[240px] h-16 border-b border-outline-variant bg-surface dark:bg-surface flex items-center justify-between px-margin-desktop w-[calc(100%-240px)] z-20">
      <div className="flex items-center gap-4">
      <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface">OpsLoop</span>
      </div>
      <div className="flex items-center gap-6">
      <div className="flex items-center gap-4">
      <button aria-label="notifications" className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container outline-none">
      <span className="material-symbols-outlined text-[20px]">notifications</span>
      </button>
      <button aria-label="help_outline" className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container outline-none">
      <span className="material-symbols-outlined text-[20px]">help_outline</span>
      </button>
      </div>
      <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant cursor-pointer hover:bg-surface-container-high transition-colors focus-within:ring-2 focus-within:ring-primary-container">
      <img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a corporate administrator in a well-lit office setting. The individual appears confident and reliable, reflecting the robust nature of the product operations platform. Lighting is bright but soft, enhancing the deterministic modern corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3--Q3CHcQZa81cZcUirro3XKEX2fvoMM4y8zYtSIoAvjX1KA7t1CrD_ZaEo_8bmdsgewgVCRj2FUV6jwezctmU6eeVzgMiwMJo_Y5nRuWdbLynK30D-RaDPQEwNA0cq-gsABl2uD6wmxlC28UGTsTg7suxQi-MATM5rTCKcK5-OtLwjEfnVXalTyEQ-Cq-BMeeplL9Y9jj8PNUcgoLKcmdH_TEnWxKx7m6gyRTpvn2htbkstj068CJ8Tqudzy6OrsNnTRSAyKykI" />
      </div>
      </div>
      </header>
      {/* Side Navigation Rail */}
      <aside className="fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant bg-surface-container dark:bg-surface-container flex flex-col py-xl z-30">
      <div className="px-6 mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary-container font-bold">O</div>
      <div>
      <h1 className="font-title-sm text-title-sm font-bold text-primary dark:text-primary tracking-tight">OpsLoop</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant">Quality Management</p>
      </div>
      </div>
      <nav className="flex-1 flex flex-col gap-2 px-2">
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
      <span className="font-label-caps text-label-caps">Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined text-[20px]">assignment_add</span>
      <span className="font-label-caps text-label-caps">Operations</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined text-[20px]">analytics</span>
      <span className="font-label-caps text-label-caps">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container rounded-lg font-bold active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span className="font-label-caps text-label-caps">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined text-[20px]">account_circle</span>
      <span className="font-label-caps text-label-caps">Profile</span>
      </a>
      </nav>
      </aside>
      {/* Main Content Area */}
      <main className="ml-[240px] mt-16 p-margin-desktop max-w-[1200px]">
      <div className="mb-8">
      <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Application Settings</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Manage your preferences, security keys, and local environment state.</p>
      </div>
      <div className="grid grid-cols-12 gap-lg">
      {/* Left Column: General & Theme */}
      <div className="col-span-12 md:col-span-7 flex flex-col gap-lg">
      {/* Preferences Card */}
      <section className="bg-surface border border-outline-variant rounded-xl p-6">
      <header className="border-b border-outline-variant pb-4 mb-6">
      <h3 className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-[20px] text-on-surface-variant">tune</span>
                                  General Preferences
                              </h3>
      </header>
      <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
      <div>
      <label className="font-body-md text-body-md text-on-surface font-semibold block mb-1">Email Notifications</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Receive daily digest and critical alert emails.</p>
      </div>
      <button aria-checked={true} className="w-12 h-6 bg-primary-container rounded-full relative transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface outline-none" role="switch">
      <span className="absolute left-[2px] top-[2px] bg-on-primary-container w-5 h-5 rounded-full translate-x-6 transition-transform"></span>
      </button>
      </div>
      <div className="flex items-center justify-between">
      <div>
      <label className="font-body-md text-body-md text-on-surface font-semibold block mb-1">Push Notifications</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Browser notifications for real-time operation updates.</p>
      </div>
      <button aria-checked={false} className="w-12 h-6 bg-surface-variant border border-outline-variant rounded-full relative transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface outline-none" role="switch">
      <span className="absolute left-[2px] top-[1px] bg-on-surface-variant w-5 h-5 rounded-full transition-transform"></span>
      </button>
      </div>
      </div>
      </section>
      {/* Theme Selection Card */}
      <section className="bg-surface border border-outline-variant rounded-xl p-6">
      <header className="border-b border-outline-variant pb-4 mb-6">
      <h3 className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-[20px] text-on-surface-variant">palette</span>
                                  Appearance
                              </h3>
      </header>
      <div className="grid grid-cols-3 gap-4">
      <button className="flex flex-col items-center gap-3 p-4 border border-outline-variant rounded-lg hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container outline-none">
      <span className="material-symbols-outlined text-[24px] text-on-surface-variant">light_mode</span>
      <span className="font-body-sm text-body-sm text-on-surface">Light</span>
      </button>
      <button className="flex flex-col items-center gap-3 p-4 border-2 border-primary rounded-lg bg-surface-container-highest transition-colors focus:ring-2 focus:ring-primary-container outline-none">
      <span className="material-symbols-outlined text-[24px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>dark_mode</span>
      <span className="font-body-sm text-body-sm text-primary font-semibold">Dark</span>
      </button>
      <button className="flex flex-col items-center gap-3 p-4 border border-outline-variant rounded-lg hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container outline-none">
      <span className="material-symbols-outlined text-[24px] text-on-surface-variant">desktop_windows</span>
      <span className="font-body-sm text-body-sm text-on-surface">System</span>
      </button>
      </div>
      </section>
      </div>
      {/* Right Column: Security & Debug */}
      <div className="col-span-12 md:col-span-5 flex flex-col gap-lg">
      {/* API Key Management */}
      <section className="bg-surface border border-outline-variant rounded-xl p-6">
      <header className="border-b border-outline-variant pb-4 mb-6">
      <h3 className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-[20px] text-on-surface-variant">key</span>
                                  API Keys
                              </h3>
      </header>
      <div className="flex flex-col gap-4">
      <div>
      <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">Production Key</label>
      <div className="flex gap-2">
      <input className="flex-1 bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 font-code-sm text-code-sm text-on-surface focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none" readOnly={true} type="password" value="sk_live_1234567890abcdef" />
      <button className="px-3 py-2 border border-outline-variant rounded hover:bg-surface-container-high transition-colors text-on-surface flex items-center justify-center focus:ring-2 focus:ring-primary-container outline-none" title="Copy to clipboard">
      <span className="material-symbols-outlined text-[18px]">content_copy</span>
      </button>
      </div>
      </div>
      <div>
      <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">Development Key</label>
      <div className="flex gap-2">
      <input className="flex-1 bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 font-code-sm text-code-sm text-on-surface focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none" readOnly={true} type="password" value="sk_test_0987654321fedcba" />
      <button className="px-3 py-2 border border-outline-variant rounded hover:bg-surface-container-high transition-colors text-on-surface flex items-center justify-center focus:ring-2 focus:ring-primary-container outline-none" title="Copy to clipboard">
      <span className="material-symbols-outlined text-[18px]">content_copy</span>
      </button>
      </div>
      </div>
      <button className="mt-2 w-full py-2 px-4 border border-outline-variant rounded text-on-surface font-body-sm text-body-sm font-semibold hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container outline-none flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-[18px]">add</span>
                                  Generate New Key
                              </button>
      </div>
      </section>
      {/* Debug Controls */}
      <section className="bg-surface border border-error/30 rounded-xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
      <header className="border-b border-outline-variant pb-4 mb-6">
      <h3 className="font-title-sm text-title-sm text-error flex items-center gap-2">
      <span className="material-symbols-outlined text-[20px]">warning</span>
                                  Developer Controls
                              </h3>
      </header>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                              These actions are destructive and affect local client state. Use only for debugging synchronization issues.
                          </p>
      <button className="w-full py-3 px-4 bg-error-container text-on-error-container rounded font-body-md text-body-md font-semibold hover:opacity-90 transition-opacity focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface outline-none flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-[20px]">delete_forever</span>
                              Clear Local Storage
                          </button>
      </section>
      </div>
      </div>
      </main>
    </>
  );
}

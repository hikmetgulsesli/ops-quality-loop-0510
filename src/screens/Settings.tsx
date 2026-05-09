// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from '../contexts/AppContext';

interface SettingsProps {}

export function Settings(props: SettingsProps) {
  const { state, setScreen, updateSettings, clearStorageError, retryStorage, resetStorage } = useAppContext();
  const [copied, setCopied] = useState<string | null>(null);

  const navLink = (screen: string, label: string, icon: string, active?: boolean) => (
    <button
      key={screen}
      onClick={() => setScreen(screen as any)}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 active:scale-[0.98] cursor-pointer w-full text-left ${
        active
          ? 'bg-secondary-container text-on-secondary-container font-bold'
          : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest'
      }`}
      aria-label={label}
    >
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
      <span className="font-label-caps text-label-caps">{label}</span>
    </button>
  );

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    }).catch(() => {
      // Fallback for environments without clipboard API
    });
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="fixed top-0 right-0 left-0 md:left-[240px] h-16 border-b border-outline-variant bg-surface flex items-center justify-between px-4 md:px-margin-desktop w-full md:w-[calc(100%-240px)] z-20">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md font-bold text-on-surface">OpsLoop</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button aria-label="notifications" className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container outline-none cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <button aria-label="help_outline" className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container outline-none cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">help_outline</span>
            </button>
          </div>
          <div
            className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant cursor-pointer hover:bg-surface-container-high transition-colors focus-within:ring-2 focus-within:ring-primary-container"
            onClick={() => setScreen('profile')}
            role="button"
            aria-label="Open profile"
          >
            <img alt="Administrator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3--Q3CHcQZa81cZcUirro3XKEX2fvoMM4y8zYtSIoAvjX1KA7t1CrD_ZaEo_8bmdsgewgVCRj2FUV6jwezctmU6eeVzgMiwMJo_Y5nRuWdbLynK30D-RaDPQEwNA0cq-gsABl2uD6wmxlC28UGTsTg7suxQi-MATM5rTCKcK5-OtLwjEfnVXalTyEQ-Cq-BMeeplL9Y9jj8PNUcgoLKcmdH_TEnWxKx7m6gyRTpvn2htbkstj068CJ8Tqudzy6OrsNnTRSAyKykI" />
          </div>
        </div>
      </header>
      {/* Side Navigation Rail */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant bg-surface-container flex-col py-xl z-30">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary-container font-bold">O</div>
          <div>
            <h1 className="font-title-sm text-title-sm font-bold text-primary tracking-tight">OpsLoop</h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Quality Management</p>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-2 px-2">
          {navLink('dashboard', 'Dashboard', 'dashboard')}
          {navLink('operations', 'Operations', 'assignment_add')}
          {navLink('insights', 'Insights', 'analytics')}
          {navLink('settings', 'Settings', 'settings', true)}
          {navLink('profile', 'Profile', 'account_circle')}
        </nav>
      </aside>
      {/* Main Content Area */}
      <main className="md:ml-[240px] mt-16 p-4 md:p-margin-desktop max-w-[1200px]">
        <div className="mb-8">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Application Settings</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage your preferences, security keys, and local environment state.</p>
        </div>
        {/* Storage Error Banner */}
        {state.storageError && (
          <div className="mb-6 bg-error-container text-on-error-container p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">error</span>
              <span className="font-body-sm text-body-sm">Storage error: {state.storageError}</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={retryStorage} className="px-3 py-1.5 bg-primary-container text-on-primary-container rounded-lg font-body-sm cursor-pointer">Retry</button>
              <button onClick={clearStorageError} className="px-3 py-1.5 border border-outline-variant rounded-lg font-body-sm cursor-pointer">Dismiss</button>
            </div>
          </div>
        )}
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
                  <button
                    aria-checked={state.settings.emailNotifications}
                    onClick={() => updateSettings({ emailNotifications: !state.settings.emailNotifications })}
                    className={`w-12 h-6 rounded-full relative transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface outline-none cursor-pointer ${
                      state.settings.emailNotifications ? 'bg-primary-container' : 'bg-surface-variant border border-outline-variant'
                    }`}
                    role="switch"
                  >
                    <span className={`absolute top-[2px] bg-on-primary-container w-5 h-5 rounded-full transition-transform ${
                      state.settings.emailNotifications ? 'translate-x-6 left-[2px]' : 'left-[2px]'
                    }`}></span>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-body-md text-body-md text-on-surface font-semibold block mb-1">Push Notifications</label>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Browser notifications for real-time operation updates.</p>
                  </div>
                  <button
                    aria-checked={state.settings.pushNotifications}
                    onClick={() => updateSettings({ pushNotifications: !state.settings.pushNotifications })}
                    className={`w-12 h-6 rounded-full relative transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface outline-none cursor-pointer ${
                      state.settings.pushNotifications ? 'bg-primary-container' : 'bg-surface-variant border border-outline-variant'
                    }`}
                    role="switch"
                  >
                    <span className={`absolute top-[2px] bg-on-primary-container w-5 h-5 rounded-full transition-transform ${
                      state.settings.pushNotifications ? 'translate-x-6 left-[2px]' : 'left-[2px]'
                    }`}></span>
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
                <button
                  onClick={() => updateSettings({ theme: 'light' })}
                  className={`flex flex-col items-center gap-3 p-4 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-container outline-none cursor-pointer ${
                    state.settings.theme === 'light' ? 'border-2 border-primary bg-surface-container-highest' : 'border-outline-variant hover:bg-surface-container-high'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] text-on-surface-variant">light_mode</span>
                  <span className={`font-body-sm text-body-sm ${state.settings.theme === 'light' ? 'text-primary font-semibold' : 'text-on-surface'}`}>Light</span>
                </button>
                <button
                  onClick={() => updateSettings({ theme: 'dark' })}
                  className={`flex flex-col items-center gap-3 p-4 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-container outline-none cursor-pointer ${
                    state.settings.theme === 'dark' ? 'border-2 border-primary bg-surface-container-highest' : 'border-outline-variant hover:bg-surface-container-high'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>dark_mode</span>
                  <span className={`font-body-sm text-body-sm ${state.settings.theme === 'dark' ? 'text-primary font-semibold' : 'text-on-surface'}`}>Dark</span>
                </button>
                <button
                  onClick={() => updateSettings({ theme: 'system' })}
                  className={`flex flex-col items-center gap-3 p-4 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-container outline-none cursor-pointer ${
                    state.settings.theme === 'system' ? 'border-2 border-primary bg-surface-container-highest' : 'border-outline-variant hover:bg-surface-container-high'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] text-on-surface-variant">desktop_windows</span>
                  <span className={`font-body-sm text-body-sm ${state.settings.theme === 'system' ? 'text-primary font-semibold' : 'text-on-surface'}`}>System</span>
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
                    <button
                      onClick={() => handleCopy('sk_live_1234567890abcdef', 'prod')}
                      className="px-3 py-2 border border-outline-variant rounded hover:bg-surface-container-high transition-colors text-on-surface flex items-center justify-center focus:ring-2 focus:ring-primary-container outline-none cursor-pointer"
                      title="Copy to clipboard"
                    >
                      <span className="material-symbols-outlined text-[18px]">{copied === 'prod' ? 'check' : 'content_copy'}</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">Development Key</label>
                  <div className="flex gap-2">
                    <input className="flex-1 bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 font-code-sm text-code-sm text-on-surface focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none" readOnly={true} type="password" value="sk_test_0987654321fedcba" />
                    <button
                      onClick={() => handleCopy('sk_test_0987654321fedcba', 'dev')}
                      className="px-3 py-2 border border-outline-variant rounded hover:bg-surface-container-high transition-colors text-on-surface flex items-center justify-center focus:ring-2 focus:ring-primary-container outline-none cursor-pointer"
                      title="Copy to clipboard"
                    >
                      <span className="material-symbols-outlined text-[18px]">{copied === 'dev' ? 'check' : 'content_copy'}</span>
                    </button>
                  </div>
                </div>
                <button className="mt-2 w-full py-2 px-4 border border-outline-variant rounded text-on-surface font-body-sm text-body-sm font-semibold hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container outline-none flex items-center justify-center gap-2 cursor-pointer">
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
              <button
                onClick={resetStorage}
                className="w-full py-3 px-4 bg-error-container text-on-error-container rounded font-body-md text-body-md font-semibold hover:opacity-90 transition-opacity focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface outline-none flex items-center justify-center gap-2 cursor-pointer"
              >
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

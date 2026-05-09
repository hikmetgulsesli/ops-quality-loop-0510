// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Error State
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useAppContext } from '../contexts/AppContext';

interface ErrorStateProps {}

export function ErrorState(props: ErrorStateProps) {
  const { state, setScreen, clearStorageError, retryStorage, resetStorage } = useAppContext();

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
      <span className="material-symbols-outlined" data-icon={icon}>{icon}</span>
      <span className="font-body-md text-body-md">{label}</span>
    </button>
  );

  return (
    <>
      {/* TopNavBar (Mobile Only) */}
      <header className="md:hidden flex items-center justify-between px-margin-mobile h-16 border-b border-outline-variant bg-surface w-full z-50 sticky top-0">
        <div className="font-headline-md text-headline-md font-bold text-on-surface">
          OpsLoop
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Notifications" className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <button aria-label="Help" className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
            <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
          </button>
          <img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVSQL0DKbt5kTAzYlR08WOostLVxXCvCXU8vKbkKnLC2SPO1PW8cFxQDxsRX4ixoeADa50WxXez_SEL0YpCLcOWJHXST9PyU1zHZsA-ozzEF-6Gv2equ7RJb80w_S5dcz7LnOXVapZWS9oRqQ5CSO3cUqQv6d8kxqbeqzfSmYJB8Zhd8YRf4-c_Zza27YOIy0Q-1SpmjeyjUe__CERFUqC1taoFSVWav_jPCR5enLQvPA-MkFGd2-tMuXgHk6kGoVJxx8KjwZiq1E" />
        </div>
      </header>
      {/* SideNavBar (Web Only) */}
      <nav className="hidden md:flex flex-col h-full py-xl fixed left-0 top-0 w-[240px] border-r border-outline-variant bg-surface-container z-40">
        <div className="px-lg mb-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined" data-icon="hub" style={{fontVariationSettings: "'FILL' 1"}}>hub</span>
            </div>
            <div>
              <h1 className="font-title-sm text-title-sm font-bold text-primary tracking-tight">OpsLoop</h1>
              <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">Quality Management</p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-sm space-y-1">
          {navLink('dashboard', 'Dashboard', 'dashboard')}
          {navLink('operations', 'Operations', 'assignment_add')}
          {navLink('insights', 'Insights', 'analytics')}
          {navLink('settings', 'Settings', 'settings', state.screen === 'error')}
          {navLink('profile', 'Profile', 'account_circle')}
        </div>
        <div className="px-lg mt-auto">
          <div className="flex items-center gap-3 px-4 py-3 border border-outline-variant rounded-lg bg-surface cursor-pointer" onClick={() => setScreen('profile')}>
            <img alt="Administrator Profile" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJZX4eInXkFwGArjcQoPqVEaq87mzYJP2DlSBxpPcGcdYOqc2VtwGG4SiEQGjS-sK3VIqJE7Vq8oSWoHYlkZG08phSnpRE59C0kGvG6k6pFlzi4uNJUAC8VA2NLtCLY59PnG82uFzqrRHIgUaxOfu573-MrkvZfXNac-hmyiKrQrqV2TQx9YI1t7lGyguSAKr07YGjoDizB9WxcP1DgKlpfDFvbIdjZ19CEDHrBKHQGzz0Dufci49a8ms3sxLaLl1rHFo3sYJpmcQ" />
            <div className="flex-1 min-w-0">
              <p className="font-body-sm text-body-sm text-on-surface truncate">{state.profile.name}</p>
            </div>
          </div>
        </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-[240px] flex flex-col items-center justify-center p-margin-mobile md:p-margin-desktop min-h-[calc(100vh-64px)] md:min-h-screen relative overflow-hidden bg-background">
        {/* Subtle Background Pattern / Gradient for depth */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-variant/20 via-background to-background z-0"></div>
        <div className="w-full max-w-2xl z-10">
          {/* Error Card */}
          <div className="bg-surface border border-error-container rounded-xl p-xl shadow-lg relative overflow-hidden">
            {/* Decorative Top Border for Error */}
            <div className="absolute top-0 left-0 w-full h-1 bg-error"></div>
            <div className="flex flex-col md:flex-row items-start gap-lg">
              {/* Error Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-error-container/20 flex items-center justify-center border border-error-container/50">
                <span className="material-symbols-outlined text-error text-4xl" data-icon="report" style={{fontVariationSettings: "'FILL' 1"}}>report</span>
              </div>
              {/* Error Details */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Storage Failure</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {state.storageError || 'A critical runtime exception occurred while attempting to access local storage or cache partitions. The system is currently unable to persist or retrieve operational data.'}
                  </p>
                </div>
                {/* Technical Details Accordion / Code Snippet */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm">
                  <div className="flex items-center justify-between mb-2 px-2 pt-1">
                    <span className="font-label-caps text-label-caps text-outline">Error Trace</span>
                    <span className="font-code-sm text-code-sm text-error">ERR_STORAGE_0x4F</span>
                  </div>
                  <div className="bg-[#0c0e16] p-3 rounded border border-surface-variant overflow-x-auto">
                    <pre className="font-code-sm text-code-sm text-on-surface-variant leading-relaxed"><code>[{new Date().toLocaleTimeString()}] CRITICAL: {state.storageError || 'StorageError'}
DOMException: Failed to execute 'setItem' on 'Storage'.
    at StorageManager.persist (app.bundle.js:142:99)
    at Object.sync (app.bundle.js:88:21)
    at RuntimeEnv.eval (app.bundle.js:201:14)</code></pre>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-lg mt-lg border-t border-outline-variant">
                  <button
                    onClick={retryStorage}
                    className="w-full sm:w-auto px-6 py-3 bg-primary-container text-on-primary-container font-title-sm text-title-sm rounded hover:bg-primary-container/90 focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined" data-icon="refresh">refresh</span>
                    Retry Connection
                  </button>
                  <button
                    onClick={resetStorage}
                    className="w-full sm:w-auto px-6 py-3 bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container-high focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background transition-colors rounded font-title-sm text-title-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined" data-icon="delete_sweep">delete_sweep</span>
                    Clear Storage & Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              If this issue persists, please contact <button onClick={() => setScreen('settings')} className="text-primary hover:underline cursor-pointer">Support Engineering</button> or check the <button onClick={() => setScreen('dashboard')} className="text-primary hover:underline cursor-pointer">System Status</button>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

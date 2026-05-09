// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights Dashboard
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from '../contexts/AppContext';

interface InsightsDashboardProps {}

export function InsightsDashboard(props: InsightsDashboardProps) {
  const { state, setScreen } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const statusCounts = {
    completed: state.records.filter(r => r.status === 'completed').length,
    failed: state.records.filter(r => r.status === 'failed').length,
    in_progress: state.records.filter(r => r.status === 'in_progress').length,
    blocked: state.records.filter(r => r.status === 'blocked').length,
    pending: state.records.filter(r => r.status === 'pending').length,
  };

  const total = state.records.length || 1;
  const completionRate = total > 0 ? Math.round((statusCounts.completed / total) * 100) : 0;
  const errorRate = total > 0 ? ((statusCounts.failed / total) * 100).toFixed(2) : '0.00';

  const navLink = (screen: string, label: string, icon: string, active?: boolean) => (
    <button
      key={screen}
      onClick={() => { setScreen(screen as any); setMobileMenuOpen(false); }}
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

  // Department breakdown
  const deptCounts: Record<string, number> = {};
  state.records.forEach(r => {
    deptCounts[r.department] = (deptCounts[r.department] || 0) + 1;
  });
  const maxDept = Math.max(...Object.values(deptCounts), 1);

  return (
    <>
      {/* SideNavBar */}
      <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant bg-surface-container py-xl z-20`}>
        <div className="px-4 mb-8">
          <h1 className="font-title-sm text-title-sm font-bold text-primary tracking-tight">OpsLoop</h1>
          <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">Quality Management</p>
        </div>
        <div className="flex-1 flex flex-col gap-2 px-2">
          {navLink('dashboard', 'Dashboard', 'dashboard')}
          {navLink('operations', 'Operations', 'assignment_add')}
          {navLink('insights', 'Insights', 'analytics', state.screen === 'insights')}
          {navLink('settings', 'Settings', 'settings')}
          {navLink('profile', 'Profile', 'account_circle')}
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-10 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-0 md:left-[240px] h-16 border-b border-outline-variant bg-surface flex items-center justify-between px-margin-mobile md:px-margin-desktop z-10">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-surface-container-highest transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <span className="md:hidden font-headline-md text-headline-md font-bold text-on-surface">OpsLoop</span>
          <div className="hidden md:flex items-center text-primary font-bold border-b-2 border-primary h-16 px-4">
            <span className="font-title-sm text-title-sm">Insights</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors cursor-pointer" aria-label="Notifications">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors cursor-pointer" aria-label="Help">
            <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden ml-2 cursor-pointer" onClick={() => setScreen('profile')}>
            <img alt="Administrator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAvGvfH22hcWJLWw_XdZ0653N6ZFbm3CDhRBL3GnaYM_aIB7i3yfGsjA1i436Li5o8Zk1l0yWgS0kpa01Qp4fGy4IIfpzFCi_PmByIyFuZg_K7pd1XcQ8veF7uxgIQG6bjP02b_M2Q3pkgOgeqjp4c_st5jYAbwA2M5BzAjIypHzVTwqQsQgtr95hIaJtCbGEwpk8rJ3e82fiuc1doI6SQE_eGifQ-cm2IOHqAlo05s8PtXmPVeC7hOuhvkzlWo6Jk7IKFpnyh-ik" />
          </div>
        </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 ml-0 md:ml-[240px] mt-16 p-margin-mobile md:p-margin-desktop overflow-y-auto bg-background">
        <div className="mb-8">
          <h2 className="font-display-lg text-display-lg text-on-background">System Performance Insights</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">Real-time metrics and historical trends across all operational sectors.</p>
        </div>
        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Throughput */}
          <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Total Records</p>
                <h3 className="font-display-lg text-display-lg text-on-surface mt-1">{state.records.length}</h3>
              </div>
              <div className="p-2 bg-primary-container/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">speed</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-sm">trending_up</span>
              <span className="font-code-sm text-code-sm text-tertiary">{completionRate}%</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">completion rate</span>
            </div>
          </div>
          {/* Error Rate */}
          <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Error Rate</p>
                <h3 className="font-display-lg text-display-lg text-on-surface mt-1">{errorRate}%</h3>
              </div>
              <div className="p-2 bg-error/10 rounded-lg text-error">
                <span className="material-symbols-outlined">error_outline</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">trending_down</span>
              <span className="font-code-sm text-code-sm text-primary">{statusCounts.failed}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">failed records</span>
            </div>
          </div>
          {/* Uptime */}
          <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">In Progress</p>
                <h3 className="font-display-lg text-display-lg text-on-surface mt-1">{statusCounts.in_progress}</h3>
              </div>
              <div className="p-2 bg-secondary-container rounded-lg text-secondary">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{statusCounts.blocked} blocked, {statusCounts.pending} pending</span>
            </div>
          </div>
        </div>
        {/* Charts Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Volume Trends (Bar Chart) */}
          <div className="bg-surface border border-outline-variant rounded-xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-outline-variant">
              <h3 className="font-title-sm text-title-sm text-on-surface">Records by Department</h3>
              <button className="text-on-surface-variant hover:text-on-surface cursor-pointer" aria-label="More options">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
            <div className="flex-1 relative min-h-[240px] flex items-end justify-between gap-2 px-2 pb-8 pt-4">
              <div className="w-full flex items-end justify-between gap-4 h-full">
                {Object.entries(deptCounts).map(([dept, count]) => (
                  <div
                    key={dept}
                    className="w-full bg-primary-container rounded-t-sm hover:bg-primary-container/80 transition-colors relative group"
                    style={{ height: `${(count / maxDept) * 100}%`, minHeight: '20px' }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">{count}</span>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface-variant text-center w-full">{dept.slice(0, 8)}</span>
                  </div>
                ))}
                {Object.keys(deptCounts).length === 0 && (
                  <div className="w-full text-center text-on-surface-variant font-body-sm">No data available</div>
                )}
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none opacity-20 border-l border-b border-outline-variant">
                <div className="w-full border-t border-outline-variant"></div>
                <div className="w-full border-t border-outline-variant"></div>
                <div className="w-full border-t border-outline-variant"></div>
                <div className="w-full border-t border-outline-variant"></div>
              </div>
            </div>
          </div>
          {/* Quality Trends (Line Chart Placeholder) */}
          <div className="bg-surface border border-outline-variant rounded-xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-outline-variant">
              <h3 className="font-title-sm text-title-sm text-on-surface">Status Distribution</h3>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-surface-container rounded font-label-caps text-label-caps text-on-surface-variant">7D</span>
                <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded font-label-caps text-label-caps">30D</span>
              </div>
            </div>
            <div className="flex-1 relative min-h-[240px] flex items-center justify-center bg-surface-container-lowest rounded-lg overflow-hidden">
              <div className="absolute w-full h-full inset-0 p-4 flex items-center justify-center">
                <svg className="overflow-visible" height="100%" preserveAspectRatio="none" viewBox="0 0 400 200" width="100%">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#b4c5ff"></stop>
                      <stop offset="100%" stopColor="#2563eb"></stop>
                    </linearGradient>
                    <linearGradient id="areaGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2"></stop>
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0,150 L50,120 L100,140 L150,80 L200,90 L250,40 L300,60 L350,20 L400,30 L400,200 L0,200 Z" fill="url(#areaGrad)"></path>
                  <path d="M0,150 L50,120 L100,140 L150,80 L200,90 L250,40 L300,60 L350,20 L400,30" fill="none" stroke="url(#lineGrad)" strokeWidth="3"></path>
                  <circle cx="150" cy="80" fill="#11131b" r="4" stroke="#b4c5ff" strokeWidth="2"></circle>
                  <circle cx="250" cy="40" fill="#11131b" r="4" stroke="#b4c5ff" strokeWidth="2"></circle>
                  <circle cx="350" cy="20" fill="#11131b" r="4" stroke="#b4c5ff" strokeWidth="2"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface InsightsDashboardProps {}

export function InsightsDashboard(props: InsightsDashboardProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant bg-surface-container py-xl z-20">
      <div className="px-4 mb-8">
      <h1 className="font-title-sm text-title-sm font-bold text-primary tracking-tight">OpsLoop</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">Quality Management</p>
      </div>
      <div className="flex-1 flex flex-col gap-2 px-2">
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200 rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span className="font-body-md text-body-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200 rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="assignment_add">assignment_add</span>
      <span className="font-body-md text-body-md">Operations</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold" href="#">
      <span className="material-symbols-outlined" data-icon="analytics" style={{fontVariationSettings: "'FILL' 1"}}>analytics</span>
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200 rounded-lg mt-auto" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200 rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      <span className="font-body-md text-body-md">Profile</span>
      </a>
      </div>
      </nav>
      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-0 md:left-[240px] h-16 border-b border-outline-variant bg-surface flex items-center justify-between px-margin-mobile md:px-margin-desktop z-10">
      <div className="flex items-center gap-4">
      <span className="md:hidden font-headline-md text-headline-md font-bold text-on-surface">OpsLoop</span>
      <div className="hidden md:flex items-center text-primary font-bold border-b-2 border-primary h-16 px-4">
      <span className="font-title-sm text-title-sm">Insights</span>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      </button>
      <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden ml-2">
      <img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="Close up headshot of a corporate professional looking confidently at the camera. Professional studio lighting with a neutral gray background. The subject is wearing a modern dark suit. High resolution, clear and sharp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAvGvfH22hcWJLWw_XdZ0653N6ZFbm3CDhRBL3GnaYM_aIB7i3yfGsjA1i436Li5o8Zk1l0yWgS0kpa01Qp4fGy4IIfpzFCi_PmByIyFuZg_K7pd1XcQ8veF7uxgIQG6bjP02b_M2Q3pkgOgeqjp4c_st5jYAbwA2M5BzAjIypHzVTwqQsQgtr95hIaJtCbGEwpk8rJ3e82fiuc1doI6SQE_eGifQ-cm2IOHqAlo05s8PtXmPVeC7hOuhvkzlWo6Jk7IKFpnyh-ik" />
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
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Throughput</p>
      <h3 className="font-display-lg text-display-lg text-on-surface mt-1">14,208</h3>
      </div>
      <div className="p-2 bg-primary-container/10 rounded-lg text-primary">
      <span className="material-symbols-outlined">speed</span>
      </div>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-tertiary text-sm">trending_up</span>
      <span className="font-code-sm text-code-sm text-tertiary">+12.5%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">vs last week</span>
      </div>
      </div>
      {/* Error Rate */}
      <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col justify-between">
      <div className="flex items-start justify-between mb-4">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Error Rate</p>
      <h3 className="font-display-lg text-display-lg text-on-surface mt-1">0.84%</h3>
      </div>
      <div className="p-2 bg-error/10 rounded-lg text-error">
      <span className="material-symbols-outlined">error_outline</span>
      </div>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-sm">trending_down</span>
      <span className="font-code-sm text-code-sm text-primary">-0.12%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">vs last week</span>
      </div>
      </div>
      {/* Uptime */}
      <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col justify-between">
      <div className="flex items-start justify-between mb-4">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">System Uptime</p>
      <h3 className="font-display-lg text-display-lg text-on-surface mt-1">99.99%</h3>
      </div>
      <div className="p-2 bg-secondary-container rounded-lg text-secondary">
      <span className="material-symbols-outlined">check_circle</span>
      </div>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">All systems operational</span>
      </div>
      </div>
      </div>
      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Volume Trends (Bar Chart Placeholder) */}
      <div className="bg-surface border border-outline-variant rounded-xl p-6 flex flex-col">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-outline-variant">
      <h3 className="font-title-sm text-title-sm text-on-surface">Volume by Region</h3>
      <button className="text-on-surface-variant hover:text-on-surface">
      <span className="material-symbols-outlined">more_horiz</span>
      </button>
      </div>
      <div className="flex-1 relative min-h-[240px] flex items-end justify-between gap-2 px-2 pb-8 pt-4">
      {/* Faux Bar Chart */}
      <div className="w-full flex items-end justify-between gap-4 h-full">
      <div className="w-full bg-surface-variant rounded-t-sm h-[40%] hover:bg-surface-container-highest transition-colors relative group">
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface-variant">NA</span>
      </div>
      <div className="w-full bg-primary-container rounded-t-sm h-[85%] hover:bg-primary-container/80 transition-colors relative group">
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface-variant">EU</span>
      </div>
      <div className="w-full bg-surface-variant rounded-t-sm h-[60%] hover:bg-surface-container-highest transition-colors relative group">
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface-variant">APAC</span>
      </div>
      <div className="w-full bg-surface-variant rounded-t-sm h-[30%] hover:bg-surface-container-highest transition-colors relative group">
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface-variant">LATAM</span>
      </div>
      </div>
      {/* Y Axis lines */}
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
      <h3 className="font-title-sm text-title-sm text-on-surface">Quality Score Trend</h3>
      <div className="flex gap-2">
      <span className="px-2 py-1 bg-surface-container rounded font-label-caps text-label-caps text-on-surface-variant">7D</span>
      <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded font-label-caps text-label-caps">30D</span>
      </div>
      </div>
      <div className="flex-1 relative min-h-[240px] flex items-center justify-center bg-surface-container-lowest rounded-lg overflow-hidden">
      {/* Faux Line Chart using gradient line */}
      <div className="absolute w-full h-full inset-0 p-4">
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
      {/* Data points */}
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

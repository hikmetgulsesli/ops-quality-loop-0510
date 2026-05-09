// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex bg-surface-container dark:bg-surface-container fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant dark:border-outline-variant flex-col py-xl z-20">
      {/* Brand Header */}
      <div className="px-lg mb-8 flex flex-col gap-1">
      <span className="font-title-sm text-title-sm font-bold text-primary dark:text-primary tracking-tight">OpsLoop</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Quality Management</span>
      </div>
      {/* Navigation Links */}
      <ul className="flex flex-col gap-2 px-sm flex-1">
      <li>
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container rounded-lg font-bold hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span className="font-body-md text-body-md">Dashboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface rounded-lg hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined" data-icon="assignment_add">assignment_add</span>
      <span className="font-body-md text-body-md">Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface rounded-lg hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface rounded-lg hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface rounded-lg hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      <span className="font-body-md text-body-md">Profile</span>
      </a>
      </li>
      </ul>
      </nav>
      {/* TopNavBar */}
      <header className="hidden md:flex bg-surface dark:bg-surface fixed top-0 right-0 left-[240px] h-16 border-b border-outline-variant dark:border-outline-variant items-center justify-between px-margin-desktop z-10">
      {/* Search Bar (Left) */}
      <div className="flex-1 max-w-md focus-within:ring-2 focus-within:ring-primary-container rounded-DEFAULT">
      <div className="relative flex items-center w-full h-10 bg-surface-container-highest border border-outline-variant rounded-DEFAULT overflow-hidden">
      <div className="grid place-items-center h-full w-10 text-on-surface-variant">
      <span className="material-symbols-outlined text-[20px]">search</span>
      </div>
      <input className="peer h-full w-full outline-none text-sm text-on-surface bg-transparent pr-2 font-body-sm text-body-sm placeholder-on-surface-variant border-none focus:ring-0" id="search" placeholder="Search operations..." type="text" />
      </div>
      </div>
      {/* Trailing Actions & Profile */}
      <div className="flex items-center gap-sm">
      <button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-high rounded-full transition-colors cursor-pointer">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-high rounded-full transition-colors cursor-pointer">
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      </button>
      <div className="ml-4 h-8 w-8 rounded-full overflow-hidden border border-outline-variant cursor-pointer hover:ring-2 hover:ring-primary-container transition-all">
      <img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a corporate administrator, tightly cropped on the face. The lighting is crisp and studio-quality, emphasizing reliability and competence. The color palette aligns with a modern corporate setting, featuring deep navy and slate grey tones. The subject is well-lit against a neutral dark background, creating a high-contrast, premium aesthetic suitable for a high-density operational dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbUHJc9NefI_jKaOS8UuSuS5FaIxlF4Ev_X8c508CXqeVmDMAPwYm0iHPV2uTOHvqNicOl-wkLfIePWWTozOTjzXNLA-oW-O0lWippjvv31qka035GECYbTP4W8w6dFZqXyqGIT3JEw1qOOeOjc0IoKoDZqdi8Z7jDqjYH_9b0uqL5908K-vZ-CDaicaXBNnmB6Wqb7HXSv_IM3NlsOlCYgncbNcFjlkjjTlVkUmQP4yhSllRwnxLKMfOakxnaGzlHXOR8uoxHdrk" />
      </div>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="pt-[80px] md:pl-[240px] px-margin-mobile md:px-margin-desktop pb-xl min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-lg mt-sm">
      <div>
      <h1 className="font-display-lg text-display-lg text-on-surface mb-1">Operational Overview</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Monitor system integrity and recent execution metrics.</p>
      </div>
      <div className="flex items-center gap-3">
      <button className="flex items-center justify-center px-4 py-2 border border-outline-variant text-on-surface rounded-DEFAULT font-body-sm text-body-sm hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined mr-2 text-[20px]">filter_list</span>
                          Filter
                      </button>
      <button className="flex items-center justify-center px-4 py-2 bg-primary-container text-on-primary-container rounded-DEFAULT font-body-sm text-body-sm hover:bg-primary-container/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background border border-primary-container">
      <span className="material-symbols-outlined mr-2 text-[20px]">add</span>
                          Create New Record
                      </button>
      </div>
      </div>
      {/* Metric Cards (Bento Grid Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
      {/* Card 1 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col justify-between h-[140px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Active Pipelines</span>
      <span className="material-symbols-outlined text-primary text-[20px]">route</span>
      </div>
      <div>
      <div className="font-display-lg text-display-lg text-on-surface">1,248</div>
      <div className="flex items-center gap-1 mt-1 text-tertiary">
      <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
      <span className="font-body-sm text-body-sm">12% vs last week</span>
      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col justify-between h-[140px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant">System Latency</span>
      <span className="material-symbols-outlined text-secondary text-[20px]">speed</span>
      </div>
      <div>
      <div className="font-display-lg text-display-lg text-on-surface">42ms</div>
      <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-[16px]">horizontal_rule</span>
      <span className="font-body-sm text-body-sm">Stable across nodes</span>
      </div>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col justify-between h-[140px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-error-container/20 to-transparent pointer-events-none"></div>
      <div className="flex justify-between items-start relative z-10">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Failed Executions</span>
      <span className="material-symbols-outlined text-error text-[20px]">warning</span>
      </div>
      <div className="relative z-10">
      <div className="font-display-lg text-display-lg text-on-surface">23</div>
      <div className="flex items-center gap-1 mt-1 text-error">
      <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
      <span className="font-body-sm text-body-sm">Requires attention</span>
      </div>
      </div>
      </div>
      </div>
      {/* Data Table Container */}
      <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="p-lg border-b border-outline-variant flex justify-between items-center">
      <h2 className="font-headline-md text-headline-md text-on-surface">Recent Operations</h2>
      <button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-DEFAULT transition-colors">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container text-on-surface-variant font-label-caps text-label-caps border-b border-outline-variant">
      <th className="p-4 font-semibold tracking-wider">Record ID</th>
      <th className="p-4 font-semibold tracking-wider">Status</th>
      <th className="p-4 font-semibold tracking-wider">Operator</th>
      <th className="p-4 font-semibold tracking-wider hidden sm:table-cell">Timestamp</th>
      <th className="p-4 font-semibold tracking-wider text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm divide-y divide-outline-variant">
      {/* Row 1 */}
      <tr className="hover:bg-surface-container-highest transition-colors group">
      <td className="p-4 font-code-sm text-code-sm text-primary">REQ-8023</td>
      <td className="p-4">
      <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
      <span className="text-on-surface">Processing</span>
      </div>
      </td>
      <td className="p-4 text-on-surface">System_Automated</td>
      <td className="p-4 text-on-surface-variant hidden sm:table-cell">10 mins ago</td>
      <td className="p-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]">visibility</span>
      </button>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-surface-container-highest transition-colors group">
      <td className="p-4 font-code-sm text-code-sm text-primary">REQ-8022</td>
      <td className="p-4">
      <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
      <span className="text-on-surface">Completed</span>
      </div>
      </td>
      <td className="p-4 text-on-surface">J. Smith</td>
      <td className="p-4 text-on-surface-variant hidden sm:table-cell">1 hr ago</td>
      <td className="p-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]">visibility</span>
      </button>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-surface-container-highest transition-colors group">
      <td className="p-4 font-code-sm text-code-sm text-primary">REQ-8021</td>
      <td className="p-4">
      <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-error"></div>
      <span className="text-on-surface">Failed</span>
      </div>
      </td>
      <td className="p-4 text-on-surface">A. Chen</td>
      <td className="p-4 text-on-surface-variant hidden sm:table-cell">3 hrs ago</td>
      <td className="p-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]">visibility</span>
      </button>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="hover:bg-surface-container-highest transition-colors group">
      <td className="p-4 font-code-sm text-code-sm text-primary">REQ-8020</td>
      <td className="p-4">
      <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
      <span className="text-on-surface">Completed</span>
      </div>
      </td>
      <td className="p-4 text-on-surface">System_Automated</td>
      <td className="p-4 text-on-surface-variant hidden sm:table-cell">5 hrs ago</td>
      <td className="p-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]">visibility</span>
      </button>
      </td>
      </tr>
      {/* Row 5 */}
      <tr className="hover:bg-surface-container-highest transition-colors group">
      <td className="p-4 font-code-sm text-code-sm text-primary">REQ-8019</td>
      <td className="p-4">
      <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
      <span className="text-on-surface">Completed</span>
      </div>
      </td>
      <td className="p-4 text-on-surface">M. Davis</td>
      <td className="p-4 text-on-surface-variant hidden sm:table-cell">Yesterday</td>
      <td className="p-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]">visibility</span>
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Table Footer/Pagination */}
      <div className="p-4 border-t border-outline-variant flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
      <span>Showing 1 to 5 of 248 entries</span>
      <div className="flex items-center gap-2">
      <button className="p-1 hover:bg-surface-container-highest rounded-DEFAULT transition-colors disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined text-[20px]">chevron_left</span>
      </button>
      <button className="p-1 hover:bg-surface-container-highest rounded-DEFAULT transition-colors">
      <span className="material-symbols-outlined text-[20px]">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}

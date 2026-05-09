// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Detail
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface RecordDetailProps {}

export function RecordDetail(props: RecordDetailProps) {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 right-0 left-0 md:left-[240px] h-16 border-b border-outline-variant bg-surface dark:bg-surface flex items-center justify-between px-margin-desktop w-full md:w-[calc(100%-240px)] z-50">
      <div className="flex items-center gap-4">
      <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface">OpsLoop</span>
      </div>
      <div className="flex items-center gap-4">
      <div className="hidden md:flex gap-4">
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high cursor-pointer transition-colors p-2 rounded-full focus-within:ring-2 focus-within:ring-primary-container">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high cursor-pointer transition-colors p-2 rounded-full focus-within:ring-2 focus-within:ring-primary-container">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      </div>
      <img alt="Administrator Profile" className="w-8 h-8 rounded-full object-cover border border-outline-variant" data-alt="A professional headshot of a corporate administrator, tightly cropped on the face. The lighting is studio quality, soft and even, highlighting sharp features against a neutral, dark background to match a dark mode UI. The person appears confident and capable, wearing smart business casual attire. The overall mood is serious and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPUx-yp_sWsmfSCEvNz3HPE4Lx5YtDYwtRJrvoxR9grD8wNmUigb2axYq9VqpUA5OQLDwa1q69Jww8DTLEqw6Bj_OVrXYN9F9FfiroMTnKttIusQaSgRDMbyCHWeinoo3tW5KfFnRFKRikFftMuW3od-_7Yi8pqEPcpdczukIj15xkbeK4rHrxuajC8cWj4kk3gNdviuF8hXTAfrU7EBc2xxOmPjqFUZLeRxfvsecoP38hYbfLuy40nQefcgaFO5U9amKFMm6Q0cE" />
      </div>
      </nav>
      {/* Side Navigation Bar (Desktop) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant bg-surface-container dark:bg-surface-container flex-col py-xl z-40">
      <div className="px-6 mb-8 flex items-center gap-3">
      <div className="w-8 h-8 bg-primary-container rounded flex items-center justify-center text-on-primary-container font-bold">
      <span className="material-symbols-outlined text-[20px]">hub</span>
      </div>
      <div>
      <h1 className="font-title-sm text-title-sm font-bold text-primary dark:text-primary tracking-tight">OpsLoop</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">Quality Management</p>
      </div>
      </div>
      <nav className="flex-1 px-4 flex flex-col gap-2">
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-label-caps text-label-caps">Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container rounded-lg font-bold active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>assignment_add</span>
      <span className="font-label-caps text-label-caps">Operations</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined">analytics</span>
      <span className="font-label-caps text-label-caps">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-caps text-label-caps">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-lg active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined">account_circle</span>
      <span className="font-label-caps text-label-caps">Profile</span>
      </a>
      </nav>
      </aside>
      {/* Main Content Area */}
      <main className="pt-16 md:pl-[240px] min-h-screen">
      <div className="max-w-[1200px] mx-auto p-margin-mobile md:p-margin-desktop">
      {/* Record Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-surface-container-highest">
      <div>
      <div className="flex items-center gap-3 mb-2">
      <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" href="#">
      <span className="material-symbols-outlined text-[16px]">arrow_back</span>
      <span className="font-label-caps text-label-caps">Back to Operations</span>
      </a>
      </div>
      <div className="flex items-center gap-4">
      <h2 className="font-display-lg text-display-lg">Record #OP-2023-8942</h2>
      <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full border border-outline-variant">
      <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
      <span className="font-body-sm text-body-sm text-on-surface">Active</span>
      </div>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container-highest transition-colors font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-[18px]">download</span>
                              Export
                          </button>
      <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container-highest transition-colors font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-[18px]">edit</span>
                              Edit
                          </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg hover:opacity-90 transition-opacity font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                              Resolve
                          </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Main Details Card (Spans 8 columns on desktop) */}
      <div className="md:col-span-8 bg-surface border border-surface-container-highest rounded-xl p-6 flex flex-col gap-6">
      <h3 className="font-title-sm text-title-sm border-b border-surface-container-highest pb-4">Primary Metadata</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Initiated By</p>
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-sm">
                                          SJ
                                      </div>
      <span className="font-body-md text-body-md">Sarah Jenkins</span>
      </div>
      </div>
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Department</p>
      <p className="font-body-md text-body-md">Logistics &amp; Supply Chain</p>
      </div>
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Created Date</p>
      <p className="font-code-sm text-code-sm">2023-10-24 08:30:00 UTC</p>
      </div>
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Target Resolution</p>
      <p className="font-code-sm text-code-sm text-tertiary">2023-10-31 17:00:00 UTC</p>
      </div>
      <div className="sm:col-span-2">
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Description</p>
      <p className="font-body-sm text-body-sm text-on-surface leading-relaxed p-4 bg-surface-container-low rounded-lg border border-surface-container-highest">
                                      Routine quality check flagged inconsistencies in batch 409-B. Initial sensor data suggests a temperature deviation during phase 2 of processing. Immediate holds placed on affected inventory pending manual inspection and recalibration of thermal sensors on line 3.
                                  </p>
      </div>
      </div>
      </div>
      {/* Status Timeline (Spans 4 columns on desktop) */}
      <div className="md:col-span-4 bg-surface border border-surface-container-highest rounded-xl p-6">
      <h3 className="font-title-sm text-title-sm border-b border-surface-container-highest pb-4 mb-6">Activity Timeline</h3>
      <div className="relative border-l border-surface-container-highest ml-3 space-y-6">
      {/* Timeline Item 1 */}
      <div className="relative pl-6">
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary-container ring-4 ring-surface"></div>
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Today, 14:20</p>
      <p className="font-body-sm text-body-sm">Sensor recalibration requested</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">By Michael Chen</p>
      </div>
      {/* Timeline Item 2 */}
      <div className="relative pl-6">
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-surface-variant border border-outline-variant ring-4 ring-surface"></div>
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Yesterday, 09:15</p>
      <p className="font-body-sm text-body-sm">Inventory hold confirmed</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">System automated action</p>
      </div>
      {/* Timeline Item 3 */}
      <div className="relative pl-6">
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-surface-variant border border-outline-variant ring-4 ring-surface"></div>
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Oct 24, 08:30</p>
      <p className="font-body-sm text-body-sm">Record Created</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Flagged by Sensor Array Alpha</p>
      </div>
      </div>
      </div>
      {/* Related Data Card */}
      <div className="md:col-span-12 bg-surface border border-surface-container-highest rounded-xl p-6">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-container-highest">
      <h3 className="font-title-sm text-title-sm">Associated Telemetry</h3>
      <button className="text-primary hover:text-primary-container transition-colors font-body-sm text-body-sm flex items-center gap-1">
                                  View Full Logs <span className="material-symbols-outlined text-[16px]">open_in_new</span>
      </button>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-surface-container-highest">
      <th className="font-label-caps text-label-caps text-on-surface-variant py-3 px-4 font-normal">Sensor ID</th>
      <th className="font-label-caps text-label-caps text-on-surface-variant py-3 px-4 font-normal">Metric</th>
      <th className="font-label-caps text-label-caps text-on-surface-variant py-3 px-4 font-normal">Value</th>
      <th className="font-label-caps text-label-caps text-on-surface-variant py-3 px-4 font-normal">Threshold</th>
      <th className="font-label-caps text-label-caps text-on-surface-variant py-3 px-4 font-normal">Status</th>
      </tr>
      </thead>
      <tbody>
      <tr className="border-b border-surface-container-lowest hover:bg-surface-container-highest transition-colors">
      <td className="font-code-sm text-code-sm py-3 px-4">SNR-409-B1</td>
      <td className="font-body-sm text-body-sm py-3 px-4">Temperature</td>
      <td className="font-code-sm text-code-sm py-3 px-4 text-tertiary">42.8°C</td>
      <td className="font-code-sm text-code-sm py-3 px-4 text-on-surface-variant">Max 40.0°C</td>
      <td className="py-3 px-4">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-tertiary"></div>
      <span className="font-body-sm text-body-sm">Critical</span>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="font-code-sm text-code-sm py-3 px-4">SNR-409-B2</td>
      <td className="font-body-sm text-body-sm py-3 px-4">Pressure</td>
      <td className="font-code-sm text-code-sm py-3 px-4">1.2 atm</td>
      <td className="font-code-sm text-code-sm py-3 px-4 text-on-surface-variant">1.0 - 1.5 atm</td>
      <td className="py-3 px-4">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
      <span className="font-body-sm text-body-sm">Nominal</span>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}

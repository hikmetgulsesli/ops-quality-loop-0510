// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty State
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface EmptyStateProps {}

export function EmptyState(props: EmptyStateProps) {
  return (
    <>
      {/* Navigation Shell Suppressed as this is a linear/first-load empty state focused on creation */}
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col items-center justify-center p-margin-desktop relative overflow-y-auto">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
      <div className="w-[600px] h-[600px] bg-primary-container rounded-full blur-[120px]"></div>
      </div>
      {/* Empty State Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full animate-fade-in-up">
      {/* Graphic Element */}
      <div className="mb-xl relative group">
      <div className="absolute inset-0 bg-primary-container/20 rounded-full blur-xl group-hover:bg-primary-container/30 transition-colors duration-500"></div>
      <div className="relative w-32 h-32 flex items-center justify-center bg-surface-container-highest border border-outline-variant rounded-full shadow-lg">
      <span className="material-symbols-outlined text-[64px] text-primary" style={{fontVariationSettings: "'FILL' 0, 'wght' 200"}}>
                              database
                          </span>
      </div>
      </div>
      {/* Typography */}
      <h1 className="font-display-lg text-display-lg text-on-surface mb-sm">
                      No Records Found
                  </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-[320px]">
                      Your workspace is currently empty. Get started by creating your first operational record to begin tracking data.
                  </p>
      {/* Call to Action */}
      <button className="flex items-center justify-center gap-2 px-xl py-lg bg-primary-container text-on-primary-container font-title-sm text-title-sm rounded-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group">
      <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>
                          add_circle
                      </span>
                      Create Your First Record
                  </button>
      {/* Secondary Actions / Help */}
      <div className="mt-lg flex items-center gap-4 border-t border-outline-variant pt-lg w-full justify-center">
      <a className="flex items-center gap-1 font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors" href="#">
      <span className="material-symbols-outlined text-[16px]">menu_book</span>
                          Read Documentation
                      </a>
      <span className="text-outline-variant">•</span>
      <a className="flex items-center gap-1 font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors" href="#">
      <span className="material-symbols-outlined text-[16px]">smart_display</span>
                          Watch Tutorial
                      </a>
      </div>
      </div>
      {/* Optional: Background geometric accents for modern feel */}
      <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-outline-variant to-transparent opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent opacity-50 pointer-events-none"></div>
      </main>
    </>
  );
}

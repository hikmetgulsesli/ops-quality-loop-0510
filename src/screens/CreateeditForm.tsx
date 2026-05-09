// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Create/Edit Form
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface CreateeditFormProps {}

export function CreateeditForm(props: CreateeditFormProps) {
  return (
    <>
      {/* TopNavBar (Nav Shell Suppressed due to Transactional/Form Page intent - However, providing a simplified header for context as per typical CRUD forms returning to a main state, but strictly adhering to rules, suppressing global nav for task focus. Instead using a localized header.) */}
      {/* Main Content Canvas */}
      <main className="flex-1 flex justify-center items-start pt-xl pb-xl px-margin-mobile md:px-margin-desktop">
      <div className="w-full max-w-3xl card-surface card-border rounded-lg shadow-none overflow-hidden flex flex-col">
      {/* Form Header */}
      <div className="px-lg py-md border-b card-border flex items-center justify-between">
      <div>
      <h1 className="font-headline-md text-headline-md text-on-surface">Edit Record</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit">Update operational data entry details.</p>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container rounded-DEFAULT p-unit" type="button">
      <span className="material-symbols-outlined" data-icon="close">close</span>
      </button>
      </div>
      {/* Form Body */}
      <form className="p-lg flex flex-col gap-lg">
      {/* Title Field */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="record-title">Title</label>
      <div className="input-focus rounded-DEFAULT flex items-center px-md py-sm input-surface transition-all duration-200">
      <input className="bg-transparent border-none outline-none w-full font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:ring-0 p-0" id="record-title" name="record-title" placeholder="Enter title" type="text" value="Quarterly Compliance Audit" />
      </div>
      </div>
      {/* Description Field */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="record-description">Description</label>
      <div className="input-focus rounded-DEFAULT flex items-start px-md py-sm input-surface transition-all duration-200">
      <textarea className="bg-transparent border-none outline-none w-full font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:ring-0 p-0 resize-none" id="record-description" name="record-description" placeholder="Provide detailed description..." rows={4}>Comprehensive review of Q3 compliance metrics across all operational units. Requires attention to recent policy updates.</textarea>
      </div>
      </div>
      {/* Grid for Status & Priority */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Status Field (with Validation Error) */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="record-status">Status</label>
      <div className="rounded-DEFAULT flex items-center px-md py-sm input-surface border-error focus-within:border-error focus-within:ring-2 focus-within:ring-error focus-within:ring-opacity-50 transition-all duration-200">
      <select className="bg-transparent border-none outline-none w-full font-body-md text-body-md text-on-surface focus:ring-0 p-0 appearance-none" id="record-status" name="record-status">
      <option className="bg-surface-variant text-on-surface" value="pending">Pending</option>
      <option className="bg-surface-variant text-on-surface" value="in_progress">In Progress</option>
      <option className="bg-surface-variant text-on-surface" value="completed">Completed</option>
      <option className="bg-surface-variant text-on-surface" selected={true} value="blocked">Blocked</option>
      </select>
      <span className="material-symbols-outlined text-on-surface-variant pointer-events-none ml-2" data-icon="expand_more">expand_more</span>
      </div>
      <p className="font-body-sm text-body-sm text-error mt-unit flex items-center gap-unit">
      <span className="material-symbols-outlined text-[16px]" data-icon="error">error</span>
                                  Status cannot be 'Blocked' without an active dependency link.
                              </p>
      </div>
      {/* Priority Field */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="record-priority">Priority</label>
      <div className="input-focus rounded-DEFAULT flex items-center px-md py-sm input-surface transition-all duration-200">
      <select className="bg-transparent border-none outline-none w-full font-body-md text-body-md text-on-surface focus:ring-0 p-0 appearance-none" id="record-priority" name="record-priority">
      <option className="bg-surface-variant text-on-surface" value="low">Low</option>
      <option className="bg-surface-variant text-on-surface" value="medium">Medium</option>
      <option className="bg-surface-variant text-on-surface" selected={true} value="high">High</option>
      <option className="bg-surface-variant text-on-surface" value="critical">Critical</option>
      </select>
      <span className="material-symbols-outlined text-on-surface-variant pointer-events-none ml-2" data-icon="expand_more">expand_more</span>
      </div>
      </div>
      </div>
      </form>
      {/* Form Footer (Actions) */}
      <div className="px-lg py-md border-t card-border flex items-center justify-end gap-md bg-surface-container-low">
      <button className="font-title-sm text-title-sm text-on-surface px-lg py-sm rounded-DEFAULT border card-border hover:bg-surface-container-highest transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A] focus:ring-primary-container" type="button">
                          Cancel
                      </button>
      <button className="font-title-sm text-title-sm text-white bg-[#2563EB] px-lg py-sm rounded-DEFAULT hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A] focus:ring-primary-container flex items-center gap-sm" type="button">
      <span className="material-symbols-outlined text-[18px]" data-icon="save">save</span>
                          Save Changes
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}

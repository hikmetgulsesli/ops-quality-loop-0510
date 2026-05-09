// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Create/Edit Form
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from '../contexts/AppContext';

interface CreateeditFormProps {}

export function CreateeditForm(props: CreateeditFormProps) {
  const { state, setScreen, createRecord, updateRecord } = useAppContext();

  const existing = state.selectedRecordId
    ? state.records.find(r => r.id === state.selectedRecordId)
    : null;

  const [title, setTitle] = useState(existing?.title ?? '');
  const [description, setDescription] = useState(existing?.description ?? '');
  const [status, setStatus] = useState(existing?.status ?? 'pending');
  const [priority, setPriority] = useState(existing?.priority ?? 'medium');
  const [operator, setOperator] = useState(existing?.operator ?? '');
  const [department, setDepartment] = useState(existing?.department ?? '');
  const [targetResolution, setTargetResolution] = useState(
    existing?.targetResolution ? existing.targetResolution.slice(0, 10) : ''
  );
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    if (!operator.trim()) {
      setError('Operator is required');
      return;
    }
    if (!department.trim()) {
      setError('Department is required');
      return;
    }
    if (!targetResolution) {
      setError('Target resolution date is required');
      return;
    }

    const payload = {
      title: title.trim(),
      description: description.trim(),
      status: status as any,
      priority: priority as any,
      operator: operator.trim(),
      department: department.trim(),
      targetResolution: new Date(targetResolution).toISOString(),
    };

    if (existing) {
      updateRecord(existing.id, payload);
    } else {
      createRecord(payload);
    }
    setScreen('dashboard');
  };

  return (
    <>
      {/* TopNavBar (Nav Shell Suppressed due to Transactional/Form Page intent - However, providing a simplified header for context as per typical CRUD forms returning to a main state, but strictly adhering to rules, suppressing global nav for task focus. Instead using a localized header.) */}
      {/* Main Content Canvas */}
      <main className="flex-1 flex justify-center items-start pt-xl pb-xl px-margin-mobile md:px-margin-desktop min-h-screen bg-background">
        <div className="w-full max-w-3xl card-surface card-border rounded-lg shadow-none overflow-hidden flex flex-col">
          {/* Form Header */}
          <div className="px-lg py-md border-b card-border flex items-center justify-between">
            <div>
              <h1 className="font-headline-md text-headline-md text-on-surface">{existing ? 'Edit Record' : 'Create Record'}</h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit">{existing ? 'Update operational data entry details.' : 'Create a new operational quality record.'}</p>
            </div>
            <button
              onClick={() => setScreen('dashboard')}
              className="text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container rounded-DEFAULT p-unit cursor-pointer"
              type="button"
              aria-label="Close form"
            >
              <span className="material-symbols-outlined" data-icon="close">close</span>
            </button>
          </div>
          {/* Form Body */}
          <form className="p-lg flex flex-col gap-lg" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-error-container text-on-error-container p-3 rounded-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">error</span>
                <span className="font-body-sm text-body-sm">{error}</span>
              </div>
            )}
            {/* Title Field */}
            <div className="flex flex-col gap-sm">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="record-title">Title</label>
              <div className="input-focus rounded-DEFAULT flex items-center px-md py-sm input-surface transition-all duration-200">
                <input
                  className="bg-transparent border-none outline-none w-full font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:ring-0 p-0"
                  id="record-title"
                  name="record-title"
                  placeholder="Enter title"
                  type="text"
                  value={title}
                  onChange={(e) => { setTitle(e.target.value); setError(null); }}
                />
              </div>
            </div>
            {/* Description Field */}
            <div className="flex flex-col gap-sm">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="record-description">Description</label>
              <div className="input-focus rounded-DEFAULT flex items-start px-md py-sm input-surface transition-all duration-200">
                <textarea
                  className="bg-transparent border-none outline-none w-full font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:ring-0 p-0 resize-none"
                  id="record-description"
                  name="record-description"
                  placeholder="Provide detailed description..."
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            {/* Operator & Department */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="flex flex-col gap-sm">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="record-operator">Operator</label>
                <div className="input-focus rounded-DEFAULT flex items-center px-md py-sm input-surface transition-all duration-200">
                  <input
                    className="bg-transparent border-none outline-none w-full font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:ring-0 p-0"
                    id="record-operator"
                    name="record-operator"
                    placeholder="Enter operator name"
                    type="text"
                    value={operator}
                    onChange={(e) => { setOperator(e.target.value); setError(null); }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-sm">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="record-department">Department</label>
                <div className="input-focus rounded-DEFAULT flex items-center px-md py-sm input-surface transition-all duration-200">
                  <input
                    className="bg-transparent border-none outline-none w-full font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:ring-0 p-0"
                    id="record-department"
                    name="record-department"
                    placeholder="Enter department"
                    type="text"
                    value={department}
                    onChange={(e) => { setDepartment(e.target.value); setError(null); }}
                  />
                </div>
              </div>
            </div>
            {/* Grid for Status & Priority */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {/* Status Field */}
              <div className="flex flex-col gap-sm">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="record-status">Status</label>
                <div className="input-focus rounded-DEFAULT flex items-center px-md py-sm input-surface transition-all duration-200">
                  <select
                    className="bg-transparent border-none outline-none w-full font-body-md text-body-md text-on-surface focus:ring-0 p-0 appearance-none"
                    id="record-status"
                    name="record-status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                  >
                    <option className="bg-surface-variant text-on-surface" value="pending">Pending</option>
                    <option className="bg-surface-variant text-on-surface" value="in_progress">In Progress</option>
                    <option className="bg-surface-variant text-on-surface" value="completed">Completed</option>
                    <option className="bg-surface-variant text-on-surface" value="blocked">Blocked</option>
                    <option className="bg-surface-variant text-on-surface" value="failed">Failed</option>
                  </select>
                  <span className="material-symbols-outlined text-on-surface-variant pointer-events-none ml-2" data-icon="expand_more">expand_more</span>
                </div>
              </div>
              {/* Priority Field */}
              <div className="flex flex-col gap-sm">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="record-priority">Priority</label>
                <div className="input-focus rounded-DEFAULT flex items-center px-md py-sm input-surface transition-all duration-200">
                  <select
                    className="bg-transparent border-none outline-none w-full font-body-md text-body-md text-on-surface focus:ring-0 p-0 appearance-none"
                    id="record-priority"
                    name="record-priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as any)}
                  >
                    <option className="bg-surface-variant text-on-surface" value="low">Low</option>
                    <option className="bg-surface-variant text-on-surface" value="medium">Medium</option>
                    <option className="bg-surface-variant text-on-surface" value="high">High</option>
                    <option className="bg-surface-variant text-on-surface" value="critical">Critical</option>
                  </select>
                  <span className="material-symbols-outlined text-on-surface-variant pointer-events-none ml-2" data-icon="expand_more">expand_more</span>
                </div>
              </div>
            </div>
            {/* Target Resolution */}
            <div className="flex flex-col gap-sm">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="record-target">Target Resolution Date</label>
              <div className="input-focus rounded-DEFAULT flex items-center px-md py-sm input-surface transition-all duration-200">
                <input
                  className="bg-transparent border-none outline-none w-full font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:ring-0 p-0"
                  id="record-target"
                  name="record-target"
                  type="date"
                  value={targetResolution}
                  onChange={(e) => { setTargetResolution(e.target.value); setError(null); }}
                />
              </div>
            </div>
          </form>
          {/* Form Footer (Actions) */}
          <div className="px-lg py-md border-t card-border flex items-center justify-end gap-md bg-surface-container-low">
            <button
              onClick={() => setScreen('dashboard')}
              className="font-title-sm text-title-sm text-on-surface px-lg py-sm rounded-DEFAULT border card-border hover:bg-surface-container-highest transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A] focus:ring-primary-container cursor-pointer"
              type="button"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="font-title-sm text-title-sm text-white bg-[#2563EB] px-lg py-sm rounded-DEFAULT hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A] focus:ring-primary-container flex items-center gap-sm cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="save">save</span>
              {existing ? 'Save Changes' : 'Create Record'}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

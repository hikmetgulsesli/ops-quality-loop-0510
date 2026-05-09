// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Detail
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useAppContext } from '../contexts/AppContext';

interface RecordDetailProps {}

export function RecordDetail(props: RecordDetailProps) {
  const { state, setScreen, selectRecord, updateRecord, deleteRecord } = useAppContext();

  const record = state.records.find(r => r.id === state.selectedRecordId);

  if (!record) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-on-surface-variant font-body-md mb-4">Record not found</p>
          <button
            onClick={() => setScreen('dashboard')}
            className="px-4 py-2 bg-primary-container text-on-primary-container rounded-lg cursor-pointer"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const statusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-tertiary';
      case 'in_progress': return 'bg-secondary';
      case 'failed': return 'bg-error';
      case 'blocked': return 'bg-error/50';
      default: return 'bg-on-surface-variant';
    }
  };

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
      <span className="material-symbols-outlined">{icon}</span>
      <span className="font-label-caps text-label-caps">{label}</span>
    </button>
  );

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 right-0 left-0 md:left-[240px] h-16 border-b border-outline-variant bg-surface flex items-center justify-between px-margin-desktop w-full md:w-[calc(100%-240px)] z-50">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md font-bold text-on-surface">OpsLoop</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <button className="text-on-surface-variant hover:bg-surface-container-high cursor-pointer transition-colors p-2 rounded-full focus-within:ring-2 focus-within:ring-primary-container" aria-label="Notifications">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:bg-surface-container-high cursor-pointer transition-colors p-2 rounded-full focus-within:ring-2 focus-within:ring-primary-container" aria-label="Help">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
          </div>
          <img alt="Administrator Profile" className="w-8 h-8 rounded-full object-cover border border-outline-variant cursor-pointer" onClick={() => setScreen('profile')} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPUx-yp_sWsmfSCEvNz3HPE4Lx5YtDYwtRJrvoxR9grD8wNmUigb2axYq9VqpUA5OQLDwa1q69Jww8DTLEqw6Bj_OVrXYN9F9FfiroMTnKttIusQaSgRDMbyCHWeinoo3tW5KfFnRFKRikFftMuW3od-_7Yi8pqEPcpdczukIj15xkbeK4rHrxuajC8cWj4kk3gNdviuF8hXTAfrU7EBc2xxOmPjqFUZLeRxfvsecoP38hYbfLuy40nQefcgaFO5U9amKFMm6Q0cE" />
        </div>
      </nav>
      {/* Side Navigation Bar (Desktop) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant bg-surface-container flex-col py-xl z-40">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-container rounded flex items-center justify-center text-on-primary-container font-bold">
            <span className="material-symbols-outlined text-[20px]">hub</span>
          </div>
          <div>
            <h1 className="font-title-sm text-title-sm font-bold text-primary tracking-tight">OpsLoop</h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">Quality Management</p>
          </div>
        </div>
        <nav className="flex-1 px-4 flex flex-col gap-2">
          {navLink('dashboard', 'Dashboard', 'dashboard')}
          {navLink('operations', 'Operations', 'assignment_add', state.screen === 'record-detail')}
          {navLink('insights', 'Insights', 'analytics')}
          {navLink('settings', 'Settings', 'settings')}
          {navLink('profile', 'Profile', 'account_circle')}
        </nav>
      </aside>
      {/* Main Content Area */}
      <main className="pt-16 md:pl-[240px] min-h-screen">
        <div className="max-w-[1200px] mx-auto p-margin-mobile md:p-margin-desktop">
          {/* Record Header & Actions */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-surface-container-highest">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={() => selectRecord(null)}
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  <span className="font-label-caps text-label-caps">Back to Operations</span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <h2 className="font-display-lg text-display-lg">{record.title}</h2>
                <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full border border-outline-variant">
                  <div className={`w-2 h-2 rounded-full ${statusColor(record.status)}`}></div>
                  <span className="font-body-sm text-body-sm text-on-surface">{record.status.replace('_', ' ')}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container-highest transition-colors font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">download</span>
                Export
              </button>
              <button
                onClick={() => setScreen('create-edit')}
                className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container-highest transition-colors font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">edit</span>
                Edit
              </button>
              <button
                onClick={() => {
                  updateRecord(record.id, { status: 'completed' });
                  setScreen('operations');
                }}
                className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg hover:opacity-90 transition-opacity font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background cursor-pointer"
              >
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
                      {record.operator.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    <span className="font-body-md text-body-md">{record.operator}</span>
                  </div>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Department</p>
                  <p className="font-body-md text-body-md">{record.department}</p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Created Date</p>
                  <p className="font-code-sm text-code-sm">{new Date(record.createdAt).toLocaleString()}</p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Target Resolution</p>
                  <p className="font-code-sm text-code-sm text-tertiary">{new Date(record.targetResolution).toLocaleString()}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Description</p>
                  <p className="font-body-sm text-body-sm text-on-surface leading-relaxed p-4 bg-surface-container-low rounded-lg border border-surface-container-highest">
                    {record.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Status Timeline (Spans 4 columns on desktop) */}
            <div className="md:col-span-4 bg-surface border border-surface-container-highest rounded-xl p-6">
              <h3 className="font-title-sm text-title-sm border-b border-surface-container-highest pb-4 mb-6">Activity Timeline</h3>
              <div className="relative border-l border-surface-container-highest ml-3 space-y-6">
                <div className="relative pl-6">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary-container ring-4 ring-surface"></div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">{new Date(record.updatedAt).toLocaleDateString()}</p>
                  <p className="font-body-sm text-body-sm">Status updated to {record.status.replace('_', ' ')}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">By {record.operator}</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-surface-variant border border-outline-variant ring-4 ring-surface"></div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">{new Date(record.createdAt).toLocaleDateString()}</p>
                  <p className="font-body-sm text-body-sm">Record Created</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">By {record.operator}</p>
                </div>
              </div>
            </div>
            {/* Related Data Card */}
            <div className="md:col-span-12 bg-surface border border-surface-container-highest rounded-xl p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-container-highest">
                <h3 className="font-title-sm text-title-sm">Record Details</h3>
                <button
                  onClick={() => deleteRecord(record.id)}
                  className="text-error hover:text-error-container transition-colors font-body-sm text-body-sm flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">delete</span>
                  Delete Record
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-surface-container-low rounded-lg p-4 border border-surface-container-highest">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Priority</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full font-label-caps text-label-caps ${
                    record.priority === 'critical' ? 'bg-error-container text-on-error-container' :
                    record.priority === 'high' ? 'bg-primary-container text-on-primary-container' :
                    record.priority === 'medium' ? 'bg-secondary-container text-on-secondary-container' :
                    'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    {record.priority}
                  </span>
                </div>
                <div className="bg-surface-container-low rounded-lg p-4 border border-surface-container-highest">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Record ID</p>
                  <p className="font-code-sm text-code-sm text-primary">{record.id}</p>
                </div>
                <div className="bg-surface-container-low rounded-lg p-4 border border-surface-container-highest">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Last Updated</p>
                  <p className="font-code-sm text-code-sm">{new Date(record.updatedAt).toLocaleDateString()}</p>
                </div>
                <div className="bg-surface-container-low rounded-lg p-4 border border-surface-container-highest">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${statusColor(record.status)}`}></div>
                    <span className="font-body-sm text-body-sm">{record.status.replace('_', ' ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

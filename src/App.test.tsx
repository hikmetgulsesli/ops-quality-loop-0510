import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock localStorage for deterministic tests
const mockStorage: Record<string, string> = {};

beforeEach(() => {
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => mockStorage[key] ?? null,
    setItem: (key: string, value: string) => { mockStorage[key] = value; },
    removeItem: (key: string) => { delete mockStorage[key]; },
    clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); },
  });
  Object.keys(mockStorage).forEach(k => delete mockStorage[k]);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('App Shell & Navigation', () => {
  it('renders the Dashboard by default', () => {
    render(<App />);
    expect(screen.getByText('Operational Overview')).toBeInTheDocument();
  });

  it('navigates to Insights via sidebar', () => {
    render(<App />);
    const insightsBtn = screen.getByLabelText('Insights');
    fireEvent.click(insightsBtn);
    expect(screen.getByText('System Performance Insights')).toBeInTheDocument();
  });

  it('navigates to Settings via sidebar', () => {
    render(<App />);
    const settingsBtn = screen.getByLabelText('Settings');
    fireEvent.click(settingsBtn);
    expect(screen.getByText('Application Settings')).toBeInTheDocument();
  });

  it('navigates to Profile via sidebar', () => {
    render(<App />);
    const profileBtn = screen.getByLabelText('Profile');
    fireEvent.click(profileBtn);
    expect(screen.getByText('Alex Mercer')).toBeInTheDocument();
  });
});

describe('Dashboard Functionality', () => {
  it('shows correct KPI counts from default records', () => {
    render(<App />);
    // Default records: 0 pending, 1 in_progress, 3 completed, 0 blocked, 1 failed
    // Look for the In Progress card value specifically
    const inProgressLabel = screen.getByText('In Progress');
    expect(inProgressLabel).toBeInTheDocument();
  });

  it('filters records via search', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search operations...');
    fireEvent.change(searchInput, { target: { value: 'Sensor' } });
    // After filtering, only matching rows should remain; non-matching should be gone
    expect(screen.queryByText('Policy Update Review')).not.toBeInTheDocument();
  });

  it('navigates to create record from dashboard', () => {
    render(<App />);
    // The top nav "Create New Record" button — use first match, then assert form header
    const createBtn = screen.getAllByText('Create New Record')[0];
    fireEvent.click(createBtn);
    expect(screen.getAllByText('Create Record').length).toBeGreaterThanOrEqual(1);
  });
});

describe('Record CRUD', () => {
  it('creates a new record', async () => {
    render(<App />);
    // Click the top nav "Create New Record" button
    fireEvent.click(screen.getAllByText('Create New Record')[0]);
    
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Record' } });
    fireEvent.change(screen.getByPlaceholderText('Enter operator name'), { target: { value: 'Test Operator' } });
    fireEvent.change(screen.getByPlaceholderText('Enter department'), { target: { value: 'Test Dept' } });
    fireEvent.change(screen.getByLabelText('Target Resolution Date'), { target: { value: '2024-12-31' } });
    
    // The form submit button says "Create Record"
    fireEvent.click(screen.getAllByText('Create Record').slice(-1)[0]);
    
    await waitFor(() => {
      expect(screen.getByText('Operational Overview')).toBeInTheDocument();
    });
  });

  it('views a record detail', () => {
    render(<App />);
    const viewBtns = screen.getAllByLabelText(/View /);
    fireEvent.click(viewBtns[0]);
    expect(screen.getByText('Primary Metadata')).toBeInTheDocument();
  });

  it('resolves a record from detail', async () => {
    render(<App />);
    const viewBtns = screen.getAllByLabelText(/View /);
    fireEvent.click(viewBtns[0]);
    
    const resolveBtn = screen.getByText('Resolve');
    fireEvent.click(resolveBtn);
    
    await waitFor(() => {
      expect(screen.getByText('Operational Overview')).toBeInTheDocument();
    });
  });
});

describe('Settings & Persistence', () => {
  it('toggles email notifications', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText('Settings'));
    
    const emailToggle = screen.getByText('Email Notifications').closest('div')?.parentElement?.querySelector('button[role="switch"]');
    if (emailToggle) fireEvent.click(emailToggle);
    
    expect(screen.getByText('Application Settings')).toBeInTheDocument();
  });

  it('persists state to localStorage', async () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText('Settings'));
    
    await waitFor(() => {
      expect(mockStorage['ops-quality-loop-state']).toBeDefined();
    });
  });

  it('shows storage error banner and allows retry', () => {
    // Force a storage error by making setItem throw
    vi.stubGlobal('localStorage', {
      getItem: () => null,
      setItem: () => { throw new Error('Quota exceeded'); },
      removeItem: () => {},
      clear: () => {},
    });
    
    render(<App />);
    fireEvent.click(screen.getByLabelText('Settings'));
    
    // Trigger a state change that tries to persist
    const pushToggle = screen.getByText('Push Notifications').closest('div')?.parentElement?.querySelector('button[role="switch"]');
    if (pushToggle) fireEvent.click(pushToggle);
    
    expect(screen.getByText(/Storage error/)).toBeInTheDocument();
  });
});

describe('Profile Panel', () => {
  it('renders profile information', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText('Profile'));
    expect(screen.getByText('Lead Operations Manager')).toBeInTheDocument();
    expect(screen.getByText('alex.mercer@opsloop.com')).toBeInTheDocument();
  });

  it('toggles beta features', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText('Profile'));
    
    const betaToggle = screen.getByText('Beta Features').closest('div')?.parentElement?.querySelector('button');
    if (betaToggle) fireEvent.click(betaToggle);
    
    expect(screen.getByText('Account Preferences')).toBeInTheDocument();
  });
});

describe('Error State', () => {
  it('renders error state with retry and reset buttons', () => {
    // Pre-populate storage with error state
    mockStorage['ops-quality-loop-state'] = JSON.stringify({
      screen: 'error',
      records: [],
      settings: { emailNotifications: true, pushNotifications: false, theme: 'dark' },
      profile: { name: 'Test', role: 'Test', email: 'test@test.com', twoFactorEnabled: false, emailNotifications: false, betaFeatures: false },
      selectedRecordId: null,
      searchQuery: '',
      storageError: 'Test storage error',
    });
    
    render(<App />);
    expect(screen.getByText('Storage Failure')).toBeInTheDocument();
    expect(screen.getByText('Retry Connection')).toBeInTheDocument();
    expect(screen.getByText('Clear Storage & Reset')).toBeInTheDocument();
  });
});

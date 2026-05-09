import { useState, useCallback } from 'react';
import { AppState, AppRecord, ScreenName, AppSettings, AppProfile } from '../types/domain';
import { saveAppState, loadAppState, clearAllStorage } from '../utils/storage';

const DEFAULT_RECORDS: AppRecord[] = [
  {
    id: 'REQ-8023',
    title: 'Quarterly Compliance Audit',
    description: 'Comprehensive review of Q3 compliance metrics across all operational units.',
    status: 'in_progress',
    priority: 'high',
    operator: 'System_Automated',
    department: 'Logistics & Supply Chain',
    createdAt: '2024-05-10T08:30:00Z',
    targetResolution: '2024-05-17T17:00:00Z',
    updatedAt: '2024-05-10T08:30:00Z',
  },
  {
    id: 'REQ-8022',
    title: 'Sensor Recalibration Batch 409-B',
    description: 'Routine quality check flagged inconsistencies in batch 409-B.',
    status: 'completed',
    priority: 'medium',
    operator: 'J. Smith',
    department: 'Manufacturing',
    createdAt: '2024-05-09T09:15:00Z',
    targetResolution: '2024-05-16T17:00:00Z',
    updatedAt: '2024-05-09T10:00:00Z',
  },
  {
    id: 'REQ-8021',
    title: 'Thermal Sensor Line 3 Inspection',
    description: 'Temperature deviation detected during phase 2 of processing.',
    status: 'failed',
    priority: 'critical',
    operator: 'A. Chen',
    department: 'Quality Assurance',
    createdAt: '2024-05-08T11:00:00Z',
    targetResolution: '2024-05-15T17:00:00Z',
    updatedAt: '2024-05-08T14:20:00Z',
  },
  {
    id: 'REQ-8020',
    title: 'Inventory Hold Confirmation',
    description: 'Automated hold placed on affected inventory pending manual inspection.',
    status: 'completed',
    priority: 'low',
    operator: 'System_Automated',
    department: 'Logistics & Supply Chain',
    createdAt: '2024-05-07T13:45:00Z',
    targetResolution: '2024-05-14T17:00:00Z',
    updatedAt: '2024-05-07T13:45:00Z',
  },
  {
    id: 'REQ-8019',
    title: 'Policy Update Review',
    description: 'Review of recent policy updates affecting operational procedures.',
    status: 'completed',
    priority: 'medium',
    operator: 'M. Davis',
    department: 'Compliance',
    createdAt: '2024-05-06T16:20:00Z',
    targetResolution: '2024-05-13T17:00:00Z',
    updatedAt: '2024-05-06T16:20:00Z',
  },
];

const DEFAULT_SETTINGS: AppSettings = {
  emailNotifications: true,
  pushNotifications: false,
  theme: 'dark',
};

const DEFAULT_PROFILE: AppProfile = {
  name: 'Alex Mercer',
  role: 'Lead Operations Manager',
  email: 'alex.mercer@opsloop.com',
  twoFactorEnabled: true,
  emailNotifications: false,
  betaFeatures: true,
};

const DEFAULT_STATE: AppState = {
  screen: 'dashboard',
  records: DEFAULT_RECORDS,
  settings: DEFAULT_SETTINGS,
  profile: DEFAULT_PROFILE,
  selectedRecordId: null,
  searchQuery: '',
  storageError: null,
};

export function useAppState() {
  const [state, setState] = useState<AppState>(() => {
    const loaded = loadAppState<AppState>();
    if (loaded.data) {
      return { ...DEFAULT_STATE, ...loaded.data, records: loaded.data.records ?? DEFAULT_RECORDS };
    }
    return DEFAULT_STATE;
  });

  const persist = useCallback((next: AppState) => {
    const result = saveAppState(next);
    setState({ ...next, storageError: result.error ?? null });
  }, []);

  const setScreen = useCallback(
    (screen: ScreenName) => {
      setState((prev) => {
        const next = { ...prev, screen };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const setSearchQuery = useCallback(
    (searchQuery: string) => {
      setState((prev) => {
        const next = { ...prev, searchQuery };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const selectRecord = useCallback(
    (id: string | null) => {
      setState((prev) => {
        const next = { ...prev, selectedRecordId: id, screen: id ? 'record-detail' : 'operations' };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const createRecord = useCallback(
    (record: Omit<AppRecord, 'id' | 'createdAt' | 'updatedAt'>) => {
      setState((prev) => {
        const newRecord: AppRecord = {
          ...record,
          id: `REQ-${8000 + prev.records.length + 1}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        const next = { ...prev, records: [newRecord, ...prev.records], screen: 'operations' as ScreenName };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const updateRecord = useCallback(
    (id: string, updates: Partial<AppRecord>) => {
      setState((prev) => {
        const nextRecords = prev.records.map((r) =>
          r.id === id ? { ...r, ...updates, updatedAt: new Date().toISOString() } : r
        );
        const next = { ...prev, records: nextRecords, screen: 'operations' as ScreenName };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const deleteRecord = useCallback(
    (id: string) => {
      setState((prev) => {
        const next = {
          ...prev,
          records: prev.records.filter((r) => r.id !== id),
          selectedRecordId: prev.selectedRecordId === id ? null : prev.selectedRecordId,
          screen: 'operations' as ScreenName,
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const updateSettings = useCallback(
    (settings: Partial<AppSettings>) => {
      setState((prev) => {
        const next = { ...prev, settings: { ...prev.settings, ...settings } };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const updateProfile = useCallback(
    (profile: Partial<AppProfile>) => {
      setState((prev) => {
        const next = { ...prev, profile: { ...prev.profile, ...profile } };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const clearStorageError = useCallback(() => {
    setState((prev) => ({ ...prev, storageError: null }));
  }, []);

  const retryStorage = useCallback(() => {
    const result = saveAppState(state);
    setState((prev) => ({ ...prev, storageError: result.error ?? null }));
  }, [state]);

  const resetStorage = useCallback(() => {
    const result = clearAllStorage();
    const next = { ...DEFAULT_STATE, screen: 'error' as ScreenName, storageError: result.error ?? null };
    setState(next);
  }, []);

  return {
    state,
    setScreen,
    setSearchQuery,
    selectRecord,
    createRecord,
    updateRecord,
    deleteRecord,
    updateSettings,
    updateProfile,
    clearStorageError,
    retryStorage,
    resetStorage,
  };
}

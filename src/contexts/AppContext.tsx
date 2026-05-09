import { createContext, useContext, ReactNode } from 'react';
import { AppState, ScreenName, AppRecord, AppSettings, AppProfile } from '../types/domain';

interface AppContextValue {
  state: AppState;
  setScreen: (screen: ScreenName) => void;
  setSearchQuery: (query: string) => void;
  selectRecord: (id: string | null) => void;
  createRecord: (record: Omit<AppRecord, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateRecord: (id: string, updates: Partial<AppRecord>) => void;
  deleteRecord: (id: string) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  updateProfile: (profile: Partial<AppProfile>) => void;
  clearStorageError: () => void;
  retryStorage: () => void;
  resetStorage: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children, value }: { children: ReactNode; value: AppContextValue }) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return ctx;
}

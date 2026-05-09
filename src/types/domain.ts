export interface AppRecord {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'blocked' | 'failed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  operator: string;
  department: string;
  createdAt: string;
  targetResolution: string;
  updatedAt: string;
}

export interface AppSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  theme: 'light' | 'dark' | 'system';
}

export interface AppProfile {
  name: string;
  role: string;
  email: string;
  twoFactorEnabled: boolean;
  emailNotifications: boolean;
  betaFeatures: boolean;
}

export type ScreenName =
  | 'dashboard'
  | 'operations'
  | 'insights'
  | 'settings'
  | 'profile'
  | 'record-detail'
  | 'create-edit'
  | 'empty'
  | 'error';

export interface AppState {
  screen: ScreenName;
  records: AppRecord[];
  settings: AppSettings;
  profile: AppProfile;
  selectedRecordId: string | null;
  searchQuery: string;
  storageError: string | null;
}

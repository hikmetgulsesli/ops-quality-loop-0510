import { useAppState } from './hooks/useAppState';
import { AppProvider } from './contexts/AppContext';
import { Dashboard } from './screens/Dashboard';
import { InsightsDashboard } from './screens/InsightsDashboard';
import { RecordDetail } from './screens/RecordDetail';
import { CreateeditForm } from './screens/CreateeditForm';
import { Settings } from './screens/Settings';
import { ProfilePanel } from './screens/ProfilePanel';
import { EmptyState } from './screens/EmptyState';
import { ErrorState } from './screens/ErrorState';
import type { AppContextValue } from './contexts/AppContext';

export default function App() {
  const {
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
  } = useAppState();

  const ctx: AppContextValue = {
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

  const renderScreen = () => {
    switch (state.screen) {
      case 'dashboard':
        return <Dashboard />;
      case 'insights':
        return <InsightsDashboard />;
      case 'record-detail':
        return <RecordDetail />;
      case 'create-edit':
        return <CreateeditForm />;
      case 'settings':
        return <Settings />;
      case 'profile':
        return <ProfilePanel />;
      case 'empty':
        return <EmptyState />;
      case 'error':
        return <ErrorState />;
      case 'operations':
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppProvider value={ctx}>
      <div data-setfarm-root="app" className="min-h-screen bg-background text-on-surface">
        {renderScreen()}
      </div>
    </AppProvider>
  );
}

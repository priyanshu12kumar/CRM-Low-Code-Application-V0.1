
import React from 'react';
import { SystemStateProvider, useSystemState } from './contexts/SystemStateContext';
import { FormProvider } from './contexts/FormContext';
import LoginPage from './pages/LoginPage';
import BuilderPage from './pages/BuilderPage';
import PreviewPage from './pages/PreviewPage';
import BackendManager from './pages/BackendManager';

const AppRouter: React.FC = () => {
  const { state } = useSystemState();
  switch (state) {
    case 'login': return <LoginPage />;
    case 'form': return <BuilderPage />;
    case 'preview': return <PreviewPage />;
    case 'dashboard': return <BackendManager />;
    default: return <LoginPage />;
  }
};

const App: React.FC = () => {
  return (
    <SystemStateProvider>
      <FormProvider>
        <AppRouter />
      </FormProvider>
    </SystemStateProvider>
  );
};

export default App;

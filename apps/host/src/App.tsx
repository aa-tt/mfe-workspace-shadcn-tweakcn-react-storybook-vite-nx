import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Button } from '@mfe-workspace/shared-ui';
import { lazy, Suspense } from 'react';

// Lazy load the remote MFEs
const AuthApp = lazy(() => import('auth/App'));
const DashboardApp = lazy(() => import('dashboard/App'));
const SettingsApp = lazy(() => import('settings/App'));

function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">MFE Platform</h1>
            <div className="flex space-x-2">
              <Link to="/">
                <Button variant={isActive('/') ? 'default' : 'ghost'}>
                  Home
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant={isActive('/auth') ? 'default' : 'ghost'}>
                  Auth
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant={isActive('/dashboard') ? 'default' : 'ghost'}>
                  Dashboard
                </Button>
              </Link>
              <Link to="/settings">
                <Button variant={isActive('/settings') ? 'default' : 'ghost'}>
                  Settings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to the Micro Frontend Platform
        </h1>
        <p className="text-xl text-muted-foreground">
          This is a Module Federation-based architecture with Nx monorepo
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🔐 Authentication</h3>
            <p className="text-muted-foreground">
              Standalone auth micro-frontend with login/register flows
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📊 Dashboard</h3>
            <p className="text-muted-foreground">
              Data visualization and analytics micro-frontend
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">⚙️ Settings</h3>
            <p className="text-muted-foreground">
              User preferences and configuration micro-frontend
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Suspense fallback={
          <div className="container mx-auto px-4 py-12 text-center">
            <div className="text-lg">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/*" element={<AuthApp />} />
            <Route path="/dashboard/*" element={<DashboardApp />} />
            <Route path="/settings/*" element={<SettingsApp />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { MatchmakingCard } from './components/MatchmakingCard';
import { Sidebar } from './components/Sidebar';
import { ChatList } from './components/ChatList';
import { ChatWindow } from './components/ChatWindow';
import { ProfileView } from './components/ProfileView';
import { SettingsView } from './components/SettingsView';
import { AudioSettingsView } from './components/AudioSettingsView';
import { SecurityView } from './components/SecurityView';
import { LoginView } from './components/LoginView';
import { SignupView } from './components/SignupView';
import { useState } from 'react';

type View = 'home' | 'discover' | 'messages' | 'profile' | 'settings' | 'audio' | 'security';
type AuthView = 'login' | 'signup';
type AuthUser = {
  id: number;
  name: string;
  email: string;
};

export default function App() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<View>('home');
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [authView, setAuthView] = useState<AuthView>('login');

  const handleSettingsNavigate = (subView: 'audio' | 'security') => {
    setCurrentView(subView);
  };

  const handleBackToSettings = () => {
    setCurrentView('settings');
  };

  const handleLogin = (user: AuthUser) => {
    setCurrentUser(user);
  };

  const handleSignup = (user: AuthUser) => {
    setCurrentUser(user);
  };

  // Show auth views if not authenticated
  if (!currentUser) {
    return (
      <div className="flex min-h-screen bg-[#0a0a0a]">
        <div className="w-full bg-[#1a1a1a] flex flex-col">
          {/* App name at top */}
          <div className="h-20 flex items-center justify-center border-b border-[#2a2a2a]">
            <h1 className="tracking-wide text-gray-200">duo</h1>
          </div>

          {/* Auth content */}
          {authView === 'login' && (
            <LoginView
              onLogin={handleLogin}
              onSwitchToSignup={() => setAuthView('signup')}
            />
          )}

          {authView === 'signup' && (
            <SignupView
              onSignup={handleSignup}
              onSwitchToLogin={() => setAuthView('login')}
            />
          )}
        </div>
      </div>
    );
  }

  // Main app views (after authentication)
  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Sidebar navigation */}
      <Sidebar currentView={currentView} onNavigate={(view) => setCurrentView(view as View)} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {(currentView === 'home' || currentView === 'discover') && (
          <div className="flex-1 flex items-center justify-center p-12 bg-[#1a1a1a]">
            <MatchmakingCard currentUserId={currentUser.id} />
          </div>
        )}

        {currentView === 'messages' && (
          <div className="flex-1 flex overflow-hidden bg-[#1a1a1a]">
            <div className="w-96 border-r border-[#2a2a2a] flex flex-col">
              <div className="h-16 border-b border-[#2a2a2a] flex items-center px-6 bg-[#151515]">
                <h2 className="text-gray-200">Messages</h2>
              </div>
              <ChatList onSelectChat={setSelectedChat} selectedChat={selectedChat} />
            </div>
            <div className="flex-1">
              <ChatWindow selectedChat={selectedChat} />
            </div>
          </div>
        )}

        {currentView === 'profile' && <ProfileView />}

        {currentView === 'settings' && <SettingsView onNavigate={handleSettingsNavigate} />}

        {currentView === 'audio' && <AudioSettingsView onBack={handleBackToSettings} />}

        {currentView === 'security' && <SecurityView onBack={handleBackToSettings} />}
      </div>
    </div>
  );
}

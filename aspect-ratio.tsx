import { Home, Users, MessageCircle, User, Settings } from 'lucide-react';

interface TaskBarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function TaskBar({ currentView, onNavigate }: TaskBarProps) {
  return (
    <div className="h-16 border-t-2 border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-around px-4">
      <button
        onClick={() => onNavigate('home')}
        className={`flex flex-col items-center gap-1 p-2 hover:bg-[#252525] rounded-lg transition-colors ${currentView === 'home' ? 'bg-[#252525]' : ''}`}
      >
        <Home className={`h-6 w-6 ${currentView === 'home' ? 'text-gray-200' : 'text-gray-400'}`} />
        <span className={`text-xs ${currentView === 'home' ? 'text-gray-200' : 'text-gray-400'}`}>Home</span>
      </button>

      <button className="flex flex-col items-center gap-1 p-2 hover:bg-[#252525] rounded-lg transition-colors">
        <Users className="h-6 w-6 text-gray-400" />
        <span className="text-xs text-gray-400">Matches</span>
      </button>

      <button className="flex flex-col items-center gap-1 p-2 hover:bg-[#252525] rounded-lg transition-colors">
        <MessageCircle className="h-6 w-6 text-gray-400" />
        <span className="text-xs text-gray-400">Chat</span>
      </button>

      <button
        onClick={() => onNavigate('profile')}
        className={`flex flex-col items-center gap-1 p-2 hover:bg-[#252525] rounded-lg transition-colors ${currentView === 'profile' ? 'bg-[#252525]' : ''}`}
      >
        <User className={`h-6 w-6 ${currentView === 'profile' ? 'text-gray-200' : 'text-gray-400'}`} />
        <span className={`text-xs ${currentView === 'profile' ? 'text-gray-200' : 'text-gray-400'}`}>Profile</span>
      </button>

      <button
        onClick={() => onNavigate('settings')}
        className={`flex flex-col items-center gap-1 p-2 hover:bg-[#252525] rounded-lg transition-colors ${currentView === 'settings' ? 'bg-[#252525]' : ''}`}
      >
        <Settings className={`h-6 w-6 ${currentView === 'settings' ? 'text-gray-200' : 'text-gray-400'}`} />
        <span className={`text-xs ${currentView === 'settings' ? 'text-gray-200' : 'text-gray-400'}`}>Settings</span>
      </button>
    </div>
  );
}
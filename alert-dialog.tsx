import { MessageCircle, User, Settings, Compass } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const navItems = [
    { id: 'home', label: 'Discover', icon: Compass },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="w-64 bg-[#151515] border-r border-[#2a2a2a] flex flex-col">
      {/* App logo/name */}
      <div className="h-20 flex items-center px-6 border-b border-[#2a2a2a]">
        <h1 className="tracking-wide text-gray-200">duo</h1>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 px-3 py-6">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#2a2a2a] text-gray-200'
                    : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-300'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Settings at bottom */}
      <div className="px-3 pb-6 border-t border-[#2a2a2a] pt-6">
        <button
          onClick={() => onNavigate('settings')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            currentView === 'settings' || currentView === 'audio' || currentView === 'security'
              ? 'bg-[#2a2a2a] text-gray-200'
              : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-300'
          }`}
        >
          <Settings className="w-5 h-5" />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </div>
  );
}

import { ChevronRight, Volume2, Shield, Bell, Eye, Globe, HelpCircle } from 'lucide-react';

interface SettingsViewProps {
  onNavigate: (view: 'audio' | 'security') => void;
}

export function SettingsView({ onNavigate }: SettingsViewProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto p-12">
        <div className="mb-6">
          <h2 className="text-gray-200 mb-2">Settings</h2>
          <div className="h-1 w-20 bg-[#3a3a3a] rounded"></div>
        </div>

        <div className="space-y-4">
          {/* Account section */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl overflow-hidden">
            <div className="px-4 py-3 bg-[#1a1a1a] border-b border-[#3a3a3a]">
              <h3 className="text-gray-300 text-sm">Account</h3>
            </div>
            <div>
              <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#2a2a2a] border-b border-[#2a2a2a]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-full"></div>
                  <div>
                    <div className="h-4 w-32 bg-[#2a2a2a] border border-[#3a3a3a] rounded mb-1"></div>
                    <div className="h-3 w-24 bg-[#1a1a1a] border border-[#3a3a3a] rounded"></div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Preferences section */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl overflow-hidden">
            <div className="px-4 py-3 bg-[#1a1a1a] border-b border-[#3a3a3a]">
              <h3 className="text-gray-300 text-sm">Preferences</h3>
            </div>
            <div>
              <button
                onClick={() => onNavigate('audio')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#2a2a2a] border-b border-[#2a2a2a]"
              >
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Audio Settings</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>

              <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#2a2a2a] border-b border-[#2a2a2a]">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Notifications</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>

              <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#2a2a2a]">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Language</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Privacy & Security section */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl overflow-hidden">
            <div className="px-4 py-3 bg-[#1a1a1a] border-b border-[#3a3a3a]">
              <h3 className="text-gray-300 text-sm">Privacy & Security</h3>
            </div>
            <div>
              <button
                onClick={() => onNavigate('security')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#2a2a2a] border-b border-[#2a2a2a]"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Security</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>

              <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#2a2a2a]">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Privacy</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Support section */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl overflow-hidden">
            <div className="px-4 py-3 bg-[#1a1a1a] border-b border-[#3a3a3a]">
              <h3 className="text-gray-300 text-sm">Support</h3>
            </div>
            <div>
              <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#2a2a2a] border-b border-[#2a2a2a]">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Help Center</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>

              <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#2a2a2a]">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
                  </div>
                  <span className="text-gray-300">About</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Logout button */}
          <button className="w-full bg-[#252525] border border-[#3a3a3a] rounded-xl px-4 py-3 text-gray-300 hover:bg-[#2a2a2a]">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

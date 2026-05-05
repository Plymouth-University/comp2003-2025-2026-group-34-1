import { ArrowLeft, Lock, Smartphone, Key, Shield, Eye, EyeOff, AlertTriangle } from 'lucide-react';

interface SecurityViewProps {
  onBack: () => void;
}

export function SecurityView({ onBack }: SecurityViewProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto p-12">
        {/* Header with back button */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="p-2 hover:bg-[#2a2a2a] rounded-lg border border-[#3a3a3a] bg-[#252525]"
          >
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </button>
          <div>
            <h2 className="text-gray-200">Security</h2>
            <div className="h-1 w-20 bg-[#3a3a3a] rounded mt-2"></div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Password section */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-gray-400" />
              <h3 className="text-gray-300">Password</h3>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Current Password</label>
                <div className="h-10 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg px-3 flex items-center justify-between">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <EyeOff className="w-4 h-4 text-gray-500" />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block">New Password</label>
                <div className="h-10 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg"></div>
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block">Confirm Password</label>
                <div className="h-10 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg"></div>
              </div>

              <button className="w-full h-10 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-gray-300 hover:bg-[#353535] mt-2">
                Update Password
              </button>
            </div>
          </div>

          {/* Two-factor authentication */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-5 h-5 text-gray-400" />
              <h3 className="text-gray-300">Two-Factor Authentication</h3>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg mb-4">
              <Shield className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <div className="h-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded mb-2"></div>
                <div className="h-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded w-4/5"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 hover:bg-[#2a2a2a] rounded-lg border border-[#2a2a2a]">
              <span className="text-gray-300 text-sm">Enable 2FA</span>
              <div className="w-12 h-6 bg-[#2a2a2a] border border-[#3a3a3a] rounded-full relative">
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-[#252525] border border-[#3a3a3a] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Active sessions */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Key className="w-5 h-5 text-gray-400" />
              <h3 className="text-gray-300">Active Sessions</h3>
            </div>

            <div className="space-y-3">
              {/* Current session */}
              <div className="p-4 border-2 border-[#4a4a4a] rounded-lg bg-[#2a2a2a]">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="h-4 bg-[#2a2a2a] border border-[#3a3a3a] rounded w-48 mb-2"></div>
                    <div className="h-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded w-32 mb-1"></div>
                    <div className="h-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded w-40"></div>
                  </div>
                  <div className="px-3 py-1 bg-[#2a2a2a] border border-[#4a4a4a] rounded text-xs text-gray-300">Current</div>
                </div>
              </div>

              {/* Other sessions */}
              {[1, 2].map((i) => (
                <div key={i} className="p-4 border border-[#3a3a3a] rounded-lg hover:bg-[#2a2a2a]">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="h-4 bg-[#2a2a2a] border border-[#3a3a3a] rounded w-48 mb-2"></div>
                      <div className="h-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded w-32 mb-1"></div>
                      <div className="h-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded w-40"></div>
                    </div>
                    <button className="px-3 py-1 border border-[#3a3a3a] rounded text-xs hover:bg-[#252525] text-gray-300">
                      Revoke
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Login alerts */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-gray-400" />
              <h3 className="text-gray-300">Login Alerts</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 hover:bg-[#2a2a2a] rounded-lg border border-[#2a2a2a]">
                <span className="text-gray-300 text-sm">Email notifications for new logins</span>
                <div className="w-12 h-6 bg-[#3a3a3a] border-2 border-[#4a4a4a] rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-[#252525] border border-[#4a4a4a] rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-[#2a2a2a] rounded-lg border border-[#2a2a2a]">
                <span className="text-gray-300 text-sm">Alert for unknown devices</span>
                <div className="w-12 h-6 bg-[#3a3a3a] border-2 border-[#4a4a4a] rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-[#252525] border border-[#4a4a4a] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Account actions */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6">
            <h3 className="text-gray-300 mb-4">Account Actions</h3>

            <div className="space-y-3">
              <button className="w-full h-10 border border-[#3a3a3a] rounded-lg text-gray-300 hover:bg-[#2a2a2a]">
                Download My Data
              </button>

              <button className="w-full h-10 border border-[#3a3a3a] rounded-lg text-gray-300 hover:bg-[#2a2a2a]">
                Deactivate Account
              </button>

              <button className="w-full h-10 bg-[#1a1a1a] border-2 border-[#4a4a4a] rounded-lg text-gray-300 hover:bg-[#2a2a2a]">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

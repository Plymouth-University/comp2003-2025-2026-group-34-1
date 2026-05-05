import { ArrowLeft, Volume2, VolumeX, Mic, MicOff, Speaker } from 'lucide-react';

interface AudioSettingsViewProps {
  onBack: () => void;
}

export function AudioSettingsView({ onBack }: AudioSettingsViewProps) {
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
            <h2 className="text-gray-200">Audio Settings</h2>
            <div className="h-1 w-20 bg-[#3a3a3a] rounded mt-2"></div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Volume controls */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6">
            <h3 className="text-gray-300 mb-4">Volume</h3>

            <div className="space-y-6">
              {/* Master volume */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300 text-sm">Master Volume</span>
                  </div>
                  <div className="w-12 h-6 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-center text-xs leading-6 text-gray-400">75</div>
                </div>
                <div className="relative">
                  <div className="h-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-full">
                    <div className="h-full w-3/4 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-3/4 -ml-2 w-4 h-4 bg-[#252525] border-2 border-gray-500 rounded-full"></div>
                </div>
              </div>

              {/* Notification volume */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Speaker className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300 text-sm">Notifications</span>
                  </div>
                  <div className="w-12 h-6 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-center text-xs leading-6 text-gray-400">50</div>
                </div>
                <div className="relative">
                  <div className="h-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-full">
                    <div className="h-full w-1/2 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -ml-2 w-4 h-4 bg-[#252525] border-2 border-gray-500 rounded-full"></div>
                </div>
              </div>

              {/* Call volume */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Mic className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300 text-sm">Voice/Video Calls</span>
                  </div>
                  <div className="w-12 h-6 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-center text-xs leading-6 text-gray-400">80</div>
                </div>
                <div className="relative">
                  <div className="h-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-full">
                    <div className="h-full w-4/5 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-4/5 -ml-2 w-4 h-4 bg-[#252525] border-2 border-gray-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Sound effects */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6">
            <h3 className="text-gray-300 mb-4">Sound Effects</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 hover:bg-[#2a2a2a] rounded-lg border border-[#2a2a2a]">
                <span className="text-gray-300 text-sm">Message Sounds</span>
                <div className="w-12 h-6 bg-[#3a3a3a] border-2 border-[#4a4a4a] rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-[#252525] border border-[#4a4a4a] rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-[#2a2a2a] rounded-lg border border-[#2a2a2a]">
                <span className="text-gray-300 text-sm">Match Notification</span>
                <div className="w-12 h-6 bg-[#3a3a3a] border-2 border-[#4a4a4a] rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-[#252525] border border-[#4a4a4a] rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-[#2a2a2a] rounded-lg border border-[#2a2a2a]">
                <span className="text-gray-300 text-sm">Button Clicks</span>
                <div className="w-12 h-6 bg-[#2a2a2a] border border-[#3a3a3a] rounded-full relative">
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-[#252525] border border-[#3a3a3a] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Input devices */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6">
            <h3 className="text-gray-300 mb-4">Input Device</h3>

            <div className="space-y-3">
              <div className="p-3 border-2 border-[#4a4a4a] rounded-lg bg-[#2a2a2a]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">Default Microphone</span>
                  </div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
              </div>

              <div className="p-3 border border-[#3a3a3a] rounded-lg hover:bg-[#2a2a2a]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MicOff className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400 text-sm">External Microphone</span>
                  </div>
                  <div className="w-2 h-2 border border-[#3a3a3a] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Output devices */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6">
            <h3 className="text-gray-300 mb-4">Output Device</h3>

            <div className="space-y-3">
              <div className="p-3 border-2 border-[#4a4a4a] rounded-lg bg-[#2a2a2a]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Speaker className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">Default Speakers</span>
                  </div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
              </div>

              <div className="p-3 border border-[#3a3a3a] rounded-lg hover:bg-[#2a2a2a]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <VolumeX className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400 text-sm">Bluetooth Headphones</span>
                  </div>
                  <div className="w-2 h-2 border border-[#3a3a3a] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

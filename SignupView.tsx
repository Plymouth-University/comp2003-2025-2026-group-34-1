import { User, Edit2, Camera } from 'lucide-react';

export function ProfileView() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#1a1a1a]">
      {/* Profile header */}
      <div className="max-w-4xl mx-auto p-12">
        {/* Profile photo section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-2 border-[#3a3a3a] bg-[#2a2a2a] flex items-center justify-center">
              <User className="w-16 h-16 text-gray-500" />
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#252525] border border-[#3a3a3a] rounded-full flex items-center justify-center hover:bg-[#2a2a2a]">
              <Camera className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="mt-4 text-center">
            <div className="h-8 w-48 bg-[#2a2a2a] border border-[#3a3a3a] rounded mx-auto mb-2"></div>
            <div className="h-6 w-32 bg-[#2a2a2a] border border-[#3a3a3a] rounded mx-auto"></div>
          </div>
        </div>

        {/* Profile info sections */}
        <div className="space-y-4">
          {/* Basic info */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-gray-300">Basic Information</h3>
              <button className="p-1.5 hover:bg-[#2a2a2a] rounded">
                <Edit2 className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Name</span>
                <div className="h-6 w-40 bg-[#1a1a1a] border border-[#3a3a3a] rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Age</span>
                <div className="h-6 w-20 bg-[#1a1a1a] border border-[#3a3a3a] rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Location</span>
                <div className="h-6 w-40 bg-[#1a1a1a] border border-[#3a3a3a] rounded"></div>
              </div>
            </div>
          </div>

          {/* About me */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-gray-300">About Me</h3>
              <button className="p-1.5 hover:bg-[#2a2a2a] rounded">
                <Edit2 className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-[#1a1a1a] border border-[#3a3a3a] rounded"></div>
              <div className="h-4 bg-[#1a1a1a] border border-[#3a3a3a] rounded"></div>
              <div className="h-4 bg-[#1a1a1a] border border-[#3a3a3a] rounded w-3/4"></div>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-gray-300">Interests</h3>
              <button className="p-1.5 hover:bg-[#2a2a2a] rounded">
                <Edit2 className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-8 w-24 bg-[#1a1a1a] border border-[#3a3a3a] rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Photos */}
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-gray-300">Photos</h3>
              <button className="p-1.5 hover:bg-[#2a2a2a] rounded">
                <Edit2 className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg flex items-center justify-center">
                  <Camera className="w-8 h-8 text-gray-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

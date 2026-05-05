import { Send, MoreVertical, Phone, Video } from 'lucide-react';
import { Button } from './ui/button';

interface ChatWindowProps {
  selectedChat: string | null;
}

export function ChatWindow({ selectedChat }: ChatWindowProps) {
  if (!selectedChat) {
    return (
      <div className="h-full flex items-center justify-center bg-[#151515]">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full border-2 border-[#3a3a3a] bg-[#252525] mx-auto mb-4"></div>
          <p className="text-gray-400">Select a chat to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-[#1a1a1a]">
      {/* Chat header */}
      <div className="h-16 border-b border-[#2a2a2a] flex items-center justify-between px-6 bg-[#151515]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-[#3a3a3a] bg-[#252525]"></div>
          <span className="text-gray-200">{selectedChat}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-[#252525]">
            <Phone className="h-5 w-5 text-gray-400" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-[#252525]">
            <Video className="h-5 w-5 text-gray-400" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-[#252525]">
            <MoreVertical className="h-5 w-5 text-gray-400" />
          </Button>
        </div>
      </div>

      {/* Messages area - wireframe */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#151515]">
        {/* Received message wireframe */}
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-[#3a3a3a] bg-[#252525] flex-shrink-0"></div>
          <div className="max-w-xs">
            <div className="bg-[#252525] border-2 border-[#3a3a3a] rounded-lg p-3">
              <div className="h-3 bg-[#3a3a3a] rounded w-48 mb-2"></div>
              <div className="h-3 bg-[#3a3a3a] rounded w-32"></div>
            </div>
            <span className="text-xs text-gray-500 ml-2 mt-1 block">10:30 AM</span>
          </div>
        </div>

        {/* Sent message wireframe */}
        <div className="flex gap-2 justify-end">
          <div className="max-w-xs">
            <div className="bg-blue-900 border-2 border-blue-700 rounded-lg p-3">
              <div className="h-3 bg-blue-700 rounded w-40 mb-2"></div>
              <div className="h-3 bg-blue-700 rounded w-24"></div>
            </div>
            <span className="text-xs text-gray-500 mr-2 mt-1 block text-right">10:32 AM</span>
          </div>
        </div>

        {/* Received message wireframe */}
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-[#3a3a3a] bg-[#252525] flex-shrink-0"></div>
          <div className="max-w-xs">
            <div className="bg-[#252525] border-2 border-[#3a3a3a] rounded-lg p-3">
              <div className="h-3 bg-[#3a3a3a] rounded w-56"></div>
            </div>
            <span className="text-xs text-gray-500 ml-2 mt-1 block">10:35 AM</span>
          </div>
        </div>

        {/* Sent message wireframe */}
        <div className="flex gap-2 justify-end">
          <div className="max-w-xs">
            <div className="bg-blue-900 border-2 border-blue-700 rounded-lg p-3">
              <div className="h-3 bg-blue-700 rounded w-36"></div>
            </div>
            <span className="text-xs text-gray-500 mr-2 mt-1 block text-right">10:36 AM</span>
          </div>
        </div>

        {/* Received message wireframe */}
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-[#3a3a3a] bg-[#252525] flex-shrink-0"></div>
          <div className="max-w-xs">
            <div className="bg-[#252525] border-2 border-[#3a3a3a] rounded-lg p-3">
              <div className="h-3 bg-[#3a3a3a] rounded w-44 mb-2"></div>
              <div className="h-3 bg-[#3a3a3a] rounded w-52"></div>
            </div>
            <span className="text-xs text-gray-500 ml-2 mt-1 block">10:38 AM</span>
          </div>
        </div>
      </div>

      {/* Message input */}
      <div className="h-16 border-t border-[#2a2a2a] flex items-center gap-3 px-6 bg-[#151515]">
        <div className="flex-1 h-10 bg-[#252525] border-2 border-[#3a3a3a] rounded-full px-4 flex items-center">
          <div className="h-3 bg-[#3a3a3a] rounded w-32"></div>
        </div>
        <Button size="icon" className="rounded-full h-10 w-10">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

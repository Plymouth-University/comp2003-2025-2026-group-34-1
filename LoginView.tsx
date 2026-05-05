interface ChatListProps {
  onSelectChat: (name: string) => void;
  selectedChat: string | null;
}

const chatContacts = [
  { name: 'Alex Rivera', lastMessage: 'Hey! How are you?', time: '2m', unread: 2 },
  { name: 'Jordan Lee', lastMessage: 'That sounds amazing!', time: '15m', unread: 1 },
  { name: 'Sam Chen', lastMessage: 'See you tomorrow!', time: '1h', unread: 0 },
  { name: 'Casey Morgan', lastMessage: 'Thanks for the recommendation', time: '3h', unread: 0 },
  { name: 'Morgan Taylor', lastMessage: 'Let me know when you\'re free', time: '5h', unread: 0 },
  { name: 'Taylor Brooks', lastMessage: 'Haha that\'s hilarious', time: '1d', unread: 0 },
  { name: 'Riley Parker', lastMessage: 'I loved that place too!', time: '2d', unread: 0 },
  { name: 'Quinn Davis', lastMessage: 'Coffee this weekend?', time: '3d', unread: 0 },
];

export function ChatList({ onSelectChat, selectedChat }: ChatListProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {chatContacts.map((contact, index) => (
        <button
          key={index}
          onClick={() => onSelectChat(contact.name)}
          className={`w-full p-4 border-b border-[#2a2a2a] hover:bg-[#252525] transition-colors text-left ${
            selectedChat === contact.name ? 'bg-[#252525]' : ''
          }`}
        >
          {/* Chat item box */}
          <div className="flex gap-3">
            {/* Avatar placeholder */}
            <div className="w-14 h-14 rounded-full border-2 border-[#3a3a3a] bg-[#252525] flex-shrink-0"></div>

            {/* Chat info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-200">{contact.name}</span>
                <span className="text-xs text-gray-500">{contact.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400 truncate">{contact.lastMessage}</p>
                {contact.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 ml-2">
                    <span className="text-white text-xs">{contact.unread}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

import { useState } from 'react';
import { useEffect } from 'react';
import { Heart, X, Star, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

type PotentialMatch = {
  id: number;
  name: string;
  email: string;
  gender: string | null;
  birthdate: string | null;
  city: string;
  bio: string;
  createdAt: string;
  sharedInterestCount: number;
  games: string[];
  hobbies: string[];
};

interface MatchmakingCardProps {
  currentUserId: number;
}

export function MatchmakingCard({ currentUserId }: MatchmakingCardProps) {
  const [matches, setMatches] = useState<PotentialMatch[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('');

  useEffect(() => {
    async function loadMatches() {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/potential-matches?userId=${currentUserId}`);

        if (!response.ok) {
          throw new Error('Could not load matches');
        }

        setMatches(await response.json());
      } catch (error) {
        setStatus(error instanceof Error ? error.message : 'Could not load matches');
      } finally {
        setIsLoading(false);
      }
    }

    loadMatches();
  }, [currentUserId]);

  const currentMatch = matches[currentIndex];

  function formatDate(value: string | null) {
    if (!value) {
      return 'Not set';
    }

    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date(value));
  }

  function formatValue(value: string | null | undefined) {
    return value || 'Not set';
  }

  async function handleSwipe(swipeType: 'like' | 'pass') {
    if (!currentMatch) {
      return;
    }

    try {
      const response = await fetch('/api/swipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          swiperId: currentUserId,
          swipedId: currentMatch.id,
          swipeType,
        }),
      });

      if (!response.ok) {
        throw new Error('Could not save swipe');
      }

      const result = await response.json();
      setStatus(result.matched ? `You matched with ${currentMatch.name}` : '');
      setCurrentIndex((index) => index + 1);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Could not save swipe');
    }
  }

  if (isLoading) {
    return (
      <div className="w-full max-w-md">
        <div className="border border-[#3a3a3a] rounded-2xl p-8 bg-[#252525] shadow-xl text-center">
          <p className="text-gray-300">Loading matches...</p>
        </div>
      </div>
    );
  }

  if (!currentMatch) {
    return (
      <div className="w-full max-w-md">
        <div className="border border-[#3a3a3a] rounded-2xl p-8 bg-[#252525] shadow-xl text-center">
          <div className="w-20 h-20 rounded-full bg-[#353535] mx-auto mb-5 flex items-center justify-center">
            <MessageCircle className="w-10 h-10 text-gray-500" />
          </div>
          <h2 className="text-gray-200 mb-2">No more matches</h2>
          <p className="text-gray-400">
            Add more sample users or reset swipes in the database to see new recommendations.
          </p>
          {status && <p className="text-sm text-gray-500 mt-4">{status}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="border border-[#3a3a3a] rounded-2xl p-6 mb-6 bg-[#252525] shadow-xl">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="aspect-square bg-[#2a2a2a] rounded-2xl flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-[#353535] flex items-center justify-center">
              <span className="text-5xl text-gray-500">{currentMatch.name.charAt(0)}</span>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <h2 className="text-gray-100">{currentMatch.name}</h2>
              <p className="text-gray-400">{formatValue(currentMatch.city)}</p>
            </div>

            <p className="text-gray-300">{formatValue(currentMatch.bio)}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-[#3a3a3a] bg-[#1a1a1a] p-3">
                <p className="text-xs uppercase tracking-widest text-gray-500">Email</p>
                <p className="mt-1 break-all text-sm text-gray-300">{currentMatch.email}</p>
              </div>
              <div className="rounded-lg border border-[#3a3a3a] bg-[#1a1a1a] p-3">
                <p className="text-xs uppercase tracking-widest text-gray-500">Gender</p>
                <p className="mt-1 text-sm capitalize text-gray-300">{formatValue(currentMatch.gender)}</p>
              </div>
              <div className="rounded-lg border border-[#3a3a3a] bg-[#1a1a1a] p-3">
                <p className="text-xs uppercase tracking-widest text-gray-500">Birthdate</p>
                <p className="mt-1 text-sm text-gray-300">{formatDate(currentMatch.birthdate)}</p>
              </div>
              <div className="rounded-lg border border-[#3a3a3a] bg-[#1a1a1a] p-3">
                <p className="text-xs uppercase tracking-widest text-gray-500">Created</p>
                <p className="mt-1 text-sm text-gray-300">{formatDate(currentMatch.createdAt)}</p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              {currentMatch.sharedInterestCount} shared interest{currentMatch.sharedInterestCount === 1 ? '' : 's'}
            </p>

            <div className="space-y-3">
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">Games</p>
                <div className="flex flex-wrap gap-2">
                  {(currentMatch.games.length ? currentMatch.games : ['No games listed']).map((game) => (
                    <span
                      key={game}
                      className="rounded-full border border-[#3a3a3a] bg-[#1a1a1a] px-3 py-1 text-sm text-gray-300"
                    >
                      {game}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">Hobbies</p>
                <div className="flex flex-wrap gap-2">
                  {(currentMatch.hobbies.length ? currentMatch.hobbies : ['No hobbies listed']).map((hobby) => (
                    <span
                      key={hobby}
                      className="rounded-full border border-[#3a3a3a] bg-[#1a1a1a] px-3 py-1 text-sm text-gray-300"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleSwipe('pass')}
            className="h-16 w-16 rounded-full border-2 border-red-400 hover:bg-red-950 bg-transparent transition-all hover:scale-110"
          >
            <X className="h-7 w-7 text-red-400" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handleSwipe('like')}
            className="h-20 w-20 rounded-full border-2 border-green-400 hover:bg-green-950 bg-transparent transition-all hover:scale-110"
          >
            <Heart className="h-8 w-8 text-green-400" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-16 w-16 rounded-full border-2 border-blue-400 hover:bg-blue-950 bg-transparent transition-all hover:scale-110"
          >
            <Star className="h-7 w-7 text-blue-400" />
          </Button>
        </div>
      </div>

      {status && <p className="text-center text-sm text-gray-400">{status}</p>}
    </div>
  );
}

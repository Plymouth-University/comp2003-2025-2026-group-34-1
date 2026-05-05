import { Heart, X } from 'lucide-react';
import { Button } from './ui/button';

interface Profile {
  id: number;
  name: string;
  age: number;
  bio: string;
}

interface ProfileCardProps {
  profile: Profile;
  onLike: () => void;
  onPass: () => void;
}

export function ProfileCard({ profile, onLike, onPass }: ProfileCardProps) {
  return (
    <div className="w-full max-w-sm">
      {/* Profile card - wireframe style */}
      <div className="border-2 border-gray-300 rounded-lg p-6 mb-6 bg-white">
        {/* Profile image placeholder */}
        <div className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg mb-4 flex items-center justify-center bg-gray-50">
          <div className="w-24 h-24 border-2 border-gray-300 rounded-full"></div>
        </div>

        {/* Profile info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h2 className="text-gray-900">{profile.name}</h2>
            <span className="text-gray-600">{profile.age}</span>
          </div>
          <p className="text-gray-600">{profile.bio}</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 justify-center">
        <Button 
          variant="outline" 
          size="lg" 
          onClick={onPass}
          className="w-16 h-16 rounded-full border-2 border-red-500 hover:bg-red-50"
        >
          <X className="w-6 h-6 text-red-500" />
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          onClick={onLike}
          className="w-16 h-16 rounded-full border-2 border-green-500 hover:bg-green-50"
        >
          <Heart className="w-6 h-6 text-green-500" />
        </Button>
      </div>
    </div>
  );
}

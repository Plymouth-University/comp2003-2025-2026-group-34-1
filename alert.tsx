import { User, Mail, Lock, Eye, Calendar, MapPin } from 'lucide-react';
import { FormEvent, useState } from 'react';

interface SignupViewProps {
  onSignup: (user: { id: number; name: string; email: string }) => void;
  onSwitchToLogin: () => void;
}

export function SignupView({ onSignup, onSwitchToLogin }: SignupViewProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('male');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, gender, birthdate, city }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || 'Signup failed. Check that the API server is running.');
      }

      if (!data?.user) {
        throw new Error('Signup failed. Check that the API server is running.');
      }

      onSignup(data.user);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Signup failed');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center bg-[#151515] overflow-y-auto py-8">
      <div className="w-full max-w-md p-8">
        {/* Logo/Title */}
        <div className="text-center mb-6">
          <h1 className="tracking-wide text-gray-200 mb-2">duo</h1>
          <div className="h-4 bg-[#2a2a2a] border border-[#3a3a3a] rounded w-64 mx-auto"></div>
        </div>

        {/* Signup form */}
        <div className="bg-[#252525] border-2 border-[#3a3a3a] rounded-lg p-8 shadow-lg">
          <h2 className="text-gray-200 mb-6 text-center">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Full Name</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="h-12 w-full bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg pl-11 pr-4 text-gray-200 outline-none focus:border-[#5a5a5a]"
                  required
                />
              </div>
            </div>

            {/* Email field */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Email</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Mail className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 w-full bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg pl-11 pr-4 text-gray-200 outline-none focus:border-[#5a5a5a]"
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Password</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="h-12 w-full bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg pl-11 pr-11 text-gray-200 outline-none focus:border-[#5a5a5a]"
                  minLength={6}
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Eye className="w-5 h-5 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Confirm Password field */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Confirm Password</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="h-12 w-full bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg pl-11 pr-11 text-gray-200 outline-none focus:border-[#5a5a5a]"
                  minLength={6}
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Eye className="w-5 h-5 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Date of Birth</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="date"
                  value={birthdate}
                  onChange={(event) => setBirthdate(event.target.value)}
                  className="h-12 w-full bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg pl-11 pr-4 text-gray-200 outline-none focus:border-[#5a5a5a]"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Location</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <MapPin className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  className="h-12 w-full bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg pl-11 pr-4 text-gray-200 outline-none focus:border-[#5a5a5a]"
                />
              </div>
            </div>

            {/* Gender selection */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Gender</label>
              <div className="grid grid-cols-3 gap-2">
                <button type="button" onClick={() => setGender('male')} className={`h-10 border-2 rounded-lg text-sm ${gender === 'male' ? 'bg-[#3a3a3a] border-[#4a4a4a] text-gray-200' : 'bg-[#1a1a1a] border-[#3a3a3a] text-gray-300 hover:bg-[#252525]'}`}>
                  Male
                </button>
                <button type="button" onClick={() => setGender('female')} className={`h-10 border-2 rounded-lg text-sm ${gender === 'female' ? 'bg-[#3a3a3a] border-[#4a4a4a] text-gray-200' : 'bg-[#1a1a1a] border-[#3a3a3a] text-gray-300 hover:bg-[#252525]'}`}>
                  Female
                </button>
                <button type="button" onClick={() => setGender('other')} className={`h-10 border-2 rounded-lg text-sm ${gender === 'other' ? 'bg-[#3a3a3a] border-[#4a4a4a] text-gray-200' : 'bg-[#1a1a1a] border-[#3a3a3a] text-gray-300 hover:bg-[#252525]'}`}>
                  Other
                </button>
              </div>
            </div>

            {/* Terms agreement */}
            <div className="flex items-start gap-2 text-sm">
              <div className="w-4 h-4 border-2 border-[#3a3a3a] rounded bg-[#1a1a1a] mt-0.5 flex-shrink-0"></div>
              <span className="text-gray-400">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            {/* Signup button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-[#3a3a3a] border-2 border-[#4a4a4a] rounded-lg text-gray-200 hover:bg-[#4a4a4a] transition-colors mt-2"
            >
              {isSubmitting ? 'Creating account...' : 'Sign Up'}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#3a3a3a]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#252525] text-gray-500">OR</span>
              </div>
            </div>

            {/* Social signup buttons */}
            <div className="space-y-3">
              <button type="button" className="w-full h-12 bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg flex items-center justify-center gap-3 hover:bg-[#252525]">
                <div className="w-5 h-5 bg-[#2a2a2a] border border-[#3a3a3a] rounded"></div>
                <span className="text-gray-300">Sign up with Google</span>
              </button>

              <button type="button" className="w-full h-12 bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg flex items-center justify-center gap-3 hover:bg-[#252525]">
                <div className="w-5 h-5 bg-[#2a2a2a] border border-[#3a3a3a] rounded-full"></div>
                <span className="text-gray-300">Sign up with Facebook</span>
              </button>
            </div>

            {/* Login link */}
            <div className="text-center mt-6 text-sm">
              <span className="text-gray-400">Already have an account? </span>
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-gray-200 hover:underline"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

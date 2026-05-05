import { Mail, Lock, Eye } from 'lucide-react';
import { FormEvent, useState } from 'react';

interface LoginViewProps {
  onLogin: (user: { id: number; name: string; email: string }) => void;
  onSwitchToSignup: () => void;
}

export function LoginView({ onLogin, onSwitchToSignup }: LoginViewProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || 'Login failed. Check that the API server is running.');
      }

      if (!data?.user) {
        throw new Error('Login failed. Check that the API server is running.');
      }

      onLogin(data.user);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center bg-[#151515]">
      <div className="w-full max-w-md p-8">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <h1 className="tracking-wide text-gray-200 mb-2">duo</h1>
          <div className="h-4 bg-[#2a2a2a] border border-[#3a3a3a] rounded w-64 mx-auto"></div>
        </div>

        {/* Login form */}
        <div className="bg-[#252525] border-2 border-[#3a3a3a] rounded-lg p-8 shadow-lg">
          <h2 className="text-gray-200 mb-6 text-center">Welcome Back</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Eye className="w-5 h-5 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-[#3a3a3a] rounded bg-[#1a1a1a]"></div>
                <span className="text-gray-400">Remember me</span>
              </div>
              <button type="button" className="text-gray-400 hover:underline">
                Forgot password?
              </button>
            </div>

            {/* Login button */}
            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-[#3a3a3a] border-2 border-[#4a4a4a] rounded-lg text-gray-200 hover:bg-[#4a4a4a] transition-colors"
            >
              {isSubmitting ? 'Logging in...' : 'Log In'}
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

            {/* Social login buttons */}
            <div className="space-y-3">
              <button type="button" className="w-full h-12 bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg flex items-center justify-center gap-3 hover:bg-[#252525]">
                <div className="w-5 h-5 bg-[#2a2a2a] border border-[#3a3a3a] rounded"></div>
                <span className="text-gray-300">Continue with Google</span>
              </button>

              <button type="button" className="w-full h-12 bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg flex items-center justify-center gap-3 hover:bg-[#252525]">
                <div className="w-5 h-5 bg-[#2a2a2a] border border-[#3a3a3a] rounded-full"></div>
                <span className="text-gray-300">Continue with Facebook</span>
              </button>
            </div>

            {/* Sign up link */}
            <div className="text-center mt-6 text-sm">
              <span className="text-gray-400">Don&apos;t have an account? </span>
              <button
                type="button"
                onClick={onSwitchToSignup}
                className="text-gray-200 hover:underline"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

        {/* Terms and privacy */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>By continuing, you agree to our</p>
          <div className="flex justify-center gap-2 mt-1">
            <button type="button" className="hover:underline">Terms of Service</button>
            <span>&</span>
            <button type="button" className="hover:underline">Privacy Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

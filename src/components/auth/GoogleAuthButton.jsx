import { useGoogleLogin } from '@react-oauth/google';
import axios from '@/api/axiosInstance';
import { useNavigate } from 'react-router-dom';

export default function GoogleAuthButton({ label = 'Continue with Google' }) {
  const navigate = useNavigate();

  // 1️ Set up the login hook (implicit flow = id_token directly)
  const login = useGoogleLogin({
    flow: 'implicit',          // returns credential directly
    onSuccess: async (tokenResp) => {
      try {
        // tokenResp contains { credential, select_by, ... }
        const res = await axios.post('/auth/google-login', {
          id_token: tokenResp.credential,
        });
        localStorage.setItem('token', res.data.access_token);
        navigate('/dashboard');
      } catch (err) {
        console.error(err);
        alert('Google login failed');
      }
    },
    onError: () => alert('Google login failed'),
  });

  // fully custom button
  return (
    <button
      type="button"
      onClick={() => login()}          //  trigger Google flow
      className="w-full flex items-center justify-center gap-3 px-4 py-2 
                 border border-gray-300 rounded-full bg-white hover:bg-gray-100"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="h-5 w-5"
      />
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}

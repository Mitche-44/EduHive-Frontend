

export default function GoogleAuthButton() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    })
    if (error) console.error('Google Sign-In Error:', error.message)
  }

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-full bg-white hover:bg-gray-100 mt-4"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="h-5 w-5"
      />
      <span className="font-medium text-sm">Continue with Google</span>
    </button>
  )
}

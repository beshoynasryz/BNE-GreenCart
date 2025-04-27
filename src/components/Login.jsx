import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Dummy login logic
    alert(`Logged in as: ${email}`);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Dummy signup logic
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signed up as: ${signupData.name} (${signupData.email})`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 font-semibold rounded-l-md transition-all ${
              isLogin
                ? "bg-primary text-white"
                : "bg-gray-200 text-primary hover:bg-primary/10"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-6 py-2 font-semibold rounded-r-md transition-all ${
              !isLogin
                ? "bg-primary text-white"
                : "bg-gray-200 text-primary hover:bg-primary/10"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              className="border border-primary rounded-md px-4 py-2 outline-none"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="border border-primary rounded-md px-4 py-2 outline-none"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dull text-white font-semibold py-2 rounded-md transition"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              className="border border-primary rounded-md px-4 py-2 outline-none"
              placeholder="Name"
              value={signupData.name}
              onChange={e => setSignupData({ ...signupData, name: e.target.value })}
              required
            />
            <input
              type="email"
              className="border border-primary rounded-md px-4 py-2 outline-none"
              placeholder="Email"
              value={signupData.email}
              onChange={e => setSignupData({ ...signupData, email: e.target.value })}
              required
            />
            <input
              type="password"
              className="border border-primary rounded-md px-4 py-2 outline-none"
              placeholder="Password"
              value={signupData.password}
              onChange={e => setSignupData({ ...signupData, password: e.target.value })}
              required
            />
            <input
              type="password"
              className="border border-primary rounded-md px-4 py-2 outline-none"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={e => setSignupData({ ...signupData, confirmPassword: e.target.value })}
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dull text-white font-semibold py-2 rounded-md transition"
            >
              Sign Up
            </button>
          </form>
        )}
        <div className="mt-4 text-center text-sm text-gray-500">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                className="text-primary underline"
                onClick={() => setIsLogin(false)}
                type="button"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="text-primary underline"
                onClick={() => setIsLogin(true)}
                type="button"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
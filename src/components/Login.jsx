import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Login to GreenCart</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        <div className="mt-4 text-center text-sm text-gray-500">
          Don't have an account? <a href="#" className="text-primary underline">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React from 'react'

const Login = () => {
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "register") {
      // Dummy register logic
      alert(`Account created for: ${name} (${email})`);
    } else {
      // Dummy login logic
      alert(`Logged in as: ${email}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white mt-16 mb-16"
    >
      <p className="text-2xl font-medium m-auto">
        <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
      </p>
      {state === "register" && (
        <div className="w-full">
          <p className="text-primary font-medium">Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Type here"
            className="border border-primary rounded w-full p-2 mt-1 outline-primary"
            type="text"
            required
          />
        </div>
      )}
      <div className="w-full">
        <p className="text-primary font-medium">Email</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Type here"
          className="border border-primary rounded w-full p-2 mt-1 outline-primary"
          type="email"
          required
        />
      </div>
      <div className="w-full">
        <p className="text-primary font-medium">Password</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Type here"
          className="border border-primary rounded w-full p-2 mt-1 outline-primary"
          type="password"
          required
        />
      </div>
      {state === "register" ? (
        <p className="text-sm">
          Already have account?{" "}
          <span
            onClick={() => setState("login")}
            className="text-primary cursor-pointer underline"
          >
            click here
          </span>
        </p>
      ) : (
        <p className="text-sm">
          Create an account?{" "}
          <span
            onClick={() => setState("register")}
            className="text-primary cursor-pointer underline"
          >
            click here
          </span>
        </p>
      )}
      <button
        type="submit"
        className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer font-semibold"
      >
        {state === "register" ? "Create Account" : "Login"}
      </button>
    </form>
  );
};

export default Login;
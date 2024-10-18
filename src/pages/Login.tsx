import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const loginAsGuest = () => {
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-600">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/*left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">Welcom back! Please enter your details</span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="email" id="email" />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input type="password" name="pass" id="pass" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <button onClick={loginAsGuest} className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
            Continue as guest
          </button>
          <button onClick={loginAsGuest} className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            <img src="https://raw.githubusercontent.com/soriya2/Login-Form/1958d7fd9c057cb4be527735bfac34caf93f2bb5/google.svg" alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Dont'have an account?
            <span className="font-bold text-black">Sign up for free</span>
          </div>
        </div>
        {/* right side */}
        <div className="relative">
          <img
            src="https://goodstats.id/img/articles/original/2024/01/12/barbie-teratas-ini-dia-deretan-film-box-office-paling-cuan-sepanjang-2023-36t8HJYlys.jpg?p=articles-lg"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

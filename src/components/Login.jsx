import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Login attempt with:", { email, password });
    // For now, just navigate to home
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen px-4 bg-black">
      <div className="w-full max-w-md space-y-8">
        {/* Logo/Brand */}
        <div className="flex flex-col items-center justify-center text-center">
          <Link
            to="/"
            className="flex justify-center w-full text-2xl text-white font-hv-black">
            <a
              aria-label="Go to the homepage"
              href="/"
              aria-current="page"
              className="flex justify-center w-full mx-auto navbar_brand w-inline-block w--current">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50%"
                viewBox="0 0 148 25"
                fill="none">
                <path
                  d="M22.4977 5.86893L18.2763 1.64753C17.5361 0.907365 16.5529 0.5 15.5062 0.5H8.49532C7.4486 0.5 6.46539 0.907365 5.72523 1.64753L1.50381 5.86893C0.53441 6.83832 0 8.1267 0 9.49793V15.5021C0 16.8733 0.53441 18.1617 1.50381 19.1311L5.72523 23.3525C6.45435 24.0816 7.46379 24.5 8.49532 24.5H15.5062C16.5377 24.5 17.5472 24.0816 18.2763 23.3525L22.4977 19.1311C23.4671 18.1617 24.0015 16.8733 24.0015 15.5021V9.49793C24.0015 8.1267 23.4671 6.83832 22.4977 5.86893ZM5.6548 4.66341L7.19866 3.11956C7.5425 2.77572 8.00925 2.58239 8.49532 2.58239H15.5062C15.9923 2.58239 16.459 2.77572 16.8028 3.11956L18.3467 4.66341C18.8742 5.19091 19.1297 5.93245 19.0371 6.67261L19.0206 6.80932C18.9626 7.27883 18.7693 7.72071 18.4627 8.08113L16.0751 10.8926L12.812 7.05098C12.7043 6.92394 12.5469 6.85075 12.3812 6.85075H11.6203C11.4546 6.85075 11.2972 6.92394 11.1895 7.05098L8.53399 10.1787L9.8997 11.7875L11.6769 9.6954H12.326L14.7094 12.5014L12.1892 15.4689H11.8136L11.496 15.0947L11.4891 15.1002L5.9517 8.58101L5.9586 8.57549L5.53743 8.07975C5.23087 7.71933 5.03754 7.27745 4.97954 6.80794L4.96297 6.67261C4.87183 5.93245 5.12592 5.19091 5.6548 4.66341ZM3.40255 15.8183L3.06008 15.8473C2.54639 15.8901 2.1045 15.4896 2.10036 14.9746C2.08931 13.5025 2.08102 10.8498 2.08102 10.8498C2.08102 10.0738 2.748 9.44546 3.55307 9.52693C3.90934 9.56283 4.22971 9.75892 4.4617 10.031L6.5593 12.5L4.00462 15.509C3.85272 15.6871 3.6373 15.799 3.40393 15.8183H3.40255ZM21.8984 14.9746C21.8942 15.4896 21.4524 15.8901 20.9387 15.8473L20.5962 15.8183C20.3628 15.799 20.146 15.6871 19.9955 15.509L18.0512 13.2208L16.6855 14.8296L18.616 17.1025C18.7748 17.289 18.848 17.532 18.8217 17.775L18.6533 19.2774C18.5911 19.827 18.3453 20.3407 17.9531 20.7315L16.8028 21.8818C16.459 22.2257 15.9923 22.419 15.5062 22.419H8.49532C8.00925 22.419 7.5425 22.2257 7.19866 21.8818L6.04836 20.7315C5.65757 20.3407 5.41038 19.827 5.34824 19.2774L5.17977 17.775C5.15215 17.532 5.22672 17.289 5.38553 17.1025L7.92777 14.1101L11.1867 17.9463C11.2944 18.0733 11.4518 18.1465 11.6175 18.1465H12.3867C12.5524 18.1465 12.7098 18.0733 12.8176 17.9463L13.7483 16.8512L19.2664 10.3527L19.5398 10.0323C19.7718 9.7603 20.0922 9.56421 20.4484 9.52831C21.2535 9.44684 21.9205 10.0751 21.9205 10.8512C21.9205 10.8512 21.9136 13.5039 21.9011 14.976L21.8984 14.9746Z"
                  fill="currentColor"></path>
                <path
                  d="M52.7318 17.6357H44.231V7.12158H45.8673V16.1485H52.7318V17.6357Z"
                  fill="currentColor"></path>
                <path
                  d="M60.873 7.12207C63.291 7.12207 64.2521 8.17431 64.2521 10.4266C64.2521 12.6788 63.291 13.7462 60.873 13.7462H56.3078V17.6362H54.6714V7.12207H60.8744H60.873ZM56.3078 12.2742H60.6493C62.0164 12.2742 62.6171 11.7329 62.6171 10.4266C62.6171 9.12023 62.0164 8.59411 60.6493 8.59411H56.3078V12.2742Z"
                  fill="currentColor"></path>
                <path
                  d="M74.7972 11.4327V7.12158H76.4349V17.6357H74.7972V12.92H68.068V17.6357H66.4316V7.12158H68.068V11.4327H74.7972Z"
                  fill="currentColor"></path>
                <path
                  d="M95.2956 17.6357H93.6578V8.60881H89.4668V7.12158H99.4853V8.60881H95.2942V17.6357H95.2956Z"
                  fill="currentColor"></path>
                <path
                  d="M111.581 17.6357H109.493L106.188 13.4461H103.065V17.6357H101.427V7.12158H107.63C109.897 7.12158 110.858 8.05231 110.858 10.201C110.858 12.1232 110.048 13.0553 108.126 13.3094L111.579 17.6344L111.581 17.6357ZM103.065 8.59362V11.9727H107.405C108.681 11.9727 109.222 11.4921 109.222 10.2756C109.222 9.05898 108.681 8.59362 107.405 8.59362H103.065Z"
                  fill="currentColor"></path>
                <path
                  d="M130.564 7.12207C134.168 7.12207 135.821 8.77362 135.821 12.3791C135.821 15.9847 134.169 17.6362 130.564 17.6362H125.638V7.12207H130.564ZM127.275 16.149H130.564C133.148 16.149 134.183 15.0526 134.183 12.3791C134.183 9.70573 133.146 8.6093 130.564 8.6093H127.275V16.149Z"
                  fill="currentColor"></path>
                <path
                  d="M147.088 17.6357H138.137V7.12158H147.088V8.59362H139.773V11.4617H146.638V12.9338H139.773V16.1637H147.088V17.6357Z"
                  fill="currentColor"></path>
                <path
                  d="M40.5378 17.6385H42.1701L38.0591 7.4019C37.9915 7.23205 37.8271 7.12158 37.6435 7.12158H35.9753C35.7931 7.12158 35.6273 7.23344 35.5597 7.4019L31.4487 17.6385H33.081L34.3997 14.3575H39.2177L40.5365 17.6385H40.5378ZM34.9949 12.8785L36.8066 8.37129H36.8108L38.6225 12.8785H34.9935H34.9949Z"
                  fill="currentColor"></path>
                <path
                  d="M87.5803 17.6385H89.2126L85.1016 7.4019C85.0339 7.23205 84.8696 7.12158 84.6859 7.12158H83.0178C82.8355 7.12158 82.6698 7.23344 82.6022 7.4019L78.4912 17.6385H80.1234L81.4422 14.3575H86.2602L87.5789 17.6385H87.5803ZM82.0374 12.8785L83.8491 8.37129H83.8533L85.665 12.8785H82.036H82.0374Z"
                  fill="currentColor"></path>
                <path
                  d="M121.946 17.6385H123.578L119.467 7.4019C119.399 7.23205 119.235 7.12158 119.051 7.12158H117.383C117.201 7.12158 117.035 7.23344 116.967 7.4019L112.856 17.6385H114.489L115.807 14.3575H120.625L121.944 17.6385H121.946ZM116.403 12.8785L118.214 8.37129H118.219L120.03 12.8785H116.401H116.403Z"
                  fill="currentColor"></path>
              </svg>
            </a>
          </Link>
          <h2 className="mt-6 text-3xl text-white font-hv-medium">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm text-neutral-400">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-neutral-800 bg-transparent px-4 py-2.5 text-white placeholder-neutral-500 focus:border-[#8a41e7] focus:outline-none"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm text-neutral-400">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-neutral-800 bg-transparent px-4 py-2.5 text-white placeholder-neutral-500 focus:border-[#8a41e7] focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-neutral-800 bg-transparent text-[#8a41e7] focus:ring-[#8a41e7]"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-neutral-400">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="text-[#8a41e7] hover:text-[#8a41e7]/80">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#8a41e7] px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-[#8a41e7]/90 focus:outline-none focus:ring-2 focus:ring-[#8a41e7]/50 transition-colors">
              Sign in
            </button>
          </div>

          <p className="text-sm text-center text-neutral-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#8a41e7] hover:text-[#8a41e7]/80">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

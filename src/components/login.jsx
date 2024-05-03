import * as React from "react";
import ReactDOMServer from "react-dom/server";
import Closebtn from "./closebtn";
function MyComponent() {
  const handleClick = () => {
    const signupElements = document.getElementsByClassName("signup");
    for (let i = 0; i < signupElements.length; i++) {
      signupElements[i].style.display = "flex";
    }
    const signinElements = document.getElementsByClassName("login");
    for (let i = 0; i < signinElements.length; i++) {
      signinElements[i].style.display = "none";
    }
  };
  
  const submit = () => {
    const signupElements = document.getElementsByClassName("signup");
    for (let i = 0; i < signupElements.length; i++) {
      signupElements[i].style.display = "none";
    }
    const signinElements = document.getElementsByClassName("login");
    for (let i = 0; i < signinElements.length; i++) {
      signinElements[i].style.display = "none";
    }
    const element = <div className="w-[176px] h-[36px] sonu"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec84fbb753ed7f4e0d874102933001776d127767fbe8f49a15774a3bc7ae7ec?apiKey=7255d85a71e84b389c79f8c733a77483&"/> Siddharth kaul</div>;
    document.getElementsByClassName("sid")[0].innerHTML =
      ReactDOMServer.renderToString(element);
  };
  return (
    <div className="login hidden flex-col pb-8 mt-3 w-full bg-white rounded-lg shadow-lg max-md:max-w-full">
      <div className="justify-center px-16 py-4 text-sm font-medium leading-4 text-center text-green-700 bg-green-50 rounded-lg max-md:px-5 max-md:max-w-full">
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼
      </div>
      <Closebtn />
      <div className="self-center mt-8 w-full max-w-[676px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 text-sm font-medium leading-4 text-black max-md:mt-10">
              <div className="text-2xl font-bold">Sign In</div>
              <div className="z-10 justify-center items-start px-3 py-5 mt-6 text-base leading-4 whitespace-nowrap rounded-sm border border-solid bg-slate-50 border-zinc-300 text-zinc-500 max-md:pr-5">
                Email
              </div>
              <div className="flex gap-5 justify-between py-3.5 pr-6 pl-3 text-base leading-4 whitespace-nowrap rounded-none border border-solid bg-slate-50 border-zinc-300 text-zinc-500 max-md:pr-5">
                <div className="my-auto">Password</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed19c7c1708ba88a08321b986c00bedc6d9b8ee6d701533956509bd0192e8ec5?apiKey=7255d85a71e84b389c79f8c733a77483&"
                  className="shrink-0 aspect-square w-[18px]"
                />
              </div>
              <div
                onClick={submit}
                className="justify-center items-center px-16 py-3.5 mt-5 font-semibold text-center text-white bg-blue-600 rounded-3xl max-md:px-5"
              >
                Sign In
              </div>
              <div className="flex gap-2.5 px-20 py-3 mt-6 bg-white rounded-sm border border-solid border-zinc-300 max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&"
                  className="shrink-0 w-4 aspect-square"
                />
                <div className="flex-auto">Sign in with Facebook</div>
              </div>
              <div className="flex gap-2.5 px-20 py-3 mt-2 bg-white rounded-sm border border-solid border-zinc-300 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/707ced8a81502907f95db8120c92dd67579669445d52fd559ce2a67005adad6a?apiKey=7255d85a71e84b389c79f8c733a77483&"
                  className="shrink-0 w-4 aspect-square"
                />
                <div className="flex-auto">Sign in with Google</div>
              </div>
              <div className="self-center mt-7 text-xs tracking-normal leading-4 text-center">
                Forgot Password?
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 text-sm text-right text-blue-600 max-md:mt-10">
              <div>
                Don’t have an account yet?{" "}
                <span
                  className="font-semibold text-blue-600"
                  onClick={handleClick}
                >
                  Create new for free!
                </span>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2591492a5b1899bf9f6b544ad1d451e78e3190355cd18f2e33e126a2d467f2c8?apiKey=7255d85a71e84b389c79f8c733a77483&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2591492a5b1899bf9f6b544ad1d451e78e3190355cd18f2e33e126a2d467f2c8?apiKey=7255d85a71e84b389c79f8c733a77483&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2591492a5b1899bf9f6b544ad1d451e78e3190355cd18f2e33e126a2d467f2c8?apiKey=7255d85a71e84b389c79f8c733a77483&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2591492a5b1899bf9f6b544ad1d451e78e3190355cd18f2e33e126a2d467f2c8?apiKey=7255d85a71e84b389c79f8c733a77483&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2591492a5b1899bf9f6b544ad1d451e78e3190355cd18f2e33e126a2d467f2c8?apiKey=7255d85a71e84b389c79f8c733a77483&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2591492a5b1899bf9f6b544ad1d451e78e3190355cd18f2e33e126a2d467f2c8?apiKey=7255d85a71e84b389c79f8c733a77483&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2591492a5b1899bf9f6b544ad1d451e78e3190355cd18f2e33e126a2d467f2c8?apiKey=7255d85a71e84b389c79f8c733a77483&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2591492a5b1899bf9f6b544ad1d451e78e3190355cd18f2e33e126a2d467f2c8?apiKey=7255d85a71e84b389c79f8c733a77483&"
                className="self-start mt-14 w-full aspect-[0.99] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;

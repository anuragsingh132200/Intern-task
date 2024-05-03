import * as React from "react";
import ReactDOMServer from "react-dom/server";

import Closebtn from "./closebtn";
function MyComponent() {
  const handleClick = () => {
    const signupElements = document.getElementsByClassName("signup");
    for (let i = 0; i < signupElements.length; i++) {
      signupElements[i].style.display = "none";
    }
    const signinElements = document.getElementsByClassName("login");
    for (let i = 0; i < signinElements.length; i++) {
      signinElements[i].style.display = "flex";
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
    const element = <div className="flex w-[176px] h-[36px] text-black align-middle gap-2"><img className="h-[34px]" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec84fbb753ed7f4e0d874102933001776d127767fbe8f49a15774a3bc7ae7ec?apiKey=7255d85a71e84b389c79f8c733a77483&"/> <div className="mt-[5px] text-md font-weight-200">Siddharth kaul</div></div>;
    document.getElementsByClassName("sid")[0].innerHTML =
      ReactDOMServer.renderToString(element);
  };
  return (
    <div className="signup hidden flex-col pb-9 mt-3 mr-9 w-full bg-white rounded-lg shadow-lg max-md:max-w-full">
      <Closebtn />
      <div className="justify-center px-16 py-4 text-sm font-medium leading-4 text-center text-green-700 bg-green-50 rounded-lg max-md:px-5 max-md:max-w-full">
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼
      </div>
      <div className="self-center mt-8 w-full max-w-[676px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 text-base font-medium leading-4 text-zinc-500 max-md:mt-6">
              <div className="text-2xl font-bold text-black">
                Create Account
              </div>
              <div className="flex z-10 gap-5 py-px pr-20 pl-3 mt-8 w-full rounded-sm border border-solid bg-slate-50 border-zinc-300 max-md:pr-5">
                <div className="my-auto">First Name</div>
                <div className="flex flex-1 gap-3">
                  <div className="shrink-0 w-px border border-solid bg-zinc-300 border-zinc-300 h-[45px]" />
                  <div className="my-auto">Last Name</div>
                </div>
              </div>
              <div className="justify-center items-start px-3 py-5 whitespace-nowrap border border-solid bg-slate-50 border-zinc-300 max-md:pr-5">
                Email
              </div>
              <div className="flex z-10 gap-5 justify-between py-3.5 pr-6 pl-3 whitespace-nowrap border border-solid bg-slate-50 border-zinc-300 max-md:pr-5">
                <div className="my-auto">Password</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed19c7c1708ba88a08321b986c00bedc6d9b8ee6d701533956509bd0192e8ec5?apiKey=7255d85a71e84b389c79f8c733a77483&"
                  className="shrink-0 aspect-square w-[18px]"
                />
              </div>
              <div className="justify-center items-start px-3 py-5 rounded-none border border-solid bg-slate-50 border-zinc-300 max-md:pr-5">
                Confirm Password
              </div>
              <div
                onClick={submit}
                className="justify-center items-center px-16 py-4 mt-5 text-sm font-semibold leading-4 text-center text-white bg-blue-600 rounded-3xl max-md:px-5"
              >
                Create Account
              </div>
              <div className="flex gap-2.5 px-20 py-3 mt-6 text-sm leading-4 text-black bg-white rounded-sm border border-solid border-zinc-300 max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=7255d85a71e84b389c79f8c733a77483&"
                  className="shrink-0 w-4 aspect-square"
                />
                <div className="flex-auto">Sign up with Facebook</div>
              </div>
              <div className="flex gap-2.5 px-20 py-3 mt-2 text-sm leading-4 text-black bg-white rounded-sm border border-solid border-zinc-300 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b38a143355c47a855dd00dade2e7cdfe91e992464a25406c28aa52b255a77b2?apiKey=7255d85a71e84b389c79f8c733a77483&"
                  className="shrink-0 w-4 aspect-square"
                />
                <div className="flex-auto">Sign up with Google</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 text-right max-md:mt-7">
              <div className="self-end text-sm text-blue-600">
                Already have an account?{" "}
                <span
                  className="font-semibold text-blue-600"
                  onClick={handleClick}
                >
                  Sign In
                </span>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa4e8ab7ffe8c09a42100d25d3d9abd703ce27def2a923261d8a7ff948391a1a?apiKey=7255d85a71e84b389c79f8c733a77483&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa4e8ab7ffe8c09a42100d25d3d9abd703ce27def2a923261d8a7ff948391a1a?apiKey=7255d85a71e84b389c79f8c733a77483&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa4e8ab7ffe8c09a42100d25d3d9abd703ce27def2a923261d8a7ff948391a1a?apiKey=7255d85a71e84b389c79f8c733a77483&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa4e8ab7ffe8c09a42100d25d3d9abd703ce27def2a923261d8a7ff948391a1a?apiKey=7255d85a71e84b389c79f8c733a77483&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa4e8ab7ffe8c09a42100d25d3d9abd703ce27def2a923261d8a7ff948391a1a?apiKey=7255d85a71e84b389c79f8c733a77483&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa4e8ab7ffe8c09a42100d25d3d9abd703ce27def2a923261d8a7ff948391a1a?apiKey=7255d85a71e84b389c79f8c733a77483&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa4e8ab7ffe8c09a42100d25d3d9abd703ce27def2a923261d8a7ff948391a1a?apiKey=7255d85a71e84b389c79f8c733a77483&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa4e8ab7ffe8c09a42100d25d3d9abd703ce27def2a923261d8a7ff948391a1a?apiKey=7255d85a71e84b389c79f8c733a77483&"
                className="mt-8 w-full aspect-[1.02]"
              />
              <div className="mt-4 text-xs tracking-normal leading-4 text-black">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;

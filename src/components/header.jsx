import * as React from "react";
import "../globals.css"
function Logo() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2187d07c83f412f807d59d65daedc1f207f1c44aa50927697838c4959e1c91b4?apiKey=7255d85a71e84b389c79f8c733a77483&"
      alt="Company logo"
      className="shrink-0 self-stretch my-auto max-w-full aspect-[6.67] w-[163px]"
    />
  );
}

function SearchBar() {
  return (
    <div className="flex gap-3.5 self-stretch px-3.5 py-2.5 text-sm rounded-3xl w-[27vw] bg-zinc-100 text-zinc-600">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd3a89a6e081c3bc2d19452bad30ca8c46605803d864ddaa35da582bef283bf6?apiKey=7255d85a71e84b389c79f8c733a77483&"
        alt="Search icon"
        className="shrink-0 aspect-square w-[22px]"
      />
      <div className="flex-auto my-auto ">
        <input
          placeholder=" Search for your favorite groups in ATG"
          className="bg-zinc-100 text-zinc-900 w-[22vw] focus:outline-none"
        />
      </div>
    </div>
  );
}

function AccountButton() {
  const handleClick = () => {
    const signupElements = document.getElementsByClassName('signup');
    for (let i = 0; i < signupElements.length; i++) {
      signupElements[i].style.display = "flex"; // or "flex", "inline", etc.
    }
  };
  return (
    <div className="sid flex gap-0 self-stretch my-auto text-base text-right text-blue-600">
      <div className="grow my-auto">
        <span className="text-zinc-800" onClick={handleClick}>Create account. </span>
        <span className="font-bold text-blue-600">It's free!</span>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdf5e8098b9a077c9769de6bb9719b160edd9bf4e40d4f078abdc10e5c4e97ce?apiKey=7255d85a71e84b389c79f8c733a77483&"
        alt="Arrow right icon"
        className="shrink-0 w-6 aspect-square"
      />
    </div>
  );
}

function Header() {
  return (
    <header className=" hidden lg:flex gap-5 justify-between items-center px-20 py-4 w-full font-medium bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <Logo />
      <SearchBar />
      <AccountButton />
    </header>
  );
}

export default Header;

import * as React from "react";
import "../globals.css"
function MyComponent() {
  return (
    <section
      className=" hero flex relative flex-col justify-center items-start px-16  py-20 w-full max-md:px-5 max-md:max-w-full"

    >
      <div className="flex flex-col mt-48 ml-36 max-md:mt-10 max-md:ml-2.5">
        <h1 className="text-4xl font-bold">Computer Engineering</h1>
        <p className="mt-3 text-lg">142,765 Computer Engineers follow this</p>
      </div>
    </section>
  );
}

export default MyComponent;
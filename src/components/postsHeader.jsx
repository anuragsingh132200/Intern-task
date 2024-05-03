import * as React from "react";
import Leavebtn from "./leavegroupbtn";
import '../globals.css'
export default function MyComponent() {
  const [a, setA] = React.useState(false);
  return (
    <div className="w-[full] bg-white lg:flex justify-center sticky top-0 hidden ">
      <div className="w-[75vw] flex justify-around py-4 border-b-2 ">
        <div className="flex gap-5 justify-between w-[70vw]   max-md:flex-wrap max-md:max-w-full ">
          <div className="flex gap-5 px-5 my-auto text-base text-zinc-500">
            <div className="grow text-black font-semibold border-b-2 py-1 border-b-black font-sans">
              All Posts(32)
            </div>
            <div className="hover:border-b-2 hover:text-blue-500 py-1 hover:border-b-blue-500">
              Article
            </div>
            <div className="hover:border-b-2 hover:text-blue-500 py-1 hover:border-b-blue-500">
              Event
            </div>
            <div className="hover:border-b-2 hover:text-blue-500 py-1 hover:border-b-blue-500">
              Education
            </div>
            <div className="hover:border-b-2 hover:text-blue-500 py-1 hover:border-b-blue-500">
              Job
            </div>
          </div>
          <div className="flex gap-4 text-base font-medium">
            <div className="flex gap-3 py-2 pr-1.5 pl-3 text-black bg-gray-100 rounded">
              <div className="my-auto">Write a Post</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2552a4361f9e4c962e2b4f817277a0cc638c67459dbf4fc745e7644b6a4be3ae?apiKey=7255d85a71e84b389c79f8c733a77483&"
                className="shrink-0 aspect-square w-[22px]"
              />
            </div>
            {a?<div  onClick={()=>{setA(false)}}><Leavebtn /></div>:
              <div className="flex  gap-1.5 px-2.5 py-2 text-white bg-blue-600 rounded" onClick={()=>{
                setA(true);
              }}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/770748d17b6399fb4cd76caa809cc312ea2ddf902a9096b361be1bc53b7cd29d?apiKey=7255d85a71e84b389c79f8c733a77483&"
                  className="shrink-0 aspect-square w-[22px]"
                />
                <div>Join Group</div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

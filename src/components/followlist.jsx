import * as React from "react";
import "../globals.css"
function LocationInput() {
  return (
    <div className="flex gap-5 justify-between self-center w-full text-sm text-zinc-500  ">
      <div className="flex gap-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d43e7527fcd91222c9cd3988505080cb1320c6f7cecc5130a59ae87bff226071?apiKey=7255d85a71e84b389c79f8c733a77483&"
          alt=""
          className="shrink-0 w-2.5 aspect-[0.67] fill-black"
        />
        <div className="flex-auto">
          <input
            className=" text-zinc-900 focus:outline-none"
            placeholder="Enter your location"
          />
        </div>
      </div>
      <img
        loading="lazy"
        src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-edit-24px'%20clip-path='url(%23clip0_1_848)'%3e%3cpath%20id='Vector'%20d='M2.5%2014.375V17.5H5.625L14.8417%208.28334L11.7167%205.15834L2.5%2014.375ZM17.2583%205.86667C17.5833%205.54167%2017.5833%205.01667%2017.2583%204.69167L15.3083%202.74167C14.9833%202.41667%2014.4583%202.41667%2014.1333%202.74167L12.6083%204.26667L15.7333%207.39167L17.2583%205.86667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_848'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
        alt=""
        className="shrink-0 self-start w-5 aspect-square fill-black"
      />
    </div>
  );
}

function LocationInfo() {
  return (
    <div className="flex gap-2 mt-11 text-xs">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1fdab980e21e160356444543cd5a6d0177d70b02e37b7ea33bc8692f443c668?apiKey=7255d85a71e84b389c79f8c733a77483&"
        alt=""
        className="shrink-0 self-start w-4 aspect-square"
      />
      <div>
        Your location will help us serve better and extend a personalised
        experience.
      </div>
    </div>
  );
}

function GroupItem({ imageSrc, title }) {
  const [f, setF] = React.useState(false);
  return (
    <div className="flex gap-5 justify-between px-0.5 mt-6 w-full whitespace-nowrap">
      <div className="flex gap-3 text-sm">
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="shrink-0 w-9 aspect-square"
        />
        <div className="my-auto">{title}</div>
      </div>
      {f?<div
        onClick={() => {
          setF(!f);
        }}
        className="justify-center hover:bg-white px-3.5 py-2 my-auto text-xs text-center bg-gray-100 rounded-2xl"
      >
        Follow
      </div>:<div
        onClick={() => {
          setF(!f);
        }}
        className="justify-center  px-3.5 py-2 my-auto text-white text-xs text-center bg-black rounded-2xl"
      >
        Followed
      </div>}
    </div>
  );
}

export default function MyComponent() {
  const groupData = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ca84d2d8cbd94ef268d394eb1f090e11c813d8f01b6de2d94a19c6ed480eb284?apiKey=7255d85a71e84b389c79f8c733a77483&",
      title: "Leisure",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2cd9b68345bc97519db060d2e2eeec2997856a0a5d00c9df4d46e446cc705b14?apiKey=7255d85a71e84b389c79f8c733a77483&",
      title: "Activism",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a2a38281372c697bc52a9502016f744f8e9b2682856378d92754220267d77a69?apiKey=7255d85a71e84b389c79f8c733a77483&",
      title: "MBA",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cdc701a1155b3bd07732de83887063dfb7b980d06835964ff9e565301858def9?apiKey=7255d85a71e84b389c79f8c733a77483&",
      title: "Philosophy",
    },
  ];

  return (
    <div className="flex flex-col ml-2 mt-16 text-black max-w-[270px] ">
      <LocationInput />
      <LocationInfo />
      <div className="flex gap-1 mt-14 text-sm tracking-widest uppercase">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/342ef84c1dd95f194c78b376a0933b72c780470163e8205d590d01beec917755?apiKey=7255d85a71e84b389c79f8c733a77483&"
          alt=""
          className="shrink-0 aspect-square w-[18px]"
        />
        <div className="flex-auto my-auto">REcommended Groups</div>
      </div>
      {groupData.map((group) => (
        <GroupItem
          key={group.title}
          imageSrc={group.imageSrc}
          title={group.title}
        />
      ))}
      <div className="self-end mt-14 text-md rounded-lg text-right text-blue-600 w-[210px] h-[40px] p-2 border-2 border-white hover:border-blue-400">
        See More...
      </div>
    </div>
  );
}

import * as React from "react";
import Image from "next/image";


export default function Login() {
  


  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col items-center mt-32 max-w-full w-[330px] max-md:mt-10">
        <div className="flex flex-col self-start ml-5 max-w-full w-[200px] max-md:ml-2.5">
          <div className="flex gap-1.5 text-3xl leading-10 text-slate-600">
            
            
            <div>R&R möbler</div>
          </div>
          <div className="mt-4 text-3xl font-bold tracking-tight leading-9 text-neutral-700">
            Create account
          </div>
        </div>
        <div className="flex gap-4 items-start self-stretch px-14 py-4 mt-6 text-base leading-6 bg-sky-100 rounded-[48px] text-neutral-700 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02ec9e502b82a51ca2cd27196f5fa4fea8533206e92d8a3b54f596ce24b66765?apiKey=7e7bfe05786241038aa7f92726712fab&"
            className="shrink-0 w-7 aspect-[1.16]"
          />
          <button  className="flex-auto mt-1.5">Sign up with Google</button>
        </div>
        <div className="justify-center py-1.5 mt-5 text-sm bg-white text-zinc-600">
          Or use Email
        </div>
        <div className="flex flex-col items-start pt-4 pr-20 pl-3.5 mt-6 max-w-full whitespace-nowrap rounded-lg bg-neutral-100 w-[286px] max-md:pr-5">
          <div className="text-xs leading-4 text-zinc-600">EMAIL</div>
          <input type="TEXT" className="mt-4 text-base leading-7 text-neutral-800">
            
          </input>
        </div>
        <div className="flex gap-5 justify-between items-start px-3.5 pt-3.5 mt-5 max-w-full whitespace-nowrap rounded-lg bg-neutral-100 w-[286px]">
          <div className="flex flex-col self-start">
            <div className="text-xs leading-4 text-zinc-600">PASSSWORD</div>
            <input type="password" className="mt-5 text-2xl leading-7 text-stone-300">
              </input>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7fbf2a2ed209ff0ac7561c07565266ef5207084209c6407cce692b592936ba7?apiKey=7e7bfe05786241038aa7f92726712fab&"
            className="shrink-0 my-auto aspect-[0.81] w-[13px]"
          />
        </div>
        <div className="flex gap-5 justify-between px-20 py-5 mt-5 text-sm font-bold leading-6 text-center text-white bg-gray-800 rounded-lg max-md:px-5">
          <button className="my-auto">LOG IN </button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a9f8ba28ddf3c7ccc2b07da59966eb03dcc35b6b4a6df27f8568c72d1ecec5c?apiKey=7e7bfe05786241038aa7f92726712fab&"
            className="shrink-0 aspect-[1.2] w-[18px]"
          />
        </div>
      </div>
    </div>
  );
}


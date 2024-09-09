import * as React from "react";

export default function shipping() {
  return (
    <div className="flex flex-col items-center pb-20 bg-white">
      <div className="flex gap-5 justify-between items-center px-5 w-full max-w-[1360px] max-md:flex-wrap max-md:max-w-full">
        <div className="self-stretch my-auto text-2xl capitalize text-indigo-950">
          <span className="font-bold text-indigo-950">Cozy</span>
          <span className="text-indigo-950">®</span>
        </div>
        <div className="flex gap-5 justify-between self-stretch my-auto text-sm font-semibold leading-4 text-indigo-950 max-md:flex-wrap">
          <div>SHOP</div>
          <div>COLLECTIVE</div>
          <div>DESIGNERS</div>
          <div>ABOUT US</div>
          <div>CONTACT</div>
        </div>
        <div className="flex gap-5 justify-between items-center self-stretch">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/44bcdab4b7130b69fd8ab887f11275ea1fee85f6e9c5b43d9d91aaae70e0128f?apiKey=7e7bfe05786241038aa7f92726712fab&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c1fcfcc5a0c3108946f375e22db3f80016ec2b4634b5a723a50a58ba02adcc1?apiKey=7e7bfe05786241038aa7f92726712fab&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div className="shrink-0 self-stretch w-px h-20 bg-zinc-300" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4409d2ef326daab43459b73ba6fdd979d7880dd7e9226c7a6a65327bfa7177a?apiKey=7e7bfe05786241038aa7f92726712fab&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
      <div className="self-stretch w-full bg-zinc-300 min-h-[1px] max-md:max-w-full" />
      <div className="mt-20 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between self-start text-2xl font-bold leading-8 text-gray-400 whitespace-nowrap max-md:flex-wrap">
                <div>Address</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/82f50da1bc522c061cff3635f7d38d4194489062959b7fb72fd85ad669605f26?apiKey=7e7bfe05786241038aa7f92726712fab&"
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div className="text-indigo-950">Shipping</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/82f50da1bc522c061cff3635f7d38d4194489062959b7fb72fd85ad669605f26?apiKey=7e7bfe05786241038aa7f92726712fab&"
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div>Payment</div>
              </div>
              <div className="mt-16 text-xl font-semibold leading-6 text-indigo-950 max-md:mt-10 max-md:max-w-full">
                Shipment Method
              </div>
              <div className="flex flex-col mt-6 rounded-sm border border-solid border-zinc-300 max-md:max-w-full">
                <div className="flex gap-5 justify-between px-6 py-4 w-full rounded-sm border-b border-solid border-zinc-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-3">
                    <div className="flex flex-col justify-center p-0.5">
                      <div className="flex flex-col justify-center items-center px-1.5 w-5 h-5 bg-white rounded-xl border-2 border-teal-500 border-solid">
                        <div className="shrink-0 w-2.5 h-2.5 bg-teal-500 rounded-xl border border-teal-500 border-solid" />
                      </div>
                    </div>
                    <div className="my-auto text-base font-semibold tracking-normal text-indigo-950">
                      Free
                    </div>
                    <div className="text-base leading-6 text-indigo-950">
                      Regular Shipment
                    </div>
                  </div>
                  <div className="my-auto text-base font-semibold tracking-normal text-indigo-950">
                    01 Feb, 2023
                  </div>
                </div>
                <div className="flex gap-5 justify-between px-6 py-4 w-full rounded-sm border-b border-solid border-zinc-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-3">
                    <div className="flex flex-col justify-center p-0.5">
                      <div className="shrink-0 h-5 rounded-xl border-2 border-gray-400 border-solid" />
                    </div>
                    <div className="my-auto text-base font-semibold tracking-normal text-indigo-950">
                      $8.50
                    </div>
                    <div className="text-base leading-6 text-indigo-950">
                      Priority Shipping
                    </div>
                  </div>
                  <div className="my-auto text-base font-semibold tracking-normal text-indigo-950">
                    28 Jan, 2023
                  </div>
                </div>
                <div className="flex gap-5 justify-between px-6 py-4 w-full rounded-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-3">
                    <div className="flex flex-col justify-center p-0.5">
                      <div className="shrink-0 h-5 rounded-xl border-2 border-gray-400 border-solid" />
                    </div>
                    <div className="my-auto text-base font-semibold tracking-normal text-indigo-950">
                      Schedule{" "}
                    </div>
                    <div className="text-base leading-6 text-indigo-950">
                      Choose a date that works for you.
                    </div>
                  </div>
                  <div className="flex gap-1 my-auto text-base font-semibold tracking-normal text-gray-400">
                    <div>Select Date</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef17de239a3fdb8fa73abc513b612852679e5ebbf4af0bd712978116ca59fdf?apiKey=7e7bfe05786241038aa7f92726712fab&"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-8 mx-auto w-full text-base bg-white rounded-sm border border-solid border-zinc-300 max-md:px-5 max-md:mt-10">
              <div className="text-2xl font-bold leading-8 text-indigo-950">
                Order Summary
              </div>
              <div className="flex gap-5 justify-between mt-8 whitespace-nowrap leading-[150%] text-indigo-950">
                <div>Price</div>
                <div>$319.98</div>
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap leading-[150%] text-indigo-950">
                <div>Discount</div>
                <div>$31.9</div>
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap leading-[150%]">
                <div className="text-indigo-950">Shipping</div>
                <div className="text-teal-500">Free</div>
              </div>
              <div className="flex gap-5 justify-between mt-6 leading-[150%] text-indigo-950">
                <div>Coupon Applied</div>
                <div>$0.00</div>
              </div>
              <div className="shrink-0 mt-8 h-px bg-zinc-300" />
              <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-indigo-950">
                <div className="leading-[150%]">TOTAL</div>
                <div className="font-semibold tracking-normal text-right">
                  $288.08
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-6 text-indigo-950">
                <div className="leading-[150%]">Estimated Delivery by</div>
                <div className="my-auto font-semibold tracking-normal">
                  01 Feb, 2023
                </div>
              </div>
              <div className="flex gap-4 p-4 mt-6 text-gray-400 rounded-sm border border-solid border-zinc-300 leading-[150%]">
                <div className="flex-1">Coupon Code</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/63a0526c49e427113b611dc860b44cf256b2dc7428918c0f4a659849f88b4d5a?apiKey=7e7bfe05786241038aa7f92726712fab&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
              <div className="justify-center items-center px-10 py-4 mt-6 font-semibold tracking-normal text-white bg-teal-500 rounded max-md:px-5">
                Continue to Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



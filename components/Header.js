import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          priority
          objectPosition="left"
        />
      </div>
    </header>
    // <div className="shadow-sm border-b bg-white sticky top-0 z-50 ">
    //   <div className=" justify-between  max-w-6xl mx-5 xl:mx-auto">
    //     <div className="relative w-24 hidden lg:inline-grid cursor-pointer ">
    //       <Image
    //         src="https://links.papareact.com/ocw"
    //         layout="fill"
    //         objectFit="contain"
    //         priority={false}
    //       />
    //     </div>
    //     <div className="relative  w-10 m-2 lg:hidden flex-shrink-0 cursor-pointer"></div>
    //     <div className="max-w-xs">
    //       <div className="relative mt-1 p-3 rounded-md ">
    //         <input
    //           className="bg-gray-50 block-w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
    //           type="text"
    //           placeholder="Search"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Header;

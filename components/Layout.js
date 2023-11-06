// import { useSession, signIn, signOut } from "next-auth/react"
// import Nav from "@/components/Nav";
// import {useState} from "react";
// import Logo from "@/components/Logo";

// export default function Layout({children}) {
//   const [showNav,setShowNav] = useState(false);
//   const { data: session } = useSession();
//   if (!session) {
//     return (
//       <div className="bg-blue-900 w-screen  h-screen flex items-center">
//         <div className="text-center w-full">
//           <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-bgGray min-h-screen ">
//       <div className="block md:hidden flex items-center p-4">
//         <button onClick={() => setShowNav(true)}>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//             <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
//           </svg>
//         </button>
//         <div className="flex grow justify-center mr-6">
//           <Logo />
//         </div>
//       </div>
//       <div className="flex">
//         <Nav show={showNav} />
//         <div className="flex-grow p-4">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import { useState } from "react";
import Logo from "@/components/Logo";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();
  if (!session) {
    return (
      // <div className="flex bg-blue-500 justify-center py-32 align-center h-full">
      //   <div className="   bg-gray-100 rounded-lg p-8 flex flex-col ">
      //     <h2 className="text-gray-900 text-center font-bold  mb-5">
      //      well come to our Website
      //     </h2>
      //     <div className="relative mb-4">
      //       <label for="full-name" className="leading-7 text-sm text-gray-600">
      //         Full Name
      //       </label>
      //       <input
      //         type="text"
      //         id="full-name"
      //         name="full-name"
      //         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      //       />
      //     </div>
      //     <div className="relative mb-4">
      //       <label for="email" className="leading-7 text-sm text-gray-600">
      //         Email
      //       </label>
      //       <input
      //         type="email"
      //         id="email"
      //         name="email"
      //         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      //       />
      //     </div>
      //     <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      //       sign In
      //     </button>
      //     <button onClick={() => signIn('google')} className="bg-red-500 text-white mt-2 p-2 px-4 rounded-lg">Login with Google</button>
      //   </div>
      // </div>

<div className="flex bg-blue-500 justify-center py-20 align-center h-full">
<div className="w-full max-w-sm p-4 bg-blue-900 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8  ">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" autoComplete="off" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" autoComplete="off" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div className="flex items-start">
            <div className="flex align-cener items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                </div>
                <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <button onClick={() => signIn('google')} className="w-full text-white bg-white-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login with Google</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
</div>
</div>

      // <div className="bg-bgGray w-screen h-screen flex items-center">
      //   <div className="text-center w-full">
      //     <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
      //   </div>
      // </div>
    );
  }

  return (
    <div className="bg-bgGray min-h-screen ">
      <div className="block md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4">{children}</div>
      </div>
    </div>
  );
}

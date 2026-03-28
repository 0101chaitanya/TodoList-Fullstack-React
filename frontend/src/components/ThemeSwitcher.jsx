import React from 'react'

const ThemeSwitcher = () => {
    return (<label className="flex cursor-pointer gap-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
        </svg>
        <input type="checkbox" value="dracula"
               className="toggle theme-controller"/>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
    </label>)
    /* return (
         <div className="dropdown">
             <div tabIndex={0} role="button" className="btn m-1">
                 Theme
                 <svg
                     width="12px"
                     height="12px"
                     className="inline-block h-2 w-2 fill-current opacity-60"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 2048 2048">
                     <path
                         d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                 </svg>
             </div>
             <ul tabIndex="-1"
                 className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">
                 <li>
                     <input
                         type="radio"
                         name="theme-dropdown"
                         className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                         aria-label="Light"
                         value="emerald"/>
                 </li>
                 <li>
                     <input
                         type="radio"
                         name="theme-dropdown"
                         className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                         aria-label="Dark"
                         value="dracula"/>
                 </li>
             </ul>
         </div>

     )*/
}
export default ThemeSwitcher

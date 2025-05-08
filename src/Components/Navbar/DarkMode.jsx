import React, { useEffect, useState } from 'react'
import LightButton from '../../assets/light.png'
import DarkButton from '../../assets/dark.png'

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ?
        localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;

    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <div className='relative'>
            <img 
                src={LightButton} 
                alt="Switch to dark mode" 
                onClick={() => {
                    console.log("checked clicked", theme); // direct likha
                    setTheme(theme === "light" ? "dark" : "light"); // extra space hata diya
                }}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
            />
            <img 
                src={ DarkButton} 
                alt="Switch to light mode" 
                onClick={() => setTheme(theme === "light" ? "dark" : "light")} // `==` ko `===` se replace kiya
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 bg-white rounded-[29px] ${theme === "light" ? "opacity-0" : "opacity-100"}`}
            />
        </div>
    );
};

export default DarkMode;


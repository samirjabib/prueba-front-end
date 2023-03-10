import { useState, useEffect } from "react";

export const useProviderTheme = () => {

    const [ theme, setTheme ] = useState('dark')


    useEffect( () => {
        if(window.matchMedia('prefers-colo-sheme: dark').matches){
            setTheme('light')
        }
        setTheme('dark')
    }, [])
    
    useEffect(() => {
        if (theme === "dark") {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
      }, [theme]);
    
    
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
 
    
    return{
        handleThemeSwitch,
        
        theme
    }
}
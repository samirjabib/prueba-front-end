import { useEffect, useRef, useState } from "react";

export const useNavBar = () => {
  
    const [open, setOpen] = useState(false);

    const handleNavbar = () => {
      setOpen(!open);
    };
  
    const body = document.getElementsByTagName("body")[0];
  
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  
    const ref = useRef();
  
    useEffect(() => {
      document.addEventListener("click", handleOutSideClick, true);
  
      return document.removeEventListener("click", handleOutSideClick, false);
    }, []);
  
    const handleOutSideClick = ({ target }) => {
      if (!ref.current?.contains(target)) {
        setOpen(false);
      }
    };
  

    return{
        open,
        setOpen,
        ref,
        handleNavbar
    }
}
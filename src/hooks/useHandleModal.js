import { useEffect, useRef, useState } from "react";

export const useHandleModal = () => {
  const [modalOpen, setModalOpen] = useState();
  console.log(modalOpen);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const body = document.getElementsByTagName("body")[0];

  if (modalOpen) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }

  // const ref = useRef();

  // useEffect(() => {
  //   document.addEventListener("click", handleOutSideClick, true);

  //   return document.removeEventListener("click", handleOutSideClick, false);
  // }, []);

  // const handleOutSideClick = ({ target }) => {
  //   if (!ref.current?.contains(target)) {
  //     //   setModalOpen(false);
  //     console.log(target, 'soy el target')
  //   }
  // };

  return {
    // ref,
    modalOpen,
    handleModal,
  };
};

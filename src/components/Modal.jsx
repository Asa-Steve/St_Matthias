import { device } from "@/helpers/mediaQueries";
import { AnimatePresence, motion } from "framer-motion";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledModalWindow = styled(motion.div)`
  position: absolute;
  height: 100vh;
  inset: 0;
  background-color: #8080805b;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 3000;
  display: flex;

  @media ${device.desktop} {
    padding-inline: 3rem;
  }
`;

const WindowContent = styled.div`
  height: fit-content;
  max-height: 85%;
  margin: auto;
  width: calc(100% - 2rem);
  @media ${device.tablet} {
    width: fit-content;
    max-width: 1000px;
    overflow-y: auto;
    padding: 0;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  background-color: var(--color-grey-100);
  border: none;
`;

// creating the Modal Context
const ModalContext = createContext();

// creating properties needed
const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ opens, children }) => {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: (e) => {
      e.stopPropagation();
      open(opens);
    },
  });
};
const ModalWindow = ({ name, children }) => {
  const { openName, close } = useContext(ModalContext);

  return createPortal(
    <AnimatePresence>
      {openName === name && (
        <StyledModalWindow
          key={name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              close(); //close only when the actual background is clicked
            }
          }}
        >
          <Button onClick={close}>x</Button>
          <WindowContent>{children}</WindowContent>
        </StyledModalWindow>
      )}
    </AnimatePresence>,
    document.querySelector("#root")
  );
};

// adding properties to Modal
Modal.Open = Open;
Modal.Window = ModalWindow;

export default Modal;

export function useModalContext() {
  const context = useContext(ModalContext);

  if (context === undefined)
    throw new Error("context used outside of provider");
  return context;
}

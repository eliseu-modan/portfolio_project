import React, { useState } from "react";
import { motion } from "framer-motion";
import "../pages/cart.css"; 

const CartaComponent = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 500); 
  };

  return (
    <motion.div
      className="carta-container"
      initial={{ y: 0 }}
      animate={{ y: isOpen ? -window.innerHeight : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onClick={handleClick}
    >
      <div className="carta">
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Clique para abrir</p>
      </div>
    </motion.div>
  );
};

export default CartaComponent;

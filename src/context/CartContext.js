import React, { useState, createContext, useContext } from "react";

// Contexto/estado global
const CartContext = createContext();

// Hook para acceder al contexto
const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
  addedItems: [],
  totalPrice: 0,
};

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(INITIAL_STATE);

  // ---------> AÑADIR ITEM <---------
  const addItem = (item, cantidad) => {
    let itemToAdd = Object.assign(item, { cantidad: cantidad });

    // Si existe el item en el carrito, actualizar su cantidad.
    if (isInCart(itemToAdd.id)) {
      const updateItemsAdded = cart.addedItems.map((producto) => {
        if (producto.id === itemToAdd.id)
          return {
            ...producto,
            cantidad:
              producto.cantidad < producto.stock
                ? producto.cantidad + cantidad
                : producto.stock,
          };
        return producto;
      });
      return setCart({
        addedItems: updateItemsAdded,
        totalPrice: calculoTotalPrice(itemToAdd, cantidad),
      });
    }

    setCart({
      addedItems: [...cart.addedItems, itemToAdd],
      totalPrice: calculoTotalPrice(itemToAdd, cantidad),
    });
  };

  // PRE: item -> item con sus valores
  //      cantidad -> la cantidad del objeto que se AGREGARÁ
  //                  (no es del mismo item.cantidad)
  // POST: retorna el precio total respecto a la cantidad e
  //       item que se agregará
  const calculoTotalPrice = (item, cantidad) => {
    // Si el item NO tiene descuento, se toma el precio original.
    if (item.descuento === "") return cart.totalPrice + item.price * cantidad;

    let formatoDescuento = item.price - (item.descuento * item.price) / 100;
    return cart.totalPrice + formatoDescuento * cantidad;
  };

  // ---------> VERIFICA SI UN ITEM ESTÁ EN EL CART <---------
  const isInCart = (id) => {
    return cart.addedItems.some((addedItem) => addedItem.id === id)
      ? true
      : false;
  };

  // ---------> REMOVER ITEM <---------
  const removeItem = (id) => {
    let updateTotalPrice = 0;
    const updateItemsAdded = cart.addedItems.filter((producto) => {
      if (producto.id !== id) {
        // Actualizo el precio total ya que se está eliminando
        // un elemento con su cantidad seleccionada.
        updateTotalPrice += decrementTotalPrice(producto);
      }
      return producto.id !== id;
    });
    setCart({
      totalPrice: updateTotalPrice,
      addedItems: updateItemsAdded,
    });
  };

  // PRE: item -> item con sus valores
  // POST: retorna el precio total ACTUALIZADO al
  //       REMOVER un item
  const decrementTotalPrice = (item) => {
    let updateTotalPrice = 0;
    if (item.descuento === "")
      return (updateTotalPrice += item.price * item.cantidad);

    let formatoDescuento = item.price - (item.descuento * item.price) / 100;
    return (updateTotalPrice += formatoDescuento * item.cantidad);
  };

  // ---------> LIMPIO EL CART <---------
  const clear = () => {
    setCart(INITIAL_STATE);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, useCart };

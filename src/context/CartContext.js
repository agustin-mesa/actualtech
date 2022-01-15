import React, { useState, createContext, useContext, useEffect } from "react";

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
  const [itemsCantidadAlcanzada, setItemsCantidadAlcanzada] = useState([]);

  // ---------> AÑADIR ITEM <---------
  const addItem = (item, cantidad) => {
    item = { ...item, cantidad: cantidad, limiteAlcanzado: false };
    item.limiteAlcanzado = verifyItemLimiteAlcanzado(
      item,
      cantidad,
      cart.addedItems
    );

    // Si existe el item en el carrito, actualizar su cantidad.
    if (isInCart(item.id)) {
      const updateItemsAdded = cart.addedItems.map((producto) => {
        if (producto.id === item.id) {
          return (item = {
            ...producto,
            cantidad:
              producto.cantidad + cantidad < producto.stock
                ? producto.cantidad + cantidad
                : producto.stock,
          });
        }
        return producto;
      });

      item.limiteAlcanzado = verifyItemLimiteAlcanzado(
        item,
        cantidad,
        updateItemsAdded
      );

      verifyUpdateItemsAlcanzados(updateItemsAdded);

      if (item.limiteAlcanzado) {
        setCart({
          addedItems: updateItemsAdded,
          totalPrice: cart.totalPrice + calculoItemPorCantidad(item, cantidad),
        });
      }
      return setCart({
        addedItems: updateItemsAdded,
        totalPrice: cart.totalPrice + calculoItemPorCantidad(item, cantidad),
      });
    }
    setCart({
      addedItems: [...cart.addedItems, item],
      totalPrice: cart.totalPrice + calculoItemPorCantidad(item, cantidad),
    });
  };
  // PRE: item -> item con sus valores
  //      cantidad -> la cantidad del objeto que se AGREGARÁ
  //                  (no es del mismo item.cantidad)
  // POST: retorna el precio total respecto a la cantidad e
  //       item que se agregará
  const calculoItemPorCantidad = (item, cantidad) => {
    // Si el item NO tiene descuento, se toma el precio original.
    if (item.descuento === "") return item.price * cantidad;

    let formatoDescuento = item.price - (item.descuento * item.price) / 100;
    return formatoDescuento * cantidad;
  };

  // ---------> VERIFICA SI UN ITEM ESTÁ EN EL CART <---------
  const isInCart = (id) => {
    return cart.addedItems.some((addedItem) => addedItem.id === id)
      ? true
      : false;
  };

  const verifyItemLimiteAlcanzado = (item, cantidad, addedItems) => {
    return addedItems.some((producto) => {
      if (
        (producto.id === item.id && producto.cantidad === producto.stock) ||
        (producto.id === item.id &&
          producto.cantidad + cantidad > producto.stock)
      ) {
        return true;
      }
      return false;
    });
  };

  const verifyUpdateItemsAlcanzados = (updateItemsAdded) => {
    const itemsAlcanzados = updateItemsAdded.map((producto) => {
      if (producto.limiteAlcanzado)
        return {
          id: producto.id,
          name: producto.title,
          limiteAlcanzado: producto.limiteAlcanzado,
        };
    });
    setItemsCantidadAlcanzada(itemsAlcanzados);
  };

  const verifyItemsAlcanzados = () => {
    const itemsAlcanzados = itemsCantidadAlcanzada.map((producto) => {
      return !producto.limiteAlcanzado;
    });
    setItemsCantidadAlcanzada(itemsAlcanzados);
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
    verifyUpdateItemsAlcanzados(updateItemsAdded);
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
    verifyItemsAlcanzados();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clear,
        itemsCantidadAlcanzada,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, useCart };

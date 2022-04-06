import { useState } from "react";
import { nanoid } from "nanoid";

export const useItems = (initialItems = []) => {
  const [items, setItems] = useState(initialItems);
  const [itemsError, setItemsError] = useState("");

  const itemRowValueOnChange = (itemId) => {
    const { target } = event;
    const { name, value } = target;

    const itemIndex = items.findIndex((item) => item.id === itemId); //console.log(itemIndex) - itemIndex should be other than -1;

    const copiedItem = Object.assign({}, items[itemIndex]);
    copiedItem[name] = target.type === "checkbox" ? target.checked : value;

    //console.log(copiedItem)

    setItems([
      ...items.map((item) => (item.id === itemId ? copiedItem : item)),
    ]);
  };

  const addItemRow = () => {
    setItems([
      ...items,
      { id: nanoid(), material: "", weight: "", price: "", paid: false },
    ]);
  };

  const deleteItemRow = (itemId) => {
    const itemIndex = items.findIndex((item) => item.id === itemId);
    const newItems = [...items];
    newItems.splice(itemIndex, 1);

    setItems(newItems);
  };

  const itemsValidation = () => {
    if (items.length >= 1) {
      const isEveryItemValid = items.every(
        (item) =>
          item.material !== "" && item.weight !== "" && item.price !== ""
      );
      if (isEveryItemValid) {
        setItemsError("");
        return true;
      } else {
        setItemsError(
          "Hay uno o más campos de fila en la tabla de prendas sin rellenar."
        );
        return false;
      }
    } else {
      setItemsError(
        "No puedes registrar o actualizar una compra con datos de prenda vacíos."
      );
      return false;
    }
  };

  return {
    items,
    setItems,
    itemRowValueOnChange,
    itemsValidation,
    addItemRow,
    deleteItemRow,
    itemsError,
  };
};

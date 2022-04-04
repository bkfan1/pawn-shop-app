import { useState } from "react";
import { nanoid } from "nanoid";

export const useItems = (initialItems = []) => {
  const [items, setItems] = useState(initialItems);

  const itemRowValueOnChange = (itemId) => {
    const { target } = event;
    const { name, value } = target;

    const itemIndex = items.findIndex((item) => item.id === itemId); //console.log(itemIndex);

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

  const itemsValidation = ()=>{

    if(items.length >= 1){
      const correctItems = items.every((item)=> item.material !== "" && item.weight !== "" && item.price !== "");
      
      if(correctItems){return true;}
      else{alert("Tienes uno o varias campos sin rellenar!")}

    }
    else{
      alert("No puedes registrar una compra vacía!")
      return false;
    }

  }

  return { items, setItems, itemRowValueOnChange, itemsValidation, addItemRow, deleteItemRow };
};

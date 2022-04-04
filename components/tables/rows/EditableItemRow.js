export default function EditableItemRow({ item, itemRowValueOnChange, deleteItemRow }) {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="material"
          value={item.material}
          className="rowInput"
          onChange={()=>itemRowValueOnChange(item.id)}
        />
      </td>

      <td>
        <input
          type="text"
          name="weight"
          value={item.weight}
          className="rowInput"
          onChange={()=>itemRowValueOnChange(item.id)}
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          value={item.price}
          className="rowInput"
          onChange={()=>itemRowValueOnChange(item.id)}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="paid"
          defaultChecked={item.paid}
          onChange={()=>itemRowValueOnChange(item.id)}
        />
      </td>

      <td>
        <button onClick={()=>deleteItemRow(item.id)} className="button is-danger is-size-7">
          <i className="bi bi-trash" />
        </button>
      </td>
    </tr>
  );
}

export default function EditableRow({
  rowId,
  cells,
  deleteRow,
  rowCellInputValueOnChange,
}) {
  return (
    <>
      <tr>
        {cells.map((cell, index) => (
          <td key={cell.id}>
            {cell.inputType === "checkbox" ? (
              <input
                type="checkbox"
                checked={cell.inputValue}
                name={cell.inputName}
                onChange={(e) => rowCellInputValueOnChange(rowId)}
              />
            ) : cell.inputType === "button" ? (
              <button onClick={()=>deleteRow(rowId)} className="button is-danger is-size-7" title="Eliminar fila">
                <i className="bi bi-trash" />
              </button>
            ) : (
              <input
                type={cell.inputType}
                value={cell.inputValue}
                name={cell.inputName}
                onChange={(e) => rowCellInputValueOnChange(rowId)}
                className="rowInput"
                placeholder={cell.cellName}
              />
            )}
          </td>
        ))}
      </tr>
    </>
  );
}

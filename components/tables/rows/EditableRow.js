import { useRouter } from "next/router";

export default function EditableRow({
  rowId,
  cells,
  deleteRow,
  rowCellInputValueOnChange,
}) {
  const router = useRouter();
  const { pathname } = router;
  const paths = ["/loans", "/jewelry", "/pawns"];

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
                disabled={paths.includes(pathname) ? true :false}
              />
            ) : (
              <input
                type={cell.inputType}
                value={cell.inputValue}
                name={cell.inputName}
                onChange={(e) => rowCellInputValueOnChange(rowId)}
                className="rowInput"
                placeholder={cell.cellName}
                disabled={paths.includes(pathname) ? true :false}
              />
            )}
          </td>
        ))}
        {paths.includes(pathname) ? null : <td>
          <button title="Eliminar fila" className="button is-danger is-size-7" onClick={()=>deleteRow(rowId)}><i className="bi bi-trash"/></button>
        </td>}
      </tr>
    </>
  );
}

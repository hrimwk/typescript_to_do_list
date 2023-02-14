import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkTodo, deleteTodo, editTodo } from '../reduxToolkit/todoSlice';

interface propsType {
  dataId: number;
  dataValue: string;
  listsCheck: boolean;
}
function EditRemove({ dataId, dataValue, listsCheck }: propsType) {
  const [edit, setEdit] = useState<boolean>(false);
  const [newList, setNewList] = useState<string>(dataValue);
  const dispatch = useDispatch();

  const editList = () => {
    if (edit) {
      dispatch(editTodo({ dataId, newList, listsCheck }));
    }
    setEdit(!edit);
  };

  const deleteList = (e: React.MouseEvent<HTMLSpanElement>) => {
    dispatch(deleteTodo(e.currentTarget.id));
  };

  const changeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(checkTodo(e.currentTarget.name));
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewList(e.target.value);
  };

  return (
    <li className="flex-between-center mb10">
      {edit ? (
        <input type="text" defaultValue={dataValue} onChange={changeInput} />
      ) : (
        <div>
          <input
            type="checkbox"
            className="check-box mr10"
            onChange={changeCheck}
            checked={listsCheck}
            name={`${dataId}`}
          />
          <label className="mr50">{dataValue}</label>
        </div>
      )}
      <div>
        <span className="edit mr5" onClick={editList}>
          수정
        </span>
        <span className="delete" onClick={deleteList} id={`${dataId}`}>
          삭제
        </span>
      </div>
    </li>
  );
}

export default EditRemove;

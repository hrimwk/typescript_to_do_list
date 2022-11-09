import { useState } from 'react';
interface List {
  id: number;
  value: string | null;
  checked?: boolean;
}

interface propsType {
  lists: List[];
  setList: (data: List[]) => List[];
  dataId: number;
  dataValue: string;
  listsCheck: boolean;
}
function EditRemove({ lists, setList, dataId, dataValue, listsCheck }: propsType) {
  const [edit, setEdit] = useState<boolean>(false);
  const [newList, setNewList] = useState<string | null>(null);
  const editList = () => {
    if (edit) {
      const changedList = { id: dataId, value: newList, checked: listsCheck };
      const newLists = lists.filter((list: { id: number }) => list.id !== dataId);
      setList([...newLists, changedList].sort((f, s) => f.id - s.id));
    }

    setEdit(!edit);
  };

  const deleteList = (e: React.MouseEvent<HTMLSpanElement>) => {
    setList(lists.filter((todo: { id: { toString: () => string } }) => todo.id.toString() !== e.currentTarget.id));
  };
  const changeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheck = lists.map((data) => ({
      ...data,
      checked: data.id.toString() === e.currentTarget.name ? !data.checked : data.checked,
    }));
    setList(newCheck);
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewList(e.target.value);
  };

  return (
    <li className="flex-between mb10">
      {edit ? (
        <input type="text" defaultValue={dataValue} onChange={changeInput} />
      ) : (
        <div>
          <input type="checkbox" className="check-box" onChange={changeCheck} checked={listsCheck} name={`${dataId}`} />
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

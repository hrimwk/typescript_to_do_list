import React, { useState } from 'react';
import '../assets/styles/home.scss';
import EditRemove from '../components/EditRemove';

function Home() {
  interface List {
    id: number;
    value: string;
    checked: boolean;
  }
  const [lists, setList] = useState<List[]>([]);
  const [todoInput, setInput] = useState<string>('');
  const [buttonDisable, setDisable] = useState<boolean>(true);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    e.target.value.length === 0 ? setDisable(true) : setDisable(false);
  };

  const addList = () => {
    setList([
      ...lists,
      { id: lists.length === 0 ? 0 : lists[lists.length - 1].id + 1, value: todoInput, checked: false },
    ]);
    setInput('');
  };

  return (
    <div className="container">
      <div className="wrap">
        <h1 className="title">TO DO LIST</h1>
        <section>
          <form className="add-container flex-between" onSubmit={(e) => e.preventDefault()}>
            <input className="add-content" onChange={inputChange} value={todoInput} type="text" />
            <button className="add" onClick={addList} disabled={buttonDisable}>
              추가
            </button>
          </form>
        </section>
        <section className="list-container">
          <div className="list">
            <ul>
              {lists.length > 0 &&
                lists.map((data) => {
                  return (
                    <EditRemove
                      key={data.id}
                      lists={lists}
                      dataValue={data.value}
                      setList={setList}
                      dataId={data.id}
                      listsCheck={data.checked}
                    />
                  );
                })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;

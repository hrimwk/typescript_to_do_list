import React, { useState } from 'react';
import { Value } from 'sass';
import '../assets/styles/home.scss';

function Home() {
  interface List {
    id: number;
    value: string;
  }
  const [lists, setList] = useState<List[] | null>([]);
  const [todoInput, setInput] = useState<string>('');
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const deleteList = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.log('?', e.currentTarget.id);
    setList(lists.filter((todo) => todo.id.toString() !== e.currentTarget.id));
  };
  const addList = () => {
    let newList = lists.map((data, idx) => {
      return { id: idx, value: data.value };
    });
    setList([...newList, { id: newList.length, value: todoInput }]);
    setInput('');
  };
  return (
    <div className="container">
      <h1 className="title">TO DO LIST</h1>
      <section className="list-container">
        <div className="list">
          <ul>
            {lists.map((data) => {
              return (
                <li className="d-flex" key={data.id}>
                  <input type="checkbox" className="check-box" />
                  <label className="mr50">{data.value}</label>
                  <span className="delete" onClick={deleteList} id={`${data.id}`}>
                    삭제
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="add-container d-flex">
        <input className="add-content" onChange={inputChange} value={todoInput} />
        <span className="add" onClick={addList}>
          +
        </span>
      </section>
    </div>
  );
}

export default Home;

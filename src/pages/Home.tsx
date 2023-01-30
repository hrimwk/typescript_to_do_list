import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TodoList } from '../redux/reducer';
import '../assets/styles/home.scss';
import EditRemove from '../components/EditRemove';
import { addTodo } from '../redux/actions';

function Home() {
  const [todoInput, setInput] = useState<string>('');
  const [buttonDisable, setDisable] = useState<boolean>(true);
  const dispatch = useDispatch();
  const lists = useSelector((state: TodoList[]) => state);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    e.target.value.length === 0 ? setDisable(true) : setDisable(false);
  };

  const addList = () => {
    dispatch(addTodo(todoInput));
    setInput('');
  };

  return (
    <div className="container">
      <div className="wrap">
        <h1 className="title">TO DO LIST</h1>
        <section>
          <form className="add-container flex-between" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="할 일을 추가해주세요."
              className="add-content"
              onChange={inputChange}
              value={todoInput}
              type="text"
              aria-label="add-content"
            />
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
                  return <EditRemove key={data.id} listsCheck={data.checked} dataId={data.id} dataValue={data.value} />;
                })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;

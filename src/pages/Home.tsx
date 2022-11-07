import '../assets/styles/home.scss';

function Home() {
  return (
    <div className="container">
      <h1>TO DO LIST</h1>
      <section className="list-container">
        <div className="list d-flex">
          <input type="checkbox" />
          <p className="mr50">내용이 들어갑니다</p>
          <span>삭제</span>
        </div>
      </section>
      <section className="add-container">
        <input className="add-content" />
        <span className="add">+</span>
      </section>
    </div>
  );
}

export default Home;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/common.scss';
import './assets/styles/reset.scss';
import { Provider } from 'react-redux';
import { store } from './reduxToolkit/store';

function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default Router;

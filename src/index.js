import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { addTodo } from './action';
import Home from './components/home';
import SignIn from './components/signIn';
import SignUp from './components/signUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer,applyMiddleware(ReduxThunk))


const Roots = () => {
  let user = true




   store.dispatch(addTodo())

  return (
    <Provider store={store}>

    <BrowserRouter>
    <Routes>
      <Route exact index path="/" element={user ? <Home /> : <SignIn />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/register" element={user ? <Navigate to="/" replace /> : <SignUp />} />
        
          <Route
        path="*"
        element={<Navigate to="/" replace />}
    />

          {/* <Route path="*" element={<NotFound />} /> */}

    </Routes>
  </BrowserRouter>
  </Provider>
  )

}



root.render(<Roots />, document.getElementById('root'));



// root.render(
  
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//   </Provider>
//   </React.StrictMode>
// );


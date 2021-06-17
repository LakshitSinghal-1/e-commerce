import React from 'react';
import 'antd/dist/antd.css';
import store from "./Redux/store";
import {Provider} from "react-redux"
import AppLayout from './Components/Layout';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <AppLayout />
    </div>
    </Provider>
  );
}

export default App;

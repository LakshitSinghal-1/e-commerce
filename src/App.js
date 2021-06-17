import React from 'react';
import store from "./Redux/store";
import {Provider} from "react-redux"
import AppLayout from './Components/Layout';
import 'antd/dist/antd.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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

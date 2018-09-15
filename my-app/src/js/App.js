import React, { Component } from 'react';
import ReactDOM from "react-dom";
// import logo from './logo.svg';
import Layout from "./components/Layout";
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
//         </header>

//       </div>
//     );
//   }
// }

const app = document.getElementById('app');
ReactDOM.render(<Layout/>,app);

export default App;

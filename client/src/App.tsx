import { Outlet } from "react-router-dom";
import "./css/App.scss";
import Header from "./Header";
import UserDetail from "./UserDetail";
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <div className="list">
          <UserList />
        </div>
        <div className="detail">
          <UserDetail />
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Employees from "./Employees";
import Employee from "./Employee";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Employees} />
          <Route path="/employee/:id" component={Employee} />
        </header>
      </div>
    </Router>
  );
}

export default App;

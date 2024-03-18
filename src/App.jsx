import Maincontent from "./components/Maincontent";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";


function App() {

  return (
    <div id="portfolio">
      <h1>Fábio Henrique</h1>
      <Sidebar />
      <Maincontent />
    </div>
  )
  }
export default App

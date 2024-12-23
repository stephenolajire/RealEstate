import { GlobalProvider } from "./global/GlobalContext";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
import { GlobalProvider } from "./global/GlobalContext";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search/>}/>
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
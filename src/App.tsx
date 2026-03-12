import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Prevention from './pages/Prevention';
import DietGuide from './pages/DietGuide';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="prevention" element={<Prevention />} />
        <Route path="diet" element={<DietGuide />} />
      </Route>
    </Routes>
  );
}

export default App;

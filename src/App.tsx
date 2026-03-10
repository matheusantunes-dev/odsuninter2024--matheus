import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';
import Proconsvate from './pages/Proconsvate';
import Quiz from './pages/Quiz';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/proconsvate" element={<Proconsvate />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
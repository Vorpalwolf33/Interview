import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;

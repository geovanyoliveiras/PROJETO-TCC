import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PainelAluno from './pages/PainelAluno';
import PainelProfessor from './pages/PainelProfessor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/aluno" element={<PainelAluno />} />
        <Route path="/professor" element={<PainelProfessor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
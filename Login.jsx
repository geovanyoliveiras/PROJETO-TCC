import { useState } from 'react';
import logo from '../assets/logoetc.webp';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [matricula, setMatricula] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: chamar o back-end (Flask) quando ele existir
    console.log('Matrícula digitada:', matricula);
    navigate('/aluno');
  }

  return (
    <div className="pagina-login">
      <div className="cartao-login">
        <div className="cabecalho">
          <span className="sistema-nome">Sistema de Chamada</span>
        </div>
        <div className="logo-wrapper">
          <img src={logo} alt="Escola Técnica de Ceilândia" className="logo-instituicao" />
        </div>
        <form className="form-login" onSubmit={handleSubmit}>
          <label htmlFor="matricula">Matrícula</label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            placeholder="Digite sua matrícula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
            autoFocus
          />
          <button type="submit">Entrar</button>
        </form>
        <p className="rodape">Registro de presença em sala de aula</p>
      </div>
    </div>
  );
}

export default Login;
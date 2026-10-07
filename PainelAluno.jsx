import { useState } from 'react';
import { Link } from 'react-router-dom';

function PainelAluno() {
  const [registros, setRegistros] = useState([
    { data: '18/09/2026', aula: 'Engenharia de Software', status: 'aprovado' },
    { data: '17/09/2026', aula: 'Banco de Dados', status: 'pendente' },
    { data: '16/09/2026', aula: 'Engenharia de Software', status: 'aprovado' },
  ]);

  const pendentes = registros.filter((r) => r.status === 'pendente').length;

  function handleRegistrarPresenca() {
    // TODO: enviar pro back-end (Flask) quando ele existir
    const novoRegistro = {
      data: new Date().toLocaleDateString('pt-BR'),
      aula: 'Engenharia de Software',
      status: 'pendente',
    };
    setRegistros([novoRegistro, ...registros]);
  }

  return (
    <div>
      <header className="topo">
        <span className="sistema-nome">Sistema de Chamada</span>
        <div className="usuario-info">
          <span>Matrícula: 2024001234</span>
          <Link to="/" className="link-sair">Sair</Link>
        </div>
      </header>

      <main className="conteudo">
        <section className="resumo">
          <div className="resumo-item">
            <span className="resumo-numero">92%</span>
            <span className="resumo-label">Frequência geral</span>
          </div>
          <div className="resumo-item">
            <span className="resumo-numero">{registros.length}</span>
            <span className="resumo-label">Aulas registradas</span>
          </div>
          <div className="resumo-item">
            <span className="resumo-numero">{pendentes}</span>
            <span className="resumo-label">Pendentes de aprovação</span>
          </div>
        </section>

        <section className="cartao-aula-atual">
          <div className="aula-info">
            <span className="label-secao">Aula atual</span>
            <h1>Engenharia de Software</h1>
            <p>Hoje, 14h às 16h</p>
          </div>
          <button className="botao-ponto" onClick={handleRegistrarPresenca}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Registrar Presença
          </button>
        </section>

        <section className="cartao-historico">
          <h2>Presenças registradas</h2>
          <table className="tabela-historico">
            <thead>
              <tr>
                <th>Data</th>
                <th>Aula</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((registro, indice) => (
                <tr key={indice}>
                  <td>{registro.data}</td>
                  <td>{registro.aula}</td>
                  <td>
                    <span className={`status status-${registro.status}`}>
                      {registro.status === 'aprovado' ? 'Aprovado' : 'Pendente'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default PainelAluno;

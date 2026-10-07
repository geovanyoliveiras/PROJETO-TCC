import { useState } from 'react';
import { Link } from 'react-router-dom';

function PainelProfessor() {
  const [registros, setRegistros] = useState([
    { id: 1, aluno: '2024001234', turma: 'Engenharia de Software', data: '18/09/2026', status: 'pendente' },
    { id: 2, aluno: '2024005678', turma: 'Engenharia de Software', data: '18/09/2026', status: 'pendente' },
    { id: 3, aluno: '2024009012', turma: 'Banco de Dados', data: '17/09/2026', status: 'aprovado' },
    { id: 4, aluno: '2024003456', turma: 'Engenharia de Software', data: '17/09/2026', status: 'aprovado' },
  ]);

  const turmas = [...new Set(registros.map((r) => r.turma))];
  const [turmaAtiva, setTurmaAtiva] = useState(turmas[0]);

  const registrosDaTurma = registros.filter((r) => r.turma === turmaAtiva);
  const pendentes = registrosDaTurma.filter((r) => r.status === 'pendente').length;
  const aprovados = registrosDaTurma.filter((r) => r.status === 'aprovado').length;
  const recusados = registrosDaTurma.filter((r) => r.status === 'recusado').length;

  function atualizarStatus(id, novoStatus) {
    // TODO: enviar pro back-end (Flask) quando ele existir
    setRegistros(
      registros.map((registro) =>
        registro.id === id ? { ...registro, status: novoStatus } : registro
      )
    );
  }

  return (
    <div>
      <header className="topo">
        <span className="sistema-nome">Sistema de Chamada</span>
        <div className="usuario-info">
          <span>Professor(a)</span>
          <Link to="/" className="link-sair">Sair</Link>
        </div>
      </header>

      <main className="conteudo">
        <nav className="abas-nav">
          {turmas.map((turma) => (
            <button
              key={turma}
              className={turma === turmaAtiva ? 'aba-ativa' : ''}
              onClick={() => setTurmaAtiva(turma)}
            >
              {turma}
            </button>
          ))}
        </nav>

        <div className="aba-conteudo">
          <section className="resumo">
            <div className="resumo-item">
              <span className="resumo-numero">{pendentes}</span>
              <span className="resumo-label">Pendentes de aprovação</span>
            </div>
            <div className="resumo-item">
              <span className="resumo-numero">{aprovados}</span>
              <span className="resumo-label">Aprovados</span>
            </div>
            <div className="resumo-item">
              <span className="resumo-numero">{recusados}</span>
              <span className="resumo-label">Recusados</span>
            </div>
          </section>

          <section className="cartao-historico">
            <h2>Registros de presença — {turmaAtiva}</h2>
            <table className="tabela-historico">
              <thead>
                <tr>
                  <th>Matrícula</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {registrosDaTurma.map((registro) => (
                  <tr key={registro.id}>
                    <td>{registro.aluno}</td>
                    <td>{registro.data}</td>
                    <td>
                      <span className={`status status-${registro.status}`}>
                        {registro.status === 'aprovado'
                          ? 'Aprovado'
                          : registro.status === 'recusado'
                          ? 'Recusado'
                          : 'Pendente'}
                      </span>
                    </td>
                    <td>
                      {registro.status === 'pendente' && (
                        <div className="acoes-aprovacao">
                          <button
                            className="botao-aprovar"
                            onClick={() => atualizarStatus(registro.id, 'aprovado')}
                          >
                            Aprovar
                          </button>
                          <button
                            className="botao-recusar"
                            onClick={() => atualizarStatus(registro.id, 'recusado')}
                          >
                            Recusar
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PainelProfessor;

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [gato, setGato] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const buscarGato = async () => {
    try {
      setCarregando(true);
      setErro(null);
      const resposta = await fetch("https://api.thecatapi.com/v1/images/search");
      if (!resposta.ok) throw new Error("Erro ao buscar imagem");

      const dados = await resposta.json();
      setGato(dados[0]);
    } catch (erro) {
      setErro("Não foi possível carregar o gato. Tente novamente");
      console.error(erro);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarGato();
  }, []);

  return (
    <div className="container">
      <h1>Imagens Aleatórias de Gatos</h1>

      {carregando && <p className="loading">Carregando imagem...</p>}
      {erro && <p className="error">{erro}</p>}

      {gato && (
        <img src={gato.url} alt="Gato fofo" />
      )}

      <button onClick={buscarGato}>Próxima imagem</button>
    </div>
  );
}

export default App;
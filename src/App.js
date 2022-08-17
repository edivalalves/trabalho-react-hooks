import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import { useState } from 'react';

function App() {

  const [indiceVetor, setindiceVetor] = useState('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [vetor, setVetor] = useState([]);

  const cadastrar = () =>{
    let obj = {'nome':nome, 'idade':idade, 'cidade':cidade}
    setVetor([...vetor, obj]);

    setNome('');
    setIdade('');
    setCidade('');
  }

  const selecionar = (indice) => {
    setindiceVetor(indice);

    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade);

    setBtnCadastrar(false);
  }

  const alterar = () => {
    let obj = {'nome':nome, 'idade':idade, 'cidade':cidade}

    let copiaVetor = [...vetor];
    copiaVetor[indiceVetor] = obj;

    setVetor(copiaVetor);

    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);
  }

  const remover = () => {
    let copiaVetor = [...vetor];
    copiaVetor.splice(indiceVetor, 1);
    setVetor(copiaVetor);

    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);

  }

  const cancelar = () => {
    setNome('');
    setIdade('');
    setCidade('');

    setBtnCadastrar(true);
  }


  return (
    <div>
      <Formulario btnCadastrar={btnCadastrar} setNome={setNome} setIdade={setIdade} setCidade={setCidade} cadastrar={cadastrar} alterar={alterar} remover={remover} cancelar={cancelar} nome={nome} idade={idade} cidade={cidade} />
      <Tabela vetor={vetor} selecionar={selecionar} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import Perfil from './components/Perfil'
import Formulario from './components/Formulario';
import ReposList from './components/ReposList';


function App() {
  const nome = "Rodrigo";

  function retornaNome() {
    return nome;
  }

  const pessoa = {
    nome: 'Maria'
  }

  let estaDeDia = false;

  const [formularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
   
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    
     

      {/* <h1>Ola, {nome}</h1>
    <h2>{retornaNome()}</h2>
    <h2>{ pessoa.nome}</h2>
    { estaDeDia ? 'Bom dia' : 'Boa tarde'}


    { formularioVisivel && (
      <Formulario/>
    )}
    <button onClick={()=>setFormularioVisivel(!formularioVisivel)}> Toggle</button> */}



    </>
  )
}




export default App

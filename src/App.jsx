import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [ tempUserName, setTempUserName ] = useState("");
  const [ userName, setUserName ] = useState("")

  const searchUser = () => {
    setUserName(tempUserName);
  }

  return (
    <>
      <input type="text" onChange={e => setTempUserName(e.target.value)} />
      <button type="button" onClick={searchUser}>Procurar</button>

      {userName.length >= 1 && (
        <>
          <Perfil userName={userName} />
          <ReposList userName={userName} />
        </>
      )}
      {/* {formularioEstaVisivel &&  <Formulario />}
      <button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>
        Toggle Formulario
      </button> */}
    </>
  )
}

export default App

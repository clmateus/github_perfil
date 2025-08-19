import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [userName, setUserName] = useState("")

  return (
    <>
      <input type="text" onBlur={e => setUserName(e.target.value)} />

      {userName.length > 4 && (
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

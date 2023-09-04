import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import './global.css'


function App() {
  return (
    <>
      <Perfil nome="linsbruno"/>
      <ReposList/>
      {/* {<Formulario/>} */}
    </>
  )
}

export default App

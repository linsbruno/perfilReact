import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";


function App() {
  return (
    <>
      <Perfil nome="Bruno Lins" avatar="https://github.com/linsbruno.png"/>
      <ReposList/>
      <Formulario/>
    </>
  )
}

export default App

import './perfil.css'

const Perfil = ({avatar, nome}) => {
    

    return (
        <>
        <img className='perfil-avatar' src={avatar} />
        <h3 className='perfil-titulo'> {nome} </h3>
        </>
    )
}

export default Perfil;
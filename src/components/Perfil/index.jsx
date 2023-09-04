import styles from './Perfil.module.css';



const Perfil = ({nome}) => {
    

    return (
        <header className={styles.header}>
        <img className={styles.avatar} src={`https://github.com/${nome}.png`} />
        <h1 className={styles.name}> {nome} </h1>
        </header>
    )
}

export default Perfil;
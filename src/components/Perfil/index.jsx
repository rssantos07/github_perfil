import styles from './Perfil.module.css'

export default function Perfil ({nomeUsuario}) {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src ={`https://github.com/${nomeUsuario}.png`}></img>
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}


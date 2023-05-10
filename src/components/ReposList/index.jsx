import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])
    const [carregando, setCarregando] = useState([])

    useEffect(() => {
        setCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setCarregando(false)
                    setRepos(resJson)
                }, 1000)
            })
    },[nomeUsuario])

    return (
        <div className="container">
        {carregando ?  (<h1 className='texto'>Carregando ...</h1>) : (
            <ul className={styles.list}>
            {/* {repos.map(repositorio) => ( */ }
                {repos.map(({id,name, language,html_url,owner}) => (
                    <li className={styles.listItem}  key={id}>
                        <div className={styles.itemName}>
                        <b>Nome:</b> {name}
                        </div>
                        <div className={styles.itemLanguage}>
                        <b>Linguagem:</b> {language}
                        </div>
                        <div>
                        <a  className={styles.itemLink} target="_blank" href={html_url}>Visitar projeto</a>
                        </div>
                        <div className={styles.itemOwner}>
                        <b>Criador: </b>{owner.login}
                        </div>
                    </li>
                ))}
            </ul>
        )}
        
            
        </div>

    )
}

export default ReposList
import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ( {userName} ) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 3000)
            })
    }, [userName])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                {/* {repos.map(repositorio => ( */}
                {repos.map(({id, name, language, html_url}) => (
                    <li key={id} className={styles.listItem}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> 
                            {name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> 
                            {language}
                        </div>
                        <a href={html_url} target="_blank" className={styles.itemLink}>
                            Visitar no Github
                        </a>
                    </li>
                ))}
            </ul >
            )}
            
        </div>
    )
}

export default ReposList
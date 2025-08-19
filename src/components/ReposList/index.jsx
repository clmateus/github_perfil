import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ userName }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setErro(false)
                    setRepos(resJson)
                }, 3000)
            })
            .catch(erro => {
                setEstaCarregando(false);
                setErro("Este usuário não existe");
            })
    }, [userName])

    return (
        <div className="container">

            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : erro ? (
                <h1>{erro}</h1>
            ) : (
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url }) => (
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
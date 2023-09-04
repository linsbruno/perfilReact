import { useState, useEffect } from "react";
import styles from './ReposList.module.css';

const ReposList =() => {
    const [repos, setRepos] =useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/linsbruno/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);

        })
    },[]);

    return (
        <div className="container">
            <ul className={styles.list}>
            {repos.map( ({id, name, language, html_url})=> (
                <li className={styles.listItem} key={id}>
                    <div className={styles.itemName}>
                    <b>Nome:</b> {name} <br />
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem:</b> {language}
                    </div>
                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Guithub</a>
                </li>
            ))}
            
        </ul>
        </div>
    )
}

export default ReposList;
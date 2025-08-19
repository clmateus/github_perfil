import styles from "./Perfil.module.css";

const Perfil = ({ userName }) => {
    // const user = {
    //     name: props.name,
    //     avatar: props.avatar
    // }
    
    return (
        <header className={styles.header}>
            <img src={`https://github.com/${userName}.png`} className={styles.avatar}/>
            <h1 className={styles.name}>
                {userName}
            </h1>
            {/* {JSON.stringify(props)} */}
        </header>
    )
}

export default Perfil
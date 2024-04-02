import styles from "@/styles/components.module.css"

export default function Header() {
    return (
        <div id={styles.header}>
            <div id={styles.logo}>
                <h1>Bolha</h1>
            </div>
            <div id={styles.menu}>
                <a>Login</a>
            </div>
        </div>
    )
} 
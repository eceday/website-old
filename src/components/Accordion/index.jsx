import styles from './accordion.module.css';
function Accordian(props) {
    // TODO: add aria-labelledby
    // TODO: fix classes
    return (
        <div className={styles.shell}>
            <button className={styles.title}>{props.title}</button>
            <div className={styles.content}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Accordian;
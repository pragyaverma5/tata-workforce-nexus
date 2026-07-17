import styles from "./StatCard.module.css";

function StatCard({
    title,
    value,
    subtitle,
    color,
    icon: Icon,
}) {

    return (

        <div className={styles.card}>

            <div className={styles.header}>

                <div
                    className={styles.icon}
                    style={{ backgroundColor: `${color}20`, color }}
                >
                    <Icon />
                </div>

                <span>{title}</span>

            </div>

            <h2>{value}</h2>

            <p>{subtitle}</p>

        </div>

    );
}

export default StatCard;
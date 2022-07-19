import styles from "./Gastos.module.scss";
import person1 from "../../assets/png/person1.png";
import person2 from "../../assets/png/person2.png";
import person3 from "../../assets/png/person3.png";
import addIcon from "../../assets/png/addIcon.png";

export default function Gastos(){
    return (
        <>
            <main className={styles.gastos}>
                <div className={styles.gastosCard}>
                    <section className={styles.gastosOverview}>
                        <div className={styles.gastosHeader}>
                            <p className={styles.gastosTitle}>Gastos</p>
                            <div className={styles.gastosActions}>
                                <div className={styles.personImages}>
                                    <img src={person1} alt="person 1" />
                                    <img src={person2} alt="person 2" />
                                    <img src={person3} alt="person 3" />
                                </div>
                                <button>
                                </button>
                                    <img src={addIcon} alt="add" />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
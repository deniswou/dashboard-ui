import styles from "./Gastos.module.scss";
import person1 from "../../assets/png/person1.png";
import person2 from "../../assets/png/person2.png";
import person3 from "../../assets/png/person3.png";
import addIcon from "../../assets/png/addIcon.png";
import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";
import optionIcon from "../../assets/png/menuIcon.png";
import cartIcon from "../../assets/svg/cartIcon.svg";
import transportIcon from "../../assets/svg/transportIcon.svg";
import houseIcon from "../../assets/svg/houseIcon.svg";
import boxes from "../../assets/png/boxes.png";
import plant from "../../assets/png/plant.png";

export default function Gastos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const todayExpenses = [
    {
      id: 1,
      expense: "Compras",
      time: "5:12 pm",
      location: "Fortis Luque",
      price: -320000,
      icon: cartIcon,
      iconBackgroundColor: "#32a7e2",
    },
    {
      id: 2,
      expense: "Transporte",
      time: "5:12 pm",
      location: "Bolt hasta trabajo",
      price: -15000,
      icon: transportIcon,
      iconBackgroundColor: "#B548C6",
    },
    {
      id: 3,
      expense: "Casa",
      time: "5:12 pm",
      location: "Remodelación pared",
      price: -180000,
      icon: houseIcon,
      iconBackgroundColor: "#FF8700",
    },
  ];
  const previousExpenses = [
    {
      id: 1,
      expense: "Comida",
      time: "5:12 pm",
      location: "Plaza Madero",
      price: -150000,
      icon: cartIcon,
      iconBackgroundColor: "#DC3434",
    },
    {
      id: 2,
      expense: "Entretenimiento",
      time: "5:12 pm",
      location: "Cine Itau del Sol",
      price: -70000,
      icon: transportIcon,
      iconBackgroundColor: "#4BA83D",
    },
  ];
  const spendCategories = [
    {
      id: 1,
      category: "Comida",
      price: 900000,
    },
    {
      id: 2,
      category: "Shopping",
      price: 1300000,
    },
    {
      id: 3,
      category: "Casa",
      price: 1100000,
    },
    {
      id: 4,
      category: "Entretenimiento",
      price: 450000,
    },
    {
      id: 5,
      category: "Vehiculo",
      price: 520000,
    },
  ];

  const onMouseOver = (data: any, index: number) => setActiveIndex(index);

  return (
    <>
      <main className={styles.gastos}>
        <div className={styles.gastosCard}>
          <section className={styles.gastosOverview}>
            <div className={styles.gastosHeader}>
              <p className={styles.gastosTitle}>Gastos</p>
              <div className={styles.gastosActions}>
                <div className={styles.personImages}>
                  <img
                    className={styles.person1}
                    src={person1}
                    alt="person 1"
                  />
                  <img
                    className={styles.person2}
                    src={person2}
                    alt="person 2"
                  />
                  <img
                    className={styles.person3}
                    src={person3}
                    alt="person 3"
                  />
                </div>
                
                  <img className={styles.addIcon} src={addIcon} alt="add" />
                
              </div>
            </div>

            <p className={styles.dateRange}>01 - 15 Julio, 2022</p>
            <ResponsiveContainer width="100%" height="9%">
              <BarChart data={data}>
                <Bar
                  dataKey="uv"
                  fill="rgba(21, 122, 255, .2)"
                  onMouseOver={onMouseOver}
                >
                  {data.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={
                        index === activeIndex
                          ? "rgb(21, 122, 255)"
                          : "rgba(21, 122, 255, .2)"
                      }
                      key={index}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className={styles.gastosOverviewHeader}>
              <p className={styles.gastosOverviewTitle}>Hoy</p>
              
                <img
                  className={styles.gastosOption}
                  src={optionIcon}
                  alt="options"
                />
              
            </div>

            <ul>
              {todayExpenses.map((expense) => (
                <li className={styles.gastosItem} key={expense.id}>
                  <div className={styles.gastosItemLeft}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={styles.gastosItemDiv}
                    >
                      <img src={cartIcon} alt={expense.expense} />
                    </div>
                    <div className={styles.gastosItemDetails}>
                      <p className={styles.gastosItemTitle}>
                        {expense.expense}
                      </p>
                      <p className={styles.gastosItemTime}>
                        {expense.time} • {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.gastosItemPrice}>
                    {expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className={styles.gastosOverviewHeader}>
              <p className={styles.gastosOverviewTitle}>
                Lunes, 11 Julio 2022
              </p>
              
                <img
                  className={styles.gastosOption}
                  src={optionIcon}
                  alt="options"
                />
              
            </div>

            <ul>
              {previousExpenses.map((expense) => (
                <li className={styles.gastosItem} key={expense.id}>
                  <div className={styles.gastosItemLeft}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={styles.gastosItemDiv}
                    >
                      <img src={cartIcon} alt={expense.expense} />
                    </div>
                    <div className={styles.gastosDetails}>
                      <p className={styles.gastosItemTitle}>
                        {expense.expense}
                      </p>
                      <p className={styles.gastosItemTime}>
                        {expense.time} • {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.gastosItemPrice}>
                    {expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.precioOverview}>
            <p className={styles.precioOverviewTitle}>Dónde va tu dinero?</p>

            <ul>
              {spendCategories.map((category) => (
                <li key={category.id}>
                  <div className={styles.spendCategory}>
                    <p className={styles.spendCategoryName}>
                      {category.category}
                    </p>
                    <p className={styles.spendCategoryPrice}>
                      {category.price.toFixed(2)}
                    </p>
                  </div>
                  <div className={styles.spendCategoryBar}>
                    <div
                      style={{
                        width: `${
                          (category.price /
                            spendCategories.reduce(
                              (acc, current) => acc + current.price,
                              0
                            )) *
                          100
                        }%`,
                      }}
                      className={styles.spendCategoryColoredBar}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.saveMoneyDiv}>
              <img className={styles.boxes} src={boxes} alt="boxes" />
              <img className={styles.plant} src={plant} alt="plant" />
              <p className={styles.saveMoneyTitle}>Como ahorrar</p>
              <p className={styles.saveMoneyInfo}>
                Activa este método para realizar ahorros y verifica los procesos que te beneficien
              </p>
              <button className={styles.button} type="button">
                VER TIPS
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
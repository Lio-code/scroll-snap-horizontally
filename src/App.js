import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <section className={styles.one}>
        <h1>First page</h1>
      </section>
      <section className={styles.two}>
        <h1>Second page</h1>
      </section>
      <section className={styles.three}>
        <h1>Third page</h1>
      </section>
      <section className={styles.four}>
        <h1>Fourth page</h1>
      </section>
    </div>
  );
};

export default App;

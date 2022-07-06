import Head from 'next/head';
import styles from '../styles/Over.module.css';

export default function Over() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h3>SCORE</h3>
        <h1>13770</h1>
        <form>
          <h2>PLEASE ENTER YOUR INTITIALS</h2>
          <div className={styles.inputs}>
            <input type='text' />
            <input type='text' />
            <input type='text' />
          </div>
          <h2>PLEASE ENTER YOUR EMAIL</h2>
          <input type='text' />
        </form>
        <h4>MOVE JOYSTICK TO START PLAYING</h4>
        <p>
          PLAYERS MUST BE 18 YEARS OLD OR OVER TO BE ELIGIBLE TO WIN A SAMSUNG
          HANDSET
        </p>
      </main>
    </div>
  );
}

import styles from './homepage.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Link href='/baerumjazzfestival'> Bærum Jazzfestival </Link>
        <Link href='/dans-sorost-norge'> Dans Sørøst-Norge </Link>
      </main>
    </>
  );
}

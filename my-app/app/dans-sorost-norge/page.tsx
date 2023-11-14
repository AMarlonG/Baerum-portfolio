import Link from 'next/link';
import Image from 'next/image';
import dansebilde from '../../assets/dans.jpg';
import styles from './dans.module.css';

export default function Page() {
  return (
    <>
      <h1>Dans Sørøst-Norge</h1>
      <Link href='/'>Produksjon</Link>
      <Link href='/'>Formidling</Link>
      <Image
        className={styles.image}
        src={dansebilde}
        alt='Danser som hopper'
        priority
      />
    </>
  );
}

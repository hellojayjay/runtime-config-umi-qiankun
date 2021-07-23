import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage({ children }: any) {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/">home</Link>
      {' '}
      <Link to="/any">any</Link>
      {' '}
      <Link to="/app1">app1</Link>
      <div>{children}</div>
    </div>
  );
}

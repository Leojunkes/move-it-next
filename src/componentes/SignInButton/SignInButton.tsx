import styles from '../../styles/components/SignInButton.module.css';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/client';


export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button onClick={() => signOut()} type="button" className={styles.signinButton}>
      Você é {session.user.name}?
    </button>
  ) : (
    <button
      onClick={() => signIn('github')}
      type="button"
      className={styles.signinButton}
    >
      Sign in whit Github
    </button>
  );
}

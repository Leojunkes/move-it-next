import React from 'react';
import styles from '../styles/pages/Auth.module.css';
import Link from 'next/link';

import { signIn, signOut, useSession } from 'next-auth/client';
import { SignInButton } from '../componentes/SignInButton/SignInButton';

// import { Container } from './styles';

const Auenticacao: React.FC = () => {
  return (
    <main className={styles.geralContainer}>
      <div className={styles.containerAuth}>
        <img style={{ height: 500 }} src="images/Simbolo.svg" alt="" />
        <img
          style={{ paddingBottom: 280, paddingLeft: 50 }}
          className="logoImgMoveit"
          src="images/Logo.svg"
          alt=""
        />
        <div className={styles.containerGithub}>
          <img className={styles.githubImg} src="images/github.svg" alt="" />

          <SignInButton />
          <Link href="/home">
            <button type="button">ENTRAR</button>
          </Link>

          <span>Bem vindo</span>
        </div>
      </div>
    </main>
  );
};

export default Auenticacao;

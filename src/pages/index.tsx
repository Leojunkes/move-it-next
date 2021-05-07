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
        <img style={{ height: '35rem' }} src="images/Simbolo.svg" alt="" />
        <img
          style={{ paddingBottom: 280, paddingLeft: 50 }}
          className="logoImgMoveit"
          src="images/Logo.svg"
          alt=""
        />
        <div className={styles.containerGithub}>
          <span>Bem vindo</span>
          <br />

          <div className={styles.githubLogin}>
            <img className={styles.githubImg} src="images/github.svg" alt="" />
            <label htmlFor="">
              Faça seu login com seu Github <br />{' '}
              <p className={styles.textComecar}>para começar</p>{' '}
            </label>
          </div>

          <div className={styles.signAndButtons}>
            <SignInButton />
            <Link href="/home">
              <button className={styles.buttonSim} type="button">
                SIM
              </button>
            </Link>
            <Link href="/">
              <button className={styles.buttonNao} type="button">
                NÃO
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auenticacao;

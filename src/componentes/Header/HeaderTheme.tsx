import React, { useContext } from 'react';
import {
  faHome,
  faMedal,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import styles from '../../styles/components/HeaderTheme.module.css';

interface HeaderProps {
  toggleTheme(): void;
}

export default function Header(props: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <div className={styles.containerHeader}>
      <a href="/"> 
        <img
          style={{ height: '1.5rem', width: 30, marginTop: 7 }}
          src="icons/iconMove.png"
          alt="Fechar modal"
        />
      </a>
      <p>
        <FontAwesomeIcon icon={faHome} />
      </p>
      <p>
        <FontAwesomeIcon icon={faMedal} />
      </p>

      <aside>
        <label style={{ marginRight: 5 }}>{colors.themeTroca}</label>
        <Switch
          onChange={props.toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          height={8}
          width={40}
          handleDiameter={18}
          onColor={colors.background1}
          offColor={colors.background}
        />
      </aside>
    </div>
  );
}

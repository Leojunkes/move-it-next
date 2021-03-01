import React, { useContext } from 'react';
import styles from '../styles/components/HeaderTheme.module.css';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface HeaderProps {
  toggleTheme(): void;
}

export default function Header(props: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <div className={styles.containerHeaderTheme}>
      <p>Leonardo</p>
      <div className={styles.switchTheme}>
        <Switch
          onChange={props.toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={colors.secundary}
        />
      </div>
    </div>
  );
}

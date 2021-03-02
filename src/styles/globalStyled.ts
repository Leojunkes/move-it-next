import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
:root {
  --white: #fff;
  --background: #f2f3f5;
  --gray-line: #dcdde0;
  --text: #666666;
  --text-highlight: #b3b9ff;
  --title: #2e384d;
  --red: #e83f5b;
  --green: #4cd62b;
  --blue: #5965e0;
  --blue-dark: #4953b8;
  --blue-twitter: #2aa9e0;
  
  
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: ${props=>props.theme.colors.background};
  color: ${props=>props.theme.colors.text};
}
body,
input,
textarea,
button {
  font: 400 1rem 'inter', sans-serif;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
.experience-bar {
  display: flex;
  align-items: center;
}
.experience-bar span {
  font-size: 1rem;
}
.experience-bar > div {
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background-color: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
}

.experience-bar > div > div {
  height: 4px;
  border-radius: 4px;
  background: var(--green);
}
span.current-experience {
  position: absolute;
  top: 12px;
  transform: translate(-50%);
}


`
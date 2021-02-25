import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengeContexts';
import { CountdownProvider } from '../contexts/CoutndownContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}

export default MyApp;

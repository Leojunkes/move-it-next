import {Container} from '../styles/components/challengeBox';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import { CountdownContext } from '../contexts/CoutndownContext';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSuccess() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFail() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
    <div className="challengeBoxContainer" >
      {activeChallenge ? (
        <div className="challengeActive">
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              onClick={handleChallengeFail}
              className="failedButton"
              type="button"
            >
              Falhei
            </button>
            <button
              onClick={handleChallengeSuccess}
              className="succeededButton"
              type="button"
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="challengeNotActive">
          <strong>Finalize um ciclo para receber um desafio novo</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
    </Container>
  );
}

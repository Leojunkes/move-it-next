import styled from 'styled-components';

export const Container = styled.div`
    .challengeBoxContainer{
    height: 100%;
    background: ${props => props.theme.colors.background1};
    color:${props => props.theme.colors.text};
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.challengeNotActive{
display: flex;
flex-direction: column;
align-items: center;

}
.challengeNotActive strong{
font-size: 1.5rem;
font-weight: 500;
line-height: 1.4;
}
.challengeNotActive p{
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width:70% ;
    margin-top: 3rem;
    }
    .challengeNotActive p img{
        margin-bottom: 1rem;
    }
    .challengeActive{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .challengeActive header{
        color: var(--blue);
        font-weight: 600;
        font-size: 1.25rem;
        padding: 0 2rem 1.5rem;
        border-bottom: 1px solid var(--gray-line);
    }
    .challengeActive main{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .challengeActive main strong{
        font-size: 2rem;
        font-weight: 600;
        color: var(--title);
        margin: 1.5rem 0 1rem;
    }
    .challengeActive main p{
        line-height: 1.5;
    }
    .challengeActive footer{
        display: grid;
        grid-template-columns:1fr 1fr ;
        gap: 1rem;
    }
    .challengeActive footer button{
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 5px;
        color: var(--white);
        font-size: 1rem;
        font-weight: 600;
        transition: filter 0.2s;

    }
    .challengeActive footer button.failedButton{
        background: var(--red);
    }
    .challengeActive footer button.succeededButton{
        background: var(--green);
    }
    .challengeActive footer button:hover{
        filter: brightness(0.9);
    }

`

import styled, { css } from 'styled-components'
import media from '../../../app/style/media'

const style ={
  
  EggWrap: styled.div`
    position:relative;
    z-index:1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform:scale(0.6);
    ${media.small`
      transform:scale(0.55);
    `}
    ${media.xsmall`
      transform:scale(0.4);
    `}
    
  `,
  EggKoongya: styled.div`
    position: relative;
    width: 28rem;
    height: 30rem;
    
  `,
  Eggbody: styled.div`
    position:relative;
    z-index:1;
    width: 28rem;
    height: 30rem;
    background-color: #fff;
    border-radius: 50% 50% 35% 35%;
    border:0.2rem solid ${props => props.theme.eggbody};
    animation: bouncebody alternate infinite 400ms 40ms ease-in-out;

    ${css`
      @keyframes bouncebody { 
        to { transform: scaleX(1.03) scaleY(0.97); } 
      }
    `}
  `,
  Eggface: styled.div`
    position:absolute;
    z-index:2;
    top:8rem;
    left:50%;
    transform:translateX(-50%);
    width: 20rem;
    height: 20rem;
    background-color: transparent;
    border-radius: 50% 50% 40% 40%;
    border:0.2rem solid ${props => props.theme.eggface};

    ${props => props.$soft && css`
      background-color: ${props => props.theme.eggstep1};
    `}
    ${props => props.$medium && css` 
      background-color: ${props => props.theme.eggstep2};
      background: radial-gradient(circle, ${props => props.theme.eggstep1} 20%, ${props => props.theme.eggface} 45%, ${props => props.theme.eggface});
    `}      
    ${props => props.$hard && css` 
      background-color: ${props => props.theme.eggstep3};

    `}
  `,
  Eggeye: styled.div`
    position:absolute;
    z-index:2;
    top:6rem;
    left:2rem;
    width: 6rem;
    height:6rem;
    background-color:${props => props.theme.eggblack};
    border-radius:52% 52% 17% 17% / 43% 43% 67% 67%;
 
    ${props => props.$right && css`
      left:auto;
      right:2rem;
    `}

  `,
  Eggpupil: styled.div`
    position:absolute;
    z-index:2;
    top:1.4rem;
    left:1.4rem;
    width:3.2rem;
    height:3.2rem;
    background-color:#fff;
    border-radius:38% 38% 44% 46% / 44% 45% 36% 35%;
    animation: bounceeye alternate infinite 400ms 40ms ease-in-out;
    filter: blur(0.4px);
    ${props => props.$small && css`
      width:1rem;
      height:1rem;
      top:4.4rem;
      left:1.2rem;
      border-radius:50%;
      animation:bounceeye_small alternate infinite 400ms 40ms ease-in-out;
    `}
    
    ${css`
      @keyframes bounceeye { 
        to { transform: scaleX(1.03) scaleY(0.97) translate(0, 1px); } 
      }
        @keyframes bounceeye_small { 
          to { transform: scaleX(0.97) scaleY(1.03) translate(1px, 0px); } 
        }
    `}
  `,
  Eggmouth: styled.div`
    position:absolute;
    z-index:2;
    top:13.4rem;
    left:50%;
    transform:translateX(-50%);
    width:4rem;
    height:4.5rem;
    border:0.2rem solid ${props => props.theme.eggmouth};
    border-radius:0 0 40% 40% / 0 0 60% 60%;
    background-color:${props => props.theme.eggwhite};
    filter: blur(0.4px);
  `,
  Eggarm: styled.div`
    position:absolute;
    z-index:2;
    top:27rem;
    left:6.5rem;
    width:5rem;
    height:2.6rem;
    background-color:${props => props.theme.eggwhite};
    border-radius: 50% 50% 0 0;
    border:0.2rem solid ${props => props.theme.eggbody};
    border-radius: 100% 80% 80% 100% / 0% 80% 100% 50%;
    border-left-color: ${props => props.theme.eggwhite};
    transform: rotate(20deg);
    ${props => props.$right && css`
      left:auto;
      right:6.5rem;
      transform: rotate(-200deg);
    `}
  `,
  Eggleg: styled.div`
    position: absolute;
    z-index:0;
    top:29rem;
    left:10rem;
    width: 2.4rem;
    height: 3.4rem;
    background-color: ${props => props.theme.eggwhite};
    border-radius: 0 0 50% 50%;
    border:0.2rem solid ${props => props.theme.eggbody};
    border-top:none;
    border-radius: 0% 0% 50% 50% / 0 0 80% 80%;
    ${props => props.$right && css`
      right: 10rem;
      left:auto;
    `}
  `,
}

export default style  
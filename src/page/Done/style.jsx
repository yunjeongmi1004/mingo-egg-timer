import styled, { css } from 'styled-components'

const style = {
  Done: styled.div`
    width: 100%;
    height: 100%;
    background-color:${props => props.theme.bggreen};
    display:flex;
    align-items:center;
    justify-content:center;
  `,
  DoneBox: styled.div`
    position:relative;
    z-index:2;
    width: 200px;
    height: 240px;
    animation: egg-move 3s linear alternate;
    animation-fill-mode: both;
    @keyframes egg-move {
      0% {
        transform: rotate(0);
      }
      25% {  
        transform: rotate(10deg);
      }
      35% {  
        transform: rotate(-10deg);
      }
      100% {  
        transform: rotate(0);
      }
    }
  `,
  DoneTitle: styled.p`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    font-size: 2.4rem;
    color: #f8e09a;
    text-shadow:  0 0 10px rgb(255 226 131 / 50%);
    z-index: 1;
    animation: done-title 1.5s linear alternate 3s;
    animation-fill-mode: both;
    @keyframes done-title {
      0% {
        opacity:0;
        margin-top:0;
      }
      100% {
        opacity:1;
        margin-top:-12rem;
      }
    }
  `,
  DoneTop: styled.div`
    z-index:2;
    position:absolute;
    top:0;
    left:0;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    width: 200px;
    height: 120px;
    background-color:${props => props.theme.bggreen2};
    transform: rotate(0);
    animation: egg-top 2s linear alternate 2s;
    animation-fill-mode: both;
    @keyframes egg-top {
      0% {
        top: 0;
        left: 0;
        width: 200px;;
        transform: rotate(0);
        opacity:1;
      }
      25% {
        top: 0;
        left: 0;
        width: 200px;
        transform: rotate(0);
         opacity:1;
      }
      35% {
        top: -10px;
        left: 12px;
        width: 200px;
        transform: rotate(12deg);
        opacity:1;
      }
      100% {
        top: -10px;
        left: 12px;
        width: 200px;
        transform: rotate(12deg);
        opacity:0;
      }
    }
  `,
  TopInner: styled.div`
    position:absolute;
    top:0;
    left:0;
    width: 200px;
    height: 120px;
  `,
  DoneBottom: styled.div` 
    z-index:2;
    position:absolute;
    bottom:0;
    left:0;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    width: 200px;
    height: 120px;
    background-color:${props => props.theme.bggreen2};
    transform: rotate(0);
    animation: egg-bottom 2s linear alternate 2s;
    animation-fill-mode: both;
    @keyframes egg-bottom {
      0%{
        bottom: 10px;
        left: 0;
        width: 200px;
        transform: rotate(0);
        opacity:1;
      }
      25% {
        bottom: 10px;
        left: 0;
        width: 200px;
        transform: rotate(0);
         opacity:1;
      }
      35% { 
        bottom: 0;
        left: 12px;
        width: 200px;
        transform: rotate(-12deg);
         opacity:1;
      }
      100% {
        bottom: 0;
        left: 12px;
        width: 200px;;
        transform: rotate(-12deg);
         opacity:0;
      }
    }
  `,
  BtnReStart: styled.button`
    position:absolute;
    left:50%;
    top:50%;
    width:20rem;
    height: 5rem;
    transform: translate(-50%, -50%);
    margin-top:16rem;
    background-color: ${props => props.theme.bggreen4};
    border: none;
    border-radius: 0.4rem;
    color:${props => props.theme.textwhite};
    font-size:2.2rem;
  `,
}

export default style
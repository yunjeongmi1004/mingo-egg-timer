import styled, { css } from 'styled-components'
import media from '../../app/style/media'

const style ={
  Timer: styled.main`
    width: 100%;
    height: 100%;
    padding:2rem;
    background-color:${props => props.theme.bggreen};
    font-size: 1.6rem;  
    .swiper-slide.swiper-slide-active{
      transform:scale(1.06);
    }
    ${media.small`
      .swiper-slide.swiper-slide-active{
        transform:scale(1.03);
      }
    `}
    .swiper{
      padding-left:20%;
    }
    .swiper-slide {
      width: 70% !important;
      margin: 0 2%;
    }
    .swiper-slide:last-child{
      margin-right:24%;
    }
    .swiper-slide.swiper-slide-active:after{
      display:block;
      content:'';
      position: absolute;
      left:50%;
      transform:translateX(-50%);
      opacity: 0.2;
      width: 80%;
      height: 15px;
      background: ${props => props.theme.eggblack};
      bottom: 1.6rem;
      border-radius: 100%;
      transform-origin: center;
      animation: shadow-ani 2s ease-out infinite;
    
    ${css`
      @keyframes shadow-ani {
        50% {
          width: 60%;
          height: 10px;
        }
      }
    `}
    }

  `,
  TimerSection : styled.section`
    width: 42rem;
    height: 100%;
    max-height: 70rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:#f9e0ae;
    border-radius:2rem;
    border: .4rem solid ${props => props.theme.bgyellow};
    ${media.small`
      position: relative;
      top: 0;
      left: 0;
      transform: none;
      width:100%;
      height:100%;
      max-width:42rem;
      margin:0 auto;
      border-radius:0;
    `}
  `,
  TimerContainer: styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    border-radius: 2rem;
    border: .3rem solid ${props => props.theme.bgblack};
    background-color:#84a542;
    ${media.small`
      border-radius:0;
    `}
  `,
  BgTopLine: styled.div`
    width: calc(100% - 2rem);
    margin:.8rem auto 0;
    height: 0.8rem;
    background-color: ${props => props.theme.bggreen2};
    border-radius:0.4rem;
  `,
  Title: styled.h1`
    font-size: 2.4rem;
    font-weight: 700;
    color: ${props => props.theme.bgbrown};
    text-align: center;
    margin-top: 1rem;
    padding:0.5rem;
    background-color:${props => props.theme.bgyellow2};
  `,
  Box: styled.div`
    position:relative;
    width: calc(100% - 3rem);
    height: 34rem;
    margin:1.5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${props => props.theme.bggreen3};
    
  `,
  TimerBox: styled.div`
    font-size: 5rem;
    color: ${props => props.theme.textwhite};
    text-align: center;
    margin:auto;
    @keyframes textshadow { 
        to { 
          text-shadow: 0 0 1rem ${props => props.theme.bgtextshadow}; 
        } 
    }
    ${props => props.$active && css`
     animation: textshadow alternate infinite 0.8s 40ms ease-in-out;
    `}
  `,
  TimerButton: styled.button`
    width: calc(100% - 3rem);
    height: 5rem;
    margin:auto 1.5rem 1.5rem;
    background-color: ${props => props.theme.bggreen4};
    border: none;
    border-radius: 1rem;
    color:#395210;
    font-size:3rem;
  `,
  EggText: styled.div`
    position:absolute;
    top:1rem;
    left:0;
    width:100%;
    text-align:center;
    font-size: 1.8rem;
    color: ${props => props.theme.bggreen5};
  `,
  EggTitle: styled.span`
    font-size:2rem;
    color:${props => props.theme.bgyellow};
  `,
  Modal: styled.div`
    display:${props => props.$active ? 'block' : 'none'};
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    z-index:10;
  `,  
  ModalBox: styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:30rem;
    background-color:${props => props.theme.bggreen5};
    border:0.2rem solid ${props => props.theme.bgblack};
    padding:2rem;
    border-radius:1rem;
  `,
  ModalContent: styled.div`
    font-size:1.6rem;
    text-align:center;
    margin-bottom:2rem;
    color:${props => props.theme.textwhite};
  `,  
  ModalBtnBox: styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
  `,
  ModalBtn: styled.button`
    flex:1;
    height:3rem;
    border-radius:0.4rem;
    color:${props => props.theme.textwhite};
    ${props => props.$cancel && css`
      background-color:${props => props.theme.bggreen3};
    `}
    ${props => props.$confirm && css`
        border:1px solid ${props => props.theme.bggreen3};
    `}
  `,
  // Shadow: styled.div`

  // `,
}

export default style  
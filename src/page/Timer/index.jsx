import 'swiper/css'
import s from './style'
import Egg from '../../widget/layout/Egg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEggSettingsStore, timerSettings } from '../../shared/model/eggSettingStore'
import useTimer from './model/useTimer'
import useModal from './model/useModal'
import useSwiper from './model/useSwiper'

const Timer = () => {

  const { eggSettings, setEggSettings } = useEggSettingsStore()

  const { 
    min, 
    sec, 
    isTimerActive, 
    startTimer: timerStart, 
    stopTimer, 
    setTimer, 
    resetTimer 
  } = useTimer(eggSettings.minutes, eggSettings.seconds, eggSettings.eggType)

  const {
    isModalOpen,
    openModal,
    closeModal
  } = useModal()

  const { swiperRef, slideTo } = useSwiper()

  const startTimer = () => {
    if (isTimerActive) {
      openModal()
      return
    }
    timerStart()
  }

  // 슬라이드 변경 시 실행되는 함수firelight
  const handleSlideChange = (swiper) => {
    if (isTimerActive) {
      openModal()
      return
    }
    changeSlideSettings(swiper)
  }

  // 슬라이드 설정 변경 함수
  const changeSlideSettings = (swiper) => {
    if (isTimerActive) {
      stopTimer()
    }

    resetTimer()

    const activeIndex = swiper.realIndex
    const setting = timerSettings[activeIndex]
    
    if (setting) {
      setEggSettings({
        currentIndex: activeIndex,
        eggType: setting.eggType,
        eggTitle: setting.title,
        eggContent: setting.content,
        minutes: setting.minutes,
        seconds: setting.seconds
      })
      setTimer(setting.minutes, setting.seconds)
    }
  }

  // 모달 확인 버튼 클릭 시
  const handleModalConfirm = () => {
    slideTo(eggSettings.currentIndex)
    stopTimer()
    closeModal()

    const setting =timerSettings[eggSettings.currentIndex]
    if (setting) {
      setTimer(setting.minutes, setting.seconds)
    }
  }

  // 모달 취소 버튼 클릭 시
  const handleModalCancel = () => {
    slideTo(eggSettings.currentIndex)
    closeModal()
  }

  

  return (
    <s.Timer>
      <s.TimerSection>
        <s.TimerContainer>
          <s.BgTopLine />
          <s.Title>삶은,, 계란이다</s.Title>
          <s.Box>
            <s.EggText>나는, <s.EggTitle>{eggSettings.eggTitle}</s.EggTitle><br />{eggSettings.eggContent}</s.EggText>
            <Swiper 
              ref={swiperRef} 
              slidesPerView={"auto"} 
              spaceBetween={0} 
              loop={false} 
              onSlideChange={handleSlideChange}
            >
              {Object.entries(timerSettings).map(([index, setting]) => (
                <SwiperSlide key={index}>
                  <Egg 
                    $hard={setting.eggType === 'hard'}
                    $medium={setting.eggType === 'medium'}
                    $soft={setting.eggType === 'soft'}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </s.Box>
          <s.TimerBox $active={isTimerActive}>
            {min}:{sec < 10 ? `0${sec}` : sec}
          </s.TimerBox>
          <s.TimerButton onClick={startTimer}>
            {isTimerActive ? 'ING' : 'START'}
          </s.TimerButton>
        </s.TimerContainer>
      </s.TimerSection>
      
    <s.Modal $active={isModalOpen}>
      <s.ModalBox>
        <s.ModalContent>
         이미, 타이머가 진행중입니다.<br />
         종료하시겠습니까?
        </s.ModalContent>
        <s.ModalBtnBox>
          <s.ModalBtn $cancel onClick={handleModalCancel}>취소(타이머 유지)</s.ModalBtn>
          <s.ModalBtn $confirm onClick={handleModalConfirm}>확인(타이머 리셋)</s.ModalBtn>
        </s.ModalBtnBox>
      </s.ModalBox>
    </s.Modal>
    </s.Timer>
  )
}

export default Timer
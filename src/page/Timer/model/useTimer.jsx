import { useState, useRef, useEffect } from 'react'
import useInterval from './useInterval'
import { useNavigate } from 'react-router-dom'

const useTimer = (initialMinutes = 6, initialSeconds = 0) => {
  const navigate = useNavigate()

  const [min, setMin] = useState(initialMinutes)
  const [sec, setSec] = useState(initialSeconds)
  const [isTimerActive, setIsTimerActive] = useState(false)
  
  const time = useRef(initialMinutes * 60 + initialSeconds)

  // useInterval을 사용한 타이머 로직
  useInterval(() => {
    if (isTimerActive && time.current > 0) {
      time.current -= 1
      setMin(parseInt(time.current / 60))
      setSec(time.current % 60)
    }
  }, isTimerActive ? 1000 : null)

  // 타이머 완료 시 처리
  useEffect(() => {
    if (time.current <= 0 && isTimerActive) {
      setIsTimerActive(false)
      navigate('/done')
    }
  }, [sec, isTimerActive])

  const startTimer = () => {
    time.current = min * 60 + sec
    setIsTimerActive(true)
    console.log('start' + time.current)
  }

  const stopTimer = () => {
    setIsTimerActive(false)
  }

  const setTimer = (minutes, seconds) => {
    setMin(minutes)
    setSec(seconds)
    time.current = minutes * 60 + seconds
  }

  const resetTimer = () => {
    time.current = 1 // alert 방지
  }

  return {
    min,
    sec,
    isTimerActive,
    startTimer,
    stopTimer,
    setTimer,
    resetTimer
  }
}

export default useTimer
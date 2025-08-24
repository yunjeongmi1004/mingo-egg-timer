import { useRef, useEffect } from 'react'

const useInterval = (callback, delay) => {
    const savedCallback = useRef(callback)

     // callback을 ref에 저장
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // interval 설정
    useEffect(() => {
        if (delay !== null) {
            const interval = setInterval(() => savedCallback.current(), delay)
            return () => clearInterval(interval)
        }
    }, [delay])
}

export default useInterval
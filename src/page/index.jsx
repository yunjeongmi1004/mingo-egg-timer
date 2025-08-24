import { Routes, Route } from 'react-router-dom'
import Timer from './Timer'
import Done from './Done'

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<Timer />} />
      <Route path="/done" element={<Done />} />
    </Routes>
  )
}

export default Page
import s from './style'
import Egg from '../../widget/layout/Egg'
import { useEggSettingsStore } from '../../shared/model/eggSettingStore'
import { useNavigate } from 'react-router-dom'

const Done = () => {
  const { eggSettings, resetEggSettings } = useEggSettingsStore()
  const navigate = useNavigate()
  return (
    <s.Done>
      <s.DoneTitle>{eggSettings.eggTitle} 완성!</s.DoneTitle>
      <s.DoneBox>
        <s.DoneTop>
          <s.TopInner></s.TopInner>
        </s.DoneTop>
        <Egg 
          $hard={eggSettings.eggType === 'hard'}
          $medium={eggSettings.eggType === 'medium'}
          $soft={eggSettings.eggType === 'soft'}
        />
          <s.DoneBottom></s.DoneBottom>
      </s.DoneBox>
      <s.BtnReStart onClick={() => {
        resetEggSettings()
        navigate('/')
      }}>다시 하러 가기</s.BtnReStart>
    </s.Done>
  )
}

export default Done
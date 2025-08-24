import s from './style'


const Egg = (props) => {

	const { $soft, $medium, $hard } = props

  return (

				<s.EggWrap>
					<s.EggKoongya>
						<s.Eggbody></s.Eggbody>
						<s.Eggface $soft={$soft} $medium={$medium} $hard={$hard}>
							<s.Eggeye>
								<s.Eggpupil></s.Eggpupil>
								<s.Eggpupil $small></s.Eggpupil>
							</s.Eggeye>
							<s.Eggeye $right>
								<s.Eggpupil $right></s.Eggpupil>
								<s.Eggpupil $small></s.Eggpupil>
							</s.Eggeye>
							<s.Eggmouth></s.Eggmouth>	
						</s.Eggface>
						<s.Eggarm></s.Eggarm>
						<s.Eggarm $right></s.Eggarm>
						<s.Eggleg></s.Eggleg>
						<s.Eggleg $right></s.Eggleg>
					</s.EggKoongya>
				</s.EggWrap>

  )
}

export default Egg
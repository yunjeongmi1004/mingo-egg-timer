import { ThemeProvider } from 'styled-components'
import Page from '../page'
import GlobalStyle from './style'
import theme from './style/theme'
import media from './style/media'

const App = () => {
  return (
    <ThemeProvider
      theme={{
        ...theme.defaultTheme,
        breakpoints: theme.breakpoints,
        media: media,
      }}
    >
      <GlobalStyle />
      <Page />
    </ThemeProvider>
  )
}

export default App

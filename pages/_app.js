import { Provider } from 'next-auth/client'
import Layout from '../comps/Layout'
import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@material-ui/core'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3EB1C8'
    },
    secondary: {
      main: '#A4D65E'
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
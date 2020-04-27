import { triggerFloodlightPageView } from './src/utils/floodlights'
import ReactGA from 'react-ga'
import './src/assets/css/main.scss'

ReactGA.initialize(process.env.GA_ID)
export const onRouteUpdate = state => ReactGA.pageview(state.location.pathname)
triggerFloodlightPageView()

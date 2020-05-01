import ReactGA from 'react-ga'
import { triggerFloodlightPageView } from './src/utils/floodlights'
import './src/assets/css/main.scss'
import 'intersection-observer'

ReactGA.initialize(process.env.GA_ID)
export const onRouteUpdate = state => ReactGA.pageview(state.location.pathname)
triggerFloodlightPageView()

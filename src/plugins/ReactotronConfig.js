import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'


const reactotron = Reactotron.configure({ name: 'bootcamp' })
    .use(reactotronRedux())
    .connect()

console.tron = reactotron

reactotron.clear()

export default reactotron

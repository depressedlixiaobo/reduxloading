import dev from './configureStore.dev'
import prod from './configureStore.prod'

export default process.env  === 'production' ? prod:dev
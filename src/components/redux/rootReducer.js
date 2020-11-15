import { combineReducers } from 'redux'
import headlineReducer from './news/headline/headlineReducer'
import regularReducer from './news/regular/regularReducer'

const rootReducer = combineReducers({
    headline: headlineReducer,
    regular: regularReducer
})
export default rootReducer
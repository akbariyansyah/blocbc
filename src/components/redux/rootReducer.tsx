import { combineReducers } from 'redux'
import headlineReducer from './news/headline/headlineReducer'
import regularReducer from './news/regular/regularReducer'
import sourceReducer from './news/source/sourceReducer'

const rootReducer = combineReducers({
    headline: headlineReducer,
    regular: regularReducer,
    source:sourceReducer
})
export default rootReducer
import { combineReducers } from 'redux'
import { newsReducers } from "./newsReducer"

const AppReducers = combineReducers({
    news: newsReducers,
})

export default AppReducers
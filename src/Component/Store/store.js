import {createStore} from 'redux'
import reducers from "../Reducers/CombReduc"

export const store = createStore(reducers)

import { combineReducers, createStore, applyMiddleware, AnyAction } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { GameReducer } from '../features/game'
import thunk, { ThunkDispatch, ThunkAction } from 'redux-thunk'

const rootReducer = combineReducers({
  game: GameReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof store.getState>
export type ReduxState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<ReduxState, any, AnyAction>
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>

export default store

import { GameState } from './types'

export const getQuiz = (state: GameState) => state.game.level.quiz

export const getPrize = (state: GameState) => state.game.level.prize

export const getEarnedMoney = (state: GameState) => state.game.earnedMoney

export const getIsOpenMobileMenu = (state: GameState) =>
  state.game.isOpenMobileMenu

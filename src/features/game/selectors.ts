import { GameState } from './types'

export const getQuestions = (state: GameState) => state.game.questions

export const getLoadingQuiz = (state: GameState) => state.game.loadingQuiz

export const getQuizError = (state: GameState) => state.game.quizError

export const getQuiz = (state: GameState) => state.game.level.quiz

export const getPrize = (state: GameState) => state.game.level.prize

export const getEarnedMoney = (state: GameState) => state.game.earnedMoney

export const getIsOpenMobileMenu = (state: GameState) =>
  state.game.isOpenMobileMenu

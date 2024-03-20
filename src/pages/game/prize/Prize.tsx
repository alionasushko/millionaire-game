import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectors, actionTypes } from '../../../features/game'
import { numberWithCommas } from '../../../utils/helpers'
import Icon from '../../../components/Icon'
import money from '../../../data/money.json'
import './prize.css'

const Prize: React.FC = () => {
  const dispatch = useAppDispatch()
  const prize = useAppSelector(selectors.getPrize)
  const isOpenMobileMenu = useAppSelector(selectors.getIsOpenMobileMenu)

  const closeMobileMenu = useCallback(() => {
    dispatch({
      type: actionTypes.TOGGLE_MOBILE_MENU,
      payload: false,
    })
  }, [])

  return (
    <div className={`prize ${isOpenMobileMenu ? 'open' : 'closed'}`}>
      <Icon
        name="close"
        className="only-mobile mobile-close-icon"
        onClick={closeMobileMenu}
      />
      <div className="options-container">
        {money
          .map((sum) => (
            <div
              key={sum}
              className={`option-wrapper prize-option-wrapper ${
                prize === sum ? 'active' : prize > sum ? 'passed' : ''
              }`}
            >
              <div className="option-outer prize-option-outer">
                <div className="option-inner prize-option-inner">
                  ${numberWithCommas(sum)}
                </div>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  )
}

export default Prize

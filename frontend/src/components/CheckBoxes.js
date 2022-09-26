import React from 'react'
import { useState } from 'react'
import { categories } from '../utils/categories'

const CheckBoxes = ({ checkedCategories, setCheckedCategories }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(categories.length).fill(false)
  )

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )

    setCheckedState(updatedCheckedState)

    const allChecked = updatedCheckedState.reduce(
      (prevVal, currentVal, index) => {
        if (currentVal) {
          return prevVal + ' ' + categories[index]
        }
        return prevVal
      },
      ''
    )

    setCheckedCategories(allChecked)
  }

  return (
    <ul className="flex w-full justify-between my-3 text-white">
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <div className="toppings-list-item">
              <div className="left-section">
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={category}
                  value={category}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                  required
                />
                <label htmlFor={`custom-checkbox-${index}`}>{category}</label>
              </div>
            </div>
          </li>
        )
      })}
      {/* <li>
        <div className="toppings-list-item">
          <div className="right-section">{checkedCategories}</div>
        </div>
      </li> */}
    </ul>
  )
}

export default CheckBoxes

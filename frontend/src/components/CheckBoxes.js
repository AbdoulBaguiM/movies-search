import React from 'react'
import { useState } from 'react'
import { categories } from '../utils/categories'

const CheckBoxes = ({ setCheckedCategories }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(categories.length).fill(false)
  )

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )

    setCheckedState(updatedCheckedState)

    const checked = []

    updatedCheckedState.map((currentVal, index) => {
      if (currentVal) {
        return checked.push(categories[index])
      }
      return null
    })

    setCheckedCategories(checked)
  }

  return (
    <ul className="grid grid-cols-auto-fill gap-4 my-3 text-white">
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
    </ul>
  )
}

export default CheckBoxes

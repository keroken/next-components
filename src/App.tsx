import { Button } from './components/Button/Button'
import { css } from '../styled-system/css';
import { useState } from 'react';
import { Select } from './components/Select/Select';

function App() {
  const options = [
    { label: 'apple', value: 'apple' },
    { label: 'orange', value: 'orange' },
    { label: 'banana', value: 'banana' },
  ]

  const [selectedOption, setSelectedOption] = useState('')

  const handleSelect = (value: string) => {
    setSelectedOption(value)
  }

  return (
    <>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello!
      </div>
      <div className={css({ display: 'flex', flexDirection: 'column' })}>
        <Button />
        <Select
          placeholder="please select fruit"
          options={options}
          selectedOptionValue={selectedOption}
          onChange={handleSelect}
        />
      </div>
    </>
  )
}

export default App

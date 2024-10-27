import { Button } from './components/Button';
import { Select } from './components/Select';
import { css } from '../styled-system/css';
import { useState } from 'react';


function App() {
  const options = [
    { id: 1, label: 'apple', value: 'apple' },
    { id: 2, label: 'orange', value: 'orange' },
    { id: 3, label: 'banana', value: 'banana' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (value: string) => {
    setSelectedOption(value)
  };

  return (
    <>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello!
      </div>
      <div className={css({ display: 'flex', flexDirection: 'column' })}>
      <Button size="medium" onClick={() => alert("clicked!")} />
        <Select
          size="medium"
          placeholder="please select fruit"
          options={options}
          selectedOptionValue={selectedOption}
          onChange={handleSelect}
        />
      </div>
    </>
  )
};

export default App;

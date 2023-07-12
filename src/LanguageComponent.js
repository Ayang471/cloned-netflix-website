import React, { useState } from 'react'

function LanguageComponent() {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

  return (
    <div className='language'>
          <select id="language-select" value={selectedLanguage} onChange={handleChange}>
              <option value="en" >
                  English
              </option>
              <option value="es">Spanish</option>
          </select>
    </div>
  )
}

export default LanguageComponent
import React, { useState } from 'react'
import useThrottling from '../hooks/useThrottling'

function Debouncing() {
    const [inputValue, setInputValue] = useState({})

    const handleAdding = (e) => {
        setInputValue((prev) => ({
            ...prev,
            [e.target.name.toLowerCase()]: e.target.value,
        }))
    }

    const debouncedValue = useThrottling(inputValue.name, 300);
    console.log("nkn", debouncedValue);
    return (
        <div>
            <input
                type='text'
                name='name'
                value={inputValue?.name}
                onChange={handleAdding}
                placeholder='Enter Products u want to search'
            />
            <select name='product' value={setInputValue?.product} onChange={handleAdding}>
                <option value="none">Select</option>
                <option value="puma">Puma</option>
                <option value="nike">Nike</option>
                <option value="addidas">Addidas</option>
            </select>
        </div>
    )
}

export default Debouncing

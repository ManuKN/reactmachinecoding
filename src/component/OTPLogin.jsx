import React, { useState } from 'react'

function OTPLogin() {
    const [otpContainers, setOtpContainer] = useState(Array.from({ length: 4 }, () => ({ value: '' })))

    const handleAddingOTP = (e, index) => {
        console.log("values", e.target.value)
        const updatedContainers = [...otpContainers];
        if (updatedContainers[index]) {
            updatedContainers[index].value = e.target.value;
        }
        setOtpContainer(updatedContainers);
    };
    console.log("making", otpContainers)
    return (
        <div>
            <p>This is one OTP</p>
            <div>
                {otpContainers?.map((index, item) => (
                    <input type='number' onChange={(e) => handleAddingOTP(e, index)} value={item.value} key={index} />
                ))}
            </div>
        </div>
    )
}

export default OTPLogin

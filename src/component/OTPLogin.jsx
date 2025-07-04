import React, { useRef, useState } from 'react'

function OTPLogin() {
    const [otpContainers, setOtpContainer] = useState(Array.from({ length: 4 }, () => ({ value: '' })));
    const otpRef = useRef([]);

    const handleAddingOTP = (e, index) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;
        const updatedContainers = [...otpContainers];
        if (updatedContainers[index]) {
            updatedContainers[index].value = value;
        }
        setOtpContainer(updatedContainers);
        if (value && index < otpContainers.length - 1) {
            otpRef.current[index + 1]?.focus();
        }
    };
    console.log("ref", otpRef)
    return (
        <div>
            <p>This is one OTP</p>
            <div>
                {otpContainers?.map((item, index) => (
                    <input ref={(el) => (otpRef.current[index] = el)} onKeyDown={(e) => {
                        if (e.key === "Backspace" && item.value === "" && index > 0) {
                            otpRef.current[index - 1]?.focus();
                        }
                    }} className="w-10 h-10 text-center border rounded" type='number' onChange={(e) => handleAddingOTP(e, index)} value={item.value} key={index} />
                ))}
            </div>
        </div>
    )
}

export default OTPLogin

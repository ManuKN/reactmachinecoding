import { useEffect, useRef, useState } from "react"

const useThrottling = (value, interval) => {
    const [throttlingValue, setThrottling] = useState(value);
    const lastExecuted = useRef(Date.now());

    useEffect(() => {
        const handler = () => {
            const now = Date.now();
            if (now - lastExecuted.current >= interval) {
                setThrottling(value)
                lastExecuted.current = now;
            }
        }

        const id = setInterval(handler, interval)

        return () => {
            clearInterval(id)
        }
    }, [value, interval])
    return throttlingValue;
}

export default useThrottling;
import React, { useState, useRef, useEffect } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef < NodeJS.Timeout | null > (null);

    useEffect(() => {
        if (isRunning && !isPaused) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isRunning, isPaused]);

    const startTimer = () => {
        setTime(0);
        setIsRunning(true);
        setIsPaused(false);
    };

    const pauseTimer = () => {
        setIsPaused(true);
        if (timerRef.current) clearInterval(timerRef.current);
    };

    const resumeTimer = () => {
        setIsPaused(false);
    };

    const stopTimer = () => {
        setIsRunning(false);
        setIsPaused(false);
        setTime(0);
        if (timerRef.current) clearInterval(timerRef.current);
    };


    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${mins}:${secs}`;
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded shadow-md w-64 mx-auto mt-10">
            <h1 className="text-2xl font-semibold">⏱️ Timer: {formatTime(time)}</h1>

            <div className="flex flex-wrap gap-2">
                {!isRunning && (
                    <button
                        onClick={startTimer}
                        className="px-4 py-2 bg-green-600 text-white rounded"
                    >
                        Start
                    </button>
                )}
                {isRunning && !isPaused && (
                    <button
                        onClick={pauseTimer}
                        className="px-4 py-2 bg-yellow-500 text-white rounded"
                    >
                        Pause
                    </button>
                )}
                {isRunning && isPaused && (
                    <button
                        onClick={resumeTimer}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Resume
                    </button>
                )}
                {isRunning && (
                    <button
                        onClick={stopTimer}
                        className="px-4 py-2 bg-red-600 text-white rounded"
                    >
                        Stop
                    </button>
                )}
            </div>
        </div>
    );
}

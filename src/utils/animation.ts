
export const handleClick = (frames: string[], setFrame: (arg0: number) => void, cycles: number = 1, delayMs: number = 1000, sound?: string ) => {

    if (sound) {
        const audio = new Audio(sound);
        audio.play();
    }
    const totalFrames = frames.length;
    const animationSteps = totalFrames * cycles;

    for (let i = 0; i < animationSteps; i++) {
        setTimeout(() => {
            setFrame(i % totalFrames);
        }, i * delayMs);
    }

    setTimeout(() => {
        setFrame(0);
    }, animationSteps * delayMs);
}

import { useRef, useState } from 'react';

export const useToggleAnimation = (frames: string[], delayMs: number = 200) => {
    const [frameIndex, setFrameIndex] = useState<number | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const toggle = () => {
        // Если анимация уже идет — останавливаем
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setFrameIndex(null);
            return;
        }

        // Запускаем анимацию
        let currentFrame = 0;
        setFrameIndex(0);

        intervalRef.current = setInterval(() => {
            currentFrame = (currentFrame + 1) % frames.length;
            setFrameIndex(currentFrame);
        }, delayMs);
    };

    return { frameIndex, toggle };
};
import type {Dispatch, SetStateAction} from "react";

export const changeClick = (
    frames: string[],
    setFrame: Dispatch<SetStateAction<number>>,
    sound?: string
) => {
    if (sound) {
        const audio = new Audio(sound);
        audio.play().catch(() => {}); // catch на случай блокировки автовоспроизведения браузером
    }

    // Переходим к следующему индексу, а при достижении конца массива возвращаемся к 0
    setFrame((prevIndex) => (prevIndex + 1) % frames.length);
};
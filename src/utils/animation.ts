
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

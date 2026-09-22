// Monitor.tsx
import MonitorImage from '../assets/monitor/base_monitor.png';
import { useToggleAnimation } from '../utils/animation.ts';
import styles from './Monitor.module.css'
// Автоматически импортирует все картинки кадров из папки в массив
const animationFrames = Object.values(
    import.meta.glob<string>('../assets/monitor/monitor*.png', {
        eager: true,
        import: 'default'
    })
);

export const Monitor = () => {
    const { frameIndex, toggle } = useToggleAnimation(animationFrames, 150);

    const currentImage = frameIndex === null ? MonitorImage : animationFrames[frameIndex];

    return (
        <img
            src={currentImage}
            className={styles.monitor}
            alt="Monitor"
            onClick={toggle}
        />
    );
};
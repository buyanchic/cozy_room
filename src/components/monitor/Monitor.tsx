// Monitor.tsx
import MonitorImage from '../../assets/monitor/base_monitor.png';
import { useToggleAnimation } from '../../utils/animation.ts';
import styles from './Monitor.module.css'

// 1. Получаем объект { './assets/.../monitor1.png': '/src/assets/...', ... }
const globModules = import.meta.glob<string>('../../assets/monitor/monitor*.png', {
    eager: true,
    import: 'default',
});

// 2. Сортируем пути по номерам и забираем только ссылки на картинки
const animationFrames = Object.entries(globModules)
    .sort(([pathA], [pathB]) =>
        pathA.localeCompare(pathB, undefined, { numeric: true })
    )
    .map(([, url]) => url);

console.log(animationFrames)

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
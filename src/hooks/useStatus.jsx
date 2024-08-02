import { useEffect, useState } from 'react'
import { useData } from '../hooks/useData'
export function useStatus() {
    const { windSpeed, windDegree, humidity, visibility, air } = useData()
    const [porcentaje, setPorcentaje] = useState([]);
    const [rotate, setRotate] = useState([]);
    const getWindDirection = (degree) => {
        const directions = [
            { name: 'N', range: [337.5, 360] },
            { name: 'NNE', range: [22.5, 45] },
            { name: 'NE', range: [45, 67.5] },
            { name: 'ENE', range: [67.5, 90] },
            { name: 'E', range: [90, 112.5] },
            { name: 'ESE', range: [112.5, 135] },
            { name: 'SE', range: [135, 157.5] },
            { name: 'SSE', range: [157.5, 180] },
            { name: 'S', range: [180, 202.5] },
            { name: 'SSW', range: [202.5, 225] },
            { name: 'SW', range: [225, 247.5] },
            { name: 'WSW', range: [247.5, 270] },
            { name: 'W', range: [270, 292.5] },
            { name: 'WNW', range: [292.5, 315] },
            { name: 'NW', range: [315, 337.5] },
            { name: 'NNW', range: [337.5, 360] },
        ];
        let normalizedDegree = degree % 360;
        if (normalizedDegree < 0) normalizedDegree += 360;
        for (let direction of directions) {
            const [min, max] = direction.range;
            if (min <= normalizedDegree && normalizedDegree < max) return direction.name;
        }
        return 'Unknown';
    }
    useEffect(() => { setRotate(windDegree) }, [windDegree])
    useEffect(() => { setPorcentaje(humidity * 3.2) }, [humidity])
    return { windSpeed, windDegree, getWindDirection, rotate, porcentaje, humidity, visibility, air }
}
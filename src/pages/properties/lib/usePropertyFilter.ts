import { useSearchParams } from 'react-router'
import { TPropertyItem } from 'entities/property'

export const usePropertyFilter = () => {
    const [searchParams] = useSearchParams()
    const params = Object.fromEntries(searchParams)

    function filter(properties: TPropertyItem[]): TPropertyItem[] {
        return properties.filter((property) => {
            return Object.entries(params).every(([key, value]) => {
                const propertyValue = property[key as keyof TPropertyItem]
                if (!value || !propertyValue) return true // Пропускаем пустые фильтры

                // Для строковых значений
                if (typeof propertyValue === 'string') {
                    return propertyValue
                        .toLowerCase()
                        .includes(value.toLowerCase())
                }

                // Для диапазонов
                if (
                    typeof propertyValue === 'number' &&
                    ['price', 'size', 'year'].includes(key)
                ) {
                    const [min, max] = value.split('–').map(Number)
                    return propertyValue >= min && propertyValue <= max
                }

                return true
            })
        })
    }

    return { filter }
}

import { TPropertyItem } from 'entities/property'
import { Option } from 'shared/ui/select'

function splitIntoThree<T>(array: T[]): [T[], T[], T[]] {
    const partSize = Math.ceil(array.length / 3)
    return [
        array.slice(0, partSize),
        array.slice(partSize, partSize * 2),
        array.slice(partSize * 2),
    ]
}

const minMax = (arr: number[]): string => {
    if (arr.length === 0) return ''
    return `${Math.min(...arr)} – ${Math.max(...arr)}`
}

const toOptionFormat = (value: string | number): Option => ({
    title: value,
    value,
})

const stringOptions = <T extends Record<string, any>>(
    array: T[],
    key: keyof T
): Option[] => {
    if (array.length === 0) return []
    const set = array.reduce<Set<string | number>>((acc, property) => {
        let value = property[key]
        if (key === 'location') {
            value = value.replace(/^[\w\s]+,/i, '').trim()
        }
        acc.add(value)
        return acc
    }, new Set())
    return [...set].sort().map(toOptionFormat)
}

function numberOptions<T extends Record<string, any>>(
    array: T[],
    key: keyof T
): Option[] {
    return splitIntoThree(array.map((p) => p[key]).sort((a, b) => a - b))
        .map(minMax)
        .map(toOptionFormat)
}

export const usePropertyOptions = (properties: TPropertyItem[]) => {
    return {
        location: stringOptions(properties, 'location'),
        type: stringOptions(properties, 'type'),
        year: numberOptions(properties, 'year'),
        size: numberOptions(properties, 'size'),
        price: numberOptions(properties, 'price'),
    }
}

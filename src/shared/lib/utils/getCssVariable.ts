export const getCssVariable = (variable: string): string => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable)
}

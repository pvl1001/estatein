import { getCssVariable } from './getCssVariable'

const getBreakpoint = (variable: string): number =>
    parseInt(getCssVariable(variable))

export const getBreakpoints = () => ({
    mobile: getBreakpoint('--breakpoint-mobile'),
    desktop: getBreakpoint('--breakpoint-desktop'),
})

export { PropertyCard } from './ui/PropertyCard'
export { PropertyCardSkeleton } from './ui/PropertyCardSkeleton.tsx'
export type { TPropertyItem, TPropertyCategory } from './types'
export {
    useGetAllPropertiesQuery,
    useGetOnePropertyQuery,
    propertyApi,
} from './api/propertyApi.ts'
export {
    mockPropertyHandler,
    mockPropertyResponse,
} from './api/mockPropertyHandler.ts'

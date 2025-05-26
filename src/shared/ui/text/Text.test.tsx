import { ElementType } from 'react'
import { describe, it } from 'vitest'
import { render } from '../../lib/test-utils'
import { Text } from './Text.tsx'

describe('Text', () => {
    it.each([undefined, 'h5', 'p'])('should be title as %j', (tag) => {
        const { container } = render(
            <Text.Title as={tag as ElementType}>Test</Text.Title>
        )
        if (tag === undefined) {
            expect(container.querySelector('h2')).toBeInTheDocument()
            return
        }
        expect(container.querySelector(tag)).toBeInTheDocument()
    })
})

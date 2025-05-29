import { render } from 'shared/lib/test-utils'
import { ClientCard, Props } from './ClientCard.tsx'

describe('ClientCard', () => {
    const initialProps: Props = {
        since: 0,
        url: '',
        message: '',
        name: '',
        domain: '',
        category: '',
    }

    it('should be render since', () => {
        const { getByText } = render(
            <ClientCard {...initialProps} since={1900} />
        )
        expect(getByText(/since 1900/i)).toBeInTheDocument()
    })

    it('should be render name', () => {
        const { getByText } = render(
            <ClientCard {...initialProps} name={'test name'} />
        )
        expect(getByText(/test name/i)).toBeInTheDocument()
    })

    it('should be render link', () => {
        const { getByRole } = render(
            <ClientCard {...initialProps} url={'https://test.com'} />
        )
        expect(getByRole('link')).toHaveAttribute('href', 'https://test.com')
    })

    it('should be render domain', () => {
        const { getByText } = render(
            <ClientCard {...initialProps} domain={'test domain'} />
        )
        expect(getByText(/test domain/i)).toBeInTheDocument()
    })

    it('should be render category', () => {
        const { getByText } = render(
            <ClientCard {...initialProps} category={'test category'} />
        )
        expect(getByText(/test category/i)).toBeInTheDocument()
    })

    it('should be render message', () => {
        const { getByText } = render(
            <ClientCard {...initialProps} message={'test message'} />
        )
        expect(getByText(/test message/i)).toBeInTheDocument()
    })
})

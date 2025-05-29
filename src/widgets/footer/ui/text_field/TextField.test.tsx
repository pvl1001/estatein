import { describe, it } from 'vitest'
import { TestId } from 'shared/lib/const'
import { render } from 'shared/lib/test-utils'
import { Icon } from 'shared/ui/icon'
import { TextField } from './TextField.tsx'
import s from './TextField.module.scss'

describe('TextField', () => {
    it.each([
        { name: 'with icon', icon: <Icon.Hat /> },
        { name: 'without icon' },
    ])('should be $name', ({ icon }) => {
        const { container } = render(<TextField icon={icon} />)
        const useElement = container.querySelector('use[href="#icon-hat"]')

        icon
            ? expect(useElement).toBeInTheDocument()
            : expect(useElement).not.toBeInTheDocument()
    })

    it.each([true, false])('should be with pending: %s', (isPending) => {
        const { getByRole, getByTestId, container } = render(
            <TextField pending={isPending} buttonIcon={<Icon.Send />} />
        )
        const sendIcon = container.querySelector('use[href="#icon-send"]')
        const input = getByRole('textbox')

        if (isPending) {
            expect(getByTestId(TestId.LOADER)).toBeInTheDocument()
            expect(input).toHaveAttribute('disabled')
            return
        }
        expect(sendIcon).toBeInTheDocument()
        expect(input).not.toHaveAttribute('disabled')
    })

    it.each(['test error', undefined])(
        'should be with error: %j',
        (message) => {
            const { container } = render(<TextField error={message} />)
            const errorElement = container.querySelector(`.${s.message}`)

            message
                ? expect(errorElement).toHaveTextContent(message)
                : expect(errorElement).not.toBeInTheDocument()
        }
    )

    it.each(['test message', undefined])(
        'should be with message: %j',
        (message) => {
            const { container } = render(<TextField message={message} />)
            const errorElement = container.querySelector(`.${s.message}`)

            message
                ? expect(errorElement).toHaveTextContent(message)
                : expect(errorElement).not.toBeInTheDocument()
        }
    )
})

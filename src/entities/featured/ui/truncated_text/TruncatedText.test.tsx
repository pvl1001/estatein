import { render, userEvent } from 'shared/lib/test-utils'
import { TruncatedText } from './TruncatedText.tsx'
import s from '../FeaturedCard.module.scss'

describe('TruncatedText', () => {
    const text =
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab\n' +
        '                architecto consectetur delectus dolor earum eligendi illum in\n' +
        '                ipsam iste laudantium numquam quis ratione rem repellendus,\n' +
        '                voluptate! Architecto cumque cupiditate dolores facilis incidunt\n' +
        '                maiores neque perspiciatis quas quibusdam. Iusto, quibusdam\n' +
        '                reiciendis.'

    it('should show full text on click', async () => {
        const { container } = render(<TruncatedText>{text}</TruncatedText>)

        expect(container).toHaveTextContent(/\.\.\./)
        expect(container.textContent).not.toEqual(text)

        const button = container.querySelector(`.${s.read_more}`)!
        await userEvent.click(button)

        expect(container).not.toHaveTextContent(/\.\.\./)
        expect(container.textContent).toEqual(text)
    })
})

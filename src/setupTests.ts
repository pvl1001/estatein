import { mockClientApi } from 'entities/client'
import { mockFaqHandler } from 'entities/faq'
import { mockPropertyHandler } from 'entities/property'
import { mockReviewsHandler } from 'entities/review'
import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'

const server = setupServer(
    mockReviewsHandler,
    mockPropertyHandler,
    mockFaqHandler,
    mockClientApi
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

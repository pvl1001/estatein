import { mockClientApi } from 'entities/client'
import { mockFaqHandler } from 'entities/faq'
import { mockFeaturedHandler } from 'entities/featured'
import { mockReviewsHandler } from 'entities/review'
import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'

const server = setupServer(
    mockReviewsHandler,
    mockFeaturedHandler,
    mockFaqHandler,
    mockClientApi
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

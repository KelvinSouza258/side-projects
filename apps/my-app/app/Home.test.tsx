import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from './page'

describe('Home', () => {
    it('should render', () => {
        const { getByText } = render(<Home />)
        expect(getByText(/hello world!/i)).not.toBeUndefined()
    })
})

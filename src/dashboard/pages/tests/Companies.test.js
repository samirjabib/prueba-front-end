import { render, screen } from '@testing-library/react';
import { Companies } from '../Companies'


describe('test in <Companies>', () => {
    test('should', () => {
        render(<Companies/>);
        screen.debug()
    })
})
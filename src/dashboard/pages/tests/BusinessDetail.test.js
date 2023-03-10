import { render, screen } from '@testing-library/react';
import { BusinessDetail } from '../BusinessDetail'


describe('test in <BusinessDetail>', () => {
    test('should', () => {
        render(<BusinessDetail/>);
        screen.debug()
    })
})
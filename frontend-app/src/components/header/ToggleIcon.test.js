import { render, fireEvent } from '@testing-library/react'; 
import ToggleIcon from './ToggleIcon'
import { ReactComponent as OpenIcon } from "../../assets/images/search.svg"
import { ReactComponent as CloseIcon } from "../../assets/images/close.svg"

describe('ToogleIcon is a button and ...', () => {
    
    it('Has a open icon if closed', () => {
        const {container} = render(<ToggleIcon isOpen={true} OpenIcon={OpenIcon} />)
        const openIconContainer = container.firstChild.querySelector('.toogle-icon__open')
        expect(openIconContainer).toBeTruthy()
    })
    it('Has a close icon if open', () => {
        const {container} = render(<ToggleIcon isOpen={false} OpenIcon={OpenIcon} CloseIcon={CloseIcon} />)
        const openIconContainer = container.firstChild.querySelector('.toogle-icon__close')
        expect(openIconContainer).toBeTruthy()
    })

    it('It starts Closed by default', () => {
        const {container} = render(<ToggleIcon OpenIcon={OpenIcon} CloseIcon={CloseIcon} />)
        const openIconContainer = container.firstChild.querySelector('.toogle-icon__close')
        expect(openIconContainer).toBeTruthy()
    }) 

})
import { render, fireEvent } from '@testing-library/react'; 
import Input from './Input'
import Icon from '../../assets/images/email.svg'

const setup = () => {}

test('If it has a placeholder it is displayed', () => {
    const placeholderValue = "placeholder text"
    const {getByPlaceholderText}  =  render(<Input placeholder={placeholderValue} />)
    expect(getByPlaceholderText(placeholderValue)).toBeTruthy();
})

test('If it has className it add it to the classlist', () => {
    const className = "mycurrentclassname"
    const {container} = render(<Input className={className} />)
    expect(container.getElementsByClassName(className).length).toBe(1)
})

test('Value is equal to the value passed and has and on change function', () => {
    let value = "value"
    const {container} = render(<Input value={value} onChange={(event) => {
        value = event.currentTarget.value
    }}/>)
    const input = container.firstChild.querySelector('input')
    expect(input.value).toBe(value)
    const newValue = "I have changed"
    fireEvent.change(input, {target: {value: newValue}})
    expect(value).toBe(newValue)
})

test("If provided display icon", () => {
     const {container} = render(<Input icon={Icon} />)
     const icon = container.firstChild.querySelector('.input__icon')
     expect(icon).toBeTruthy()
})
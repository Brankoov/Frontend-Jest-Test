
import { fireEvent, render } from "@testing-library/react"
import CustomButton, { ButtonState } from "./CustomButton"
import "@testing-library/jest-dom"
 

describe("Easy Examples", () => {
    //Test #1
    test("2 + 2 = 4", () => {
        expect(2+2).toBe(4)
    })

    //Test #2
    test("is 2 + 4 greater than 0", () => {
        expect(2+4).toBeGreaterThan(0)
    })

    //Test #3
    test("is 2 - 2 = 0", () => {
        expect(2-2).toBe(0)
    })
})
describe("Custom button components states", () => {

    //Idle
    test("Check if button component starts with idle", () => {
        const buttonText: string = "signup"
        const{ getByText } = render(<CustomButton buttonText={buttonText} />)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
    })

    //Hover
    test("Check if button component changes on hover", () => {
        const buttonText: string = "signup"
        const{ getByText } = render(<CustomButton buttonText={buttonText} />)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.mouseEnter(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.hover)
    })

    //Click
    test("Check if button component changes on hover", () => {
        const buttonText: string = "signup"
        const{ getByText } = render(<CustomButton buttonText={buttonText} />)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.click(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.clicked)
    })

    test("This test should fail for my Github Action", () => {
        expect(2+2).toBe(100)
    })

})


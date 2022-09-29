import Home from "./Home";
import ReactDOM from "react-dom"
import { render, screen } from '@testing-library/react';

describe("Tests for Home Component", () => {
    test("check color red", async () => {
        render(<Home />)
        const testElement = await screen.findByTestId("h1-home")
        expect(testElement).toHaveStyle({color:'red'})
    })
    test("check color green", async () => {
        render(<Home />)
        const testElement = await screen.findByTestId("h1-home")
        expect(testElement).toHaveStyle({color:'green'})
    })
})










// describe("tests for Home function", () => {
//     it("return html element", () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<Home />, div)
//         expect(div.innerHTML).toEqual('<div class="home"><h1 testid="h1-home">Home</h1></div>')
//     })
// })

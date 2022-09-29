import Teacher from "./Teacher";
import ReactDOM from 'react-dom';
import {render,screen} from "@testing-library/react"

describe("Tests Teacher Component",()=>{
  test("Render component",()=>{
    render(<Teacher/>)
    const divElement = screen.getByTestId("teacherDiv")
    expect(divElement).toBeInTheDocument()
  })
  test("check text in component",()=>{
    render(<Teacher fullName="jacob ingi"/>)
    const textElement = screen.getByTestId("textFullname");
    expect(textElement).toHaveTextContent("jacob ingi")
  })
})














// describe("tests for Teacher function",()=>{
//   it("return html element",()=>{
//     const div = document.createElement('div');
//     ReactDOM.render(<Teacher fullName="jacob inngi"/>,div)
//     expect(div.innerHTML).toEqual(`<div class="teacher"><h1>jacob inngi</h1></div>`)
//   })
// })
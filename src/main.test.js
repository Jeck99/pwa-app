import { getHelloJacob,getHelloWithFirstName } from "./main";

describe("tests for getHelloJacob", () => {
    it("return hello Jacob", () => {
        expect(getHelloJacob())
            .toBe("hello Jacob")
    })
    it("not return hi there", () => {
        expect(getHelloJacob())
            .not.toBe("hi there")
    })
    it("not return a number", () => {
        expect(getHelloJacob())
            .not.toBeNaN()
    })
})

describe("tests for getHelloWithFirstName",()=>{
    it("return hello Jacob",()=>{
        expect(getHelloWithFirstName("Jacob"))
        .toBe("hello Jacob")
    })
})
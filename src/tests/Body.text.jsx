import { render, screen } from "testing-library/react"
import { describe, it, expect } from "vitest"
import Body from "../components/Body.jsx"
import { BrowserRouter } from "react-router-dom";

describe("Testing for body component", () => {
    it("renders proper text on the screen", () => {
        render(<BrowserRouter>
            <Body />
        </BrowserRouter>)

        // text should be OUR BESTSELLERS -> Latest Arrivals -> SHOP NOW
        const text1 = screen.getByText(/our bestsellers/i)
        const text2 = screen.getByText(/latest arrivals/i)
        const text3 = screen.getByText(/shop now/i)

        expect(text1).toBeInTheDocument()
        expect(text2).toBeInTheDocument()
        expect(text3).toBeInTheDocument()
    })
    it("renders a sample image alongside text", () => {
        render(<BrowserRouter>
            <Body />
        </BrowserRouter>)

        // should have some type of img on the screen
        const image1 = screen.getByRole("img")
        expect(image1).toBeInTheDocument()
    })
})

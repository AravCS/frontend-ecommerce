import { render, screen } from '@testing-library/react';
import { describe, it, expect } from "vitest";
import Header from "../components/Header.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
    it("renders the name of the brand", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        // brand name: "UrbanLeaf"
        expect(screen.getByText("UrbanLeaf")).toBeInTheDocument();
    })
    it("renders the middle and ending navigation bar for the header", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const navigation = screen.getAllByRole("navigation")
        expect(navigation).toHaveLength(2);
        expect(navigation[0]).toBeInTheDocument()
        expect(navigation[1]).toBeInTheDocument()
    })
    it("ensure navigation for home, products, about in header", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const homeLink = screen.getByRole('link', { name: /Home/i });
        const productsLink = screen.getByRole('link', { name: /Product/i });
        const aboutLinks = screen.getByRole('link', { name: /About/i });

        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute("href", "/");

        expect(productsLink).toBeInTheDocument();
        expect(productsLink).toHaveAttribute("href", "/products");

        expect(aboutLinks).toBeInTheDocument();
        expect(aboutLinks).toHaveAttribute("href", "/about");
    })
    it("ensures navigation for the cart icon in header", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const cartLink = screen.getByRole('link', { name: /Cart/i });

        expect(cartLink).toBeInTheDocument();
        expect(cartLink).toHaveAttribute("href", "/cart");
    })
})
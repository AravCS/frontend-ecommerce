import { render, screen } from '@testing-library/react';
import { describe, it, expect } from "vitest";
import Card from "../components/Card.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Card component", () => {
    const sampleItem = {
        id: 1,
        title: "Sample Product",
        price: 99.99,
        image: "sample.jpg"
    };

    it("renders the product title", () => {
        render(
            <BrowserRouter>
                <Card item={sampleItem} />
            </BrowserRouter>
        );

        expect(screen.getByText("Sample Product")).toBeInTheDocument();
    });

    it("renders the product price with a dollar sign", () => {
        render(
            <BrowserRouter>
                <Card item={sampleItem} />
            </BrowserRouter>
        );

        expect(screen.getByText("$99.99")).toBeInTheDocument();
    });

    it("renders the product image with correct src and alt attributes", () => {
        render(
            <BrowserRouter>
                <Card item={sampleItem} />
            </BrowserRouter>
        );

        const image = screen.getByAltText("Sample Product");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "sample.jpg");
    });

    it("links to the correct product page", () => {
        render(
            <BrowserRouter>
                <Card item={sampleItem} />
            </BrowserRouter>
        );

        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/products/1");
    });
});

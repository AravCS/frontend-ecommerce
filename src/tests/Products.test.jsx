import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from "vitest";
import Products from "../components/Products.jsx";
import { BrowserRouter } from "react-router-dom";

// Mock useFetch
vi.mock("../components/useFetch.jsx", () => ({
    default: () => ({
        data: [
            { id: 1, title: "Men Shirt", category: "men's clothing", price: 20, image: "men1.jpg" },
            { id: 2, title: "Women Dress", category: "women's clothing", price: 50, image: "women1.jpg" },
            { id: 3, title: "Laptop", category: "electronics", price: 500, image: "laptop.jpg" },
        ],
        loading: false,
        error: null
    })
}));

describe("Products component", () => {
    const renderProducts = () => {
        render(
            <BrowserRouter>
                <Products />
            </BrowserRouter>
        );
    };

    it("renders Header and Footer components", () => {
        renderProducts();
        expect(screen.getByText(/UrbanLeaf/i)).toBeInTheDocument(); // Header brand
        expect(screen.getByText(/Footer/i)).toBeInTheDocument(); // Footer text
    });

    it("renders all items initially", () => {
        renderProducts();
        expect(screen.getByText("Men Shirt")).toBeInTheDocument();
        expect(screen.getByText("Women Dress")).toBeInTheDocument();
        expect(screen.getByText("Laptop")).toBeInTheDocument();
    });

    it("filters items by men's clothing category", () => {
        renderProducts();

        const mensClothingRadio = screen.getByLabelText("Men's Clothing");
        fireEvent.click(mensClothingRadio);

        expect(screen.getByText("Men Shirt")).toBeInTheDocument();
        expect(screen.queryByText("Women Dress")).not.toBeInTheDocument();
        expect(screen.queryByText("Laptop")).not.toBeInTheDocument();
    });

    it("filters items by women's clothing category", () => {
        renderProducts();

        const womensClothingRadio = screen.getByLabelText("Women's Clothing");
        fireEvent.click(womensClothingRadio);

        expect(screen.getByText("Women Dress")).toBeInTheDocument();
        expect(screen.queryByText("Men Shirt")).not.toBeInTheDocument();
        expect(screen.queryByText("Laptop")).not.toBeInTheDocument();
    });

    it("filters items by electronics category", () => {
        renderProducts();

        const electronicsRadio = screen.getByLabelText("Electronics");
        fireEvent.click(electronicsRadio);

        expect(screen.getByText("Laptop")).toBeInTheDocument();
        expect(screen.queryByText("Men Shirt")).not.toBeInTheDocument();
        expect(screen.queryByText("Women Dress")).not.toBeInTheDocument();
    });
});

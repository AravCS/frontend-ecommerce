import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from "vitest";
import ProductPage from "../components/ProductPage.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../context/CartContext";

// Mock react-router-dom useParams
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useParams: () => ({ id: "1" })
    };
});

// Mock useFetch
vi.mock("../components/useFetch.jsx", () => ({
    default: () => ({
        data: {
            id: 1,
            title: "Sample Product",
            price: 99.99,
            description: "This is a sample product",
            category: "clothing",
            image: "sample.jpg",
            rating: { rate: 4.5, count: 10 }
        },
        loading: false,
        error: null
    })
}));

describe("ProductPage component", () => {
    const mockAddToCart = vi.fn();

    const renderPage = () => {
        render(
            <CartContext.Provider value={{ addToCart: mockAddToCart }}>
                <BrowserRouter>
                    <ProductPage />
                </BrowserRouter>
            </CartContext.Provider>
        );
    };

    beforeEach(() => {
        mockAddToCart.mockClear();
    });

    it("renders product title, price, description, image, and rating", () => {
        renderPage();

        expect(screen.getByText("Sample Product")).toBeInTheDocument();
        expect(screen.getByText("$99.99")).toBeInTheDocument();
        expect(screen.getByText("This is a sample product")).toBeInTheDocument();
        expect(screen.getByText("4.5 (10)")).toBeInTheDocument();

        const image = screen.getByAltText("Sample Product");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "sample.jpg");
    });

    it("renders size buttons for clothing category and sets active style on click", () => {
        renderPage();

        const sizeBtn = screen.getByText("M");
        fireEvent.click(sizeBtn);

        expect(sizeBtn).toHaveClass("activeStyle");
    });

    it("calls addToCart when Add to Cart button is clicked", () => {
        renderPage();

        const addToCartBtn = screen.getByText(/Add to Cart/i);
        fireEvent.click(addToCartBtn);

        expect(mockAddToCart).toHaveBeenCalledTimes(1);
        expect(mockAddToCart).toHaveBeenCalledWith(expect.objectContaining({ id: 1 }));
    });

    it("renders Header and Footer components", () => {
        renderPage();

        expect(screen.getByText(/UrbanLeaf/i)).toBeInTheDocument(); // Header
        expect(screen.getByText(/Footer/i)).toBeInTheDocument(); // Footer
    });
});

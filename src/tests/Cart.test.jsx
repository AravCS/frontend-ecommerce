import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from "vitest";
import Cart from "../components/Cart.jsx";
import CartContext from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";

describe("Cart component", () => {
    const mockAddToCart = vi.fn();
    const mockRemoveFromCart = vi.fn();

    const renderWithContext = (cartItems) => {
        render(
            <CartContext.Provider value={{ cart: cartItems, addToCart: mockAddToCart, removeFromCart: mockRemoveFromCart }}>
                <BrowserRouter>
                    <Cart />
                </BrowserRouter>
            </CartContext.Provider>
        );
    };

    it("renders empty cart message when cart is empty", () => {
        renderWithContext([]);
        expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    });

    it("renders items in the cart with title, price, and subtotal", () => {
        const sampleCart = [
            { id: 1, title: "Product 1", price: 50, image: "prod1.jpg" },
            { id: 1, title: "Product 1", price: 50, image: "prod1.jpg" }, // duplicate to test quantity
            { id: 2, title: "Product 2", price: 30, image: "prod2.jpg" }
        ];

        renderWithContext(sampleCart);

        expect(screen.getByText("Product 1")).toBeInTheDocument();
        expect(screen.getByText("Product 2")).toBeInTheDocument();

        expect(screen.getByText("Price: $50")).toBeInTheDocument();
        expect(screen.getByText("Price: $30")).toBeInTheDocument();

        expect(screen.getByText("Subtotal: $100.00")).toBeInTheDocument(); // Product 1 quantity 2
        expect(screen.getByText("Subtotal: $30.00")).toBeInTheDocument();  // Product 2 quantity 1
    });

    it("displays the total for all cart items", () => {
        const sampleCart = [
            { id: 1, title: "Product 1", price: 50, image: "prod1.jpg" },
            { id: 1, title: "Product 1", price: 50, image: "prod1.jpg" },
            { id: 2, title: "Product 2", price: 30, image: "prod2.jpg" }
        ];

        renderWithContext(sampleCart);

        expect(screen.getByText("Total: $130.00")).toBeInTheDocument();
    });

    it("calls addToCart when + button is clicked", () => {
        const sampleCart = [{ id: 1, title: "Product 1", price: 50, image: "prod1.jpg" }];
        renderWithContext(sampleCart);

        const increaseBtn = screen.getByText("+");
        fireEvent.click(increaseBtn);

        expect(mockAddToCart).toHaveBeenCalledTimes(1);
        expect(mockAddToCart).toHaveBeenCalledWith(sampleCart[0]);
    });

    it("calls removeFromCart when - button is clicked", () => {
        const sampleCart = [{ id: 1, title: "Product 1", price: 50, image: "prod1.jpg" }];
        renderWithContext(sampleCart);

        const decreaseBtn = screen.getByText("-");
        fireEvent.click(decreaseBtn);

        expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
        expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
    });

    it("renders Header and Footer components", () => {
        renderWithContext([]);
        expect(screen.getByText(/UrbanLeaf/i)).toBeInTheDocument();
        expect(screen.getByText(/Footer/i)).toBeInTheDocument();
    });
});

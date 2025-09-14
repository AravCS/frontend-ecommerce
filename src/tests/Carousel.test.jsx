import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from "vitest";
import Carousel from "../components/Carousel.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Carousel component", () => {
    const mockItems = [
        { id: 1, title: "Product 1", price: 10, image: "img1.jpg" },
        { id: 2, title: "Product 2", price: 20, image: "img2.jpg" },
        { id: 3, title: "Product 3", price: 30, image: "img3.jpg" },
        { id: 4, title: "Product 4", price: 40, image: "img4.jpg" },
        { id: 5, title: "Product 5", price: 50, image: "img5.jpg" },
        { id: 6, title: "Product 6", price: 60, image: "img6.jpg" },
    ];

    const renderCarousel = () => {
        render(
            <BrowserRouter>
                <Carousel mockItems={mockItems} />
            </BrowserRouter>
        );
    };

    it("renders header and descriptive text", () => {
        renderCarousel();

        expect(screen.getByText(/LATEST COLLECTIONS/i)).toBeInTheDocument();
        expect(screen.getByText(/Explore our curated collections/i)).toBeInTheDocument();
    });

    it("renders up to 5 cards at a time", () => {
        renderCarousel();

        const cards = screen.getAllByRole("link"); // assuming Card links
        expect(cards).toHaveLength(5);
    });

    it("moves forward when forward button is clicked", () => {
        renderCarousel();

        const forwardBtn = screen.getByRole('button', { name: /→/i });
        fireEvent.click(forwardBtn);

        // After moving forward, the next slice should be visible
        const card6 = screen.getByText("Product 6");
        expect(card6).toBeInTheDocument();
    });

    it("does not move backward when at the start", () => {
        renderCarousel();

        const backwardBtn = screen.getByRole('button', { name: /←/i });
        fireEvent.click(backwardBtn);

        // First item should still be visible
        const card1 = screen.getByText("Product 1");
        expect(card1).toBeInTheDocument();
    });

    it("moves backward after moving forward", () => {
        renderCarousel();

        const forwardBtn = screen.getByRole('button', { name: /→/i });
        const backwardBtn = screen.getByRole('button', { name: /←/i });

        fireEvent.click(forwardBtn);
        fireEvent.click(backwardBtn);

        const card1 = screen.getByText("Product 1");
        expect(card1).toBeInTheDocument();
    });
});

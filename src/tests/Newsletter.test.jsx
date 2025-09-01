import { render, screen } from '@testing-library/react';
import { describe, it, expect } from "vitest";
import Newsletter from "../components/Newsletter.jsx";

describe("Newsletter component", () => {
    it("renders the main header text", () => {
        render(<Newsletter />);
        const header = screen.getByText(/Subscribe now and get 20% off/i);
        expect(header).toBeInTheDocument();
    });

    it("renders the secondary description text", () => {
        render(<Newsletter />);
        const secondaryText = screen.getByText(/Stay updated with the latest offers/i);
        expect(secondaryText).toBeInTheDocument();
    });

    it("renders the email input field", () => {
        render(<Newsletter />);
        const emailInput = screen.getByPlaceholderText(/Enter your email/i);
        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveAttribute("type", "email");
        expect(emailInput).toHaveAttribute("name", "email");
    });

    it("renders the submit button", () => {
        render(<Newsletter />);
        const submitBtn = screen.getByRole("button", { name: /Submit/i });
        expect(submitBtn).toBeInTheDocument();
        expect(submitBtn).toHaveAttribute("type", "submit");
    });
});

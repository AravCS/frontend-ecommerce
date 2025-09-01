import { render, screen } from '@testing-library/react';
import { describe, it, expect } from "vitest";
import Footer from "../components/Footer.jsx";

describe("Footer component", () => {
    it("renders the company brand name", () => {
        render(<Footer />);
        expect(screen.getByText("UrbanLeaf")).toBeInTheDocument();
    });

    it("renders the company description", () => {
        render(<Footer />);
        expect(screen.getByText(/Our company is committed to delivering/i)).toBeInTheDocument();
    });

    it("renders the COMPANY section with navigation links", () => {
        render(<Footer />);

        const companyHeader = screen.getByText("COMPANY");
        expect(companyHeader).toBeInTheDocument();

        const homeLink = screen.getByRole('link', { name: /Home/i });
        const aboutLink = screen.getByRole('link', { name: /About Us/i });
        const deliveryLink = screen.getByRole('link', { name: /Delivery/i });
        const privacyLink = screen.getByRole('link', { name: /Privacy Policy/i });

        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute("href", "/");

        expect(aboutLink).toBeInTheDocument();
        expect(aboutLink).toHaveAttribute("href", "/about");

        expect(deliveryLink).toBeInTheDocument();
        expect(deliveryLink).toHaveAttribute("href", "/delivery");

        expect(privacyLink).toBeInTheDocument();
        expect(privacyLink).toHaveAttribute("href", "/privacy");
    });

    it("renders the GET IN TOUCH section with contact info", () => {
        render(<Footer />);

        const contactHeader = screen.getByText("GET IN TOUCH");
        expect(contactHeader).toBeInTheDocument();

        const phone = screen.getByRole('link', { name: /\+1-0000-000-000/i });
        const email = screen.getByRole('link', { name: /john.doe@mail.com/i });
        const handle = screen.getByText("@YourBrandOfficial");

        expect(phone).toBeInTheDocument();
        expect(phone).toHaveAttribute("href", "tel:+10000000000");

        expect(email).toBeInTheDocument();
        expect(email).toHaveAttribute("href", "mailto:john.doe@mail.com");

        expect(handle).toBeInTheDocument();
    });
});

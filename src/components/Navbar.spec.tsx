import {fireEvent, render, screen} from "@testing-library/react";
import {describe, expect, test, vi} from 'vitest';
import Navbar from "./Navbar";

describe("Navbar Component", () => {
    test("renders Navbar component", () => {
        render(<Navbar/>);
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Work")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    test("changes active button on click", () => {
        render(<Navbar/>);
        const homeButton = screen.getByText("Home");
        const workButton = screen.getByText("Work");

        expect(homeButton).toHaveClass("active");

        fireEvent.click(workButton);

        expect(workButton).toHaveClass("active");
        expect(homeButton).not.toHaveClass("active");
    });

    test("renders social media icons", () => {
        render(<Navbar/>);
        screen.logTestingPlaygroundURL();
        expect(screen.getByTestId("LinkedInIcon")).toBeInTheDocument();
        expect(screen.getByTestId("GitHubIcon")).toBeInTheDocument();
        expect(screen.getByTestId("WhatsAppIcon")).toBeInTheDocument();
    });

    test("redirects to social media page on icon click", () => {
        render(<Navbar/>);
        const linkedInIcon = screen.getByTestId("LinkedInIcon");
        const gitHubIcon = screen.getByTestId("GitHubIcon");
        const whatsAppIcon = screen.getByTestId("WhatsAppIcon");

        const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

        fireEvent.click(linkedInIcon);
        expect(openSpy).toHaveBeenCalledWith("https://www.linkedin.com/in/dharun-karthik", "_blank");

        fireEvent.click(gitHubIcon);
        expect(openSpy).toHaveBeenCalledWith("https://github.com/dharun-karthik", "_blank");

        fireEvent.click(whatsAppIcon);
        expect(openSpy).toHaveBeenCalledWith("https://wa.me/919943962784", "_blank");

        openSpy.mockRestore();

    });
});
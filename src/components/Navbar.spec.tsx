import {fireEvent, render, screen} from "@testing-library/react";
import {describe, expect, test, vi} from 'vitest';
import Navbar from "./Navbar";
import Section from "../constants/Section.ts";

describe("Navbar Component", () => {

    const sections: Array<Section> = [Section.HOME, Section.WORK, Section.ABOUT, Section.CONTACT];
    const mockSetActive = vi.fn();

    test("renders Navbar component", () => {
        render(<Navbar buttons={sections} activeButton={Section.CONTACT} onButtonClick={mockSetActive}/>);

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Work")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toHaveClass("active");
    });

    test("should call set active method and change the class based on active items", () => {
        render(<Navbar buttons={sections} activeButton={Section.HOME} onButtonClick={mockSetActive}/>);
        const homeButton = screen.getByText("Home");
        const workButton = screen.getByText("Work");

        expect(homeButton).toHaveClass("active");

        fireEvent.click(workButton);

        expect(mockSetActive).toHaveBeenCalledWith("Work");
    });

    test("renders social media icons", () => {
        render(<Navbar buttons={sections} activeButton={Section.HOME} onButtonClick={mockSetActive}/>);

        expect(screen.getByTestId("LinkedInIcon")).toBeInTheDocument();
        expect(screen.getByTestId("GitHubIcon")).toBeInTheDocument();
        expect(screen.getByTestId("WhatsAppIcon")).toBeInTheDocument();
    });

    test("redirects to social media page on icon click", () => {
        render(<Navbar buttons={sections} activeButton={Section.HOME} onButtonClick={mockSetActive}/>);

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
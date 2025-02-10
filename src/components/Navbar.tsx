import * as React from "react";
import {useState} from "react";
import {Box, Button, IconButton, Typography} from "@mui/material";
import {GitHub, LinkedIn, WhatsApp} from "@mui/icons-material";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const [active, setActive] = useState<string>("Home");

    const LINKEDIN_URL = "https://www.linkedin.com/in/dharun-karthik";
    const GITHUB_URL = "https://github.com/dharun-karthik";
    const WHATSAPP_URL = "https://wa.me/919943962784";

    const handleOpenInNewTab = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <Box className="navbar-container">
            <Box className="navbar-logo">
                <Typography variant="h6" className="logo-text">
                    D
                </Typography>
            </Box>
            <Box className="navbar-links">
                {["Home", "Work", "About", "Contact"].map((item: string) => (
                    <Button
                        key={item}
                        onClick={() => setActive(item)}
                        className={active === item ? "nav-button active" : "nav-button"}
                    >
                        {item}
                    </Button>
                ))}
            </Box>
            <Box className="navbar-icons">
                <IconButton className="icon-button" onClick={() => handleOpenInNewTab(LINKEDIN_URL)}>
                    <LinkedIn/>
                </IconButton>
                <IconButton className="icon-button" onClick={() => handleOpenInNewTab(GITHUB_URL)}>
                    <GitHub/>
                </IconButton>
                <IconButton className="icon-button" onClick={() => handleOpenInNewTab(WHATSAPP_URL)}>
                    <WhatsApp/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default Navbar;

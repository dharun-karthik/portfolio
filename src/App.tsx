import {AppBar, Box, Toolbar} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Navbar from "./components/Navbar.tsx";
import "./App.css";
import {useState} from "react";
import Section from "./constants/Section.ts";

const theme = createTheme({
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    '&:focus, &:active, &:hover': {
                        boxShadow: 'none',
                        outline: 'none',
                        border: 'none',
                        background: 'none'
                    },
                },
            },
        },
    },
});

function App() {

    const sections: Array<Section> = Object.values(Section);
    const [currentSection, setCurrentSection] = useState(Section.HOME);

    return (
        <ThemeProvider theme={theme}>
            <Box className="app-container">
                <AppBar position="fixed" className="app-bar" elevation={0}>
                    <Toolbar>
                        <Navbar buttons={sections} activeButton={currentSection} onButtonClick={setCurrentSection}/>
                    </Toolbar>
                </AppBar>
                <Box className="app-content">
                    {currentSection}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
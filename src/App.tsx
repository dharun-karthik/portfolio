import {AppBar, Box, Toolbar} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Navbar from "./components/Navbar.tsx";
import "./App.css";

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
    return (
        <ThemeProvider theme={theme}>
            <Box className="app-container">
                <AppBar position="fixed" className="app-bar" elevation={0}>
                    <Toolbar>
                        <Navbar/>
                    </Toolbar>
                </AppBar>
                <Box className="app-content">
                    <h1 className="App">My Portfolio</h1>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
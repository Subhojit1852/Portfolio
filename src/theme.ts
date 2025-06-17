import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0d0d0d",
      paper: "#121212",
    },
    primary: {
      main: "#00ffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: "'Fira Code', monospace",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        //   overflow: "hidden",
          backgroundColor: "#0d0d0d",
        },
        "#floating-bg": {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        //   overflow: "hidden",
          zIndex: -1,
          pointerEvents: "none",
        },
        ".float-char": {
 position: "absolute",
  fontFamily: "'Fira Code', monospace",
  fontWeight: 700,
  opacity: 0.4,
  userSelect: "none",
  animation: "floatAnim linear infinite, pulseAnim 3s ease-in-out infinite",
  textShadow: "0 0 6px rgba(0, 255, 255, 0.6)", // Glow effect
  transition: "transform 0.1s ease",
},

        "@keyframes floatAnim": {
          "0%": {
            transform: "translateY(100vh) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(-10vh) rotate(360deg)",
          },
        },
        
      },
    },
  },
});

export default theme;

import { createTheme } from "@mui/material/styles";

const colors = {
  rose: "#f43f5e",
  indigo: "#6366f1",
  backgroundLight: "#fff9fb",
  auraPink: "rgba(244, 63, 94, 0.15)",
  auraIndigo: "rgba(99, 102, 241, 0.15)",
};

export const theme = createTheme({
  palette: {
    primary: { main: colors.indigo },
    secondary: { main: colors.rose },
    background: {
      default: colors.backgroundLight,
    },
    text: {
      primary: "#1e293b", // Azul pizarra oscuro, muy profesional
      secondary: "#64748b", // Gris más claro para subtítulos
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontFamily: "'Playfair Display', serif" },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: 500,
    },
  },
  components: {
    // 1. CONFIGURACIÓN GLOBAL DE BOTONES
    // Esto asegura que TODOS tus botones tengan la fuente y forma que quieres
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          fontSize: "1.1rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "none",
          fontFamily: "'Playfair Display', serif",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "radial-gradient(circle, #ffffff 0%, #fff5f7 100%)",
          backgroundAttachment: "fixed",
        },
        ".final-message-card": {
          background: "rgba(255, 255, 255, 0.98) !important",
          backdropFilter: "blur(20px) !important",
          borderColor: "rgba(244, 63, 94, 0.2) !important",
          boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.15) !important",

          // Adorno: línea sutil arriba
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #6366f1, #f43f5e)",
          },
        },
        // --- ESTILOS DE TIMELINE SECTION ---
        // 1. Títulos y Subtítulos
        ".timeline-title": {
          fontFamily: "'Playfair Display', serif !important",
          fontWeight: "900 !important",
          fontStyle: "italic !important",
          textAlign: "center",
          background: "linear-gradient(90deg, #6366f1, #f43f5e) !important",
          WebkitBackgroundClip: "text !important",
          WebkitTextFillColor: "transparent !important",
          
        },
        ".timeline-subtitle": {
          textAlign: "center !important",
          color: "#64748b !important", // theme.palette.text.secondary
          letterSpacing: "0.2em !important",
          textTransform: "uppercase",
          fontWeight: "500 !important",
          fontSize: "0.8rem !important",
        },
       

        // --- ESTILOS DE CARD ---
        ".moment-card": {
          borderRadius: "24px !important",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.4) !important",
          background: "rgba(255, 255, 255, 0.7) !important",
          backdropFilter: "blur(15px) !important",
          boxShadow: "0 20px 25px -5px rgba(244, 63, 94, 0.08) !important",
          transition:
            "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important",
          cursor:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill:red'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>\") 12 12, auto",

          "&:hover": {
            transform: "translateY(-10px) rotate(0.5deg) !important",
            boxShadow: "0 30px 60px -12px rgba(126, 34, 206, 0.15) !important",
            zIndex: 10,
          },
        },
        ".moment-card .card-image": {
          transition: "transform 0.8s ease !important",
        },
        ".moment-card:hover .card-image": {
          transform: "scale(1.1) !important",
        },

        // --- TIPOGRAFÍA DENTRO DE LA CARD ---
        ".moment-card .MuiTypography-h5": {
          fontFamily: "'Playfair Display', serif !important",
          fontWeight: "800 !important",
          color: "#1e293b !important", // theme.palette.text.primary
        },
        ".moment-card .MuiTypography-body2": {
          color: "#64748b !important", // theme.palette.text.secondary
          marginTop: "8px !important", // Mueve el mt: 1 aquí
          lineHeight: "1.6 !important",
        },

        // --- ESTILOS DE CHIPS ---
        ".moment-chip": {
          fontWeight: "600 !important",
          borderRadius: "8px !important",
        },
        ".moment-chip.video": {
          backgroundColor: "rgba(99, 102, 241, 0.2) !important",
          color: "#4f46e5 !important",
          border: "1px solid rgba(99, 102, 241, 0.3) !important",
        },
        ".moment-chip.image": {
          backgroundColor: "rgba(244, 63, 94, 0.2) !important",
          color: "#e11d48 !important",
          border: "1px solid rgba(244, 63, 94, 0.3) !important",
        },
        // 2. EFECTO GLASSMORPHISM
        // Usamos !important en el fondo y color para forzar el diseño sobre el "morado" de MUI
        ".glass-button": {
          backgroundColor: "rgba(255, 255, 255, 0.4) !important",
          backdropFilter: "blur(10px) saturate(160%)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
          color: "#f43f5e !important",
          transition: "all 0.3s ease !important",

          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.7) !important",
            border: "1px solid #f43f5e",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(244, 63, 94, 0.15)",
          },
        },
      },
    },
  },
});

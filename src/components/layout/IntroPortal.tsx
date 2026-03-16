import { motion } from 'framer-motion';
import { Container, Typography, Box } from '@mui/material';

interface IntroPortalProps {
    onEnter: () => void;
}

export const IntroPortal = ({ onEnter }: IntroPortalProps) => {
    return (
        <Box sx={{
            position: 'relative',
            minHeight: '100vh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.default'
        }}>
            {/* AURA ROSA — arriba izquierda, más intensa que antes */}
            <Box sx={{
                position: 'absolute',
                top: '-15%', left: '-15%',
                width: '60vw', height: '60vw',
                background: 'radial-gradient(circle, rgba(244,63,94,0.13) 0%, rgba(244,63,94,0) 70%)',
                filter: 'blur(80px)',
                zIndex: 0,
            }} />

            {/* AURA INDIGO — abajo derecha */}
            <Box sx={{
                position: 'absolute',
                bottom: '-15%', right: '-15%',
                width: '60vw', height: '60vw',
                background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0) 70%)',
                filter: 'blur(80px)',
                zIndex: 0,
            }} />

            {/* AURA CENTRAL sutil — da profundidad al centro */}
            <Box sx={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40vw', height: '40vw',
                background: 'radial-gradient(circle, rgba(244,63,94,0.04) 0%, rgba(244,63,94,0) 70%)',
                filter: 'blur(60px)',
                zIndex: 0,
            }} />

            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>

                {/* EYEBROW — entra primero, pequeño y discreto */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <Typography sx={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: '#94a3b8',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        mb: 3,
                    }}>
                        Un capítulo especial
                    </Typography>
                </motion.div>

                {/* TÍTULO PRINCIPAL — el golpe emocional */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                >
                    <Typography sx={{
                        fontSize: { xs: '3.5rem', md: '5rem' },
                        fontWeight: 700,
                        fontStyle: 'italic',
                        fontFamily: "'Playfair Display', serif",
                        lineHeight: 1.1,
                        mb: 0,
                        // Degradado rose → indigo igual que el resto del proyecto
                        background: 'linear-gradient(135deg, #1e293b 0%, #f43f5e 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Solo para ti.
                    </Typography>
                </motion.div>

                {/* LÍNEA DIVISORA ANIMADA — une el título con la cita */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 1.1 }}
                    style={{ transformOrigin: 'center' }}
                >
                    <Box sx={{
                        width: '50px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #6366f1, #f43f5e)',
                        borderRadius: '2px',
                        mx: 'auto',
                        my: 3,
                    }} />
                </motion.div>

                {/* CITA — entra después del título, es el subtexto */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 1.4 }}
                >
                    <Typography sx={{
                        fontSize: { xs: '1.05rem', md: '1.2rem' },
                        fontStyle: 'italic',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 400,
                        lineHeight: 1.7,
                        color: '#64748b',
                        maxWidth: '420px',
                        mx: 'auto',
                        mb: 5,
                    }}>
                        "Dicen que los mejores capítulos son los que
                        se escriben con el{' '}
                        <Box component="span" sx={{ color: '#f43f5e', fontWeight: 600 }}>
                            corazón abierto
                        </Box>."
                    </Typography>
                </motion.div>

                {/* BOTÓN — minimalista, íntimo, italicizado */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 1.9 }}
                >
                    <Box
                        onClick={onEnter}
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1.5,
                            px: 5,
                            py: 1.6,
                            borderRadius: '50px',
                            border: '1px solid rgba(244,63,94,0.25)',
                            background: 'rgba(255,255,255,0.5)',
                            backdropFilter: 'blur(12px)',
                            cursor: 'pointer',
                            transition: 'all 0.35s ease',
                            userSelect: 'none',
                            '&:hover': {
                                background: 'rgba(244,63,94,0.05)',
                                border: '1px solid rgba(244,63,94,0.5)',
                                transform: 'translateY(-3px)',
                                boxShadow: '0 12px 30px rgba(244,63,94,0.12)',
                            }
                        }}
                    >
                        {/* Corazón pulsante */}
                        <motion.span
                            animate={{ scale: [1, 1.25, 1] }}
                            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                            style={{ fontSize: '1rem', lineHeight: 1 }}
                        >
                            ❤️
                        </motion.span>

                        <Typography sx={{
                            fontFamily: "'Playfair Display', serif",
                            fontStyle: 'italic',
                            fontSize: '1rem',
                            color: '#f43f5e',
                            fontWeight: 400,
                            letterSpacing: '0.02em',
                        }}>
                            Abrir nuestra historia
                        </Typography>
                    </Box>
                </motion.div>

            </Container>
        </Box>
    );
};
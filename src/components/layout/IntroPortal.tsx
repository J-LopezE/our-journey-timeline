import { motion } from 'framer-motion';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
            {/* --- AURAS DE LUZ (Efecto Pro Z-Axis) --- */}
            <Box sx={{
                position: 'absolute',
                top: '-10%', left: '-10%',
                width: '50vw', height: '50vw',
                background: 'radial-gradient(circle, rgba(244,63,94,0.1) 0%, rgba(244,63,94,0) 70%)',
                filter: 'blur(80px)',
                zIndex: 0,
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: '-10%', right: '-10%',
                width: '50vw', height: '50vw',
                background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0) 70%)',
                filter: 'blur(80px)',
                zIndex: 0,
            }} />

            {/* --- CONTENIDO PRINCIPAL --- */}
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Paper elevation={0} sx={{ 
                        background: 'rgba(255,255,255,0.6)', 
                        backdropFilter: 'blur(10px)',
                        padding: { xs: 4, md: 6 },
                        borderRadius: 6,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.02)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        mb: 6
                    }}>
                        <Typography variant="h2" sx={{
                            color: 'text.primary',
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontWeight: 400,
                            lineHeight: 1.3,
                            fontStyle: 'italic',
                            fontFamily: "'Playfair Display', serif",
                        }}>
                            "Dicen que los mejores capítulos son los que se escriben con el <span style={{ color: '#f43f5e', fontWeight: 600 }}>corazón abierto</span>."
                        </Typography>
                    </Paper>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <Button
                        onClick={onEnter}
                        variant="contained"
                        className="glass-button"
                        endIcon={
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                <FavoriteIcon sx={{ color: 'secondary.main', fontSize: '1rem' }} />
                            </motion.div>
                        }
                        sx={{ px: 5, py: 1.5, fontSize: '1rem' }}
                    >
                        Abrir nuestra historia
                    </Button>
                </motion.div>
            </Container>
        </Box>
        

    );
};
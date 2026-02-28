import { motion } from 'framer-motion';
import { Typography, Box, Paper } from '@mui/material';
import Tilt from 'react-parallax-tilt';

export const FinalMessage = () => {
    return (

        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
        >
            <Tilt 
                tiltMaxAngleX={5} // Ángulo máximo de inclinación horizontal
                tiltMaxAngleY={5} // Ángulo máximo de inclinación vertical
                perspective={1000} // Perspectiva para el efecto 3D
                transitionSpeed={400}
                glareEnable={true} // Efecto de brillo
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
            >
            <Paper
                elevation={0}
                className="final-message-card" 
                sx={{
                    p: { xs: 4, md: 6 },
                    textAlign: 'center',
                    maxWidth: '650px',
                    mx: 'auto',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    border: '1px solid',
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        lineHeight: 2,
                        fontSize: '1.2rem',
                        mb: 4,
                    }}
                >
                    "Si la vida nos da el reencuentro, será un regalo. Si no, que tu camino esté siempre lleno de flores y tu alma siempre en paz. Te deseo todo lo bonito de este mundo, porque no mereces menos."
                </Typography>

                <Typography
                    variant="caption"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        display: 'block',
                        mb: 2
                        
                    }}
                >
                    <strong>Gracias por cada instante.</strong>
                </Typography>

                {/* EL CORAZÓN CON GLOW */}
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            filter: [
                                'drop-shadow(0 0 0px #f43f5e)',
                                'drop-shadow(0 0 15px #f43f5e)',
                                'drop-shadow(0 0 0px #f43f5e)'
                            ]
                        }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        style={{ fontSize: '2.5rem', cursor: 'pointer', display: 'inline-block' }}
                    >
                        ❤️
                    </motion.div>
                </Box>
            </Paper>
            </Tilt>
        </motion.div>
    );
};  
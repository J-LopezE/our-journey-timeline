import { Card, CardContent, Typography, Chip, Stack, Box } from '@mui/material';
import { motion } from 'framer-motion';
import type { VisualMoment } from '../../types/moment';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';
import { MomentSkeleton } from './MomentSkeleton';

interface MomentCardProps {
    moment: VisualMoment;
    index: number;
}

export const MomentCard = ({ moment, index }: MomentCardProps) => { // index es el índice de la lista
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        // Usamos motion.div como contenedor externo para evitar conflictos con MUI
        <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index % 3 * 0.15 }}
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
                {!isLoaded && <MomentSkeleton />}
            <Card
                elevation={0}
                className="moment-card" // --- ESTILO EN TEMA ---
                sx={{ mb: 4, display: isLoaded ? 'block' : 'none' }} 
            >
                <Box sx={{ height: 320, overflow: 'hidden', position: 'relative' }}>
                    <Box
                        component={moment.type === 'video' ? 'video' : 'img'}
                        {...(moment.type === 'video' ? {
                            autoPlay: true,
                            loop: true,
                            muted: true,
                            playsInline: true,
                            onLoadedData: () => setIsLoaded(true),
                        } : {
                            alt: moment.title,
                            onLoad: () => setIsLoaded(true)
                        })}
                        src={moment.url}
                        className="card-image" // --- ESTILO EN TEMA ---
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
                
                <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        <Chip
                            label={moment.category}
                            size="small"
                            // --- ESTILO EN TEMA (Clases dinámicas) ---
                            className={`moment-chip ${moment.type}`} 
                        />
                    </Stack>
                    <Typography variant="h5">
                        {moment.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, lineHeight: 1.6 }}>
                        {moment.description}
                    </Typography>
                </CardContent>
            </Card>
            </Tilt>
        </motion.div>
    );
};
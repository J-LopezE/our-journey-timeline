import { useState, useEffect } from 'react';
import { Container, Typography, Skeleton, useMediaQuery, useTheme, Box } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';
import type { TimelineProps } from '@mui/lab';
import { motion, AnimatePresence } from 'framer-motion';
import { MomentCard } from '../moments/MomentCard';
import { myMoments } from '../../data/momentsData';
import { FinalMessage } from './FinalMessage';
import { MomentSkeleton } from '../moments/MomentSkeleton';
import { DecisionCard } from './DecisionCard';


export const TimelineSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    // 2. CONFIGURAR HOOKS DE TEMA Y MEDIA QUERY
    const theme = useTheme();
    // Esto será true si la pantalla es menor a 600px (sm)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [questionState, setQuestionState] = useState<'question' | 'final' | 'decision'>('question');
    useEffect(() => {
        // Simulamos un pequeño delay para que el usuario vea la elegancia del Skeleton
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const timelinePos: TimelineProps['position'] = isMobile ? "left" : "alternate";

    return (
        <Container maxWidth="md">

            <motion.div
                key="content-screen"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                style={{ position: 'relative', zIndex: 1, paddingBottom: '100px', paddingTop: '80px' }}
            >
                <Container maxWidth="md">
                    <Typography variant="h1" className="timeline-title" sx={{
                        mb: 2,
                        fontSize: { xs: '3rem', md: '4.5rem' }
                    }}>
                        Nuestra Historia
                    </Typography>
                    <Typography variant="subtitle1" className="timeline-subtitle" sx={{ mb: 10 }}>
                        Un viaje a través de mis recuerdos favoritos
                    </Typography>

                    <Timeline position={timelinePos} sx={{ p: 0 }}>
                        {myMoments.map((moment, index) => (
                            <TimelineItem key={moment.id}>
                                {!isMobile && (
                                    <TimelineOppositeContent sx={{ m: 'auto 0', fontWeight: 700, color: 'text.secondary' }}>
                                        {isLoading ? <Skeleton width={60} /> : moment.date}
                                    </TimelineOppositeContent>
                                )}
                                <TimelineSeparator>
                                    <TimelineDot sx={{ bgcolor: index === myMoments.length - 1 ? '#f43f5e' : '#6366f1', boxShadow: index === myMoments.length - 1 ? '0 0 0 4px rgba(244, 63, 94, 0.2)' : 'none' }}>
                                        {index === myMoments.length - 1 ? '❤️' : null}
                                    </TimelineDot>
                                    {index !== myMoments.length - 1 && <TimelineConnector sx={{ bgcolor: '#6366f1' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: 4, px: 2, zIndex: 2 }}>
                                    {isLoading ? (
                                        <MomentSkeleton />
                                    ) : (
                                        <>
                                            {/* Fecha flotante — solo visible en móvil */}
                                            {isMobile && (
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        display: 'block',
                                                        color: 'text.secondary',
                                                        fontWeight: 600,
                                                        letterSpacing: '0.05em',
                                                        mb: 0.8,
                                                        ml: 0.5,
                                                        fontSize: '0.72rem',
                                                        textTransform: 'uppercase',
                                                    }}
                                                >
                                                    {moment.date}
                                                </Typography>
                                            )}
                                            <MomentCard moment={moment} index={index} />
                                        </>
                                    )}
                                </TimelineContent>
                            </TimelineItem>
                        ))}

                        <TimelineItem sx={{ minHeight: 'auto' }}>
                            <TimelineSeparator>
                                <TimelineDot
                                    variant="outlined"
                                    sx={{ borderColor: '#6366f1', borderWidth: 2, bgcolor: '#fff' }}
                                />
                                {/* Quitamos el conector aquí para que la pregunta flote */}
                            </TimelineSeparator>

                            <TimelineContent sx={{ py: 10, minHeight: '300px' }}>
                                <AnimatePresence mode="wait">

                                    {/* ── FASE 1: ¿Continuará...? — timer 6s ── */}
                                    {questionState === 'question' && (
                                        <motion.div
                                            key="question"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                            transition={{ duration: 1.2, ease: 'easeOut' }}
                                            onViewportEnter={() => {
                                                setTimeout(() => setQuestionState('final'), 4000); 
                                            }}
                                            style={{ textAlign: 'center' }}
                                        >
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    fontWeight: 300,
                                                    fontStyle: 'italic',
                                                    color: '#64748b',
                                                    fontFamily: "'Playfair Display', serif",
                                                    textAlign: 'center',
                                                    mb: 3,
                                                    fontSize: { xs: '1.8rem', md: '2.5rem' }
                                                }}
                                            >
                                                ¿Continuará...?
                                            </Typography>

                                            {/* Barra de progreso sutil — indica visualmente que algo viene */}
                                            <Box sx={{ width: '80px', mx: 'auto', mt: 2 }}>
                                                <motion.div
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: 6, ease: 'linear' }} // ← misma duración que el timer
                                                    style={{
                                                        height: '2px',
                                                        background: 'linear-gradient(90deg, #6366f1, #f43f5e)',
                                                        borderRadius: '2px',
                                                        transformOrigin: 'left',
                                                    }}
                                                />
                                            </Box>
                                        </motion.div>
                                    )}

                                    {/* ── FASE 2: Mensaje final — botón Continuar controlado por usuario ── */}
                                    {questionState === 'final' && (
                                        <motion.div
                                            key="final"
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -30, scale: 0.95 }}
                                            transition={{ duration: 1.2, ease: 'easeOut' }}
                                        >
                                            <FinalMessage />

                                            {/* Botón Continuar — aparece 1.5s después para que el usuario empiece a leer primero */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.5, duration: 0.8 }}
                                                style={{ textAlign: 'center', marginTop: '32px' }}
                                            >
                                                <Box
                                                    onClick={() => setQuestionState('decision')}
                                                    sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 1,
                                                        px: 4,
                                                        py: 1.2,
                                                        borderRadius: '50px',
                                                        border: '1px solid rgba(244,63,94,0.3)',
                                                        color: '#f43f5e',
                                                        fontSize: '0.95rem',
                                                        fontFamily: "'Playfair Display', serif",
                                                        fontStyle: 'italic',
                                                        cursor: 'pointer',
                                                        background: 'rgba(255,255,255,0.7)',
                                                        backdropFilter: 'blur(10px)',
                                                        transition: 'all 0.3s ease',
                                                        userSelect: 'none',
                                                        '&:hover': {
                                                            background: 'rgba(244,63,94,0.05)',
                                                            border: '1px solid rgba(244,63,94,0.6)',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 8px 20px rgba(244,63,94,0.15)',
                                                        }
                                                    }}
                                                >
                                                    Continuar
                                                    {/* Flecha animada → */}
                                                    <motion.span
                                                        animate={{ x: [0, 4, 0] }}
                                                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                                                        style={{ display: 'inline-block' }}
                                                    >
                                                        →
                                                    </motion.span>
                                                </Box>
                                            </motion.div>
                                        </motion.div>
                                    )}

                                    {/* ── FASE 3: Card Sí/No — aparece y se queda ── */}
                                    {questionState === 'decision' && (
                                        <motion.div
                                            key="decision"
                                            initial={{ opacity: 0, scale: 0.85, y: 50 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <DecisionCard />
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Container>
            </motion.div>
        </Container>
    );
};  
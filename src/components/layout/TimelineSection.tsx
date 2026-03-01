import { useState, useEffect } from 'react';
import { Container, Typography, Skeleton, useMediaQuery, useTheme } from '@mui/material';
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
import { motion } from 'framer-motion';
import { MomentCard } from '../moments/MomentCard';
import { myMoments } from '../../data/momentsData';
import { FinalMessage } from './FinalMessage';
import { MomentSkeleton } from '../moments/MomentSkeleton';


export const TimelineSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    // 2. CONFIGURAR HOOKS DE TEMA Y MEDIA QUERY
    const theme = useTheme();
    // Esto será true si la pantalla es menor a 600px (sm)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {
        // Simulamos un pequeño delay para que el usuario vea la elegancia del Skeleton
        const timer = setTimeout(() => setIsLoading(false), 1500);
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
                                        <MomentCard moment={moment} index={index} />
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

                            <TimelineContent sx={{ py: 10 }}>
                                {/* 1. LA PREGUNTA (PUENTE) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.8 }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 300,
                                            fontStyle: 'italic',
                                            color: '#64748b',
                                            fontFamily: "'Playfair Display', serif",
                                            textAlign: 'center',
                                            mb: 6
                                        }}
                                    >
                                        ¿Continuará...?
                                    </Typography>
                                </motion.div>
                                <FinalMessage />
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Container>
            </motion.div>
        </Container>
    );
};  
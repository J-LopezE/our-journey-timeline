import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paper, Typography, Box, Button, CircularProgress } from '@mui/material';
import Tilt from 'react-parallax-tilt';
import { sendDecision } from '../../services/formService';

type Estado = 'idle' | 'enviando' | 'si' | 'no';

export const DecisionCard = () => {
  const [estado, setEstado] = useState<Estado>('idle');

  const handleClick = async (decision: 'yes' | 'no') => {
    setEstado('enviando');
    try {
      await sendDecision(decision);
    } catch {
      // Si falla el envío, igual mostramos confirmación al usuario
    }
    setEstado(decision === 'yes' ? 'si' : 'no');
  };

  return (
    <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000}
      transitionSpeed={400} glareEnable glareMaxOpacity={0.08}>
      <Paper elevation={0} sx={{
        p: { xs: 4, md: 6 },
        textAlign: 'center',
        maxWidth: '580px',
        mx: 'auto',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '40px',
        border: '1px solid rgba(244,63,94,0.2)',
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 25px 50px -12px rgba(244,63,94,0.15)',
        '&::before': {
          content: '""', position: 'absolute',
          top: 0, left: 0, width: '100%', height: '4px',
          background: 'linear-gradient(90deg, #6366f1, #f43f5e)',
        }
      }}>
        <AnimatePresence mode="wait">

          {/* ── IDLE: pregunta + botones ── */}
          {estado === 'idle' && (
            <motion.div key="idle"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}>

              <Typography variant="h5" sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700, color: '#1e293b', mb: 2,
                fontSize: { xs: '1.3rem', md: '1.7rem' }, lineHeight: 1.4,
              }}>
                Y tú... ¿quisieras que continuara nuestra historia?
              </Typography>

              <Typography variant="body2" sx={{ color: '#64748b', mb: 4, fontStyle: 'italic' }}>
                Tu respuesta significa mucho para mí 🌹
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>

                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                  <Button onClick={() => handleClick('yes')} variant="contained" sx={{
                    px: 5, py: 1.5, borderRadius: '50px', textTransform: 'none',
                    fontFamily: "'Playfair Display', serif", fontSize: '1.05rem',
                    background: 'linear-gradient(135deg, #f43f5e, #fb7185)',
                    boxShadow: '0 8px 25px rgba(244,63,94,0.35)',
                    '&:hover': { background: 'linear-gradient(135deg, #e11d48, #f43f5e)' }
                  }}>
                    Sí, quiero ❤️
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                  <Button onClick={() => handleClick('no')} variant="outlined" sx={{
                    px: 5, py: 1.5, borderRadius: '50px', textTransform: 'none',
                    fontFamily: "'Playfair Display', serif", fontSize: '1.05rem',
                    borderColor: '#6366f1', color: '#6366f1',
                    '&:hover': { borderColor: '#4f46e5', bgcolor: 'rgba(99,102,241,0.05)' }
                  }}>
                    No por ahora 🕊️
                  </Button>
                </motion.div>

              </Box>
            </motion.div>
          )}

          {/* ── ENVIANDO: spinner ── */}
          {estado === 'enviando' && (
            <motion.div key="enviando"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} style={{ padding: '32px 0' }}>
              <CircularProgress sx={{ color: '#f43f5e', mb: 2 }} size={36} />
              <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                Enviando tu respuesta...
              </Typography>
            </motion.div>
          )}

          {/* ── CONFIRMACIÓN SÍ ── */}
          {estado === 'si' && (
            <motion.div key="si"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <motion.div animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: 3, duration: 0.5 }}
                style={{ fontSize: '3rem', marginBottom: '16px' }}>
                🥹❤️
              </motion.div>
              <Typography variant="h5" sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700, color: '#f43f5e', mb: 2
              }}>
                Mi respuesta también es sí.
              </Typography>
              <Typography variant="body1" sx={{
                color: '#64748b', lineHeight: 1.9, maxWidth: '400px', mx: 'auto'
              }}>
                Gracias por dejarme saber. Eso me llena el corazón de una manera
                que no sé describir. 🌹
              </Typography>
            </motion.div>
          )}

          {/* ── CONFIRMACIÓN NO ── */}
          {estado === 'no' && (
            <motion.div key="no"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🕊️✨</div>
              <Typography variant="h5" sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700, color: '#6366f1', mb: 2
              }}>
                Lo entiendo, y está bien.
              </Typography>
              <Typography variant="body1" sx={{
                color: '#64748b', lineHeight: 1.9, maxWidth: '400px', mx: 'auto'
              }}>
                Gracias por ser honesta. Cada momento que vivimos juntos fue real
                y siempre lo llevaré conmigo. Te deseo todo lo mejor. 💙
              </Typography>
            </motion.div>
          )}

        </AnimatePresence>
      </Paper>
    </Tilt>
  );
};
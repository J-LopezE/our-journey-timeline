import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from './theme/theme';
import { useFlow } from './hooks/useFlow';
import { IntroPortal } from './components/layout/IntroPortal';
import { TimelineSection } from './components/layout/TimelineSection';
import { BackgroundParticles } from './components/layout/BackgroundParticles';

function App() {

  const { showIntro, handleEnter, music, MusicPlayer } = useFlow();



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'auto',
        scrollbarGutter: 'stable',
        perspective: '1000px',
        // El patrón de líneas abstractas 
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 Q150,50 200,200 T400,300 M-50,200 Q100,250 250,100 T450,200 M100,-50 Q200,150 50,300 T200,450' fill='none' stroke='%23f43f5e' stroke-width='0.5' stroke-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '600px 600px',
          animation: 'patternDrift 20s linear infinite',
        }
      }}>
        <BackgroundParticles />
        <MusicPlayer />
        <AnimatePresence mode='wait'>
          {showIntro ? (
            <motion.div key="intro" exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }} transition={{ duration: 0.8 }}>
              <IntroPortal onEnter={handleEnter} />
            </motion.div>
          ) : (
            <motion.div key="timeline" initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.8, delay: 0.1 }}>
              <TimelineSection />
            </motion.div>
          )}
        </AnimatePresence>
        {!showIntro && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5, type: 'spring', bounce: 0.4 }}
            style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}
          >
            <Box
              onClick={music.toggle}
              title={music.isPlaying ? 'Pausar música' : 'Reproducir música'}
              sx={{
                width: 48, height: 48,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(244,63,94,0.3)',
                boxShadow: '0 4px 20px rgba(244,63,94,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.3rem',
                userSelect: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.15)',
                  boxShadow: '0 6px 25px rgba(244,63,94,0.4)',
                }
              }}
            >
              {music.isPlaying ? '🎵' : '🔇'}
            </Box>
          </motion.div>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { theme } from './theme/theme';
import { useFlow } from './hooks/useFlow'; 
import { IntroPortal } from './components/layout/IntroPortal';
import { TimelineSection } from './components/layout/TimelineSection';
import { BackgroundParticles } from './components/layout/BackgroundParticles';

function App() {

  const { showIntro, handleEnter } = useFlow();



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
        }
      }}>
        <BackgroundParticles />
        <AnimatePresence mode='wait'>
          {showIntro ? (
            <IntroPortal onEnter={handleEnter} key="intro" />
          ) : (
            <TimelineSection key="timeline" />
          )
          }
        </AnimatePresence>
      </Box>
    </ThemeProvider>
  );
}

export default App;
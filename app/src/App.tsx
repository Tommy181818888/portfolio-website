import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GradientBackground } from '@/components/layout/GradientBackground';
import { Home } from '@/pages/Home';
import { Work } from '@/pages/Work';
import { About } from '@/pages/About';
import { Story } from '@/pages/Story';
import { StoryDetail } from '@/pages/StoryDetail';
import { Stack } from '@/pages/Stack';
import { Links } from '@/pages/Links';
import { Timeline } from '@/pages/Timeline';
import { Contact } from '@/pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground relative">
          <GradientBackground />
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/story" element={<Story />} />
              <Route path="/story/:id" element={<StoryDetail />} />
              <Route path="/stack" element={<Stack />} />
              <Route path="/links" element={<Links />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/timeline" element={<Timeline />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

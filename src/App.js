import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FinalScreen from './FinalScreen';
import Questions from './Questions';
import Settings from './Settings';

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Settings />}>
            </Route>
            <Route path="/questions" element={<Questions />}>
            </Route>
            <Route path="/score" element={<FinalScreen />}>
            </Route>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;

import React from 'react';

import { Footer } from './components/Layout/Footer/Footer';
import { Header } from './components/Layout/Header/Header';

import { Container, Stack } from '@mui/material';
import AppRoutes from './router/AppRoutes';

function App() {

  return (
    <Stack sx={styles.stackContainer}>
      <Header />
      <Container sx={styles.pageContainer}>
        <AppRoutes />
      </Container>
      <Footer />
    </Stack>
  );
}

export default App;

const styles = {
  pageContainer: {
    minHeight: 'calc(100vh - 135px)',
    padding: '20px 0',
    backgroundColor: 'background.paper'
  },
  stackContainer: {
    backgroundColor: 'background.default'
  }
}
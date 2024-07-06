import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        To-Do List
      </Typography>
      <TaskInput />
      <TaskList />
    </Container>
  );
}

export default App;

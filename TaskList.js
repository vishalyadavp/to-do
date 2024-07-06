import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/tasksSlice';
import { List, ListItem, ListItemText, IconButton, Checkbox, Button, TextField } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditClick = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const handleEditSave = (id) => {
    dispatch(editTask({ id, text: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <List>
      {tasks.map(task => (
        <ListItem key={task.id} disableGutters>
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          {editId === task.id ? (
            <TextField
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => handleEditSave(task.id)}
              autoFocus
            />
          ) : (
            <ListItemText
              primary={task.text}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
          )}
          <IconButton onClick={() => dispatch(deleteTask(task.id))}>
            <Delete />
          </IconButton>
          <IconButton onClick={() => handleEditClick(task)}>
            <Edit />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;

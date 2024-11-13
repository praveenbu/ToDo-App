import React from 'react';
import { ListItem, ListItemText, TextField, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function TaskItem({
    index, task, editingIndex, editingText, setEditingText,
    startEditing, deleteTask, saveEditedTask
}) {
    return (
        <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {editingIndex === index ? (
                <TextField
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    sx={{ width: "70%", bgcolor: "white", borderRadius: "5px" }}
                    size="small"/>) : (<ListItemText primary={task} />)}
            <div>
                {editingIndex === index ? (
                    <Button
                        variant="contained"
                        sx={{ marginLeft: "10px" }}
                        onClick={saveEditedTask}>Save</Button>) : (
                    <IconButton edge="end" onClick={() => startEditing(index, task)} sx={{ color: 'blue' }}>
                        <EditIcon />
                    </IconButton>)}
                <IconButton edge="end" onClick={() => deleteTask(index)} sx={{ color: 'red' }}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </ListItem>
    );
}

import React, { useState } from 'react';
import { Container, Button, List, ListItem } from '@mui/material';
import { TaskInput } from './TaskInput';
import { TaskItem } from './TaskItem';
import '../CSS/ToDoList.css';

function ToDoList() {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState('');

    const addTask = (task) => {
        if (task.trim() === '') return;
        setTasks([...tasks, task]);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const startEditing = (index, task) => {
        setEditingIndex(index);
        setEditingText(task);
    };

    const saveEditedTask = () => {
        if (editingText.trim() === '') return;
        const updatedTasks = tasks.map((task, index) => 
            index === editingIndex ? editingText : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
        setEditingText('');
    };

    return (
        <Container sx={{
            bgcolor: "transparent", width: "500px", padding: "20px",
            display: 'flex', flexDirection: "column", boxShadow: "2px 2px 6px 2px black",
            borderRadius: "8px", margin: "15% auto"}}>
            <h1 style={{ fontStyle: "italic", color: "navy", paddingBottom: "10px" }}>💀 ToDo List</h1>
            <TaskInput input={input} setInput={setInput} addTask={addTask} />
            <List sx={{ maxHeight: "250px", overflow: 'auto', overflowX: "hidden" }}>
                {tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        index={index}
                        task={task}
                        editingIndex={editingIndex}
                        editingText={editingText}
                        setEditingText={setEditingText}
                        startEditing={startEditing}
                        deleteTask={deleteTask}
                        saveEditedTask={saveEditedTask}/>))}
            </List>
        </Container>
    );
}

export default ToDoList;

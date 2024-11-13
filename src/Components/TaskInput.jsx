import React from 'react';
import { TextField, Button } from '@mui/material';

export function TaskInput({ input, setInput, addTask }) {
    return (
        <div className="container1">
            <TextField
                value={input}
                onChange={(e) => setInput(e.target.value)}
                sx={{ width: "300px", bgcolor: "white", borderRadius: "5px" }}
                label="Enter Task"/>
            <Button
                variant="contained"
                sx={{ width: "50px", height: "50px", marginLeft: "10px", fontSize: "30px" }}
                onClick={() => addTask(input)}>+</Button>
        </div>
    );
}

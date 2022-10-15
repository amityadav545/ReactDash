import React from 'react'
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Language() {

    const [language, setlanguage] = React.useState(10);

    const handleChange = (event) => {
        setlanguage(event.target.value);
    };
    return (
        <Box sx={{ minWidth: 150, }} >
            <FormControl fullWidth  >
                <InputLabel id="demo-simple-select-label" style={{ display: 'flex', alignItems: 'center', }}> < GTranslateIcon style={{ fontSize: '28px', color: 'white' }} /></InputLabel>
                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"

                    value={language}
                    label="Language"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>English</MenuItem>
                    <MenuItem value={20}>Hindi</MenuItem>
                    <MenuItem value={30}>Urdu</MenuItem>
                </Select>
            </FormControl>
        </Box >
    )
}

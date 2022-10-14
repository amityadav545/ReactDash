import React from 'react'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Language() {

    const [language, setlanguage] = React.useState('');

    const handleChange = (event) => {
        setlanguage(event.target.value);
    };
    return (
        <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" style={{ display: 'flex', alignItems: 'center' }}> <LanguageOutlinedIcon />Lng</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Language"
                    onChange={handleChange}
                >
                    <MenuItem selected value={10}>English</MenuItem>
                    <MenuItem value={20}>Hindi</MenuItem>
                    <MenuItem value={30}>Urdu</MenuItem>
                </Select>
            </FormControl>
        </Box >
    )
}

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall() {
    const [status, setStatus] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
            <InputLabel id="demo-select-small-label">Status</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={status}
                label="status"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>CANCELADO</MenuItem>
                <MenuItem value={2}>ACEITO</MenuItem>
                <MenuItem value={3}>EM ANDAMENTO</MenuItem>
                <MenuItem value={4}>FINALIZADO</MenuItem>
                <MenuItem value={3}>ATRASADO</MenuItem>
            </Select>
        </FormControl>
    );
}

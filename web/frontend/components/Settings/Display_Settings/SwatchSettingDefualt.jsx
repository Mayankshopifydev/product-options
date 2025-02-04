import React from 'react'
import { FormLayout, TextField,Select } from '@shopify/polaris';
import {useState, useCallback} from 'react';

function SwatchSettingDefualt() {
    const [selected, setSelected] = useState('today');
const handleSelectChange = useCallback(() => setSelected(value),
    [],
);

const swatchtitlestyle = [
    {label: 'Tooltip', value: 'tooltip'},
    {label: 'Tooltip', value: 'yesterday'},
    {label: 'Tooltip', value: 'lastWeek'},
];
const swatchsize = [
    {label: 'Medium', value: 'Medium'},
    {label: 'Tooltip', value: 'yesterday'},
    {label: 'Tooltip', value: 'lastWeek'},
];
const swatchstyle = [
    {label: 'Square', value: 'Square'},
    {label: 'Tooltip', value: 'yesterday'},
    {label: 'Tooltip', value: 'lastWeek'},
];
  return (
        <div>
            <FormLayout>
            <FormLayout.Group>
            <Select
                label="Swatch Title Style"
                options={swatchtitlestyle}
                onChange={handleSelectChange}
                value={selected}
                fullWidth
                />
                <Select
                label="Swatch Size"
                options={swatchsize}
                onChange={handleSelectChange}
                value={selected}
                fullWidth
                />
                <Select
                label="Swatch Style"
                options={swatchstyle}
                onChange={handleSelectChange}
                value={selected}
                fullWidth
                />
                
            </FormLayout.Group>
            <FormLayout.Group>
                <TextField
                label="Swatch Selected Color"
                autoComplete="off"
                type='text'
                helpText="Leave empty for none"
                />
                <></>
                <></>

            </FormLayout.Group>
            </FormLayout>
                  </div>
  )
}

export default SwatchSettingDefualt
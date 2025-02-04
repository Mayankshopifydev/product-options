import React from 'react';
import { FormLayout,TextField,TextContainer,Checkbox,Select} from '@shopify/polaris'
import {useState, useCallback} from 'react';

export default function BasicSettings() {
// checkbox requerd
const [checked, setChecked] = useState(false);
const handleChangebox = useCallback(
  (newChecked) => setChecked(newChecked),
  [],
);

const [selected, setSelected] = useState('today');

const handleSelectChange = useCallback(
  (value) => setSelected(value),
  [],
);
//OPTIONS
const options = [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
  ];
  return (
<TextContainer>
                <FormLayout>
                  <TextField
                  label="Option Group Name"
                  value="color"
                  helpText="This will not be visible to your customers."
                  />
                  <FormLayout.Group>
                      <TextField
                      label="Label on the Product"
                      value='Color'
                      autoComplete="off"
                      helpText="The label as seen on the Product page."
                      />
                     <TextField
                        label="Label in the Cart"
                        value='Color'
                        autoComplete="off"
                        helpText="The label as seen on the Cart page."
                      />
                  </FormLayout.Group>
                  
                  <FormLayout.Group className="center-align">
                      <Select
                      label="Date range"
                      options={options}
                      onChange={handleSelectChange}
                      value={selected}
                      />
                        <Checkbox
                        label="Required"
                        checked={checked}
                        onChange={handleChangebox}
                        />
                  </FormLayout.Group>

                </FormLayout>
              </TextContainer>

  )
}


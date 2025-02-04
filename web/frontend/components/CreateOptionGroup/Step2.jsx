import {Card, Select, TextField, Button, Badge, Stack, ButtonGroup, FormLayout} from '@shopify/polaris';
import {useState} from 'react';

function Step2() {
  const [selected, setSelected] = useState('Tag');
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (value) => setSelected(value);
  const handleInputChange = (value) => setInputValue(value);

  const options = [
    {label: 'Tag', value: 'Tag'},
    {label: 'Vender', value: 'vender'},
    {label: 'Type', value: 'Type'},
    {label: 'Collection', value: 'Collection'},
    {label: 'All Products', value: 'allproducts'},
    {label: 'All Products Except', value: 'allproductsexcept'}
    // Add more options as necessary
  ];

  return (
<div>

    <FormLayout>
        <Stack spacing="tight" alignment="center">
          <p>When Product</p> 
          <Select
            options={options}
            onChange={handleSelectChange}
            value={selected}
          />
          <p>is</p>
              <TextField
                value={inputValue}
                onChange={handleInputChange}
              />
        <ButtonGroup segmented>
          <Button>Or</Button>
          <Button>And</Button>
        </ButtonGroup>
        </Stack>
    </FormLayout>

<br/>

        <Badge status="warning">0 matching products</Badge>

   
     
</div>

  );
}

export default Step2;

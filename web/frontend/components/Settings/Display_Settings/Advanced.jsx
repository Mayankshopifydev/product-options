import React from 'react'
import { FormLayout, Text, TextField } from '@shopify/polaris';

function Advanced() {
  return (
    <div>
        <FormLayout>

<FormLayout.Group>
    <TextField
    label="Custom CSS"
    multiline={4}
    autoComplete="off"
    />
</FormLayout.Group>
<FormLayout.Group>
    <Text>Enter the CSS selector(s) you’d like to target, as displayed below.<b>style</b> tags are NOT required.</Text>
</FormLayout.Group>
<FormLayout.Group>
    <Text>Example: </Text>
</FormLayout.Group>
    </FormLayout>
    </div>
  )
}

export default Advanced
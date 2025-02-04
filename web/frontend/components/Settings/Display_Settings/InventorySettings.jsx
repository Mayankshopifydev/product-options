import React from 'react'
import { FormLayout, Checkbox, TextField } from '@shopify/polaris';

function InventorySettings() {
  return (
    <div>
        <FormLayout>
            <FormLayout.Group>
                   <Checkbox
                          label="Enable inventory checking"
                          checked="false"
                          />
            </FormLayout.Group>
            <FormLayout.Group>
                <TextField
                    label="Out of Stock message"
                    placeholder='Sorry, [variant-name] is out of stock.'
                    autoComplete="off"
                    type='text'
                    helpText='Use [variant-name] to insert the addon’s name into your error'
                />
            </FormLayout.Group>
        </FormLayout>
    </div>
  )
}

export default InventorySettings
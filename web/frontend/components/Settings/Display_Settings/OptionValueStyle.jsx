import React from 'react'
import { FormLayout, TextField } from '@shopify/polaris';

function OptionValueStyle() {
  return (
    <div>
        <FormLayout>
        <FormLayout.Group>
             <TextField
              label="Font Color"
              value=''
              autoComplete="off"
              type='text'
              helpText='Leave empty for none'
              />
              <TextField
              label="Spacing Left of Values"
              value=''
              autoComplete="off"
              type='number'
              />
        </FormLayout.Group>
        </FormLayout>
              </div>
  )
}

export default OptionValueStyle
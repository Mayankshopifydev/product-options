import { FormLayout, Checkbox, TextField, Icon } from '@shopify/polaris';

export default function OptionContainerStyle() {
  return (
    <div className='optionlabelstyle'>
    <FormLayout>
    <FormLayout.Group>
         <TextField
          label="Font Color"
          value=''
          autoComplete="off"
          type='text'
          helpText='Leave empty for none'
          />
          
          <Checkbox
          label="Bold Text"
          />
          <Checkbox
          label="Place name left of values"
          checked="true"
          />
    </FormLayout.Group>
    </FormLayout>
          </div>
  )
}

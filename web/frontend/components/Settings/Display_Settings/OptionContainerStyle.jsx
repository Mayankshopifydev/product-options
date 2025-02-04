import { FormLayout, Checkbox, TextField, Icon } from '@shopify/polaris';
import { QuestionMarkMinor } from '@shopify/polaris-icons';

export default function OptionContainerStyle() {
  return (
    <FormLayout>
    <FormLayout.Group>

         <TextField
          label="Backgound Color"
          value=''
          autoComplete="off"
          type='text'
          helpText='Leave empty for none'
        />
          <TextField
          label="Border Color"
          value=''
          autoComplete="off"
          type='text'
          helpText='Leave empty for none'
        />
    </FormLayout.Group>
    <FormLayout.Group>
        <TextField
        label="Padding"
        value=''
        autoComplete="off"
        type='number'
        />
         <TextField
          label="Space Between Options"
          value='10'
          autoComplete="off"
          type='text'
        />
        <TextField
          label="Line Between Options"
          value=''
          autoComplete="off"
          type='text'
          helpText='Leave empty for none'
        />
    </FormLayout.Group>
    <FormLayout.Group>
    <Checkbox
            label="Bold Text"
            checked='true'
            />
                <Checkbox
            label="Show Max Length Text"
 checked='true'
            />
            <></>
    </FormLayout.Group>
    </FormLayout>
  )
}

import { FormLayout, Checkbox, TextField, Icon } from '@shopify/polaris';
import { QuestionMarkMinor } from '@shopify/polaris-icons';

export default function OptionTitle() {
  return (
    <FormLayout>
    <FormLayout.Group>
        <TextField
        label="Title Text"
        value=''
        autoComplete="off"
        ><Icon source={QuestionMarkMinor}/></TextField>
         <TextField
          label="Title Font Size"
          value='16'
          autoComplete="off"
          type='number'
        />
        <TextField
          label="Title Padding"
          value=''
          autoComplete="off"
          type='number'
        />
    </FormLayout.Group>
    <FormLayout.Group>
        <TextField
        label="Title Background"
        value=''
        autoComplete="off"
        type='text'
        />
         <TextField
          label="Title Border"
          value=''
          autoComplete="off"
          type='text'
          helpText='Leave empty for none'
        />
        <TextField
          label="Title Font Color"
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

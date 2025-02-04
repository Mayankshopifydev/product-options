import React from 'react'
import { useState, useCallback } from 'react';
import Step2 from "../components/CreateOptionGroup/Step2";
import {
  Page,
  Card,
  FormLayout,
  TextField,
  Button,
  Layout,
  Collapsible,
  ButtonGroup,
  TextContainer,
  Grid,
  Text,
  Divider,
  Icon
} from '@shopify/polaris';
import { ChevronDownMinor, ChevronUpMinor } from '@shopify/polaris-icons';

import Step3 from '../components/CreateOptionGroup/Step3';


export default function createoptiongroup() {
  const [optionGroupName, setOptionGroupName] = useState('T-Shirt Options');
  const [step1Active, setStep1Active] = useState(true);
  const [step2Active, setStep2Active] = useState(false);
  const [step3Active, setStep3Active] = useState(false);
 
  const handleOptionGroupNameChange = useCallback((value) => setOptionGroupName(value), []);

  const toggleStep1 = useCallback(() => setStep1Active((active) => !active), []);
  const toggleStep2 = useCallback(() => setStep2Active((active) => !active), []);
  const toggleStep3 = useCallback(() => setStep3Active((active) => !active), []);

  return (
    <Page 
    fullWidth
    title="Option Groups">
    <Layout>
      <Layout.Section>
        <Card sectioned>
          <Card.Header sectioned title=" Step 1: Products" actions={[{content: <Icon source={step1Active ? ChevronUpMinor : ChevronDownMinor} /> ,onAction: toggleStep1 }]}>
          </Card.Header>
          <Card.Section>
            <Collapsible open={step1Active} id="step1-collapsible" transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
              expandOnPrint>
                <br/>
                  <FormLayout>
                      <TextContainer>
                      <Text>Step 1: Internal Name</Text>
                      </TextContainer>
                      <Grid>
                <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                <TextField
                      label="Option Group Name"
                      value={optionGroupName}
                      onChange={handleOptionGroupNameChange}
                      helpText="This will not be visible to your customers."
                      />
                </Grid.Cell>
                </Grid>
                    <Button primary onClick={toggleStep2}>Next Step</Button>
                  </FormLayout>
            </Collapsible>
          </Card.Section>
                
          <Divider />

          
          <Card.Header title="Step 2: Products" actions={[{content: <Icon source={step2Active ? ChevronUpMinor : ChevronDownMinor} /> ,onAction: toggleStep2 }]}></Card.Header>
          <Card.Section>
            <Collapsible open={step2Active} id="step2-collapsible">
              <Step2 />
                <br/>
              <Button onClick={toggleStep3} primary>Next Step</Button>
                
            </Collapsible>
          </Card.Section>
          
          <Divider />
          <Card.Header title="Step 3: Options" actions={[{content: <Icon source={step3Active ? ChevronUpMinor : ChevronDownMinor} /> ,onAction: toggleStep3 }]}></Card.Header>
         <Card.Section>
            <Collapsible open={step3Active} id="step3-collapsible">
         <Step3/>
            </Collapsible>
         </Card.Section>
          
          <Card.Section>
              <ButtonGroup>
                  <Button variant="primary">Cancel</Button>
                  <Button onClick={() => console.log('Save & Close clicked')}>Save & Close</Button>
                  <Button primary onClick={() => console.log('Publish clicked')}>Publish</Button>
            </ButtonGroup>
          </Card.Section>
        </Card>
<br/>
       
      </Layout.Section>
    </Layout>
  </Page>
  )
}

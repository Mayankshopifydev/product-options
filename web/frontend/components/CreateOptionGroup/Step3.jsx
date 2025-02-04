import { ButtonGroup, Text, Button, Modal ,Grid,LegacyCard, LegacyTabs,Frame} from '@shopify/polaris'
import {useState, useCallback} from 'react';
import React from 'react';
import '../../assets/custom.css';
import BasicSettings from './Modeltab1/BasicSettings';
import AdvancedSettings from './Modeltab1/AdvancedSettings';

export default function Step3() {
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);
 
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelectedTabIndex(selectedTabIndex),
    []
  );

  

  const tabs = [
    {
      id: 'tab-1',
      content: 'Basic Settings',
      accessibilityLabel: 'Tab 1',
      panelID: 'panel-1',
    },
    {
      id: 'tab-2',
      content: 'Advanced Settings',
      panelID: 'panel-2',
    }
  ];

  return (
    <div>
        <ButtonGroup>
            <Button primary>Create Options</Button>
            <Button onClick={handleChange}>Add a Saved Option</Button>
        </ButtonGroup>
        <div className="FullWidthModal">
      <Modal
        open={active}
        onClose={handleChange}
        title="Add Option"
        primaryAction={{
          content: 'Confirm',
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleChange,
          },
        ]}
      >
       
        <Modal.Section>
        <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          
          <LegacyTabs
           tabs={tabs}
           selected={selectedTabIndex}
           onSelect={handleTabChange}
           fitted
          >
        <LegacyCard.Section >
        {selectedTabIndex === 0 && (
              <BasicSettings/>
            )}
            {selectedTabIndex === 1 && (
              <AdvancedSettings/>
            )}
        </LegacyCard.Section>
      </LegacyTabs>
          
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
        <Text>Preview</Text>
        <Frame offset='500'>
        </Frame>
        </Grid.Cell>
      </Grid>
        </Modal.Section>
      </Modal>
    </div>
    </div>
  )
}

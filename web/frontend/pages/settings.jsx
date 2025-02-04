import { useState, useCallback } from 'react';
import { Card, Tabs, TextContainer, Button, Page, Divider } from '@shopify/polaris';
import DisplaySettings from '../components/Settings/Display_Settings/DisplaySettings';

function SettingsTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = useCallback((selectedTabIndex) => setSelectedTab(selectedTabIndex), []);

  const tabs = [
    {
      id: 'display-settings',
      content: 'Display Settings',
      accessibilityLabel: 'Display Settings',
      panelID: 'display-settings-content',
    },
    {
      id: 'edit-in-cart-settings',
      content: 'Edit in Cart Settings',
      panelID: 'edit-in-cart-settings-content',
    },
    {
      id: 'frontend-settings',
      content: 'Frontend Settings',
      panelID: 'frontend-settings-content',
    },
    {
      id: 'account-settings',
      content: 'Account Settings',
      panelID: 'account-settings-content',
    },
  ];

  return (
    <Page
    fullWidth
    title="Dashboard"
    primaryAction={<Button primary >Create Option Group</Button>}
    secondaryActions={<Button variant="primary" >Help</Button>}
  >
     <Divider borderColor="border" gap="500" />
    <Card>
      <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
        <Card.Section title={tabs[selectedTab].content}>
        {selectedTab === 0 && (
          <DisplaySettings />
          )}

          {selectedTab === 1 && (
            <TextContainer>
              <p>
                Configure the look and feel of how customers can edit their options from within the
                cart.
              </p>
              <p>
                This setting is <strong>deactivated</strong>.
              </p>
              <Button primary>Activate</Button>
            </TextContainer>
          )}
        </Card.Section>
      </Tabs>
    </Card>
    </Page>
  );
}

export default SettingsTabs;

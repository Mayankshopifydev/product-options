import { useState } from 'react';
import { AppProvider, Card, Button, Collapsible, Icon } from '@shopify/polaris';
import { ChevronDownMinor, ChevronUpMinor } from '@shopify/polaris-icons';
import OptionTitle from './OptionTitle';
import OptionContainerStyle from './OptionContainerStyle';
import OptionLabelStyle from './OptionLabelStyle';
import OptionValueStyle from './OptionValueStyle';
import SwatchSettingDefualt from './SwatchSettingDefualt';
import Advanced from './Advanced';
import InventorySettings from './InventorySettings';
import TotalContainSettings from './TotalContainSettings';


function DisplaySettings() {
  const [openSettings, setOpenSettings] = useState({
    optionsTitle: true,
    containerStyle: false,
    nameStyle: false,
    valuesStyle: false,
    swatchDefaults: false,
    totalContainer1: false,
    InventorySettings: false,
    advanced: false,
  });

const toggleSetting = (setting) => {
  setOpenSettings((prevState) => {
    const newState = Object.keys(prevState).reduce((acc, key) => {
      acc[key] = key === setting ? !prevState[setting] : false;
      return acc;
    }, {});
    return newState;
  });
};
// const toggleSetting = (setting) => {
//   setOpenSettings((prevState) => ({ ...prevState, [setting]: !prevState[setting] }));
// };
  return (
    <AppProvider>
  
        <p className='mb-2'>Configure how you'd like the options to be presented to your customers. Saving the display settings will create bold-options.css asset which will be automatically included in theme.liquid.</p>
        {[
          { title: 'Options Title', key: 'optionsTitle' },
          { title: 'Options Container Style', key: 'containerStyle' },
          { title: 'Options Name Style', key: 'nameStyle' },
          { title: 'Options Values Style', key: 'valuesStyle' },
          { title: 'Swatch Setting Defaults', key: 'swatchDefaults' },
          { title: 'Total Container Settings', key: 'totalContainer1' },
          { title: 'Inventory Settings', key: 'InventorySettings' },
          { title: 'Advanced', key: 'advanced' },
        ].map((setting) => (
          <div  className="tab_btn" key={setting.key}>
            <Button
              onClick={() => toggleSetting(setting.key)}
              fullWidth
              // disclosure={openSettings[setting.key] ? 'up' : 'down'}
            >
              <div>
                 {setting.title}
              </div>
              <div>
                <Icon source={openSettings[setting.key] ? ChevronUpMinor : ChevronDownMinor} />
              </div> 
            </Button>
            <Collapsible open={openSettings[setting.key]} id={setting.key}>
            
              {setting.key === "optionsTitle" && (
               <OptionTitle/>
              )}
              {setting.key === "containerStyle" &&(
                <OptionContainerStyle />
              )}
              {setting.key === "nameStyle" &&(
                <OptionLabelStyle />
              )}
              {setting.key === "valuesStyle" &&(
                <OptionValueStyle/>
              )}
              {setting.key === "swatchDefaults" &&(
                <SwatchSettingDefualt/>
              )}
              {setting.key === "totalContainer1" &&(
                <TotalContainSettings/>
              )}
              {setting.key === "InventorySettings" &&(
                <InventorySettings/>
              )}
               {setting.key === "advanced" &&(
                <Advanced/>
              )}
              <div className='mb-2'></div>
            </Collapsible>
          </div>
        ))}
        <div style={{ marginTop: '20px' }}>
          <Button primary>Save Changes</Button>
        </div>
    
    </AppProvider>
  );
}

export default DisplaySettings;

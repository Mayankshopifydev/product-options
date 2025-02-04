import { useTranslation, Trans } from "react-i18next";
import {Page, Banner, Divider, Button, Select,Grid,FormLayout, LegacyCard, Card, DataTable} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export default function dashbord() {
  const { t } = useTranslation();
    const [selected, setSelected] = useState('today');
  
    const handleSelectChange = useCallback(() => setSelected(value),
      [],
    );
    const rows = [
      ['#19572305', 'May 17, 2023', '$5.00'],
      ['#19572304', 'May 16, 2023', '$15.00'],
      ['#19572301', 'May 15, 2023', '$10.00'],
      ['#19572297', 'May 15, 2023', '$10.00'],
      ['#19572293', 'May 14, 2023', '$10.00'],
    ];
    const options = [
      {label: 'Live Theme', value: 'today'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'Last 7 days', value: 'lastWeek'},
    ];
    
  return (
    <Page
    fullWidth
    title="Dashboard"
    primaryAction={<Button primary >Create Option Group</Button>}
    secondaryActions={<Button variant="primary" >Help</Button>}
  >
     <Divider borderColor="border" gap="500" />
     <br/>
        <Banner
          title="Product Options is Not Enabled on the Live Theme"
          status="warning"
          >
          <p>
            For Product Options to work, the App Block needs to be enabled on the live theme. To go to the App Block
            section of the Customize section of your theme, click the button below.
          </p>
          <br/>

          <div className="ClassBanner">

<FormLayout >
 <FormLayout.Group>
   <Select
       label="Theme"
       options={options}
       onChange={handleSelectChange}
       value={selected}
       fullWidth
     />
     <Button primary onClick={() => console.log('Redirect to app block')}>Take Me to the App Block</Button>
     <></>
     <></>
 </FormLayout.Group>

</FormLayout>
</div>       
        </Banner>
<br/>
<Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <LegacyCard title="Orders with Priced Options" sectioned>
            <Divider/>
            <Card>
        <DataTable
          columnContentTypes={['text', 'text', 'numeric']}
          headings={['Order #', 'Order Date', 'Priced Option Total']}
          rows={rows}
          totals={['', '', '$13,350.00']}
          footerContent="Showing 5 of 2,459 orders with Priced Options"
        />
      </Card>
          </LegacyCard>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <LegacyCard title="Orders" sectioned>
          {/* <Doughnut data={data} options={optionschart} /> */}
        
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>
        </Grid.Cell>
      </Grid>
  </Page>
  );
}

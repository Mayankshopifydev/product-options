import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Page, Card, Stack, TextStyle } from '@shopify/polaris';

export default function indexChart() {
    const data = {
        datasets: [
          {
            data: [13150, 350],
            backgroundColor: ['#5c6ac4', '#47c1bf'],
          },
        ],
      };
    
      const options = {
        cutout: '80%',
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
      };

  return (
    <Page title="Return on Investment">
      <Card>
        <Card.Section>
          <Stack vertical>
            <TextStyle variation="strong">Return on Investment</TextStyle>
            <div style={{ width: '150px', height: '150px', margin: '0 auto' }}>
              <Doughnut data={data} options={options} />
              <div style={{ position: 'relative', top: '-110px', textAlign: 'center' }}>
                <p style={{ fontSize: '20px', margin: 0 }}>$13,150.00</p>
                <p style={{ color: 'green', margin: 0 }}>↑ 3857%</p>
              </div>
            </div>
          </Stack>
        </Card.Section>
        <Card.Section>
          <Stack vertical spacing="tight">
            <Stack distribution="equalSpacing">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '10px', height: '10px', backgroundColor: '#5c6ac4', marginRight: '8px' }}></div>
                <TextStyle>Priced Option Total</TextStyle>
              </div>
              <TextStyle>$13,500</TextStyle>
            </Stack>
            <Stack distribution="equalSpacing">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '10px', height: '10px', backgroundColor: '#47c1bf', marginRight: '8px' }}></div>
                <TextStyle>Total Spent on App</TextStyle>
              </div>
              <TextStyle>$350</TextStyle>
            </Stack>
          </Stack>
        </Card.Section>
      </Card>
    </Page>
  )
}

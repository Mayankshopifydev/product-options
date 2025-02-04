import React from 'react'
import { Page, Card, DataTable, Icon, Button, Stack } from '@shopify/polaris';
import { DragHandleMinor, EditMajor, DeleteMajor } from '@shopify/polaris-icons';
import '../assets/custom.css';

export default function saved_options() {
    const rows = [
        [
          <div className='d-flex'>
            <Icon source={DragHandleMinor} color="base" />
            T-Shirt Colors
          </div>,
          'Dropdown Menu',
          'Red, Gold, Blue, Green, Red, Orange',
          <Icon source="circle" color="success" />,
          <Stack spacing="tight">
            <Button plain icon={EditMajor} />
            <Button plain destructive icon={DeleteMajor} />
          </Stack>,
        ],
        [
          <div className='d-flex'>
            <Icon source={DragHandleMinor} color="base" />
            Gift Message
          </div>,
          'Text',
          'N/A',
          <Icon source="circle" color="subdued" />,
          <Stack spacing="tight">
            <Button plain icon={EditMajor} />
       
            <Button plain destructive icon={DeleteMajor} />
          </Stack>,
        ],
        [
        <div className='d-flex'>
          <Icon source={DragHandleMinor} color="base" />
            Upgrade Product
          </div>,
          'Checkbox',
          'Yes',
          <Icon source="circle" color="success" />,
          <Stack spacing="tight">
            <Button plain icon={EditMajor} />
          
            <Button plain destructive icon={DeleteMajor} />
          </Stack>,
        ],
      ];
    
  return (
    <Page fullWidth title="Saved Options">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'text',
            'text',
            'text',
          ]}
          headings={[
            'Option Name',
            'Type',
            'Values',
            'Status',
            'Actions',
          ]}
          rows={rows}
        />
      </Card>
      <div className="footer_text text-center">
            <h6>FAQ</h6>
          <p>
            <a href="#">What's a Saved Option?</a>
          </p>
          <p>
            <a href="#">What happened to Bold Product Options?</a>
          </p>
        </div>
    </Page>
  )
}

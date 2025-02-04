import { useTranslation, Trans } from "react-i18next";
import { Page, Card, Button, EmptyState, Layout, Heading } from '@shopify/polaris';
import { useNavigate } from '@shopify/app-bridge-react';

export default function option_groups() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCreateOptionGroup = () => {
    navigate('/create-option-group');
  };
    
  return (
    <Page fullWidth title="Option Groups"
     primaryAction={{ content: 'Create Option Group', onAction: handleCreateOptionGroup }}
     secondaryActions={<Button variant="primary" >Help</Button>}
     >
      
    <Layout>
      <Layout.Section>
        <Card sectioned>
          <div className="option_img">
          <EmptyState
                padding="400"
                action={{ content: 'Create Option Group', onAction: handleCreateOptionGroup }}
                image="https://cdn.shopify.com/s/files/1/0662/2930/5597/files/image_2.png?v=1724267250?width=600"
              >
           
          <Heading padding="400">This is where you’ll manage your Option Groups</Heading>
          
          <p>Click the button below to create your first Option Group.</p>
            </EmptyState>
          </div>
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
      </Layout.Section>
    </Layout>
  </Page>
  );
}

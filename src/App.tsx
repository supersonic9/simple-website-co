import { Layout, Container, Wrapper } from './components/layout';
import { Grid, GridItem } from './components/ui';
import { Button, Card, Section } from './components/ui';



function App() {
  return (
    <Layout maxWidth="lg" padding="medium" background="primary" centered={true}>
      <Wrapper padding="large" background="secondary" constrained={true} containerSize="lg">
        <Container size="lg" centered={true}>
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-heading1 text-center mb-8">
              🚀 Simple Web Co - Development Server
            </h1>

          <Section padding="medium">
            <Grid columns={12} gap="medium" align="center">
              <GridItem span={12} md={6}>
                <Card padding="large" background="primary">
                  <h2 className="text-heading2 mb-4">Hot Reload Active</h2>
                  <p className="text-body mb-4">
                    This development server features enhanced hot reload capabilities:
                  </p>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>⚡ Fast Refresh for React components</li>
                    <li>🔄 HMR (Hot Module Replacement)</li>
                    <li>📱 Responsive design system</li>
                    <li>🎨 CSS hot reload</li>
                  </ul>
                  <Button variant="primary" size="medium">
                    Test Button
                  </Button>
                </Card>
              </GridItem>

              <GridItem span={12} md={6}>
                <Card padding="large" background="secondary">
                  <h2 className="text-heading2 mb-4">Development Features</h2>
                  <p className="text-body mb-4">
                    Enhanced development experience with:
                  </p>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>🔧 TypeScript support</li>
                    <li>📝 ESLint integration</li>
                    <li>💅 Prettier formatting</li>
                    <li>🎯 Path aliases (@/components)</li>
                  </ul>
                  <Button variant="secondary" size="medium">
                    Another Button
                  </Button>
                </Card>
              </GridItem>
            </Grid>
          </Section>

          <div className="text-center mt-8">
            <p className="text-caption text-muted">
              Edit this file to see hot reload in action! 🎉
            </p>
          </div>
          </div>


        </Container>
      </Wrapper>
    </Layout>
  );
}

export default App;

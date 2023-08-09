import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;

export const Default: Story = {
  render: () => (
    <Tabs>
      <TabsList>
        <TabsTrigger value="one">Trigger one</TabsTrigger>
        <TabsTrigger value="two">Trigger two</TabsTrigger>
      </TabsList>
      <TabsContent value="one">Content one</TabsContent>
      <TabsContent value="two">Content two</TabsContent>
    </Tabs>
  ),
};

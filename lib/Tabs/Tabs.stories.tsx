import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanels } from './TabPanels';
import { TabPanel } from './TabPanel';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs>
      <div className="border-b border-gray-200">
        <TabList className="flex space-x-4">
          <Tab index={0} className={({ selected }) => 
            `px-4 py-2 font-medium text-sm focus:outline-none ${selected ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`
          }>
            Account
          </Tab>
          <Tab index={1} className={({ selected }) => 
            `px-4 py-2 font-medium text-sm focus:outline-none ${selected ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`
          }>
            Password
          </Tab>
          <Tab index={2} className={({ selected }) => 
             `px-4 py-2 font-medium text-sm focus:outline-none ${selected ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`
          }>
            Notifications
          </Tab>
        </TabList>
      </div>
      <TabPanels className="mt-4">
        <TabPanel index={0}>
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium">Account Settings</h3>
            <p className="mt-2 text-gray-600">Update your account information here.</p>
          </div>
        </TabPanel>
        <TabPanel index={1}>
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium">Password</h3>
            <p className="mt-2 text-gray-600">Change your password here.</p>
          </div>
        </TabPanel>
        <TabPanel index={2}>
           <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium">Notifications</h3>
            <p className="mt-2 text-gray-600">Manage your notification preferences.</p>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

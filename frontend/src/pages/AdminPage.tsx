import React from 'react';
import { Tabs } from 'antd';
import { InvitationPage } from './InvitationPage';

const { TabPane } = Tabs;

type Tab = {
  title: string;
  Component: JSX.Element;
};
type Props = {};
export const AdminPage = (props: Props) => {
  const tabs: Tab[] = [{ title: 'Invite', Component: <InvitationPage /> }];

  const handleTabChange = (key: string) => console.log({ key });
  return (
    <Tabs defaultActiveKey="1" onChange={handleTabChange}>
      {tabs.map(({ title, Component }: Tab, index: number) => (
        <TabPane key={index.toString()} tab={title}>
          {Component}
        </TabPane>
      ))}
    </Tabs>
  );
};

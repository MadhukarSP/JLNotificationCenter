import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabParamList } from '../../types';
import { ApplicationsTab } from './ApplicationsTab';
import { ProfileTab } from './ProfileTab';
import { NotificationsTab } from './NotificationsTabs';
import { Icon } from '../../components/Icon';
import { getTabBarOptions } from './Tabs.helper';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Applications"
      tabBarOptions={getTabBarOptions()}>
      <Tab.Screen
        name="Notifications"
        component={NotificationsTab}
        options={{
          tabBarIcon: ({ color }) => <Icon name="bell" color={color} />,
          tabBarLabel: "Notifications",
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Applications"
        component={ApplicationsTab}
        options={{
          tabBarIcon: ({ color }) => <Icon name="briefcase" color={color} />,
          tabBarLabel: "Applications"
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ color }) => <Icon name="user-alt" color={color} />,
          tabBarLabel: "Profile"
        }}
      />

    </Tab.Navigator>
  );
}


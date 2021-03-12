
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationsScreen from '../../screens/NotificationsScreen';
import { NotificationsTabParams } from '../../types';
import { getHeaderOptions } from './Tabs.helper';

/**
 * Notifications tab stack
 */
const NotificationsStack = createStackNavigator<NotificationsTabParams>();
export function NotificationsTab() {
    return (
        <NotificationsStack.Navigator>
            <NotificationsStack.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
                options={getHeaderOptions('MyJoblift')}
            />
        </NotificationsStack.Navigator>
    );
}
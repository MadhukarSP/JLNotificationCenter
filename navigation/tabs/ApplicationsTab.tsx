
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ApplicationsScreen from '../../screens/ApplicationsScreen';
import { ApplicationsTabParams } from '../../types';
import { getHeaderOptions } from './Tabs.helper';

/**
 * Applications tab stack
 */
const ApplicationsStack = createStackNavigator<ApplicationsTabParams>();
export function ApplicationsTab() {
    return (
        <ApplicationsStack.Navigator>
            <ApplicationsStack.Screen
                name="ApplicationsScreen"
                component={ApplicationsScreen}
                options={getHeaderOptions('MyJoblift')}
            />
        </ApplicationsStack.Navigator>
    );
}
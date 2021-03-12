
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../screens/ProfileScreen';
import { ProfileTabParams } from '../../types';
import { getHeaderOptions } from './Tabs.helper';

/**
 * Profile tab stack
 */
const ProfileStack = createStackNavigator<ProfileTabParams>();
export function ProfileTab() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={getHeaderOptions('MyJoblift')}
            />
        </ProfileStack.Navigator>
    );
}
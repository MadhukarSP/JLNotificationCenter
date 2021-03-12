import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
    name: React.ComponentProps<typeof FontAwesome5>,
    color?: string,
    size?: number,
};

/**
 * Icons can be explored at following site: https://icons.expo.fyi/
 * @param props 
 * @returns FontAwesome5 icon
 */
export function Icon(props: Props) {
    return <FontAwesome5 size={24} style={{ marginBottom: -3 }} {...props} />
}
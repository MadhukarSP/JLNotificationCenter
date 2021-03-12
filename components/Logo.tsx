import React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

type Props = {
    logoUrl: ImageSourcePropType,
}

export default function Logo({ logoUrl }: Props) {
    return <Image source={logoUrl} style={styles.image} resizeMode={'contain'} />;
}

const styles = StyleSheet.create({
    image: {
        width: 48,
        height: 48,
    }
});

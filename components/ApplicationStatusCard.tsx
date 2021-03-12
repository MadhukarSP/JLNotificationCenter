import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from './Themed';
import Logo from './Logo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { Icon } from './Icon';
import { JobDescription } from '../types';

type Props = {
    customStyle?: object;
};

export default function ApplicationStatusCard(props: Props & JobDescription) {
    const { status = 'success', jobTitle = 'Frontend Engineer - Zalando', companyName = 'Zalando SE', customStyle } = props || {};
    const logo = getCompanyLogoUrl(companyName);
    console.log({ logo });
    return (
        <TouchableOpacity style={[styles.container, customStyle]} activeOpacity={0.4}>
            <View style={styles.logoContainer}><Logo logoUrl={logo} /></View>
            <View style={styles.infoContainer}>
                <Text style={styles.companyName}>{companyName}</Text>
                <Text style={styles.jobTitle}>{jobTitle}</Text>
            </View>
            <View style={styles.statusContainer}>
                <View style={styles.statusIcon}>{ICON[status]}</View>
            </View>
        </TouchableOpacity>
    );
}

const getCompanyLogoUrl = (companyName: string) => {
    switch (companyName) {
        case 'Finleap GmbH': return require('../assets/images/finleap.jpeg');
        case 'Apple': return require('../assets/images/apple.png');
        case 'Amazon': return require('../assets/images/amazon.jpeg');
        case 'TATA': return require('../assets/images/tata.png');
        default: return require('../assets/images/zalando.jpeg');
    }
}

const ICON = {
    'success': <Icon name='check-circle' color={Colors.green} />,
    'rejected': <Icon name='times-circle' color={Colors.red} />,
    'In review': <Icon name='clock' color={Colors.darkyellow} />,
    'Incomplete data': <Icon name='exclamation-triangle' color={Colors.darkyellow} />,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight: 56,
        padding: 12,
        backgroundColor: Colors.white,
        marginBottom: 16,
        borderRadius: 6,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    logoContainer: {
        flex: 1,
        minWidth: 24,
        maxWidth: 56,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1,
        padding: 4,
        backgroundColor: Colors.white,
        borderRadius: 6,
    },
    infoContainer: {
        flex: 6,
        marginLeft: 12,
        flexDirection: 'column',
        flexShrink: 1,
        backgroundColor: Colors.white,
    },
    companyName: {
        color: Colors.darkgray,
    },
    jobTitle: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: '700',
    },
    statusContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
    },
    statusIcon: {
        backgroundColor: Colors.white,
    }
});

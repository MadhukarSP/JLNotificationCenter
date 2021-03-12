import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from './Themed';
import Colors from '../constants/Colors';
import ApplicationStatusCard from './ApplicationStatusCard';
import { Status } from '../types';

type Notification = {
    notificationMessage: string,
    status?: string;
    jobTitle?: string;
    companyName?: string;
};

type Props = {
    notifications: Array<Notification>,
};

const NotificationCard = ({ notifications }: Props) => {
    if (!notifications?.length) return <></>;
    return (
        <>
            {
                notifications.map((notification, index) => {
                    const { notificationMessage, ...statusData } = notification;
                    return (
                        <View style={styles.container} key={index}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>{notificationMessage}</Text>
                            </View>
                            <ApplicationStatusCard {...statusData} customStyle={styles.applicationStatusCardStyle} />
                        </View>
                    );
                })
            }
        </>
    )
}

export default NotificationCard;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        minHeight: 56,
        padding: 16,
        backgroundColor: Colors.white,
        marginBottom: 16,
        borderRadius: 6,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    textContainer: {
        backgroundColor: Colors.white,
        marginBottom: 12,
    },
    text: {
        lineHeight: 20,
        fontSize: 16,
        letterSpacing: 1.2,
    },
    applicationStatusCardStyle: {
        marginBottom: 0,
        marginTop: 8,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 1,
    }
});

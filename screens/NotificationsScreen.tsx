import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import NotificationCard from '../components/NotificationCard';
import { notificationData } from '../constants/Data';

export default function NotificationsScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.header}><Text style={styles.title}>Notifications</Text></View>
            {
                notificationData && notificationData.length ? (
                    <View style={styles.cards}>
                        <NotificationCard notifications={notificationData} />
                    </View>
                ) : (
                    <View style={styles.noNotifications}>
                        <Text>No status update for today</Text>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        marginLeft: 12,
        marginRight: 12,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: 40,
    },
    cards: {
        flex: 40,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    noNotifications: {
        flex: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

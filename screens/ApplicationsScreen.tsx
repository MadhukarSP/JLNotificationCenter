import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Text, View } from '../components/Themed';
import ApplicationStatusCard from '../components/ApplicationStatusCard';
import Colors from '../constants/Colors';
import { successfulApplications, inReviewApplications, rejectedApplications } from '../constants/Data';

export default function ApplicationsScreen() {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView style={styles.scrollContainer}>
                {
                    successfulApplications.length ? (
                        <View style={styles.sectionConatiner}>
                            <View style={styles.header}><Text style={styles.title}>Successful Applications</Text></View>
                            <View style={styles.cards}>
                                {successfulApplications.map((application, index) => <ApplicationStatusCard {...application} key={index} />)}
                            </View>
                        </View>
                    ) : null
                }
                {
                    inReviewApplications.length ? (
                        <View style={styles.sectionConatiner}>
                            <View style={styles.header}><Text style={styles.title}>in review Applications </Text></View>
                            <View style={styles.cards}>
                                {inReviewApplications.map((application, index) => <ApplicationStatusCard {...application} key={index} />)}
                            </View>
                        </View>
                    ) : null
                }
                {
                    rejectedApplications.length ? (
                        <View style={styles.sectionConatiner}>
                            <View style={styles.header}><Text style={styles.title}>rejected Applications </Text></View>
                            <View style={styles.cards}>
                                {rejectedApplications.map((application, index) => <ApplicationStatusCard {...application} key={index} />)}
                            </View>
                        </View>
                    ) : null
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: Colors.light.background,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: Colors.light.background,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 0,
    },
    sectionConatiner: {
        flex: 1,
        marginBottom: 24,
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
    title: {
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

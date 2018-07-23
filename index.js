import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class LearnFlexbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Text style={styles.navBarButton}>Back</Text>
                    <Text style={styles.navBarHeader}>Awesome App</Text>
                    <Text style={styles.navBarButton}>More</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>
                        Welcome to Awesome App!
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navBar: {
        flexDirection: 'row',
        paddingTop: 30,
        height: 64,
        backgroundColor: '#1EAAF1'
    },
    navBarButton: {
        color: '#FFFFFF',
        textAlign:'center',
        width: 64
    },
    navBarHeader: {
        flex: 1,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#374046'
      },
    text: {
        color: '#eeeeee',
    },
    tabBar: {
        flexDirection: 'row',
    },
    tabBarButton: {
        flex: 1
    },
    button1: { backgroundColor: '#8BC051' },
    button2: { backgroundColor: '#CCD948' },
    button3: { backgroundColor: '#FDE84D' },
    button4: { backgroundColor: '#FCBF2E' },
    button5: { backgroundColor: '#FC9626' }
    
});

AppRegistry.registerComponent('LearnFlexbox', () => LearnFlexbox);
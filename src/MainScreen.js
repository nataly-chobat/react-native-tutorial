/**
* Sample React Native MainScreen
* https://github.com/facebook/react-native
*
* @format
* @flow
* @lint-ignore-every XPLATJSCOPYRIGHT1
*/

import React, {Component} from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import CardList from './CardList';

class MainScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <CardList />
            </SafeAreaView>
        );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

/* @flow */

import * as React from 'react';
import { Text } from 'react-native';

class SecondScreen extends React.PureComponent {
    render() {
        return (
            <Text>Welcome to React Native!</Text>
        )
    }
}

export default SecondScreen;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        flexDirection: 'column',
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    infoItem: {
        marginVertical: 10,
    },
    infoItemHeading: {
        color: 'gray',
        marginBottom: 5,
    },
    infoItemText: {
        color: '#17151e',
    },
    infoItemHighlight: {
        color: '#3415B0',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
    },
    heading: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    line: {
        borderBottomColor: '#2e293d',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    imageWrapper: {
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 200,
        marginRight: 10,
        marginBottom: 10,
    },
});
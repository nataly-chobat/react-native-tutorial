import React from 'react';
import { Text } from 'react-native';

class CardList extends React.Component {

    render() {
        return (
            <Text>Welcome to React Native!</Text>
        )
    }
}

export default CardList;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
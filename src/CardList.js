import React from 'react';
import { FlatList, StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import CardItem from "./CardItem";

class CardList extends React.Component {
    renderCardItem = ({ item }) => {
        const { navigateToItemDetail } = this.props;

        return (
            <CardItem
                id={item.id}
                name={item.name}
                description={item.description}
                url={item.url}
                breed={item.breed}
                navigateToItemDetail={navigateToItemDetail}
            />
        );
    };

    keyExtractor = item => item.id.toString();

    renderSeparator = () => {
        return (
            <View style={styles.line} />
        )
    }

    renderEmptyComponent = () => {
        return (
            <ActivityIndicator
                color="#3415b0"
                size="large"
                style={styles.loading}
            />
        );
    }

    renderHeader = () => {
        return (
            <Text>Hello, I am Header!</Text>
        )
    }

    render() {
        const { data } = this.props;

        return (
            <FlatList
                data={data}
                renderItem={this.renderCardItem}
                keyExtractor={this.keyExtractor}
                ListHeaderComponent={this.renderHeader}
                ItemSeparatorComponent={this.renderSeparator}
                ListEmptyComponent={this.renderEmptyComponent}
            />
        )
    }
}

export default CardList;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        borderBottomColor: '#2e293d',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});
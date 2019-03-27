import React from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { getCatsData } from "./fake-api/fake-api";
import CardItem from "./CardItem";

class CardList extends React.Component {
    state = {
        data: []
    };

    async componentDidMount() {
        const data = await getCatsData();

        this.setState({ data });
    }

    renderCardItem = ({ item }) => {
        return (
            <CardItem
                name={item.name}
                description={item.description}
                url={item.url}
                breed={item.breed}
            />
        );
    };

    keyExtractor = item => item.id.toString();

    render() {
        const { data } = this.state;

        if (!data.length) {
            return (
                <ActivityIndicator
                    color="#3415b0"
                    size="large"
                    style={styles.loading}
                />
            );
        }

        return (
            <FlatList
                data={data}
                renderItem={this.renderCardItem}
                keyExtractor={this.keyExtractor}
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
    }
});
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class CardItem extends React.PureComponent {
    render() {
        const { name, description, breed, url } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.mainInfo}>
                    <Text style={styles.heading}>{name}</Text>
                    <Text style={styles.breed}>{breed}</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{uri: url}} />
                </View>
                <Text numberOfLines={2} ellipsizeMode="tail">{description}</Text>
            </View>
        )
    }
}

export default CardItem;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        flexDirection: 'column',
        margin: 10,
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 14
    },
    line: {
        borderBottomWidth: 1,
        marginVertical: 10,
        borderColor: '#d1d1d1'
    },
    mainInfo: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    image: {
        width: 260,
        height: 130,
        marginVertical: 10
    },
    imageWrapper: {
        alignItems: 'center',
    }
});
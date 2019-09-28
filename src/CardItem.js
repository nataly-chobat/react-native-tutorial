import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing, Button } from 'react-native';

class CardItem extends React.PureComponent {
    state = {
        scaleValue: new Animated.Value(0),
        translateX: new Animated.Value(-500),
        translateY: new Animated.Value(100),
    }

    componentDidMount(){
        const { scaleValue, translateX, translateY } = this.state;
        const { id } = this.props;

        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            delay: id * 300,
            nativeDriver: true,
        }).start();

        Animated.timing(translateX, {
            toValue: 0,
            duration: 500,
            easing: Easing.bezier(0.19, 0.32, 0, 0.97),
            delay: id * 300,
        }).start();

        Animated.timing(translateY, {
            toValue: 0,
            duration: 500,
            easing: Easing.bezier(0.19, 0.32, 0, 0.97),
            delay: id * 300,
        }).start();
    }

    navigateToItemDetail = () => {
        const { id, name, navigateToItemDetail } = this.props;

        navigateToItemDetail(id, name);
    }

    render() {
        const { scaleValue, translateX, translateY } = this.state;
        const { name, description, breed, url } = this.props;

        return (

                <Button testID="catInfo" onPress={this.navigateToItemDetail}>
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
                </Button>
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
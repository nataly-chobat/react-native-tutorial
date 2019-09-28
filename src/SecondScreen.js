/* @flow */

import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { getCatDataById } from './fake-api/fake-api';

class SecondScreen extends React.PureComponent {
    state = {
        details: {}
    };

    componentDidMount() {
        this.getCatData();
    }

    getCatData = async () => {
        const { id } = this.props;

        const details = await getCatDataById(id);

        this.setState({ details });
    }

    render() {
        const { details } = this.state;
        const { url, image, breed, age, description, randomFact } = details;

        return (
            <LinearGradient
                colors={['#152a57', '#333d6e', '#54243a']}
                style={{flex: 1}}
            >
                <ScrollView style={styles.container}>
                    <View style={styles.imageWrapper}>
                        <Image source={{ uri: url }} style={styles.image} />
                    </View>
                    <View style={styles.line} />
                    <View style={styles.infoItem}>
                        <Text style={styles.infoItemHeading}>Порода:</Text>
                        <Text style={styles.infoItemText}>{breed}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoItemHeading}>Возраст:</Text>
                        <Text style={styles.infoItemText}>{age}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoItemHeading}>Описание:</Text>
                        <Text style={styles.infoItemText}>{description}</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.infoItem}>
                        <Text style={styles.infoItemHighlight}>Рандомный факт о котах:</Text>
                        <Text style={styles.infoItemText}>{randomFact}</Text>
                    </View>
                </ScrollView>
            </LinearGradient>
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
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
import { Navigation } from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';

import { getCatsData } from "./fake-api/fake-api";
import CardList from './CardList';

class MainScreen extends Component {
    state = {
        data: []
    };

    async componentDidMount() {
        const data = await getCatsData();

        this.setState({ data });
    }

    navigateToItemDetail = (id, title) => {
        const { componentId } = this.props;

        Navigation.push(componentId, {
            component: {
                name: 'reactNativeTutorial.SecondScreen',
                passProps: {
                    id
                },
                options: {
                    topBar: {
                        title: {
                            text: title
                        }
                    }
                }
            }
        });
    }

    render() {
        const { data } = this.state;

        return (
            <LinearGradient
                colors={['#972c24', '#b9362d', '#5d1b15']}
                style={{flex: 1}}
            >
                <CardList
                    data={data}
                    navigateToItemDetail={this.navigateToItemDetail}
                />
            </LinearGradient>
        );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    linearGradient: {
   flex: 1,
   paddingLeft: 15,
   paddingRight: 15,
   borderRadius: 5
 },
 buttonText: {
   fontSize: 18,
   fontFamily: 'Gill Sans',
   textAlign: 'center',
   margin: 10,
   color: '#ffffff',
   backgroundColor: 'transparent',
 },
});

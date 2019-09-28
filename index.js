/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { Navigation } from "react-native-navigation";
import MainScreen from './src/MainScreen';
import SecondScreen from './src/SecondScreen';
import {name as appName} from './app.json';

Navigation.registerComponent(appName, () => MainScreen);
Navigation.registerComponent('reactNativeTutorial.SecondScreen', () => SecondScreen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: appName,
                        options: {
                            topBar: {
                                title: {
                                    text: 'Коты'
                                }
                            }
                        }
                    }
                }]
            }

        }
    });
});

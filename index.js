/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { Navigation } from "react-native-navigation";
import MainScreen from './src/MainScreen';
import {name as appName} from './app.json';

Navigation.registerComponent(appName, () => MainScreen);

Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
            root: {
              component: {
                    name: appName
                  }
            }
      });
    });

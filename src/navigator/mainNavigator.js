import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings206026Navigator from '../features/Settings206026/navigator';
import UserProfile206019Navigator from '../features/UserProfile206019/navigator';
import Settings206018Navigator from '../features/Settings206018/navigator';
import Settings206016Navigator from '../features/Settings206016/navigator';
import SignIn2206014Navigator from '../features/SignIn2206014/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings206026: { screen: Settings206026Navigator },
UserProfile206019: { screen: UserProfile206019Navigator },
Settings206018: { screen: Settings206018Navigator },
Settings206016: { screen: Settings206016Navigator },
SignIn2206014: { screen: SignIn2206014Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

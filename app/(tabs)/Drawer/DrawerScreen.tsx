import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabScreens from '../BottomTab/TabScreens';

import TeamScreen from './TeamScreen';
import SettingScreen from './SettingScreen';
import HelpScreen from './HelpScreen';
import CustomDrawer from './CustomDrawer';

import Icon from '@expo/vector-icons/Ionicons';

type drawerType = {
  Menu: undefined;
  Screen1: undefined;
  Screen2: undefined;
  TeamScreen: undefined;
  SettingScreen: undefined;
  HelpScreen: undefined;
  TabScreens: undefined
};

const Drawer = createDrawerNavigator<drawerType>();

const DrawerScreens = () => {
  return (
    <Drawer.Navigator initialRouteName="TabScreens" drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{
      drawerActiveTintColor: '#FF9001',
      drawerStyle: {
        backgroundColor: "#fff",
      },

    }}>
      <Drawer.Screen
        name="Menu"
        component={TabScreens}
        options={{
          drawerLabel: 'Acceuil', drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="TeamScreen"
        component={TeamScreen}
        options={{
          drawerLabel: 'Equipe', drawerIcon: ({ color, size }) => (
            <Icon name="people" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          drawerLabel: 'Parametre', drawerIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          drawerLabel: 'Aide', drawerIcon: ({ color, size }) => (
            <Icon name="help" color={color} size={size} />
          ),
        }}
      />

    </Drawer.Navigator>
  );
};

export default DrawerScreens;

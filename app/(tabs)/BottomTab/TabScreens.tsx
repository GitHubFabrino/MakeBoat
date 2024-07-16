import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

import AddProject from './AddProject';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { StyleSheet } from 'react-native';
type screenType = {
  Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
  AddProject: undefined;
};

const Tab = createBottomTabNavigator<screenType>();

const TabScreens = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
      tabBarStyle: { ...styles.tabContainer }, // Provide container style as required...
      tabBarShowLabel: false, // It would hide the default label as we're customising the TabItems as well...
      tabBarActiveTintColor: '#14AAAA',
      tabBarInactiveTintColor: "#485555"


    }}>

      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color
            } />
          ),
        }}
      />
      <Tab.Screen
        name="AddProject"
        component={AddProject}
        options={{
          title: 'Add',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'add' : 'add-outline'} color={"white"} style={styles.add} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          title: 'Projet',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'folder' : 'folder-outline'} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#181818',
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    borderTopColor: '#212626',
    borderColor: '#212626',
    borderWidth: 1,
    alignItems: 'center',
  },
  add: {
    display: 'flex',
    position: 'relative',
    top: -30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ED6E68',
    width: 85,
    padding: 20,
    borderRadius: 100,
    borderWidth: 2,
    // borderBlockColor: "blue",
    borderColor: '#ED6E68'
  }
});

export default TabScreens;

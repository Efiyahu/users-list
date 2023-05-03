import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import List from '@src/screens/List/List';
import EditUser from './EditUser/EditUser';
import AddUser from './AddUser/AddUser';

const Stack = createStackNavigator();

const Screens = () => (
  <Stack.Navigator>
    <Stack.Screen name='Users' component={List} />
    <Stack.Screen name='UsersSettings' component={EditUser} />
    <Stack.Screen name='AddUser' component={AddUser} />
  </Stack.Navigator>
);

export default Screens;

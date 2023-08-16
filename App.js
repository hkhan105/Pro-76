import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import StarMapScreen from './Screens/StarMap';
import DailyPicScreen from './Screens/DailyPic';
import SpaceCraftsScreen from './Screens/SpaceCrafts';

// Create a stack navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Define your screen stack */}
        <Stack.Screen name="StarMap" component={StarMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

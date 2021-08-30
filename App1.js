import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import DynamicComponent from 'react-native-dynamic-render';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default class App extends React.Component {
  render() {
    const mapComponents = {
      "homeScreen": HomeScreen,
      "detailsScreen": DetailsScreen,
      "navigationContainer": NavigationContainer,
      "stackNavigator": Stack.Navigator,
      "stackScreen": Stack.Screen,
    };

    const props = {
      name: 'navigationContainer',
      children: [
        {
          name: 'stackNavigator',
          children: [
            {
              name: 'stackScreen',
              props: {
                name: 'Home',
                component: 'homeScreen',
              },
              mappableProps: ['component'],
            },
            {
              name: 'stackScreen',
              props: {
                name: 'Details',
                component: 'detailsScreen',
              },
              mappableProps: ['component'],
            }
          ],
        }
      ],
    };

    return (
      <View style={styles.container}>
        <DynamicComponent {...props} mapComponents={mapComponents} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 8,
  },
});

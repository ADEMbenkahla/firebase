/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeView from './views/HomeView/HomeView';
import TestView from './views/TestView/TestView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetailsView from './views/PokemonDetailsView/PokemonDetailsView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPokemonView from './views/MyPokemonView/MyPokemonView';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import LoginView from "./views/LoginView/LoginView";
import SignUpView from "./views/SignUpView/SignUpView";
import Store from './store/configureStore';
import {persistStore} from "redux-persist";


const App = () => {


  const HomeStack = createStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeView} options={{title: '', headerShown: false}} />
        <HomeStack.Screen name="Details" component={PokemonDetailsView} options={{title: 'Characteristics of the Pokemon'}} />
      </HomeStack.Navigator>
    );
  }

  function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  return <FontAwesomeIcon name="home" size={size} color={color}/>
                } else if (route.name === 'MyPokemon') {
                  return <MaterialCommunityIcons name="pokeball" size={size} color={color}/>
                }

              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="MyPokemon" component={MyPokemonStackScreen} />
        </Tab.Navigator>
    )
  }
  const MyPokemonStack = createStackNavigator();

  function MyPokemonStackScreen() {
    return (
      <MyPokemonStack.Navigator>
        <MyPokemonStack.Screen name="MyPokemon" component={MyPokemonView} options={{title: 'My Pokemon Team'}}/>
        <MyPokemonStack.Screen name="Details" component={PokemonDetailsView} options={{title: 'Characteristics of the Pokemon'}} />
      </MyPokemonStack.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();

  //@ts-ignore
  let persistor = persistStore(Store);

  return (
    <>
      <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>

      <NavigationContainer>
    <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  return <FontAwesomeIcon name="home" size={size} color={color}/>
                } else if (route.name === 'MyPokemon') {
                  return <MaterialCommunityIcons name="pokeball" size={size} color={color}/>
                }

              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
    >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="MyPokemon" component={MyPokemonStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
   </PersistGate> 
    </Provider>
    </>
     function MainStackScreen() {
      return (
          <MainStack.Navigator initialRouteName={'Login'}>
            <MainStack.Screen name={'Home'} component={TabNavigation}/>
            <MainStack.Screen name={'Login'} component={LoginView} options={{headerShown: false}}/>
            <MainStack.Screen name={'SignUp'} component={SignUpView} options={{headerShown: false}}/>
          </MainStack.Navigator>
      )
    }
  
  
    return (
        <>
          <Provider store={Store}>
            <PersistGate loading={null} persistor={persistor}>
              <NavigationContainer>
                <MainStackScreen/>
              </NavigationContainer>
            </PersistGate>
          </Provider>
        </>
    );
  };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

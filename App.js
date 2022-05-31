import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderTitle from './components/HeaderTitle';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'http://10.0.2.2:4000/graphql',
  cache: new InMemoryCache()
});


export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Screen1}
            options={{
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerShadowVisible: false,
              headerTransparent: true,
              
            }}
            initialParams={{
              viewed: false,
              storyAdded: false,
              caption: "",
            }}/>
          <Stack.Screen 
            name="Story"
            component={Screen2}
            options={{
              headerShown: false,
            }}
            initialParams={{
              caption: "",
            }}
            />
          <Stack.Screen
            name="addStory"
            component={Screen3}
            options={{
              headerShown: false,
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

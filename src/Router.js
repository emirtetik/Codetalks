import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/auth/Login/Login';
import Sign from './pages/auth/Sign/Sign';
import FlashMessage from "react-native-flash-message";
import Messages from './pages/Messages/Messages';
import colors from './styles/colors';
import auth from "@react-native-firebase/auth"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Rooms from './pages/Rooms/Rooms';
const Stack = createNativeStackNavigator();


const Router = () => {
  const [userSession, setUserSession] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });

    return () => unsubscribe();
  }, []);

  const Auther = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen name="Auther" component={Auther} options={{ headerShown: false }}
          />
        ) : (
          <>
          <Stack.Screen
            name="RoomsPage"
            component={Rooms}
            options={{
              title: 'Rooms',
              headerStyle:{backgroundColor: "black"},
              headerTintColor: colors.primary,
              headerTitleAlign: 'center',
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color={colors.primary}
                  onPress={() => auth().signOut()}
                />
              ),
            }}
          />
          <Stack.Screen
            name="MessagesPage"
            component={Messages}
            options={{
              title: 'Mesaj',
              headerStyle:{backgroundColor: "black"},
              headerTintColor: colors.primary,
              headerTitleAlign: 'center',
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color={colors.primary}
                  onPress={() => auth().signOut()}
                />
              ),
            }}
          />
          </>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router
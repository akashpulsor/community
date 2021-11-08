import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";


import Home from '../screens/home';
import NameScreen from "../screens/name";
import DashBoard from "../screens/dasboard";
import BirthDay from "../screens/birthday";
import Gender from  "../screens/gender";
import SignUp from "../screens/signUp";
import MobileNumber from "../screens/mobileNumber";
import Email from "../screens/email";
import Password from "../screens/password";
import Post from "../screens/post";

const MainStack = createStackNavigator();

const MainStackScreen = () => (
    <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={Home}
            options={{headerShown:false}}
        />
        <MainStack.Screen name="Name" component={NameScreen} options={{headerShown:false}}/>
        <MainStack.Screen name="DashBoard" component={DashBoard} options={{headerShown:false}}/>
        <MainStack.Screen name="BirthDay" component={BirthDay} options={{headerShown:false}}/>
        <MainStack.Screen name="Gender" component={Gender} options={{headerShown:false}}/>
        <MainStack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <MainStack.Screen name="MobileNumber" component={MobileNumber} options={{headerShown:false}}/>
        <MainStack.Screen name="Email" component={Email} options={{headerShown:false}}/>
        <MainStack.Screen name="Password" component={Password} options={{headerShown:false}}/>
        <MainStack.Screen name="Post" component={Post} options={{headerShown:false}}/>
    </MainStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <MainStackScreen/>
    </NavigationContainer>
);
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { CommonType } from 'types/common/CommonType';
import TemplateMainScreen from 'screens/template/TemplateMainScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/** 
 * StackNavigator를 이용하여서 앱에 대한 페이지 이동을 관리합니다.
*/
const StackNavigator = (appStateType: any) => {

    // StackNavigation을 이용하여 페이지를 관리하며 각각 RootStackPageList에서 페이지를 관리합니다
    const Stack = createStackNavigator<CommonType.RootStackPageList>();

    return (
        // TabBar의 UI는 BottomTabBar 화면에서 관리합니다.
        <Tab.Navigator initialRouteName='home' tabBar={props => <BottomTabBar {...props} />} screenOptions={customBottomTabNaviOptions}>
            {/* 메인 페이지 */}
            <Tab.Screen name="home">
                {(props) => <Home {...props} appState={appStateType.appState} />}
            </Tab.Screen>
        </Tab.Navigator >
    )
}
export default StackNavigator;
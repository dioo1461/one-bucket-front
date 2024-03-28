
/**
 * 데이터 주고받는 법 - https://talkwithcode.tistory.com/50
 * 
*/
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from 'screens/Home';
import { CommonType } from 'types/CommonType';
import BottomTabBar from './BottomTabBar';

/**
 * Bottom TabBar를 사용하는 경우의 Navigation
 * @param appStateType 
 * @returns 
*/

const Tab = createBottomTabNavigator<CommonType.RootStackPageList>();

const BottomTabNavigation = () => {

    return (
        // TabBar의 UI는 BottomTabBar 화면에서 관리합니다.
        <Tab.Navigator initialRouteName='home' tabBar={props => <BottomTabBar {...props} />} >
            {/* 메인 페이지 */}
            <Tab.Screen name="home" component={Home} />
            {/* 관리자 페이지 */}
            {/* <Tab.Screen name="adminScreen" >
                {(props) => <AdminScreen {...props} appState={appStateType.appState} />}
            </Tab.Screen> */}

        </Tab.Navigator>
    )
}
export default BottomTabNavigation;
import { BOTTOM_TAB_MENU_CODE } from 'types/CommonCode';
import React, { useState } from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
/**
 * 하단의 탭 내비게이션 UI 관리 
 * @param param0 
 * @returns 
 */
const BottomTabBar = ({ state, navigation }) => {

    const bottomMenuText = ["TAB1", "TAB2", "TAB3", "TAB4", "TAB5"]

    const [isFocused, setIsFocused] = useState(false);

    /**
     * 탭 버튼을 눌렀을 때 페이지 이동하기 
     * @param e 
     * @param index 
     */
    const pressBottomTab = (e: GestureResponderEvent, index: number) => {
        // index 별로 페이지를 등록하여서 즉시 페이지 이동을 합니다.
        navigation.navigate({ name: BOTTOM_TAB_MENU_CODE[index], merge: true });
    };

    /**
     * 탭 버튼을 길게 눌렀을 때 처리 
     */
    const longPressBottomTab = () => {

    }

    return (
        <View style={styles.container}>
            {
                bottomMenuText.map((menuText, index) =>
                    <TouchableOpacity
                        key={`menuKey-${index}`}
                        accessibilityRole="button"
                        onPress={(e) => pressBottomTab(e, index)}
                        onLongPress={longPressBottomTab}
                        style={styles.text}
                    >
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {menuText}
                        </Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

/**
 * [함수] 기본 스타일 적용 함수
 */
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60
    },
})

export default BottomTabBar;
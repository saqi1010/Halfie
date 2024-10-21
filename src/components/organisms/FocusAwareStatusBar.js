import * as React from 'react';
import { StatusBar, Platform, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../theme/color';

const FocusAwareStatusBar = ({ barColor = colors.black, barStyle = "default", isLightBar = false, isTopSpace = true }) => {
	const insets = useSafeAreaInsets();
	let focus = useIsFocused()
	const isAndroid = Platform.OS === 'android';
	return (
		isAndroid
		?
		focus
		?
		<>
				<StatusBar backgroundColor={!isTopSpace ? "#00000000" : barColor} translucent={true} barStyle={isLightBar ? 'light-content' : 'dark-content'} />
				<View style={{ height: isTopSpace ? StatusBar.currentHeight : 0 }} />
			</>
			:
			<View style={{ height: StatusBar.currentHeight }} />
			:
			<View style={{ paddingTop: insets.top, backgroundColor: barColor }} >
			<StatusBar   transculent={false} barStyle={isLightBar ? 'light-content' : 'dark-content'} />
		</View>
		) 
};

export default FocusAwareStatusBar;
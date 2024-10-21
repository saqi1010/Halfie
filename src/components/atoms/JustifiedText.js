import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/color';
import WebView from 'react-native-webview';

const JustifiedText = ({ children, externalText }) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ html: "<p style='text-align: justify;'>Justified text here</p>" }}
    />

<WebView
    source={{ uri:webViewVisibility?.url}} 
    style={styles.container}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  text: {
    textAlign: 'justify',
    color:colors.black
  },
});

export default JustifiedText;

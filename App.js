import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Appodeal,
  AppodealAdType
} from 'react-native-appodeal';
import {AppodealBanner} from 'react-native-appodeal';

 
export default function App() {
  const adTypes = AppodealAdType.INTERSTITIAL | AppodealAdType.REWARDED_VIDEO | AppodealAdType.BANNER;
  Appodeal.initialize('23d63f5544ae2779ef6ca870e90b1d1153cd3d906a01db7c', adTypes)
  

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <AppodealBanner
      style={mrec ? styles.mrec : styles.banner}
      adSize={mrec ? 'mrec' : 'phone'}
      onAdLoaded={() => console.log('Banner view did load')}
      onAdExpired={() => console.log('Banner view expired')}
      onAdClicked={() => console.log('Banner view is clicked')}
      onAdFailedToLoad={() => console.log('Banner view is failed to load')}
      usesSmartSizing
    />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    height: 50,
    width: '100%',
    backgroundColor: 'hsl(0, 0%, 97%)',
    alignContent: 'stretch',
  },
});

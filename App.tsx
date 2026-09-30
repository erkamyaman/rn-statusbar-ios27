import { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>
        StatusBar.setBarStyle('light-content') was called.{'\n\n'}
        iOS 18: the status bar icons are white.{'\n'}
        iOS 27: they stay black.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f2f2f2' },
  text: { fontSize: 17, lineHeight: 24 },
});

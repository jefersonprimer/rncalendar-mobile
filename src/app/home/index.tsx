import { Calendar } from "react-native-calendars"; 

import { View, Text, StyleSheet } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Calendar style={styles.calendar} headerStyle={{ borderBottomWidth: 0.5, borderBottomColor: '#E8E8E8', paddingBottom: 10, marginBottom:10 }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#181818',
    padding: 24,
  },
  calendar: {
    backgroundColor: 'transparent'
  }
})
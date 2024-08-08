import {View,Text, StyleSheet} from 'react-native'

export default function Footer(){
    return(
    <View style={styles.footer}>
    <Text>Footer</Text>
  </View>
    )
}
const styles = StyleSheet.create({
footer: {
    backgroundColor: '#DA81F5',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
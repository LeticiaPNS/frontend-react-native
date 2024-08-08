import {View,Text, StyleSheet} from 'react-native'

export default function Content(){
    return(
    <View style={styles.content}>
    <Text>Content</Text>
  </View>
    )
}
const styles = StyleSheet.create({
content: {
    backgroundColor:'#ECCEF5' ,
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

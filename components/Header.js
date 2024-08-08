import {View,Text, StyleSheet} from 'react-native'

export default function Header(){
return(  
<View style={styles.header}>
<Text>Header</Text>
</View>)
}

const styles = StyleSheet.create({
    header:{
      backgroundColor:'#F8E0E6' ,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
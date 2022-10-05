import { View, Text, TextInput,Button, StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input1} placeholder="userName" />

      <TextInput style={styles.input2} placeholder="password" />

      <TouchableOpacity style={styles.button}>
        <Text style={{color: '#f9f9f9'}}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles=StyleSheet.create({
    container:{
        borderWidth:18,
        borderColor:"black",
        marginBottom:'5%',
        marginTop:'70%',
        backgroundColor:"white",
        alignItems:'center',
        borderRadius:900,
        justifyContent:'center'

    },
    input1:{
        borderWidth:7,
        width:'80%',
        borderRadius:90,
        borderColor:"black",
        marginBottom:'5%',
        marginTop:"50%",
        margin:5,
        textDecorationColor:"black"
    },
    input2:{
        borderWidth:7,
        width:'80%',
        borderRadius:90,
        marginBottom:'3%',
        marginTop:"5%",
        padding:10,
        borderColor:"black",
        textDecorationColor:"black",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#c7610e",
      padding: 10,
      marginTop:'3%',
      marginBottom:'3%',
      
    },


}

);

// import { View, Text ,StyleSheet} from 'react-native'
// import React, {useState, useEffect} from 'react';
// import { Box, NativeBaseProvider, VStack ,} from 'native-base'
// import AnimatedLoader from 'react-native-animated-loader';

// export default function HomePage() {

//   const [visible, setVisible] = useState(false);
//     useEffect(() => {
//       setInterval(() => {
//         setVisible(!visible);
//       }, 2000);
//     }, []);

//   return (
//     <NativeBaseProvider>
//       <VStack space={4} alignItems="center" style={{flex: 1, backgroundColor: '#6ED4C8'}}>
//         <Box mt={'40%'} style={{}}>WELCOME TO CAR SALE HIRU</Box>

        
//       </VStack>
//     </NativeBaseProvider>
//   );
// }
// const styles = StyleSheet.create({
//     lottie: {
//       width: 100,
//       height: 100,
//     },
//   });













import { View, Text, Button,StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import {Bubbles} from 'react-native-loader';
import { Box, NativeBaseProvider, VStack } from 'native-base';


function HomePage() {

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require('../assets/car.jpg')}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <VStack
          style={{
            flex: 1,
          }}>
          <Box style={{height:10}}>
            <TouchableOpacity style={styles.button1}>
              <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text>Login</Text>
            </TouchableOpacity>
          </Box>

          <Box>
            <Text
              style={{
                color: '#c9c0c0',
                marginTop: 222,
                marginBottom: 56,
                fontSize: 29,
                fontWeight: 'bold',
                justifyContent: 'center',
              }}>
              WELCOME TO HIRU CAR SALEEEE
            </Text>
            <Text style={styles.baseText}>
              Wait For
              <Text style={styles.innerText}> loading</Text>
            </Text>

            <Bubbles size={10} color="#fdfdfd" />
          </Box>
        </VStack>
      </ImageBackground>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  baseText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width:80
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width:80
  },
});

export default HomePage









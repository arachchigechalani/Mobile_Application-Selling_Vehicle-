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
import { Box, NativeBaseProvider, VStack ,Flex} from 'native-base';

import {useNavigation } from '@react-navigation/native';


function HomePage() {
  const navigation = useNavigation();
  
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require('../assets/car.jpg')}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <VStack
          style={{
            flex: 1,
          }}>
          <Flex direction="row-reverse" mb="2.5" mt="1.5">
            <TouchableOpacity
              style={styles.button1}
              onPress={() => {
                navigation.navigate('LoginPage', {name: 'Jane'});
              }}>
              <Text style={{color: '#c9c0c0'}}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={{color: '#c9c0c0'}}>Login</Text>
            </TouchableOpacity>
          </Flex>

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

            <Bubbles size={9} color="#fdfdfd" />
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
    backgroundColor: '#2c3331',
    padding: 10,
    width:80
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#2c3331',
    padding: 10,
    width:80,
  },
});

export default HomePage









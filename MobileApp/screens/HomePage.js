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













import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'

import {Bubbles} from 'react-native-loader';
import { Box, NativeBaseProvider, VStack } from 'native-base';



function HomePage() {

  return (
    <NativeBaseProvider>
      <VStack  style={{flex: 1, backgroundColor: '#61d2c5'}}>
        
        <Text style={styles.text}>WELCOME TO HIRU CAR SALEEEE</Text>

        

        <Bubbles size={10} color="#fdfdfd" />
        
      </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
    text:{
      color:'#0e0808',
      fontSize:30,
      
    }
})

export default HomePage









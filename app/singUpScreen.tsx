// import { Link, Stack } from 'expo-router';
// import { StyleSheet, TextInput, View } from 'react-native';

// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import React from 'react';
// export default function SingUpScreen() {
//   const [number, onChangeNumber] = React.useState('');
//   return (
//     <>
//       <Stack.Screen options={{ title: 'aaa! index' }} />
//       <ThemedView style={styles.container}>
//        <Link href="/" style={styles.link}>
//           <ThemedText type="link">Go to SING IN screen!</ThemedText>
//         </Link>
//       </ThemedView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: 'black',
//   },
//   link: {
//     marginTop: 15,
//     paddingVertical: 15,
//   },
//   logo: {
//     width: 100,
//     backgroundColor: 'yellow',
//     height: 100
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor: 'red'
//   },
// });



// import { Link, Stack } from 'expo-router';
// import { StyleSheet, TextInput, View } from 'react-native';

// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import React from 'react';
// export default function Index() {
//   const [number, onChangeNumber] = React.useState('');
//   return (
//     <>
//       <Stack.Screen options={{ title: 'aaa! index' }} />
//       <ThemedView style={styles.container}>
//         <View style={styles.logo}>
//           a
//         </View>
//         <ThemedText type="title">login</ThemedText>

//         <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="useless placeholder"
//         keyboardType="numeric"
//       />
//         <Link href="detail" style={styles.link}>
//           <ThemedText type="link">Go to detail screen!</ThemedText>
//         </Link>
//          <Link href="singUpScreen" style={styles.link}>
//           <ThemedText type="link">Go to SING UP screen!</ThemedText>
//         </Link>
//       </ThemedView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor:'#0C0C0F'
//   },
//   link: {
//     marginTop: 15,
//     paddingVertical: 15,
//   },
//   logo: {
//     width: 100,
//     backgroundColor: 'yellow',
//     height: 100
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor: 'red'
//   },
// });
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
const logo = require("../assets/images/user1.jpeg");

// contact me :)
// instagram: must_ait6
// email : mustapha.aitigunaoun@gmail.com

export default function SingUpScreen() {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>CREER UNE COMPTE</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="IDENTIFIANT "
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="MOT DE PASSE"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="CONFIRMATION DE MOT DE PASSE"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>


      <View style={styles.buttonView}>
        <Link href="detail" asChild>
          <Pressable
            style={styles.button}
          >
            <Text style={styles.buttonText}>S'INSCRIRE</Text>
          </Pressable>
        </Link>


      </View>

      <View style={styles.mediaIcons}></View>

      <Text style={styles.footerText}>
        J'ai déjà une compte ?<Text style={styles.signup}>
          <Link href="/" asChild>

            <Text>Se connecté</Text>

          </Link></Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: "#0C0C0F",
    justifyContent: "center",
  },
  image: {
    height: 160,
    width: 170,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "#FF9001",
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#FF9001",
    borderWidth: 1,
    borderRadius: 7,
    color: "white",
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
    color: "white",
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 13,
    color: "white",
    paddingLeft: 5,
  },
  forgetText: {
    fontSize: 11,
    color: "#FF9001",
  },
  button: {
    backgroundColor: "#FF9001",
    height: 45,
    borderColor: "#FF9001",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
    marginVertical: 20
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "#FF9001",
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23,
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: "center",
    color: "white",
  },
  signup: {
    color: "#FF9001",
    fontSize: 13,
  },
});

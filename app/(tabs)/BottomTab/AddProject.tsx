// import { Link, Stack } from 'expo-router';
// import { StyleSheet } from 'react-native';

// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function AddProject() {
//   return (
//     <>

//       <ThemedView style={styles.container}>
//         <ThemedText type="title">AddProjects</ThemedText>

//       </ThemedView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//         padding: 20,
//     backgroundColor:'#C4C4C4'
//   },
//   link: {
//     marginTop: 15,
//     paddingVertical: 15,
//   },
// });

import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';

interface Project {
  name: string;
  progress: number;
  status: string;
  description: string;
  tintColor: string;
}

export default function AddProject() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ThemedView style={styles.container}>
      <View style={styles.containerTab}>
        <Text style={styles.text}>Créer un projet</Text>
      </View>

      <View style={styles.progress}>
        <View style={styles.itemInput}>
          <Text style={styles.labelInput}>Nom du projet</Text>
          <TextInput
            style={styles.input}
            placeholder="Nom "
            value={username}
            onChangeText={setUsername}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.itemInput}>
          <Text style={styles.labelInput}>Déscription</Text>
          <TextInput
            style={styles.input}
            placeholder="Description du projet "
            value={username}
            onChangeText={setUsername}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
      </View>


    </ThemedView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#111111',
  },
  containerTab: {
    padding: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  progress: {

    padding: 10,
    backgroundColor: '#191919',
    borderRadius: 15,

  },
  itemInput: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10
  },
  labelInput: {
    color: 'white',
    marginBottom: 10
  },
  input: {
    height: 40,
    paddingHorizontal: 20,
    borderColor: "#FF9001",
    borderWidth: 1,
    borderRadius: 7,
    color: "gray",
  },

});


import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import ProjectItem from './ProjectItem';
//import ProjectItem from './ProjectItem';


// Définir des constantes pour les couleurs et tailles
const COLORS = {
  background: '#111111',
  text: 'white',
  subtext: 'gray',
  progressTint: '#C06900',
  progressBackground: '#111111',
  buttonBorder: '#159696',
  buttonBackground: '#159696',
  description: '#778080',
};

const SIZES = {
  progressSize: 70,
  progressWidth: 5,
  borderRadius: 15,
};

// Définir une interface pour les propriétés de ProjectItem
interface ProjectItemProps {
  name: string;
  description: string;
  progress: number;
  startDate: string;
  endDate: string;
}

export default function Screen2() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.containerTab}>
        <Text style={styles.text}>Liste des projets</Text>
        <Text style={styles.subtext}>ENCOURS</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.project}>
          <ProjectItem
            name="Projet 1"
            description="Description Projet 1"
            progress={60}
            startDate="12/12/12"
            endDate="12/12/12"
          />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

// const ProjectItem: React.FC<ProjectItemProps> = ({ name, description, progress, startDate, endDate }) => (
//   <View style={styles.projectItem}>
//     <View style={styles.descriptionProgress}>
//       <View style={styles.containerName}>
//         <ThemedText type="defaultSemiBold" style={styles.name}>
//           {name}
//         </ThemedText>
//       </View>
//       <View style={styles.desc}>
//         <Text style={styles.descText}>{description}</Text>
//       </View>
//       <View style={styles.btnView}>
//         <Text style={styles.btnViewText}>DETAILS</Text>
//       </View>
//     </View>
//     <View style={styles.circleProgress}>
//       <AnimatedCircularProgress
//         size={SIZES.progressSize}
//         width={SIZES.progressWidth}
//         fill={progress}
//         tintColor={COLORS.progressTint}
//         backgroundColor={COLORS.progressBackground}
//       >
//         {() => <Text style={styles.textProgress}>{`${progress}%`}</Text>}
//       </AnimatedCircularProgress>
//       <View style={styles.dateProject}>
//         <Text style={styles.date}>
//           Début : <Text style={styles.dateDetail}>{startDate}</Text>
//         </Text>
//         <Text style={styles.date}>
//           Fin : <Text style={styles.dateDetail}>{endDate}</Text>
//         </Text>
//       </View>
//     </View>
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  containerTab: {
    padding: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.text,
  },
  subtext: {
    color: COLORS.subtext,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: COLORS.progressTint,
    paddingBottom: 10,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  project: {
    marginTop: 20,
    padding: 20,
    borderRadius: SIZES.borderRadius,
    backgroundColor: '#191919',
  },
  projectItem: {
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginBottom: 15,
    flexDirection: 'row',
  },
  descriptionProgress: {
    width: '65%',
  },
  containerName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: COLORS.text,
    fontSize: 18,
  },
  desc: {
    marginBottom: 15,
  },
  descText: {
    color: COLORS.description,
  },
  btnView: {
    marginLeft: 5,
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: COLORS.buttonBorder,
    backgroundColor: COLORS.buttonBackground,
    width: 80,
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
  },
  btnViewText: {
    color: COLORS.text,
  },
  circleProgress: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  textProgress: {
    color: COLORS.text,
  },
  dateProject: {
    alignItems: 'center',
  },
  date: {
    marginTop: 5,
    color: COLORS.subtext,
    fontSize: 12,
  },
  dateDetail: {
    color: COLORS.text,
    fontWeight: '600',
  },
});

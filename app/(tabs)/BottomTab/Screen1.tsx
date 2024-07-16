import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

interface Project {
  name: string;
  progress: number;
  status: string;
  description: string;
  tintColor: string;
}

export default function Screen1() {
  const projects: Project[] = [
    { name: "Projet 1", progress: 60, status: "Encours", description: "Description Projet 1", tintColor: "#C06900" },
    { name: "Projet 2", progress: 90, status: "Finie", description: "Description Projet 2", tintColor: "#1A5C41" },
    { name: "Projet 3", progress: 60, status: "Encours", description: "Description Projet 3", tintColor: "#C06900" },
    { name: "Projet 4", progress: 90, status: "Finie", description: "Description Projet 4", tintColor: "#1A5C41" },
  ];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.containerTab}>
        <Text style={styles.text}>Tableau de bord</Text>
      </View>

      <View style={styles.progress}>
        <ProgressItem number={100} label="Total" color="#159696" />
        <ProgressItem number={10} label="En cours" color="#C06900" />
        <ProgressItem number={90} label="Finie" color="#1D6E4C" />
      </View>

      <ScrollView >
        <View style={styles.projet}>
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

interface ProgressItemProps {
  number: number;
  label: string;
  color: string;
}

const ProgressItem: React.FC<ProgressItemProps> = ({ number, label, color }) => (
  <View style={styles.ItemProgress}>
    <View style={[styles.ItemNumber, { borderBottomColor: color }]}>
      <Text style={styles.number}>{number}</Text>
    </View>
    <Text style={styles.label}>{label}</Text>
  </View>
);

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => (
  <View style={styles.Itemprojet}>
    <View style={styles.CercleProgress}>
      <AnimatedCircularProgress
        size={70}
        width={5}
        fill={project.progress}
        tintColor={project.tintColor}
        backgroundColor="#11111"
      >
        {() => <Text style={styles.TextProgress}>{project.progress}%</Text>}
      </AnimatedCircularProgress>
    </View>
    <View style={styles.descriptionProgress}>
      <View style={styles.containerName}>
        <ThemedText type='defaultSemiBold' style={styles.name}>{project.name}</ThemedText>
        <Text style={[styles.status, project.status === "Encours" ? styles.encours : styles.finie]}>
          {project.status}
        </Text>
      </View>
      <View style={styles.desc}>
        <Text style={styles.descText}>{project.description}</Text>
      </View>
      <View style={styles.btnVoire}>
        <Text style={styles.btnVoireText}>VOIRE</Text>
      </View>
    </View>
  </View>
);

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
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#191919',
    borderRadius: 15,
    height: 100,
  },
  ItemProgress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ItemNumber: {
    borderBottomWidth: 2,
    marginBottom: 5,
  },
  number: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    color: 'gray',
  },
  projet: {
    marginTop: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#191919',
  },
  Itemprojet: {
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginBottom: 15,
    flexDirection: 'row',
  },
  CercleProgress: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  TextProgress: {
    color: "white",
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
    color: '#fff',
    fontSize: 18,
  },
  status: {
    width: 60,
    fontWeight: '900',
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 10,
    fontSize: 12,
  },
  encours: {
    color: '#C06900',
    borderColor: '#C06900',
  },
  finie: {
    color: '#1A5C41',
    borderColor: '#1A5C41',
  },
  desc: {
    color: '#778080',
    marginBottom: 15,
  },
  btnVoire: {
    marginLeft: 5,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#159696',
    backgroundColor: '#159696',
    width: 80,
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
  },
  btnVoireText: {
    color: "#fff",
  },
  descText: {
    color: '#778080',
  },
});

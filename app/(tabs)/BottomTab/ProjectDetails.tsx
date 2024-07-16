import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProjectDetailsScreen() {
    return (
        <>

            <ThemedView style={styles.container}>
                <ThemedText type="title">ProjectDetailsScreen</ThemedText>

            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#C4C4C4'
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
});

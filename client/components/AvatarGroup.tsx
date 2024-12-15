import React from 'react';
import { ThemedView } from './ThemedView';
import { Image, StyleSheet } from 'react-native';

const IMAGE_URL =
    'https://img.freepik.com/free-photo/portrait-dreamy-satisfied-young-european-woman-looks-aside-blank-space-has-pleasant-look-wears-hoodie-poses-against-yellow-wall-empty-space-area-has-intriguing-plan-mind_273609-42867.jpg?semt=ais_hybrid';

const AvatarGroup = ({ users }) => {
    return (
        <ThemedView style={styles.avatarContainer}>
            {users.map((user, index) => (
                <Image
                    key={index}
                    source={{ uri: IMAGE_URL }}
                    style={styles.avatar(index)}
                />
            ))}
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        flexDirection: 'row',
    },
    avatar: (index) => ({
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'cover', // Corrected objectFit to resizeMode as it's the valid property in React Native
        marginLeft: index !== 0 ? -29 : 0,
    }),
});

export default AvatarGroup;

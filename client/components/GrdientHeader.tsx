import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";

const GradientHeader = () => {
    return (
        <LinearGradient
            colors={["#135CAF", "#3A6FB1"]} // Blue gradient shades
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerContainer}
        >
            <View style={styles.headerContent}>
                {/* Left Icon and Title */}
                <View style={styles.logoSection}>
                    <Ionicons name="chatbubble-ellipses" size={30} color="white" />
                    <ThemedText style={styles.headerText}>E-Chat</ThemedText>
                </View>

                {/* Right Icons */}
                <View style={styles.iconSection}>
                    <Ionicons name="search" size={28} color="white" style={styles.icon} />
                    <Ionicons name="add" size={28} color="white" />
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 120,
        borderRadius: 12,
        paddingHorizontal: 20,

    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60
    },
    logoSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10,
        fontStyle: "italic",
    },
    iconSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 15,
    },
});

export default GradientHeader;

import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Simulation = () => {
    return (
        <View style={styles.simulationMain}>
            <View style={styles.simulationsubMain}>
                <TouchableOpacity style={styles.pathFinder}>
                    <View>
                        <Image style={styles.pathfinderImg} source={require("../Images/Pathfinder.jpg")} />
                        <Text style={{ color: "#004A61", fontWeight: "bold", marginLeft: 20, marginTop: 30 }}>Pathfinder</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clippingMask}>
                    <View>
                        <Image style={styles.clippingMaskImg} source={require("../Images/Clippingmask.jpg")} />

                        <Text style={{ color: "#004A61", fontWeight: "bold", marginLeft: 6, marginTop: 30 }}>Clipping Mask</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Simulation

const styles = StyleSheet.create({
    clippingMaskImg: {
        width: 120,
        height: 110,
        marginTop: 30
    },
    pathfinderImg: {
        width: 120,
        height: 110,
        marginTop: 30
    },
    simulationsubMain: {
        flexDirection: "row",
    },
    simulationMain: {
        // justifyContent:"center",
        alignItems: "center",
        marginTop: 200
    },
    clippingMask: {
        backgroundColor: "#F5F5F5",
        // backgroundColor:"red",
        width: "40%",
        height: 207,
        alignItems: "center",
        marginHorizontal: 10
    },
    pathFinder: {
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        // backgroundColor:"black",
        width: "40%",
        height: 207,
        marginHorizontal: 10
    }
})
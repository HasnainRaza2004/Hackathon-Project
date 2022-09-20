import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Intro = ({ navigation }) => {
    const NextRoute = () => {
        navigation.navigate("Signup")
    }
    return (

        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <View style={{ flex: .9, backgroundColor: "#004A61", borderRadius: 40 }}>
                <Image style={{ width: 361, marginTop: 0, height: 460 }} source={require("../Images/MainIntro.jpeg")} />
            </View>
            <View>
                <Text style={{ color: "#004A61", fontWeight: "bold", fontSize: 22, marginTop: 20, marginBottom: 2, marginLeft: 17 }}>Software
                    Vector Image Processor</Text>
            </View>
            <View>
            </View>
            <View>
                <Text style={{ color: "#004A61", padding: 4, marginLeft: 17, marginTop: 7 }}>Explore AiLearn to increase your skills
                    in operating Adobe Illustrator</Text>
            </View>
            <View>
                <TouchableOpacity onPress={NextRoute} style={{ backgroundColor: "#004A61", width: 315, borderRadius: 29, marginTop: 20, alignSelf: "center" }}>
                    <Text style={{ color: "white", fontSize: 23, padding: 10, textAlign: "center" }}>
                        ENTER</Text>
                </TouchableOpacity>

            </View>



        </View>
    )
}

export default Intro

const styles = StyleSheet.create({

})
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Testing({ navigation }) {
    const PreviousRoute = () => {
        navigation.navigate("HomePage")
    }
    return (
        <View style={{ flex: 1 }}>
                <View style={styles.backBtn} >
            <TouchableOpacity onPress={PreviousRoute}>
                    <Text style={{ marginLeft: 5 }}><Icon name='arrow-back-ios' color="#004A61" size={15} /></Text>
            </TouchableOpacity> 
                </View>
            <View>

                <Text style={{ position: "relative", left: 132, right: 2, bottom: 5, top: 22, fontWeight: "bold", color: "#004A61", fontSize: 25 }}>Testing</Text>
            </View>
            <View>
                <Image style={{ width: 351, marginTop: 120 }} source={require("../Images/sss.jpeg")} />
            </View>
            <View style={{ marginTop: 84 }}>
                <Text style={{ color: "#004A61", fontWeight: "bold", fontSize: 17, marginLeft: 20, marginBottom: 5 }}>Kompetensi Dasar 3.6.</Text>
                <Text style={{ justifyContent: "center", marginLeft: 20, marginBottom: 13, color: "black" }}>Menerapkan perangkat lunak pengolah
                    gambar vektor
                </Text>
            </View>


            <View style={{ marginTop: 14 }}>
                <Text style={{ color: "#004A61", fontWeight: "bold", fontSize: 17, marginLeft: 20, marginBottom: 5 }}>Kompetensi Dasar 4.6.</Text>
                <Text style={{ justifyContent: "center", marginLeft: 20, color: "black" }}>Menggunakan perangkat lunak pengolah
                    gambar vektor
                </Text>
            </View>
            <View style={{ marginTop: 95 }}>


                <TouchableOpacity style={{ backgroundColor: "#004A61", width: 315, borderRadius: 29, marginTop: 20, alignSelf: "center", height: 40 }}>
                    <Text style={{ color: "white", fontSize: 15, padding: 8, textAlign: "center", fontWeight: "bold" }}>MEMBACA KOMPETENSI DASAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    backBtn: {
        position: "absolute",
        width: 40,
        height: 40,
        left: 20,
        top: 24,
        background: "#F8F8F8",
        borderWidth: 2,
        borderColor: "#004A61",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    }
})
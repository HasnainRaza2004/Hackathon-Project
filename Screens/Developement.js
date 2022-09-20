import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Developement({ navigation }) {
    const PreviousRoute = () => {
        navigation.navigate("HomePage")
    }
    return (
        <View style={{ flex: 1 }}>
                <View style={styles.backBtn}>
            <TouchableOpacity onPress={PreviousRoute}>
                    <Text style={{ marginLeft: 5 }}><Icon name='arrow-back-ios' color="#004A61" size={15} /></Text>
            </TouchableOpacity>
                </View>
            <View>

                <Text style={{ position: "relative", left: 90, right: 2, bottom: 5, top: 22, fontWeight: "bold", color: "#004A61", fontSize: 25 }}>DEVELOPEMENT</Text>
            </View>
            <View style={{ marginTop: 94 }}>
                <Text style={{ color: "#004A61", fontWeight: "bold", fontSize: 17, marginLeft: 20, marginBottom: 5 }}>Pengetahuan</Text>
                <Text style={{ justifyContent: "center", marginLeft: 20, color: "black" }}>Memahami, menerapkan dan menganalisis pengetahuan faktual, konseptual, dan   prosedural berdasarkan rasa ingin tahunya tentang ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam wawasan kemanusiaan, kebangsaan, kenegaraan, dan peradaban terkait penyebab fenomena dan kejadian dalam bidang kerja yang spesifik untuk memecahkan masalah.
                </Text>
            </View>


            <View style={{ marginTop: 94 }}>
                <Text style={{ color: "#004A61", fontWeight: "bold", fontSize: 17, marginLeft: 20, marginBottom: 5 }}>Keterampilan</Text>
                <Text style={{ justifyContent: "center", marginLeft: 20, color: "black" }}>Mengolah,  menalar, dan menyaji dalam ranah konkret dan ranah abstrak  terkait dengan pengembangan dari yang dipelajarinya di sekolah secara mandiri, dan mampu melaksanakan tugas spesifik di bawah pengawasan langsung.
                </Text>
            </View>
            <View style={{ marginTop: 75 }}>


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

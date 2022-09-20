import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Designing({navigation}) {
    const PreviousRoute = () => {
        navigation.navigate('HomePage')
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.backBtn}>
            <TouchableOpacity onPress={PreviousRoute}>
                <Text style={{ marginLeft: 5 }}><Icon name='arrow-back-ios' color="#004A61" size={15} /></Text>
            </TouchableOpacity>
            </View>
            <View>

                <Text style={{ position: "relative", left: 110, right: 2, bottom: 6, top: 22, fontWeight: "bold", color: "#004A61", fontSize: 25 }}>DESIGNING</Text>
            </View>
            <View style={{ height: 73, width: 325, marginLeft: 45, marginTop: 150, flexDirection: "row" }}>
                <View style={styles.bbb}>
                    <TouchableOpacity>

                        <Icon name="play-arrow" size={37} color="white" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold", color: "#004A61", letterSpacing: 1.3, marginLeft: 15, marginTop: 9 }}>Kompetensi  Inti</Text>
                    <Text style={{ color: "#14CBD9", marginLeft: 15, fontSize: 12 }}>Matri Tektual</Text>
                    {/* <Text> <Icon name="lock" size={23} color="yellow" /></Text> */}

                </View>

            </View>


            <View style={{ height: 73, width: 335, marginLeft: 38, marginTop: 30, flexDirection: "row" }}>
                <View style={styles.bbbb}>
                    <TouchableOpacity>

                        <Text style={{}}> <Icon name="play-arrow" size={47} color="#004A61" /></Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold", color: "#004A61", letterSpacing: 1.3, marginLeft: 15, marginTop: 9 }}>Kompetensi  Inti</Text>
                    <Text style={{ color: "#14CBD9", marginLeft: 15, fontSize: 12 }}>Matri Tektual</Text>
                </View>

            </View>



            <View style={{ height: 73, width: 325, marginLeft: 38, marginTop: 30, flexDirection: "row" }}>
                <View style={styles.bbbb}>
                    <TouchableOpacity>

                        <Icon name="play-arrow" size={47} color="#004A61" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold", color: "#004A61", letterSpacing: 1.3, marginLeft: 15, marginTop: 9 }}>Kompetensi  Inti</Text>
                    <Text style={{ color: "#14CBD9", marginLeft: 15, fontSize: 12 }}>Matri Tektual</Text>
                </View>

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
    },
    bbb: {
        width: 43,
        height: 43,

        backgroundColor: "#004A61",
        // borderWidth: 3,
        borderColor: "#004A61",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    bbbb: {
        width: 43,
        height: 43,
        // backgroundColor: "#004A61",
        // borderWidth: 3,
        borderColor: "#004A61",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})
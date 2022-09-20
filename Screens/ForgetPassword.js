import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useState } from 'react'


export default function ForgetPassword({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const nextScren = () => {
    let Obj = {
      email,
      password,
      name
    }
  }
  const PreviousRoute = () => {
    navigation.navigate("Signup")
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity style={Styles.backBtn} onPress={PreviousRoute}>
        <Icon name='arrow-back-ios' color="#004A61" size={15} />
      </TouchableOpacity>

      <View style={{ flex: 0.5, marginTop: 100 }}>

        <Text style={{ fontSize: 25, textAlign: "center", color: "#004A61", fontWeight: "bold", marginTop: 14 }}>Forgot the password
        </Text>
        <Text style={{ fontSize: 13, color: "#004A61", textAlign: "center", marginTop: 14 }}>Enter No. Your cellphone and wait for the code {"\n"}
          authentic delivered</Text>
      </View>

      <View style={{ flex: 0.6, alignItems: "center", marginTop: 10 }}>

        <View style={{ position: "absolute", left: 30, zIndex: 1, top: 12 }}><Text ><Icon size={25} name='phone' color="#004A61" /></Text></View>

        <TextInput placeholder='Enter No. Mobile' placeholderTextColor="#004A61" onChangeText={(e) => setName(e)} style={{ backgroundColor: "#FCFCFC", fontSize: 16, width: 290, paddingHorizontal: 30, marginBottom: 10, color: "black", paddingTop: 12, borderRadius: 5 }} />

        {/* <View style={{ position: "relative", right: 130, zIndex: 1, top: 36, bottom: 0 }}><Text ><Icon size={24} name='mail' color="#004A61" /></Text></View>
    
            <TextInput placeholder='Email' value={email} onChangeText={(e) => setEmail(e)} placeholderTextColor="black" style={{ backgroundColor: "#FCFCFC", width: 290, paddingHorizontal: 30, fontSize: 16, marginBottom: 10, color: "black" , borderRadius: 5 }} /> */}


        {/* <View style={{ position: "relative", right: 131, zIndex: 1, top: 36, bottom: 0 }}><Text ><Icon size={25} name='lock' color="#004A61" /></Text></View>
    
            <TextInput placeholder='Password' value={password} onChangeText={(e) => setPassword(e)} secureTextEntry={true} placeholderTextColor="#004A61" style={{ backgroundColor: "#FCFCFC", width: 290, paddingHorizontal: 29, fontSize: 16, color: "black" , borderRadius: 5 }} /> */}
        {/* <View style={{ flexDirection: "row" }}> */}
        {/* <Text style={{ color: "#004A61", marginTop: 25 }}>Already have Account ?</Text> */}
        {/* <TouchableOpacity>
                <Text style={{ fontWeight: "bold", color: "#004A61", marginTop: 5,marginLeft: 160 }}>Foget Password</Text>
              </TouchableOpacity>
    
            </View>
     */}

      </View>

      {/* <View style={{ flex: 0.1 ,backgroundColor:"red",marginTop:80}}>
    
          </View> */}

      <View style={{ flex: 0.8, alignItems: "center" }}>

        <TouchableOpacity onPress={nextScren} style={{ backgroundColor: "#004A61", width: 300, borderRadius: 25, marginTop: 10 }}>
          <Text style={{ color: "white", fontSize: 21, padding: 9, textAlign: "center" }}>SEND
          </Text>
        </TouchableOpacity>

      </View>
      {/* <View style={{flex:0.7,alignItems:"center"}}>
          <Text style={{color:"white",fontSize:35,marginTop:160}}>SIGN UP</Text>
          </View>
          <View style={{flex:1,flexDirection:"column",alignItems:"center"}}>
          <TextInput style={Styles.inputs} placeholder='Enter Full Name' placeholderTextColor="black" />
          <TextInput style={Styles.inputs} placeholder='Enter Email ' placeholderTextColor="black"/>
          <TextInput style={Styles.inputs} placeholder='Enter Contact ' placeholderTextColor="black"/>
          </View>
          <View style={{alignItems:"center",alignContent:"center"}}>
          <TouchableOpacity style={Styles.button}>
          <Text style={{color:"white",fontSize:17}}>SIGN UP</Text>
          </TouchableOpacity>
        </View> */}
    </View>
  )
}

const Styles = StyleSheet.create({
  backBtn: {
    position: "absolute",
    width: 40,
    height: 40,
    left: 24,
    top: 24,
    background: "#F8F8F8",
    borderWidth: 2,
    borderColor: "#004A61",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  inputs: {
    width: 250,
    height: 60,
    marginBottom: 20,
    paddingLeft: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderRadius: 30,
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,

  },
})
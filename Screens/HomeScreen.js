import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import {React,useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
// import axios from "Axios";
// import axios from "axios";


const HomeScreen = ({navigation}) => {
  const [apidata,setapiData] = useState([])
  const axios = require('axios').default;
  useEffect(()=>{
    axios.get("https://phplaravel-704365-2879244.cloudwaysapps.com/api/jawan_pakistan/data/69")
    .then(res=>{
console.log(res.data.data);
setapiData(res.data);
console.log(setapiData)
    })
  },[])
  const Designing = () => {
    navigation.navigate("Designing")
}
  const Developement = () => {
    navigation.navigate("Developement")
}
  const Testing = () => {
    navigation.navigate("Testing")
}
  const UIUX = () => {
    navigation.navigate("UIUX")
}
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.icon}>
          <Icon name='person' color="#004A61" size={30} />
        </View>
        <Text style={{ marginTop: 10, color: "#004A61", marginLeft: 15, fontWeight: "bold" }}>Hi, Siswa Multimedia {"\n"}Let's start learning!
        </Text>
        <Icon style={{ marginLeft: 70, marginTop: 10, }} name='file-download' color="#004A61" size={40} />
      </View>
<View style={styles.midContainer}>
  <View style={styles.intro}>
<Text style={{marginLeft:10,marginTop:10,}}>INTRODUCTION</Text>
<View style={{backgroundColor:"#FFC229",borderRadius:20,color:"#004A61",marginLeft:130,marginTop:10,paddingHorizontal:10}}><Text>START</Text></View>
  </View>
  <Text style={{fontWeight:"bold",marginLeft:10,marginTop:12}}>Reading Core Competencies and
Basic competencies</Text>
<Text style={{marginLeft:310,marginTop:15}}>0%</Text>
<View style={{backgroundColor:"white",height:7,marginHorizontal:10,borderRadius:5}}></View>
</View>
<View style={styles.folderView}>
<View style={styles.firstFoldeRow}>
  <TouchableOpacity onPress={Designing} style={styles.kikdFolder}>
<View >
  <Image style={{width:120,height:120,marginHorizontal:16,marginTop:20}} source={require("../Images/kikd.jpg")} />
<Text style={{color:"#004A61",marginLeft:5,marginTop:5,fontWeight:"bold"}}>Designing</Text>
<View style={{flexDirection:"row",marginLeft:5}}>
<Icon name='folder' color="#004A61" size={20}/>
<Text style={{color:"#004A61"}}>3 Material</Text>
</View>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={Developement} style={styles.earlyPreparationfolder}>
<View >
<Image style={{width:120,height:120,marginHorizontal:16,marginTop:20}} source={require("../Images/Earlypreparation.jpg")} />
<Text style={{color:"#004A61",marginLeft:5,marginTop:5,fontWeight:"bold"}}>Development</Text>
<View style={{flexDirection:"row",marginLeft:5}}>
<Icon name='folder' color="#004A61" size={20}/>
<Text style={{color:"#004A61"}}>5 Material</Text>
</View>
</View>
</TouchableOpacity>
</View>


<View style={styles.secondFoldeRow}>
  <TouchableOpacity onPress={Testing} style={styles.AreaKerjaAi}>
<View >
<Image style={{width:120,height:120,marginHorizontal:16,marginTop:20}} source={require("../Images/Aiworkarea.jpg")} />
<Text style={{color:"#004A61",marginLeft:5,marginTop:5,fontWeight:"bold"}}>Testing
</Text>

<View style={{flexDirection:"row",marginLeft:5}}>
<Icon name='folder' color="#004A61" size={20}/>
<Text style={{color:"#004A61"}}>8 Material</Text>
</View></View>
</TouchableOpacity>


<TouchableOpacity onPress={UIUX} style={styles.toolBox}>
<View >
<Image style={{width:120,height:120,marginHorizontal:16,marginTop:20}} source={require("../Images/Toolbox.jpg")} />
<Text style={{color:"#004A61",marginLeft:5,marginTop:5,fontWeight:"bold"}}>UIUX</Text>
<View style={{flexDirection:"row",marginLeft:5}}>
<Icon name='folder' color="#004A61" size={20}/>
<Text style={{color:"#004A61"}}>34 Material</Text>
</View>
</View>
</TouchableOpacity>

</View>
</View>
</View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  secondFoldeRow:{
    flexDirection:"row"
  },
  firstFoldeRow:{
flexDirection:"row"
  },
  toolBox:{
    backgroundColor:"#FFFFFF",
    width:"43%",
    height:190,
    borderRadius:10,
    marginHorizontal:12,
    marginTop:15
  },
  earlyPreparationfolder:{
    backgroundColor:"#FFFFFF",
    width:"43%",
    height:190,
    borderRadius:10,
    marginHorizontal:12,
    marginTop:15
  },
  AreaKerjaAi:{
backgroundColor:"#FFFFFF",
width:"43%",
height:190,
borderRadius:10,
marginHorizontal:12,
marginTop:15
  },
  kikdFolder:{
backgroundColor:"#FFFFFF",
width:"43%",
height:190,
borderRadius:10,
marginHorizontal:12,
marginTop:15,
  },
  folderView:{
flexDirection:"column"
  },
  intro:{
    flexDirection:"row",
  },
  midContainer:{
color:"#004A61",
width:"95%",
height:150,
marginHorizontal:10,
backgroundColor:"#004A61",
borderRadius:10,
marginTop:30
  },
  mainContainer: {
  },
  icon: {
    backgroundColor: "#FFC229",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  }
})
import { TextInput,Text,Button,View,StyleSheet,Modal,Image } from "react-native"
import { useState } from "react";
function Goalinput(props){
  const [goaltext, setgoaltext] = useState("");
  function goalinputhandler(text) {
    setgoaltext(text);
  }
function addgoalhandler(){
    props.onaddgoal(goaltext)
    props.onclose()
}


    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputcontainer}>
            <Image style={styles.image} source={require('./assets/images/goal.jpg')}/>
            <TextInput
                onChangeText={goalinputhandler}
                style={styles.textinput}
                placeholder="Type your goal"
            />
            <View style={styles.buttoncontainer}>
                <View style={styles.button}>
                    <Button color="#b22222" onPress={addgoalhandler} title="Add Goal" />
                </View>
                <View style={styles.button  }>
                    <Button color="#b22222" onPress={props.onclose}title="Cancel"/>
                </View>
            </View>
      </View>
      </Modal>
        
    )
}
const styles = StyleSheet.create({

    inputcontainer: {
      //  flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 24,
        flex: 1,
        padding:15,
        backgroundColor:"white"
      },
    
      textinput: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '100%',
        paddingTop:4,
        padding: 8,
        color:'#000000',
        borderRadius:8
      },
      buttoncontainer:{
        marginTop:10,
        flexDirection:'row-reverse'
      },
      button:{
        width: 100,
        marginHorizontal:8,
        borderRadius:10
      },
      image:{
        height:200,
        width:300,
        margin:20,
        borderRadius:5
      }
})
module.exports = Goalinput;
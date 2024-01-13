import { StyleSheet, View, Text,Pressable } from "react-native";

function Goalitem(props) {
  return (
    
      <View style={styles.goalitem}>
        <Pressable 
    onPress={props.ondelete}
    android_ripple={{color:"#b22222"}}
    style={({pressed})=>pressed && styles.presseditem} 
    >
        <Text style={styles.goaltext}>{props.text}</Text>
       </Pressable>
      </View>
    
   
  );
}

const styles = StyleSheet.create({
  goalitem: {
    marginTop:8,
    borderRadius: 6,
    backgroundColor: '#b22222',
  },
  goaltext: {
    color: 'white',
    margin: 8,
    padding: 5,
  },
  presseditem:{
    opacity:0.6
  }
});

export default Goalitem;

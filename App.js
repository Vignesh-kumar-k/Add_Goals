import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import Goalitem from './Goalitem';
import Goalinput from './Goalinput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [ismodalvisible,setismodalvisible] = useState(false);
  

  function goaladder(goaltext) {
    setGoals((currentgoals) => [...currentgoals, goaltext])
   
  
  }
  function deleteitem(index){
    const newgoals = goals.filter((el,i)=> i!=index)
    setGoals(newgoals)
  }
  function Startaddgoalhandler(){
    setismodalvisible(true);
  }
  function Closeaddgoalhandler(){
    setismodalvisible(false);
  }
  return (
    <View style={styles.appcontainer}>
      <Button title='Add New Goal' color="#800000" onPress={Startaddgoalhandler}/>
      <Goalinput onclose={Closeaddgoalhandler} visible = {ismodalvisible} onaddgoal={goaladder} />
      <View style={styles.goalcontainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <Goalitem text={itemData.item} ondelete={()=>deleteitem(itemData.index)}/>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:'#fffaf0'
  },
  goalcontainer: {
    flex: 4,
  },
});

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

const drumKit={
  '1':require('./assets/1.mp3'),
  '2':require('./assets/2.mp3'),
  '3':require('./assets/3.mp3'),
  '4':require('./assets/4.mp3'),
  '5':require('./assets/5.mp3'),
  '6':require('./assets/6.mp3'),
  '7':require('./assets/7.mp3'),
  '8':require('./assets/8.mp3'),
  '9':require('./assets/9.mp3'),
}

const colors={
  1:'#c0392b',
  2:'#2980b9',
  3:'#34495e',
  4:'#8e44ad',
  5:'#d35400',
  6:'#95a6a6',
}

export default function App() {
  const playSound=async(drumKitSound)=>{
    try {
      const soundObj=new Audio.Sound();

      const path=drumKit[drumKitSound];
      await soundObj.loadAsync(path);
      await soundObj.playAsync().then(status=>{
        setTimeout(()=>{
          soundObj.unloadAsync().then(s=>{
            console.log(s);
          })
        },status.durationMillis)
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity 
        onPress={()=>playSound('1')}
        style={[{
          backgroundColor:colors[1]
        },styles.button]}
        >
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>playSound('2')}
        style={[{
          backgroundColor:colors[2]
        },styles.button]}
        >
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>playSound('3')}
        style={[{
          backgroundColor:colors[3]
        },styles.button]}
        >
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity 
        onPress={()=>playSound('4')}
        style={[{
          backgroundColor:colors[4]
        },styles.button]}
        >
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>playSound('5')}
        style={[{
          backgroundColor:colors[5]
        },styles.button]}
        >
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>playSound('6')}
        style={[{
          backgroundColor:colors[6]
        },styles.button]}
        >
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity 
        onPress={()=>playSound('7')}
        style={[{
          backgroundColor:colors[2]
        },styles.button]}
        >
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>playSound('8')}
        style={[{
          backgroundColor:colors[4]
        },styles.button]}
        >
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>playSound('9')}
        style={[{
          backgroundColor:colors[3]
        },styles.button]}
        >
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    flex:1,
    height:130,
    margin:10,
    borderRadius:4,
  }
});

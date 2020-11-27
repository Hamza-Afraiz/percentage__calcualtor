import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, ScrollView, TouchableOpacity,TouchableHighlight,Modal,modalVisible, Keyboard } from 'react-native';

export default function App() {
  const [getoriginal, setoriginal] = useState('');
  const [getdiscount, setdiscount] = useState('');
  const [getdiscountprice, setdiscountprice] = useState('');
  const [getchecker, setchecker] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [getList, setList] = useState([]);

  const check = () =>{
    if( (getoriginal != '') && (getdiscount != '')){
      alert('check');
      var d=Number(getdiscount);
      var o=Number(getoriginal);
      var dp= o- (o * d / 100) ;
      dp = dp.toFixed(2);
      o = o.toFixed(2);
      
      
      setdiscountprice(dp);
      setoriginal(o);

      
      
     
    }

  }
  const clear =() =>{
    setdiscount('');
    setoriginal('');
  }
  const addItem = () => {
   
    setList([
      ...getList,
      { key: Math.random().toString(), data: {"original" : getoriginal,"discounted":getdiscountprice,"discount":getdiscount} }
    ]);
    
    Keyboard.dismiss();
  }
 
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Percentage Calculator</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter original price"
        onChangeText={text => setoriginal(text)}
        value={getoriginal }
        keyboardType='numeric'
        
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter discount"
        onChangeText={text => setdiscount(text) }
        value={getdiscount  < 100 || getdiscount == '' ? getdiscount : "cant be high than 100"}
        keyboardType='numeric'
      
      />
      <TouchableHighlight
              style={styles.appButtonContainer}
              onPress={() => {
                clear();
              }}
            >
              <Text style={styles.appButtonText}>clear</Text>
            </TouchableHighlight>
      <TouchableHighlight
              style={styles.appButtonContainer}
              onPress={() => {
                check();
              }}
            >
              <Text style={styles.appButtonText}>calculate</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.appButtonContainer}
              onPress={() => {
                addItem();
              }}
            >
              <Text style={styles.appButtonText}>Save</Text>
            </TouchableHighlight>
         
   
     
         <Text style={styles.red}>Discounted price is{getdiscountprice}</Text>
        
        <Text style={styles.red}>You saved {getoriginal - getdiscountprice}</Text>
  
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
      >
        <View >
        <ScrollView style={styles.scrollview}>
      {getList.map((item, index) =>
        <TouchableOpacity
          key={item.key}
          activeOpacity={0.7}
        
        >
          <View style={styles.scrollviewItem}>
            <Text style={styles.scrollviewText}>{index + 1}# original prize is {item.data.original}</Text>
            <Text style={styles.scrollviewText}>discounte Percentage is {item.data.discount}</Text>
            
            <Text style={styles.scrollviewText}>discounted is {item.data.discounted}</Text>

            
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>

            <TouchableHighlight
              style={styles.appButtonContainer}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.appButtonText}>Close History</Text>
            </TouchableHighlight>
          </View>
        
      </Modal>
      <TouchableHighlight
        style={styles.appButtonContainer}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.appButtonText}>Show History</Text>
      </TouchableHighlight>


  </View>
  
  </View>
  
  );
}


const styles = StyleSheet.create({
  appButtonContainer: {
    marginBottom:10,
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf:'flex-start',
    textTransform: 'uppercase',
    
  },

  red:{
    color: 'blue',
    fontSize: 20,
    
 backgroundColor:'lightgrey',
    
    marginTop:10
  },

  scrollviewText: {
    fontSize: 15,
    color: 'black'
  },
  scrollview: {
    backgroundColor:"lightyellow",
    paddingTop: 50,
    width: '100%',
    marginTop:100,
  
  },
  scrollviewItem: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: 'lightgrey',
    alignSelf: "center",
    padding: 10,
    margin: 5,
    width: '80%',
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    color: 'blue'
  },
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    paddingTop: 40
  },
  inputContainer: {
    paddingTop:20,
    flexDirection: "column",
    width: '90%',
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 2,
    width: '70%',
    borderRadius: 50,
    fontSize: 16,
    padding: 20,
    marginBottom:10
  }
});

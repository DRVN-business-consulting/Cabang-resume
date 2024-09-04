import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Image, ScrollView, SectionList} from 'react-native';

export default function App() {
  const [value, setValue] = React.useState('');
  const [switchValue, setSwitchValue] = React.useState('');
  const DATA = [
    {
      title: 'Work Experience',
      data: [
        'Information Systems Analyst II - COSW', 
        'Information Systems Analyst I - COSW',
        'Production Assembler',
        'Senior Debug Technician',
      ]
    },
    {
      title: 'Skills',
      data: [
        'Java', 
        'SQL',
        'CSPro',
      ]
    },
    {
      title: 'Educational Background',
      data: [
        'Bachelor of Science in Electronics Engineering - University of the East Caloocan', 
        'Quezon City Academy',
        'Diliman Preparatory School',
      ]
    }
  ];

  return (
    <SafeAreaView style={{
      width: '100%',
      height: '100%'
    }}>

  {/* <StatusBar style="auto" backgroundColor='blue'/> */}
  <ScrollView style={{
    width: '100%',
    height: '100%'

  }}>
    <View style={{
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    
    }}>
      <Image 
        source={require('./assets/mackey.png')}
        style={{ 
          width: 100, 
          height: 100, 
          // display: 'flex',
          }}/>
      <Text style={{
        // fontStyle: 'italic',
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        textTransform: 'uppercase'
      }}>Marc Ferdinand Cabang</Text>

      <Text style={{
        // fontStyle: 'italic',
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
      }}>Email: cabangmarcferdinand@gmail.com</Text>

      <Text style={{
        // fontStyle: 'italic',
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
      }}>Phone number: 09761041188</Text>
      <SectionList
      sections={DATA}
      renderSectionHeader={({section: {title}}) => (
        <Text style={{
          padding: 12,
          color: 'white',
          backgroundColor: 'blue',
          fontSize: 24,
          fontWeight: 'bold'
        }}>{title}</Text>
      )}
      renderItem={({item}) => (
        <Text style={{
          padding: 12,
          fontSize: 18,
          borderBottomWidth: 1,
          borderBottomColor: 'orange'
        }}>{item}</Text>
      )} />

</View>

      
      </ScrollView>
      </SafeAreaView>

    
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

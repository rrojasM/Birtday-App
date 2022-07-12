import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import firebase from './src/utils/firebase';
import "firebase/compat/auth";
import Auth from './src/components/Auth';
const App = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((res) => {
      setUser(res);
    });
  }, []);


  if (user === undefined) return null;

  return (
    <>
    <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.background}>
        {
          user ? <Text>Estas Logueado</Text> : <Auth />
        }
      </SafeAreaView>
    </>

  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15212b',
    height: '100%'
  }
})

export default App;

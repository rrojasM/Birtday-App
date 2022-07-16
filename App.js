import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button
} from 'react-native';
import "firebase/compat/auth";
import Auth from './src/components/Auth';
import firebase from './src/utils/firebase';
import ListBirthday from './src/components/ListBirthday';

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
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        {
          user ? <ListBirthday /> : <Auth />
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

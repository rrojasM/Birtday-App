import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'


const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const changeForm = () => {
        setIsLogin(!isLogin);
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.view}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                {
                    isLogin ? <LoginForm changeForm={changeForm} /> : <RegisterForm changeForm={changeForm} />
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1, alignItems: 'center'
    },
    logo: {
        width: '80%',
        height: 240,
        marginTop: 50,
        marginBottom: 50

    }
})

export default Auth;
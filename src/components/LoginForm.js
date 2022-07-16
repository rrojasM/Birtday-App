import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import firebase from '../utils/firebase';
import { validacion } from '../helpers/Validacion';

const LoginForm = (props) => {
    const { changeForm } = props;
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [formError, setFormError] = useState({})


    const login = () => {
        let errors = {};
        if (!formData.email || !formData.password) {
            if (!formData.email) errors.email = true;
            if (!formData.password) errors.password = true;
        } else if (!validacion(formData.email)) {
            errors.email = true;
        } else {
            firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
                .then((item) => {
                    console.log('ITEM SUCCES', item);
                })
                .catch((err) => {
                    console.log('ERROR CATCH', err);
                    setFormError({
                        email: true,
                        password: true
                    })
                })
        }
        setFormError(errors);
    }

    return (
        <>
            <TextInput
                placeholder='Correo electronico'
                placeholderTextColor='#969696'
                style={[styles.input, formError.email && styles.error]}
                onChange={(e) => {
                    setFormData({ ...formData, email: e.nativeEvent.text })
                }}
            />
            <TextInput
                placeholder='Contraseña'
                placeholderTextColor='#969696'
                secureTextEntry={true}
                style={[styles.input, formError.password && styles.error]}
                onChange={(e) => {
                    setFormData({ ...formData, password: e.nativeEvent.text })
                }}
            />

            <TouchableOpacity onPress={login}>
                <Text style={styles.btnText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <View style={styles.register}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Registrarse</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: '#fff',
        fontSize: 18
    },
    input: {
        height: 50,
        width: '80%',
        color: '#FFF',
        marginBottom: 25,
        backgroundColor: '#1E3040',
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1E3040'
    },
    register: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
        alignItems: 'center'
    },
    error: {
        borderColor: '#940C0C'
    }
})


export default LoginForm;
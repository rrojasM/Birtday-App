import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { validacion } from '../helpers/Validacion';
import firebase from '../utils/firebase';

const RegisterForm = (props) => {
    const { changeForm } = props;

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repetirPassword: ''
    });
    const [formError, setFormError] = useState({})

    const registrar = () => {
        let errors = {};
        if (!formData.email || !formData.password || !formData.repetirPassword) {
            if (!formData.email) errors.email = true;
            if (!formData.password) errors.password = true;
            if (!formData.repetirPassword) errors.repetirPassword = true;
        } else if (!validacion(formData.email)) {
            errors.email = true;
        } else if (formData.password !== formData.repetirPassword) {
            errors.password = true;
            errors.repetirPassword = true;
        } else if (formData.password.length < 6) {
            errors.password = true;
            errors.repetirPassword = true;
        } else {
            console.log('FORMULARIO CORRECTO');
            firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
                .then((item) => {
                    console.log(item);
                }).catch(err => {
                    console.log(err);
                    setFormError({
                        email: true,
                        password: true,
                        repetirPassword: true
                    })
                });
        }
        console.log('OCURRIO UN ERROR');
    }

    return (
        <>
            <TextInput
                style={[styles.input, formError.email && styles.errorInput]}
                placeholder='Correo electrónico'
                placeholderTextColor='#969696'
                keyboardType='visible-password'
                onChange={(e) => {
                    setFormData({ ...formData, email: e.nativeEvent.text })
                }}
            />
            <TextInput
                style={[styles.input, formError.password && styles.errorInput]}
                placeholder='Contraseña'
                placeholderTextColor='#969696'
                secureTextEntry={true}
                onChange={(e) => {
                    setFormData({ ...formData, password: e.nativeEvent.text })
                }}
            />
            <TextInput
                style={[styles.input, formError.repetirPassword && styles.errorInput]}
                placeholder='Repetir contraseña'
                placeholderTextColor='#969696'
                secureTextEntry={true}
                onChange={(e) => {
                    setFormData({ ...formData, repetirPassword: e.nativeEvent.text })
                }}
            />

            <TouchableOpacity onPress={registrar}>
                <Text style={styles.btnText}>Registrarte</Text>
            </TouchableOpacity>

            <View style={styles.login}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: '#fff',
        fontSize: 20
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
    login: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
        alignItems: 'center'
    },
    errorInput: {
        borderColor: '#940C0C',
    }
});

export default RegisterForm;
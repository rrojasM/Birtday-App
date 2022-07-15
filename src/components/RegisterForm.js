import { StyleSheet, Text, TouchableOpacity, TextInput, View  } from 'react-native';
import React from 'react';

const RegisterForm = (props) => {
    const { changeForm } = props;
    const registrar = () => {
        console.log('Registrar');

    }

    return (
        <>
            <TextInput
                style={styles.input}
                placeholder='Correo electrónico'
                placeholderTextColor='#969696'
                keyboardType='visible-password'
            />
            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                placeholderTextColor='#969696'
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder='Repetir contraseña'
                placeholderTextColor='#969696'
                secureTextEntry={true}
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
        marginBottom: 30,
        alignItems:'center'
    }
})

export default RegisterForm
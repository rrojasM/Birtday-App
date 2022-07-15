import { StyleSheet, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const LoginForm = (props) => {
    const { changeForm } = props;

    return (
        <>
            <Text>Login</Text>

            <TouchableOpacity onPress={changeForm}>
                <Text style={styles.btnText}>Iniciar sesión</Text>
            </TouchableOpacity>

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
    }
})


export default LoginForm;
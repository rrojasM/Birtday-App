import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {firebase} from '../utils/firebase';

const ActionBar = (props) => {
    const { setShowList, showList } = props;

    return (
        <View style={styles.viewFooter}>
            <View style={styles.viewClose}>
                <Text style={styles.text} onPress={() => firebase.auth().signOut()}>Cerrar sesión</Text>
            </View>
            <View style={styles.viewAdd}>
                <Text style={styles.text} onPress={() => { setShowList(!showList) }}>
                    {showList ? "Nueva Fecha": "Cancelar Fecha"}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginBottom: 15
    },
    viewClose: {
        backgroundColor: '#820000',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    viewAdd: {
        backgroundColor: '#1EA1F2',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    text: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center'
    }
})

export default ActionBar;
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AddBirthday from './AddBirthday';
import ActionBar from './ActionBar';
const ListBirthday = () => {
    const [showList, setShowList] = useState(true);
    return (
        <View style={styles.container}>
            {showList ? (
                <>
                    <Text>List Birthday</Text>
                    <Text>List Birthday</Text>
                    <Text>List Birthday</Text>
                </>
            ) : (
                <AddBirthday />
            )}
            <ActionBar showList={showList} setShowList={setShowList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%'
    }
});

export default ListBirthday;
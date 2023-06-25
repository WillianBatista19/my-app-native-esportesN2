import React from "react"
import { View, Text, StyleSheet} from "react-native"

export default function Title(){
    return(
        <View>
            <Text style={styles.text1}>ESPORTES REACT NATIVE</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text1: {
      color: 'blue',
      fontSize: 18,
    },
});
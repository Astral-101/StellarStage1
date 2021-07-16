import React, { Component } from 'react';
import { TextBase, View, StyleSheet, Text } from 'react-native';

export default class StarMap extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                    Star Map Screen
                </Text>
            </View>
        );
    }
}

    const styles = StyleSheet.create({
        container : {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#EEE"
        }
    })


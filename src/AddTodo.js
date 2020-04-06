import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export const AddTodo = props => {
  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input} />
      <Button color='#4caf50' title='Add' />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  input: {
    width: '90%',
    borderColor: '#4caf50',
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 2,
    marginRight: 5
  }
})
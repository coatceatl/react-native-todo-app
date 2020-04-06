import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    if (!value) {
      Alert.alert(`field can't be empty`)
    } else {
      onSubmit(value)
      setValue('')
    }
  }
  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input} value={value} onChangeText={text => setValue(text)} />
      <Button color='#4caf50' title='Add' onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: 15
  },
  input: {
    width: '85%',
    borderColor: '#4caf50',
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 2,
    marginRight: 8
  }
})
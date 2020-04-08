import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export const TodoScreen = ({ toBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title='Back' onPress={toBack} color='#4caf50' />
    </View>
  )
}

const styles = StyleSheet.create({})
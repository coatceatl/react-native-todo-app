import React, { useState } from 'react'
import { View, Modal, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const EditTodo = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value)

  const saveHandler = () => {
    if (!title) {
      Alert.alert('Error', `The title can't be empty`)
    } else {
      onSave(title)
    }
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          autoFocus
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={() => onCancel()} color='#f50057' />
          </View>
          <View style={styles.button}>
            <Button
              title='Save'
              color='#4caf50'
              onPress={saveHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 10,
    borderBottomColor: '#4caf50',
    borderBottomWidth: 2,
    width: '80%',
    fontSize: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '80%'
  },
  button: {
    width: '40%',
    borderRadius: 4
  }
})
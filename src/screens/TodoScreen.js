import React, { useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { EditTodo } from '../components/EditTodo'

export const TodoScreen = ({ toBack, todo, removeTodo, onSave }) => {
  const [modal, setModal] = useState(false)

  const saveHandler = title => {
    onSave(todo.id, title)
    setModal(false)
  }

  return (
    <View>
      <EditTodo
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <View style={styles.wrapper}>
        <Text style={styles.title}>{todo.title}</Text>
        <Entypo name='dots-three-vertical' size={20} color='#4caf50' onPress={() => setModal(true)} />
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title='Back' onPress={toBack} color='#4caf50' />
        </View>
        <View style={styles.button}>
          <Button style={styles.button}
            title='Delete'
            onPress={() => removeTodo(todo.id)}
            color='#f50057' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '45%',
    borderColor: 4,
    marginTop: 15
  },
  title: {
    fontSize: 20
  },
  wrapper: {
    padding: 20,
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
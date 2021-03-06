import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {
  return (
    <View style={styles.wrap}>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        data={todos}
        renderItem={
          ({ item }) => (
            <Todo todo={item}
              onRemove={removeTodo}
              onOpen={openTodo}
            />
          )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    height: '95%',
    paddingBottom: 30
  }
})
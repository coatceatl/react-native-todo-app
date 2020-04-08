import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    { id: '1', title: 'First task' },
    { id: '2', title: 'Second task' },
  ])

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ])
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
      'Are you sure?',
      `${todo.title} will be permanently deleted.`,
      [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        },
      ],
      { cancelable: false },
    );
  }

  let content = <MainScreen
    todos={todos}
    addTodo={addTodo}
    removeTodo={removeTodo}
    openTodo={(id) => { setTodoId(id) }}
  />
  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen
      toBack={() => setTodoId(null)}
      todo={selectedTodo}
      removeTodo={removeTodo}
    />
  }

  return (
    <View>
      <Navbar title='ToDo App' />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30
  }
});

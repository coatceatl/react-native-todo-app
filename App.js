import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todos, setTodos] = useState([])
  const [todoId, setTodoId] = useState(null)

  let content = <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
  if (todoId) {
    content = <TodoScreen />
  }

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
    setTodos(prev => prev.filter(todo => todo.id !== id))
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

import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: '',
      todos: [
        { id: 1, text: 'Read the News' },
        { id: 2, text: 'Play golf' },
        { id: 3, text: 'Drink a beer' }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, paddingLeft: 10, paddingRight: 10 }}
          ref={(i) => this._input = i}
          placeholder="Add a todo"
          onChangeText={(text) => {
            this.setState({ newTodoText: text });
          }}
        />
        <Button
          onPress={() => {
            const nextId = this.state.todos.reduce((a, b) => a.id > b.id ? a.id : b.id) + 1;
            this.setState({ 
              newTodoText: '',
              todos: this.state.todos.concat({ id: nextId, text: this.state.newTodoText }),
            })
            this._input.clear()
          }}
          title="Add Todo"
          color="#841584"
          accessibilityLabel="Add a todo"
          disabled={this.state.newTodoText === ''}
        />
        <FlatList
          data={this.state.todos}
          renderItem={({item}) => <Text key={item.id} style={styles.item}>{item.text}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

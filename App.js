// @flow
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

type Props = {};
type Todo = {
  id: number,
  text: string
};
type State = {
  newTodoText: string,
  todos: Array<Todo>
};
export default class App extends React.Component<Props, State> {
  state: State
  _input: ?TextInput

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
            const nextId = this.state.todos.reduce((max_id, i) => { return max_id > i.id ? max_id : i.id }, 0) + 1;
            this.setState({ 
              newTodoText: '',
              todos: this.state.todos.concat({ id: nextId, text: this.state.newTodoText }),
            })
            this._input && this._input.clear()
          }}
          title="Add Todo"
          color="#841584"
          accessibilityLabel="Add a todo"
          disabled={this.state.newTodoText === ''}
        />
        <FlatList
          data={this.state.todos}
          renderItem={({ item }) => <Text key={item.id} style={styles.item}>{item.text}</Text>}
          keyExtractor={(item) => item.id.toString()}
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

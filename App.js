import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos : [
      {key: 'Read the News'},
      {key: 'Play golf'},
      {key: 'Drink a beer'}
    ]};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          ref={(i) => this._input = i}
          placeholder="Add a todo"
          onChangeText={(text) => {
            this.setState({ newTodo: { key: text } });
          }}
        />
        <Button
          onPress={() => {
            this.setState({ todos: this.state.todos.concat(this.state.newTodo) })
            this._input.clear()
          }}
          title="Add Todo"
          color="#841584"
          accessibilityLabel="Add a todo"
        />
        <FlatList
          data={this.state.todos}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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

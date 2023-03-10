import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskList = ({ data }) => {
  return(
    <View>
      <Text> {data.key} {data.nome} </Text>
    </View>
  );
}

export default TaskList;
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

import styles from './styles';

export default function HomeScreen({navigation}) {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const onHeaderLinkPress = () => {
    navigation.navigate('AboutScreen')};
  
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View>
      <br></br>
      <Text style={styles.screen}>
             Hai Manjunath, Welcome To Home Screen
              </Text>
             <br></br>
    <View style={styles.screen}>
      
    <Button title="About An Application" onPress={onHeaderLinkPress} style={styles.headerLink}>
      About An Application</Button>
      <br></br>

      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <br></br>
     
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View></View>
    
  );
}


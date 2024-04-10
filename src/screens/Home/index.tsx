import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./style";
import { useState } from "react";

export function Home () {
  const [participants, setParticipants] = useState<string[]>([]);
  const [nameValue, setNameValue] = useState('');

  function handleParticipantAdd(name: string) {
    if (participants.includes(name)) {
      return Alert.alert("Participant exists", "There is already a participant in the list with that name.");
    }

    setParticipants(prevState => [...prevState, name]);
    setNameValue("")
   }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remove", `Remove the participant ${name}?`, [
      {
        text: 'Yes',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Cooking Class 101
      </Text>

      <Text style={styles.eventDate}>
        Wednesday, April, 10th, 2024
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant name"
          placeholderTextColor="#6B6B6B"
          onChangeText={setNameValue}
          value={nameValue}
        />

        <TouchableOpacity style={styles.button} onPress={() =>handleParticipantAdd(nameValue)}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Has no one arrived at the event yet? Add attendees to your attendance list.
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
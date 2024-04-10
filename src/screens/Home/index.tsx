import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./style";

export function Home () {
  const participants = ['Ana Vargas', 'Chewie Bacca', 'Jennifer Takagi'];

  function handleParticipantAdd() {
    console.log("handleParticipantAdd");
  }

  function handleParticipantRemove(name: string) {
    console.log(`handleParticipantRemove: ${name}`);
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
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
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
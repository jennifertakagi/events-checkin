import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./style";

export function Home () {

  function handleParticipantAdd() {
    console.log("handleParticipantAdd");
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

      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}

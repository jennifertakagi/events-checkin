import { Text, TextInput, View } from "react-native";

import { styles } from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Cooking Class 101
      </Text>

      <Text style={styles.eventDate}>
        Wednesday, April, 10th, 2024
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Participant name"
        placeholderTextColor="#6B6B6B"
      />
    </View>
  )
}

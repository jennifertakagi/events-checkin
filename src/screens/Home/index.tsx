import { Text, View } from "react-native";

import { styles } from "./style";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Cooking Class 101
      </Text>

      <Text style={styles.eventDate}>
        Wednesday, April, 10th, 2024
      </Text>
    </View>
  )
}
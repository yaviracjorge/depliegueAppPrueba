import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../styles/themeProvider";

export default function Screen2() {
  const { theme } = useTheme();
  const router = useRouter();
  const { name, age } = useLocalSearchParams();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>
        Pantalla 2 {name}, {age} años
      </Text>
      <Pressable
        onPress={() => router.back()}
        style={{
          backgroundColor: theme.button.background,
        }}
      >
        <Text style={{ color: theme.button.text }}>Volver a la Pantalla 1</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

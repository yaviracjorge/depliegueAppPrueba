import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../styles/themeProvider";

export default function Conversor() {
  const { theme, switchTheme } = useTheme();
  const router = useRouter();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text
        style={[
          styles.font,
          { color: theme.text, fontSize: theme.fonts.large },
        ]}
      >
        CONVERSOR
      </Text>
      <View style={{ padding: 20 }}>
        <Text style={{ color: theme.text, fontSize: theme.fonts.medium }}>
          De METROS (m) a CENTIMETROS(cm)
        </Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: theme.button.background,
            paddingHorizontal: 40,
            paddingVertical: 12,
            borderRadius: 8,
            marginTop: 20,
          },

          pressed && {
            opacity: 0.8,
          },
        ]}
        onPress={() => router.push("./conversor")}
      >
        <Text
          style={{
            color: theme.button.text,
            fontSize: theme.fonts.medium,
            fontWeight: "600",
          }}
        >
          INICIAR
        </Text>
      </Pressable>
      <Pressable
        onPress={switchTheme}
        style={{
          backgroundColor: theme.button.background,
        }}
      >
        <Text style={{ color: theme.button.text }}>Cambiar Tema</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    fontWeight: "bold",
  },
});

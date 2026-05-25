import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useTheme } from "../../styles/themeProvider";

export default function Conversor() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);

  const convertir = () => {
    if (!value) {
      Alert.alert("Error", "Por favor ingrese un valor en metros");
      return;
    }
    const metros = parseFloat(value);
    const centimetros = metros * 100;
    setResult(centimetros);
  };
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text
        style={[
          styles.font,
          { color: theme.text, fontSize: theme.fonts.large, padding: 20 },
        ]}
      >
        RESULTADO: {result} cm
      </Text>
      <View>
        <TextInput
          placeholder="Ingrese metros"
          keyboardType="numeric"
          onChangeText={setValue}
          placeholderTextColor={theme.mutedText}
          style={[
            styles.backInput,
            {
              borderColor: theme.accent,
              backgroundColor: theme.surface,
              color: theme.text,
              fontSize: theme.fonts.medium,
            },
          ]}
        />
      </View>
      <View></View>
      <View>
        <Pressable
          onPress={convertir}
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
        >
          <Text
            style={{
              color: theme.button.text,
              fontSize: theme.fonts.medium,
              fontWeight: "600",
            }}
          >
            Calcular
          </Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            {
              backgroundColor: theme.button.background,
              paddingHorizontal: 40,
              paddingVertical: 12,
              borderRadius: 8,
              marginTop: 40,
            },

            pressed && {
              opacity: 0.8,
            },
          ]}
        >
          <Text
            style={{
              color: theme.button.text,
              fontSize: theme.fonts.medium,
              fontWeight: "600",
            }}
          >
            SALIR
          </Text>
        </Pressable>
      </View>
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
  backInput: {
    height: 50,
    width: 220,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 3,
    textAlign: "center",
  },
});

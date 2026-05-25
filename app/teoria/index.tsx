import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../styles/themeProvider";

type DataType = {
  name: string;
  age: number;
};

export default function Screen1() {
  const [count, setCount] = useState(0);
  const sumar = () => {
    setCount((prev) => prev + 1);
  };

  const router = useRouter();
  const { theme, switchTheme } = useTheme();
  const data: DataType = { name: "John Doe", age: 30 };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Pantalla 1</Text>
      <Text style={{ color: theme.text }}>Contador: {count}</Text>

      <Pressable
        onPress={sumar}
        style={{
          backgroundColor: theme.button.background,
        }}
      >
        <Text style={{ color: theme.button.text }}>Sumar</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "./screen2",
            params: {
              name: data.name,
              age: data.age.toString(),
            },
          })
        }
        style={{
          backgroundColor: theme.button.background,
        }}
      >
        <Text style={{ color: theme.button.text }}>Ir a la pantalla 2</Text>
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
  },
});

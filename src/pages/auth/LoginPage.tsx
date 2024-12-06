import {
  Button,
  Center,
  Paper,
  PasswordInput,
  TextInput,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export function LoginPage() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Center
      w="100%"
      h="100vh"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Paper
        p={30}
        py={50}
        mb={50}
        miw={400}
        component="form"
        onSubmit={form.onSubmit((values) => {
          console.log(values);
        })}
      >
        {/* Title Section */}
        <Text
          ta="center"
          style={{
            fontSize: "24px", // Slightly larger font size
            fontWeight: 700, // Bolder title
            marginBottom: "20px", // Margin below title
            color: "#1D4ED8", // Adjusted color to match the image
          }}
        >
          Login
        </Text>

        {/* Employee ID Input */}
        <TextInput
          mt={20}
          withAsterisk
          label="Email"
          placeholder="Please enter your email"
          type="email"
          autoFocus
          {...form.getInputProps("email")}
          size="md" // Adjusted size for input fields
        />

        {/* Password Input */}
        <PasswordInput
          withAsterisk
          mt="md"
          label="Password"
          placeholder="Please enter your password"
          {...form.getInputProps("password")}
          size="md" // Adjusted size for input fields
        />

        {/* Login Button */}
        <Button
          fullWidth
          mt="xl"
          type="submit"
          size="md"
          style={{
            backgroundColor: "#2563EB", // Blue color matching the image
            fontWeight: 600, // Bolder button text
            borderRadius: "8px", // Rounded corners for the button
          }}
        >
          Login
        </Button>
      </Paper>
    </Center>
  );
}

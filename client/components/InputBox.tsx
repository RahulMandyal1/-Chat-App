import React, { useEffect, useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TextInputProps,
} from "react-native";
import {
  Controller,
  Control,
  RegisterOptions,
  FieldValues,
  FieldError,
} from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface InputBoxProps extends TextInputProps {
  control: Control<FieldValues>;
  name: string;
  rules?: RegisterOptions;
  error?: FieldError;
  label?: string;
  placeholder?: string;
  inputType?: string;
}

const InputBox = ({
  control,
  name,
  rules,
  error,
  label,
  placeholder,
  keyboardType,
  autoCapitalize = "none",
  inputType,
  ...rest
}: InputBoxProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordInput = useMemo((): boolean => {
    if (!inputType) return false;
    return inputType === "password";
  }, [inputType]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputWrapper}>
            <TextInput
              style={[
                styles.input,
                error && styles.inputError,
                { paddingRight: isPasswordInput ? 45 : 8 },
              ]}
              placeholder={placeholder}
              placeholderTextColor="#9CA3AF"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              secureTextEntry={!showPassword}
              {...rest}
            />

            {isPasswordInput && (
              <View style={styles.eyeIconContainer}>
                <MaterialCommunityIcons
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#aaa"
                  style={styles.icon}
                  onPress={toggleShowPassword}
                />
              </View>
            )}

            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 6,
  },
  inputWrapper: {
    width: "100%",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: "#F9FAFB",
    fontSize: 16,
  },
  inputError: {
    borderColor: "#EF4444",
    backgroundColor: "#FEF2F2",
  },
  errorText: {
    color: "#EF4444",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  eyeIconContainer: {
    position: "absolute",

    right: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {},
});

export default InputBox;

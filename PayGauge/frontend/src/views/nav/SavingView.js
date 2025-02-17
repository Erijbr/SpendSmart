import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Colors from "../../constants/Colors";
import API_LINKS from "../../utils/API_LINKS";

const SavingView = () => {
  const navigation = useNavigation();
  const [targetAmount, setTargetAmount] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [currentSavings, setCurrentSavings] = useState(0);
  const [loading, setLoading] = useState(false);
  const [savingPlan, setSavingPlan] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const userId = await AsyncStorage.getItem('userId');
      const response = await axios.get(`${API_LINKS.USER}/user/${userId}`);
      setCurrentSavings(response.data.savings);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch user data.");
    } finally {
      setLoading(false);
    }
  };

  const calculateSavingPlan = () => {
    if (!targetAmount || !targetDate) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const targetDateObj = new Date(targetDate);
    const today = new Date();
    const remainingDays = Math.ceil((targetDateObj - today) / (1000 * 3600 * 24));

    if (remainingDays <= 0) {
      Alert.alert("Error", "Target date must be in the future.");
      return;
    }

    const requiredSavings = targetAmount - currentSavings;
    const monthlySavings = requiredSavings / (remainingDays / 30);

    setSavingPlan({ requiredSavings, monthlySavings, remainingDays });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Savings Plan</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Target Amount</Text>
        <TextInput
          style={[styles.input, styles.inputTextWhite]}
          placeholder="Enter target amount"
          placeholderTextColor={Colors.DARK_GRAY}
          keyboardType="numeric"
          value={targetAmount}
          onChangeText={setTargetAmount}
        />
        
        <Text style={styles.label}>Target Date</Text>
        <TextInput
          style={[styles.input, styles.inputTextWhite]}
          placeholder="YYYY-MM-DD"
          placeholderTextColor={Colors.DARK_GRAY}
          value={targetDate}
          onChangeText={setTargetDate}
        />
        
        <TouchableOpacity style={styles.button} onPress={calculateSavingPlan}>
          <Text style={styles.buttonText}>Calculate Plan</Text>
        </TouchableOpacity>
        
        {loading && <ProgressBar indeterminate color={Colors.BLUE} style={{ marginTop: 20 }} />}

        {savingPlan && (
          <View style={styles.planDetails}>
            <Text style={styles.planText}>Total Savings Needed: USD {savingPlan.requiredSavings.toFixed(2)}</Text>
            <Text style={styles.planText}>Recommended Monthly Savings: USD {savingPlan.monthlySavings.toFixed(2)}</Text>
            <Text style={styles.planText}>Remaining Days: {savingPlan.remainingDays}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
    backgroundColor: Colors.DARK,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 15,
  },
  card: {
    backgroundColor: Colors.LIGHT,
    borderRadius: 8,
    padding: 20,
  },
  label: {
    fontSize: 16,
     color: "white",
    marginBottom: 5,
  },
  input: {
    backgroundColor: Colors.WHITISH,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.BLUE,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  planDetails: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 8,
  },
  planText: {
    fontSize: 16,
    color: Colors.DARK,
    marginBottom: 8,
  },
});

export default SavingView;

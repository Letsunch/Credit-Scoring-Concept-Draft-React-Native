import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const ConsolidatedProgressBar = ({ data }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newProgress = progress + 5;
      setProgress(newProgress <= 100 ? newProgress : 100);
    }, 5000); 

    return () => clearInterval(interval); 

  }, [progress]);

  const totalValue = data.reduce((acc, item) => acc + item.value, 0);
  const totalLimit = data.length * 100; 
  const totalPercentage = (totalValue / totalLimit) * 100;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Financial Overview</Text>
      </View>

      <View style={styles.progressBarContainer}>
        <Text style={styles.label}>Consolidated Progress</Text>
        <View style={styles.progressBar}>
          <View style={{ ...styles.progress, width: `${progress > totalPercentage ? totalPercentage : progress}%` }} />
        </View>
        <Text style={styles.progressText}>{`${progress.toFixed(2)}%`}</Text>
      </View>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsLabel}>Financial Literacy Tips:</Text>
        <Text style={styles.tip}>
          - Regularly check your credit report to identify any errors or discrepancies.{' '}
        </Text>
        <Text style={styles.tip}>
          - Pay your bills on time to establish a positive payment history.{' '}
        </Text>
        <Text style={styles.tip}>
          - Keep your credit card balances low in relation to your credit limit.{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  progressBarContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'blue',
  },
  progressBar: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: 'lightblue', 
  },
  progressText: {
    marginTop: 5,
    fontSize: 16,
    color: 'blue',
  },
  tipsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  tipsLabel: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
  },
  tip: {
    marginBottom: 5,
    fontSize: 14,
    textAlign: 'justify',
    color: '#666666',
  },
});

const Screen3B = () => {
  const consolidatedData = [
    { label: 'Balance', value: 80 },
    { label: 'Availability', value: 65 },
    { label: 'Limit', value: 90 },
  ];

  return (
    <View style={styles.container}>
      <ConsolidatedProgressBar data={consolidatedData} />
    </View>
  );
};

export default Screen3B;

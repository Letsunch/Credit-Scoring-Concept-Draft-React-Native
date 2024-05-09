import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle, G, Path, Rect} from 'react-native-svg';

const Screen1 = () => {

  const data = [
  { value: 70, label: 'Income', color: 'green' },
  { value: 60, label: 'Expense', color: 'red' },
  { value: 80, label: 'Savings', color: 'blue' },
];

  const monthlyExpenditureData = [50, 80, 60, 70, 90, 75, 65, 80, 55, 60, 75, 70];


const PieChart = ({ data, width, height, innerRadius }) => {
  const total = data.reduce((acc, d) => acc + d.value, 0);
  let startAngle = 0;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <G transform={`translate(${width / 2}, ${height / 2})`}>
        {data.map((item, index) => {
          const angle = (item.value / total) * 360;
          const endAngle = startAngle + angle;
          const path = `
            M ${innerRadius * Math.cos((startAngle * Math.PI) / 180)} ${innerRadius *
            Math.sin((startAngle * Math.PI) / 180)}
            A ${innerRadius} ${innerRadius} 0 ${angle > 180 ? 1 : 0} 1 ${
            innerRadius * Math.cos((endAngle * Math.PI) / 180)
          } ${innerRadius * Math.sin((endAngle * Math.PI) / 180)}
            L 0 0
          `;
          startAngle += angle;

          return <Path key={index} d={path} fill={item.color} />;
        })}
      </G>
    </Svg>
  );
};

const BarGraph = ({ data, width, height }) => {
    const barWidth = width / data.length;
    const maxDataValue = Math.max(...data);
    const scaleY = height / maxDataValue;

    return (
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {data.map((value, index) => (
          <Rect
          style={{marginLeft:100}}
            key={index}
            x={index * barWidth}
            y={height - value * scaleY}
            width={barWidth}
            height={value * scaleY}
            fill="blue"
          />
        ))}
      </Svg>
    );
  };
  
  return (
    <View style={styles.container}>
          <Text style={{ fontWeight: 'bold', fontSize: 25, paddingBottom: 20 }}> Spending Patterns</Text>
    <LinearGradient
        colors={['lightblue', 'white']} 
        style={styles.gradient}
        start={{ x: 0, y: 1 }} 
        end={{ x: 0, y: 0 }} 
      >
      
        <View style={{ alignItems: 'center', marginTop: 5, marginBottom:10 }}>
      <PieChart data={data} width={200} height={200} innerRadius={60} />
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        {data.map((item, index) => (
          <View key={index} style={{ marginLeft: 20 }}>
            <View style={{ width: 20, height: 20, backgroundColor: item.color }} />
            <Text>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
    
      <Text style={{ fontWeight: 'bold', fontSize: 25, }}>Monthly Expenditure</Text>
    <BarGraph data={monthlyExpenditureData} width={300} height={100} />


    <View>
    <Text style={{ fontWeight: 'bold', fontSize: 25, paddingBottom: 20 , marginLeft:100, marginTop:30}}>ChatBot</Text>
    <Text>A financial literacy chatbot offers a myriad of benefits to users, enhancing their understanding and management of personal finances. One key advantage lies in its ability to provide personalized financial guidance. Through tailored advice based on individual financial situations, users can make informed decisions aligned with their specific goals. The chatbots 24/7 availability ensures that users can access financial information and guidance whenever needed, promoting continuous</Text>
  <TouchableOpacity >
  <Text style={{ fontWeight: 'bold', fontSize: 25, marginLeft:50}}> LINK TO CHATBOT </Text>
  </TouchableOpacity>
    </View>
      </LinearGradient>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});

export default Screen1;
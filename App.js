import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      select: 0,
    };
  }

  renderStep0() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>じゃんけん！</Text>
        <Image source={require('./janken.png')} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({step: 1, select: 1})}
        >
          <Text style={styles.buttonText}>グー</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({step: 1, select: 3})}
        >
          <Text style={styles.buttonText}>チョキ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({step: 1, select: 2})}
        >
          <Text style={styles.buttonText}>パー</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderStep1() {
    const min = 0;
    const max = 2;
    const rand = Math.floor( Math.random() * (max + 1 - min) ) + min;

    let msg;
    if (rand === this.state.select - 1) {
      msg = "勝ち！";
    } else if (rand === this.state.select || (rand === 0 && this.state.select === 3)) {
      msg = "あいこ！";
    } else {
      msg = "負け！";
    }

    let img;
    if (rand === 0) {
      img = <Image source={require('./janken_choki.png')} />;
    } else if (rand === 1) {
      img = <Image source={require('./janken_gu.png')} />;
    } else {
      img = <Image source={require('./janken_pa.png')} />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{msg}</Text>
        {img}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({step: 0, select: 0})}
        >
          <Text style={styles.buttonText}>戻る</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    if (this.state.step === 0) {
      return this.renderStep0();
    } else {
      return this.renderStep1();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#bf0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

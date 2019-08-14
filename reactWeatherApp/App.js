import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Icon,
  Picker,
  Image,
  TextInput,
  ActivityIndicator,
  FlatList,
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';

const data_json = require('./city_list.json');
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      data: '',
      weather: '',
    };
  }
  fetchData = value => {
    this.setState({ name: value });
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${
        this.state.name
      }&APPID=992619451504426b6920c762daa6ac96`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson.main,
          name: responseJson.name,
          weather: responseJson.weather[0],
        });
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Weather App</Text>
        <Text style={styles.statistics}>Weather Statistics</Text>
        <TouchableOpacity
          onPress={this._onPressButton}
          style={styles.touchableopacity}>
          <Image
            source={require('./icon-facebook-square-png.png')}
            style={styles.logo}
          />
          <Text style={{ color: 'white', fontSize: 17 }}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.textinput}
          placeholder="Input your city"
          placeholderTextColor="#2d5291"
          onChangeText={name => {
            this.setState({ name });
          }}
          value={`${this.state.name}`}
        />
        <Picker
          selectedValue={`${this.state.name}`}
          style={styles.pickers}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({ name: itemValue }), this.fetchData(itemValue);
          }}>
          {data_json.map(item => {
            return (
              <Picker.Item label={item.name} value={item.name} key={item.id} />
            );
          })}
        </Picker>
        <ImageBackground
          source={{
            uri:
              'http://openweathermap.org/img/w/' +
              this.state.weather.icon +
              '.png',
          }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.infotext}>
            City: {this.state.name}
            {'\n\n'}
          </Text>
          <Text style={styles.infotext}>
            Temperature: {this.state.data.temp}
          </Text>
          <Text style={styles.infotext}>
            Pressure: {this.state.data.pressure}
          </Text>
          <Text style={styles.infotext}>
            Humidity: {this.state.data.humidity}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#3399FF',
    width: '100%',
    height: 40,
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 10,
  },
  statistics: {
    margin: 18,
    fontSize: 20,
  },
  touchableopacity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2d5291',
    padding: 10,
    borderRadius: 3,
  },
  pickers: {
    width: 200,
    height: 100,
    marginTop: 30,
  },
  textinput: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 50,
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  logo: {
    width: 25,
    height: 25,
    borderRadius: 2,
    marginRight: 10,
  },
  info: {
    marginTop: 200,
  },
  infotext: {
    fontSize: 18,
  },
  image: {
    width: 100,
    position: 'absolute',
  },
});

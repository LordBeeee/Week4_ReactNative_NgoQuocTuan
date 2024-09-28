import { Text, SafeAreaView, StyleSheet,Image ,View,Button,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <View style={style.bg_container}>
      <View style={style.flex_1}>
        <Image
          source={require('./assets/book.png')}
          style={style.img_book}
        />
        <View style={style.content}>
          <Text style={style.text_1}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={style.text_2}>Cung cấp bởi Tiki Trading</Text>
          <Text style={style.text_3}>141.800 đ</Text>
          <Text style={style.text_4}>141.800 đ</Text>
          <View style={style.flex_row_2}  >
            <TouchableOpacity
              style={style.buttontru}
              activeOpacity={0.7}
              onPress={() => {
                setCount(count-1)
              }}
            >
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{marginLeft:5,marginTop:-1}}>{`${count}`}</Text>
            <TouchableOpacity
              style={style.buttoncong}
              activeOpacity={0.7}
              onPress={() => {
                setCount(count+1)
              }}
            >
              <Text>+</Text>
            </TouchableOpacity>
            <Text style={style.text_mua}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View style={style.flex_2}>
        <Text>Mã giảm giá đã lưu</Text>
      </View>
      <View style={style.flex_3}></View>
      <View style={style.flex_4}></View>
      <View style={style.flex_5}></View>
    </View>
  );
}

const style = StyleSheet.create({
  bg_container: {
    height:640,
    width:360,
    flexDirection:'column',
    flex:'1'
  },
  flex_1:{
    flexDirection:'row',
    flex:'2',
    backgroundColor:'red'
  },
  flex_2:{
    flexDirection:'row',
    flex:'2',
    // backgroundColor:'blue'
  },
  flex_3:{
    flexDirection:'row',
    flex:'1',
    backgroundColor:'red'
  },
  flex_4:{
    flexDirection:'row',
    flex:'1',
    backgroundColor:'blue'
  },
  flex_5:{
    flexDirection:'row',
    flex:'2',
    backgroundColor:'red'
  },
  img_book:{
    marginLeft:13,
    marginTop:14.
  },
  content:{
    height:140,
  },
  flex_row_2:{
    flexDirection:'row',
    flex:'1',
    marginTop:10
  },
  text_1:{
    marginTop:14,
    marginLeft:30,
    fontSize:12,
    fontWeight:700,
    fontFamily:'roboto'
  },
  text_2:{
    marginTop:10,
    marginLeft:30,
    fontSize:12,
    fontWeight:700,
    fontFamily:'roboto'
  },
  text_3:{
    marginTop:10,
    marginLeft:30,
    fontSize:18,
    fontWeight:700,
    fontFamily:'roboto',
    color:'#EE0D0D',
  },
  text_4:{
    marginTop:10,
    marginLeft:30,
    fontSize:12,
    fontWeight:700,
    fontFamily:'roboto',
    color:'#808080',
  },
  buttontru: {
    width: 14,
    height: 16,
    marginLeft:30,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttoncong: {
    width: 14,
    height: 16,
    marginLeft:5,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text_mua:{
    marginLeft:100,
    color:'#134FEC',
    fontSize:12,
  },
  
})
export default App;


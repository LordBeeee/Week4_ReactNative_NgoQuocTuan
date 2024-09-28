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
        <View style={style.row}>
          <Text style={style.text_giamgia}>Mã giảm giá đã lưu</Text>
          <Text style={style.text_5}>Xem tại đây</Text>
        </View>
        <View style={style.row}>
          <TouchableOpacity style={style.button_1}>
            <View style={style.row}>
              <Image source={require('./assets/yellow_block.png')} style={style.img_folder}/>
              <Text style={style.buttonText_1}>Mã giảm giá</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.button_2}>
              <Text style={style.buttonText_2}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.flex_3}>
        <View style={style.row_white}>
          <Text style={style.text_6}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={style.text_7}>Nhập tại đây?</Text>
        </View>
      </View>
      <View style={style.flex_4}>
        <View style={style.row_white}>
          <Text style={style.text_8}>Tạm tính</Text>
          <Text style={style.text_9}>141.800 đ</Text>
        </View>
      </View>
      <View style={style.flex_5}>
        <View style={style.row_white_1}>
          <Text style={style.text_10}>Thành tiền</Text>
          <Text style={style.text_11}>141.800 đ</Text>
        </View>
        <View style={style.bg_white}>
          <TouchableOpacity style={style.button_3}>
              <Text style={style.buttonText_3}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  row:{
    flexDirection:'row',
  },
  row_white:{
    flexDirection:'row',
    backgroundColor:'#fff',
    height:50,
    marginTop:13,
    width:360,
  },
  flex_1:{
    flexDirection:'row',
    flex:'2',
    // backgroundColor:'red'
  },
  flex_2:{
    flexDirection:'column',
    flex:'2',
    // backgroundColor:'blue'
  },
  flex_3:{
    flexDirection:'column',
    flex:'1',
    backgroundColor:'#C4C4C4'
  },
  flex_4:{
    flexDirection:'row',
    flex:'1',
    backgroundColor:'#C4C4C4'
  },
  flex_5:{
    flexDirection:'column',
    flex:'3',
    backgroundColor:'#C4C4C4'
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
    marginLeft:80,
    color:'#134FEC',
    fontSize:12,
  },
  text_giamgia:{
    marginLeft:13,
    marginTop:20,
    fontWeight:700
  },
  text_5:{
    fontSize:12,
    color:'#134FEC',
    marginTop:21,
    marginLeft:18,
  },
  button_1: {
    width: 208,
    height: 45,
    marginLeft:15,
    marginTop:40,
    // backgroundColor: 'yellow',
    borderColor:'#808080',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  button_2: {
    width: 99,
    height: 45,
    marginLeft:5,
    marginTop:40,
    backgroundColor: '#0A5EB7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  img_folder:{
    marginTop:5,
    marginRight:10,
    marginLeft:-40,
  },
  buttonText_1:{
    fontWeight:700,
    fontSize:18,
  },
  buttonText_2:{
    fontWeight:700,
    fontSize:20,
    color:'#fff'
  },
  text_6:{
    fontSize:12,
    fontWeight:700,
    marginLeft:13,
    marginTop:18,
  },
  text_7:{
    fontSize:12,
    color:'#134FEC',
    marginLeft:5,
    marginTop:18,
  },
  text_8:{
    fontSize:18,
    fontWeight:700,
    fontFamily:'Roboto',
    marginLeft:13,
    marginTop:10
  },
  text_9:{
    fontSize:18,
    fontWeight:700,
    fontFamily:'Roboto',
    color:'#EE0D0D',
    marginTop:10,
    marginLeft:160,
  },
  text_10:{
    fontSize:18,
    fontWeight:700,
    fontFamily:'Roboto',
    color:'#808080',
    marginLeft:13,
    marginTop:10
  },
  text_11:{
    fontSize:18,
    fontWeight:700,
    fontFamily:'Roboto',
    color:'#EE0D0D',
    marginTop:10,
    marginLeft:145,
  },
  button_3: {
    width: 331,
    height: 45,
    marginLeft:10,
    // marginTop:40,
    backgroundColor: '#E53935',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText_3:{
    fontWeight:700,
    fontSize:20,
    color:'#fff'
  },
  row_white_1:{
    flexDirection:'row',
    backgroundColor:'#fff',
    height:50,
    marginTop:90,
    width:360,
  },
  bg_white:{
    backgroundColor:'#fff',
    height:65
  }
})
export default App;


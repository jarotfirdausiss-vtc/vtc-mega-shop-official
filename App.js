import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

export default function App(){
  const wa='6283878502333';
  const order=()=>{
    Linking.openURL(`https://wa.me/${wa}?text=Halo%20VTC%20Shop%20Resmi%20Mau%20Order%20Bosku`);
  };
  return(
    <View style={s.bg}>
      <Text style={s.title}>VTC MEGA SHOP RESMI</Text>
      <Text style={s.sub}>Shopee Style • WA 083878502333</Text>
      <Text style={s.flash}>⚡ FLASH SALE 50% HARI INI</Text>
      <TouchableOpacity style={s.btn} onPress={order}>
        <Text style={s.btnT}>ORDER VIA WHATSAPP</Text>
      </TouchableOpacity>
      <Text style={s.ok}>✅ Ready Download Umum</Text>
    </View>
  );
}

const s=StyleSheet.create({
  bg:{flex:1,backgroundColor:'#ee4d2d',alignItems:'center',justifyContent:'center',padding:20},
  title:{color:'#fff',fontSize:24,fontWeight:'900',textAlign:'center'},
  sub:{color:'#ffebcc',marginTop:10,fontSize:14},
  flash:{color:'#ffe600',fontWeight:'bold',marginTop:15,backgroundColor:'#000',padding:8,borderRadius:5},
  btn:{backgroundColor:'#000',padding:16,borderRadius:12,marginTop:25,width:'100%',alignItems:'center'},
  btnT:{color:'#fff',fontWeight:'900',fontSize:16},
  ok:{color:'#fff',marginTop:25,fontSize:12}
});

import { StatusBar } from 'expo-status-bar';
import React, { createElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as RN from 'react-native';
import { DATA_DESTAQUE } from '../data/data'
import DataJson from '../data/dataJson.json'
import RenderCard from '../data/RenderData'
import DynamicComponent from "react-native-dynamic-render";
import axios from "axios"

export default function TextTest() {
  let WelcomeText = createElement(
    RN.TouchableOpacity,
    {},
    createElement(
      RN.Text,
      {
        style: { color: "blue" }, title: "This is a welcome text", onClick: () => RN.Alert.alert('Hello World'),
        onPress: () => RN.Alert.alert()
      },
      'ehheeheh'
    )
  )
  // console.log(WelcomeText)

  // console.log(RN.Text)

  const mapComponents = {
    text: Text, /* Or Your custom component */
    view: View,
    button: RN.Button
  };
  // const props = {
  //   name: "view",
  //   _uid: "123",
  //   children: [
  //     {
  //       name: "text",
  //       _uid: "1234"
  //     },
  //     {
  //       name: "text",
  //       _uid: "12345",
  //       props: null
  //     },
  //     {
  //       name: "view",
  //       _uid: "123456",
  //       children: [
  //           {
  //             name: "text",
  //             _uid: "1234567",
  //             children: "some foo bar",
  //             props: {
  //                 first: "text foo",
  //                 second: "text bar"
  //             }
  //           },
  //           {
  //             name: "text",
  //             children: "some foo bar 3",
  //             _uid: "12345678"
  //           },
  //           {
  //             name: "button",
  //             children: "some foo bar 4",
  //             _uid: "12345678"
  //           },

  //       ],
  //       props: {
  //           first: "view foo",
  //           second: "view bar"
  //       }
  //     }
  //   ]
  // };
  //#region 
  const [state, setState] = React.useState({})

/**
 *  checkToken: async (token) => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    const json = await req.json();
    return json;
  },
 */

const getData = async () => {
  try{
  const req = await axios.get('http://192.168.0.106:4000/')
  console.log('req')
  console.log(req)
  return req.data
  }catch(err){
    console.log(err)
  }
}

  const [CardConfig, setCardConfig] = React.useState([])
  
  React.useEffect(()=>{
    if(CardConfig.length===0) {
        getData().then(
          result=>{
          setCardConfig(eval(result));
}
        )
    }

  },[])

  // const CardConfig = eval(`[
  //   {
  //     component: "View",
  //     props: { style: { backgroundColor: 'blue' } },
  //     children: [
  //       {
  //         component: "View",
  //         children: [
  //           {
  //             component: "Text",
  //             src: { key: 'text1' },
  //             children: "This is a title a"
  //           },
  //           {
  //             component: "TouchableOpacity",
  //             props: {
                
  //               style: { backgroundColor: "green" },
  //               onPress: () => RN.Alert.alert('Narutooooo ' + state.name)
  //             },
  //             children: [{
  //               component: "Text",
  //               children: "CLICK HERE"
  //             }],
  //           },
  //           {
  //             component: "TextInput",
              
  //             props: {
  //               value: state.name,
  //               style: { backgroundColor: "purple" },
  //               onChangeText: (text) => setState({...state, name: text})
  //             },
              
              
  //           },
  //           // {
  //           //   component: "Input",
  //           //   action: 'input',
  //           //   children: createElement(
  //           //     RN.Text,
  //           //     {
  //           //       style: { color: "blue" },
  //           //       onChange: () => RN.Alert.alert('Narutooooo')
  //           //     },
  //           //     'Click me'
  //           //   )
  //           // }
  //         ]
  //       }
  //     ]
  //   }
  // ]`);
  //#endregion




  return (
    <>
      {CardConfig?.map(config => RenderCard(config))}
      <Text>
        {console.log(state)}
        {
          state?.name
        }
        {
          state?.qtd
        }
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import React, {createElement} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as RN from 'react-native';
import {DATA_DESTAQUE} from '../data/data'
import DataJson from '../data/dataJson.json'
import RenderCard from '../data/RenderData'
import DynamicComponent from "react-native-dynamic-render";

export default function TextTest() {
  let WelcomeText = createElement(
    RN.TouchableOpacity,
    { },
     createElement(
      RN.Text,
      { style: { color: "blue" }, title:"This is a welcome text", onClick:()=>RN.Alert.alert('Hello World'),
       onPress:()=>RN.Alert.alert() },
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
  const CardConfig = [
    {
      component: "View",
      children: [
        // {
        //   component: "img",
        //   src:
        //     "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        // },
        {
          component: "View",
          children: [
            {
              component: "Text",
              children: "This is a title"
            },
            // {
            //   component: "subtitle",
            //   children: "This is the subtitle"
            // },
            // {
            //   component: "text",
            //   children:
            //     "Some quick example text to build on the card title and make up the bulk of the card's content."
            // },
            {
              component: "TouchableOpacity",
              action: 'button',
              children:  createElement(
                RN.Text,
                { style: { color: "blue" },
                 onPress:()=>RN.Alert.alert() },
                'Click me'
              )
            }
          ]
        }
      ]
    }
  ];
  //#endregion

  return (
    <>
  {/* <DynamicComponent
    {...props}
    mapComponents={mapComponents}
/> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* {DATA_DESTAQUE[0].code} */}
      {/* {
        console.log(<DataJson.category>ola</DataJson.category>)
      } */}
      {/* {eval(<DataJson.category>ola</DataJson.category>)} */}
      {/* <DataJson.category>{DataJson.code}</DataJson.category> */}
      {/* {createElement("h1",{},DataJson.code)} */}
      {/* {WelcomeText} */}
      {CardConfig.map(config => RenderCard(config))}
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

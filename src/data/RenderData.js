import React from "react";
// import {
//     Alert,
//   Text,
//   View
// } from "react-native";
import * as RN from "react-native";

// const KeysToComponentMap = {
// //   card: Card,
// //   img: CardImg,
//   Text: Text,
//   View: View,  
// //   body: CardBody,
// //   title: CardTitle,
// //   subtitle: CardSubtitle,
// //   button: Button
// };

function renderer(config) {
    console.log(config.component)
    console.log(RN[config.component])
    if (typeof RN[config.component] !== "undefined") {
      
    return React.createElement(
      RN[config.component],
      {
        src: config.src, ...config.props
      },
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : typeof config.children === "object" && config.action ? 
          //  console.log(config.children) :
           config.children :
          
          config.children?.map(c => renderer(c)))
    );
  }
}

export default renderer;
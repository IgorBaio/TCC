const express = require('express')

const app = express();
app.get('/', (req,res)=>{
    res.send(`[
        {
            component: 'View',
            props: { style: { backgroundColor: 'blue' } },
            children: [
                {
                    component: 'View',
                    children: [
                        {
                            component: 'Text',
                            props:{style:{color:'yellow'}},
                            src: { key: 'text1' },
                            children: 'This is a title a'
                        },
                        {
                            component: 'TouchableOpacity',
                            props: {
                                
                                style: { backgroundColor: 'green' },
                                onPress: () => RN.Alert.alert('Narutooooo ' + state.name)
                            },
                            children: [{
                                component: 'Text',
                                children: 'CLICK HERE'
                            }],
                        },
                        {
                            component: 'TextInput',
                            
                            props: {
                                value: state.name,
                                style: { backgroundColor: 'purple' },
                                onChangeText: (text) => setState({...state, name: text})
                            },
                            
                            
                        },
                        {
                            component: 'TextInput',
                            props: {
                                value: state.qtd,
                                label: 'Quantidade',
                                style: { width:'100%' },
                                onChangeText: (text) => setState({...state, qtd: text})
                            },
                            
                            
                        },
                        // {
                            //   component: 'Input',
                            //   action: 'input',
                            //   children: createElement(
                                //     RN.Text,
                                //     {
                                    //       style: { color: 'blue' },
                                    //       onChange: () => RN.Alert.alert('Narutooooo')
                                    //     },
                                    //     'Click me'
                                    //   )
                                    // }
                                ]
                            }
                        ]
                    }
                ]
                `)
            })
            app.listen(4000)
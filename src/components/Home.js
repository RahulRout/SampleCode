import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, TouchableOpacityBase, TextInput, SafeAreaView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionCreators } from '../actions/actions.js'

class Home extends React.Component {
    constructor() {
        super()
    }

    componentDidMount(){
        const { alertText, applyAlert, LoginSuccess, response, email, password, setEmail, setPassword,userData,setCount } = this.props
        console.log('UserData: ',JSON.stringify(userData))
        setCount('2')
        this.api()
    }
    render() {
        const { alertText, applyAlert, LoginSuccess, response, email, password, setEmail, setPassword,userData,setCount,count } = this.props
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text>{userData.password}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    const { alertText, applyAlert, LoginSuccess, response, email, password, setEmail, setPassword,userData,setCount,count } = state
    return {
        alertText, applyAlert, LoginSuccess, response, email, password, setEmail, setPassword, userData,setCount,count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        applyAlert: bindActionCreators(actionCreators.applyAlert, dispatch),
        LoginSuccess: bindActionCreators(actionCreators.LoginSuccess, dispatch),
        setEmail: bindActionCreators(actionCreators.setEmail, dispatch),
        setPassword: bindActionCreators(actionCreators.setPassword, dispatch),
        setCount:bindActionCreators(actionCreators.setCount, dispatch)
    }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'80%',
        marginTop:50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    innerView:{
      
        backgroundColor:'#000'
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
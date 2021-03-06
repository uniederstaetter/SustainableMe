import React from 'react';
import { Text, View, TextInput,TouchableOpacity} from 'react-native';
import { styles} from '../styles.js';

//Component for the registration of users.
//it displays a form which the user has to fill in order to register
export default class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
			name: '',
            email: '',
            password: '',
        }
    }
	
	//calls the backend function that registers the user, if the operation is succesfull it goes to the login screen
	//before logging in the user has to verify its email address
    register = async () => {
		if(await this.props.register(this.state.name, this.state.email, this.state.password)) {
			this.props.login()
		}
    }
    
	//handle the email input field changes
	handleEmailChange = email => {
        this.setState({email: email})
    }
	
	//handle the password input field changes
    handlePasswordChange = password => {
        this.setState({password: password})
    }
	
	//handle the name input field changes
    handleNameChange = name => {
        this.setState({name: name})
    }
	
	render(){
		return (
			<View style={styles.greenContainer}>
				<View style={{flex:1}} />
				<View style={{flex:1.5}}>
					<Text style={styles.logoWhite}>SustainableMe</Text>
				</View>
				<View style={{flex:3}}>
					<Text style={styles.whiteCenteredText}>NAME</Text>
					<TextInput 
						placeholder="Name"
						style={styles.inputField}
						onChangeText={this.handleNameChange}
						value={this.state.name}
					/>
					<Text style={styles.whiteCenteredText}>EMAIL</Text>
					<TextInput 
						placeholder="Email"
						style={styles.inputField}
						onChangeText={this.handleEmailChange}
						value={this.state.email}
					/>
					<Text style={styles.whiteCenteredText}>PASSWORD</Text>
					<TextInput 
						placeholder="Password"
						secureTextEntry={true} 
						style={styles.inputField}
						onChangeText={this.handlePasswordChange}
						value={this.state.password}
					/>
					<View style={styles.buttonDiv}>
					<TouchableOpacity style={styles.primaryButton} onPress={() =>{
						this.register()
					}}>
						<Text style={styles.buttonText}>REGISTER</Text>
					</TouchableOpacity>
					</View>
				</View>
				<View style={{flex:1}}>
					<TouchableOpacity onPress={() => {this.props.login()}}>
					<Text style={styles.whiteCenteredText}>Already have an account? Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
	
}

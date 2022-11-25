import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

const botAvatar = require('../assets/Images/Avatar.png')

const Bot = {
    id: 1,
    name: 'chatbot',
    avatar: botAvatar,
};

export default class Chat extends Component {
    state = {
        questions: [
            {
                _id: 2,
                text: 'I am your Virtual Guide',
                createdAt: new Date(),
                user: Bot,
            },
            {
                _id: 1,
                text: 'Hi !',
                createdAt: new Date(),
                user: Bot,
            },
        ],
        id: 2,
        name: '',
    };

    //handleing resonse got from server and display to the user.
    botResponse(text) {
        let response = {
            _id: this.state.questions.length + 1,
            text,
            createdAt: new Date(),
            user: Bot,
        };

        this.setState(previousState => ({
            questions: GiftedChat.append(previousState.questions, [response]),
        }));
    }

    //handle the response sent by the server .
    handleKGResponse(response) {
        if (response.answer === null) {
            this.botResponse(
                "Sorry I couldn't understand that, I am still learning.",
            );
        } else {
            let word = response.answer[0];
            this.botResponse(word);
        }
    }

    //fetch data from the server
    async fetchData(curQuestion) {
        let url = 'http://192.168.31.112:5000/';
        url += curQuestion;
        const resp = await fetch(url);
        const data = await resp.json();
        this.handleKGResponse(data);
    }

    //when send is clicked , the the fetch data is called to recieve the answer from server
    onSend(questions = []) {
        this.setState(previousState => ({
            questions: GiftedChat.append(previousState.questions, questions),
        }));

        let curQuestion = questions[0].text;

        this.fetchData(curQuestion);
    }

    render() {
        return (
            <View style={styles.container}>
                <GiftedChat
                    messages={this.state.questions}
                    onSend={question => this.onSend(question)}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 1,
    },
});

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './Messages.style';
import FloatButton from '../../components/FloatButton/FloatButton';
import InputModal from '../../components/Modal/ContentInput/InputModal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../utils/parseContentData';
import MessagesCard from '../../components/MessageCard/MessagesCard';

function Messages({ route }) {

  const [contentList, setContentList] = useState([]);
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const {item} = route.params;

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(message) {
    handleInputToggle();
    sendContent(message);
  }

  async function sendContent (message) {
    const userMail = auth().currentUser.email 
    try {
        const objcontent = {
            message: message,
            username: userMail.split('@')[0],
            date: new Date().toISOString(),
        }
        database().ref(`rooms/${item.id}/${item.text}`).push(objcontent);
    }
    catch(error) {
        showMessage({
            message: error,
            type: "success",
        });
    }
}

useEffect (() => {
  database().ref(`rooms/${item.id}/${item.text}`)
  .on('value', snapshot => {
      const contentData = snapshot.val();

      const parsedData = parseContentData(contentData || {});
      setContentList(parsedData);
  })
}, [])



  const renderContent = ({ item }) => <MessagesCard message={item} />;

  return (
    <View style={styles.container}>
           <Text style={styles.rooms_name}>{item.text} odası kuruldu ! </Text>
      <FlatList data={contentList} renderItem={renderContent} keyExtractor={({ id }) => id.toString()} />
      <FloatButton icon="plus" onPress={handleInputToggle} />
      <InputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
        placeholderText="mesaj..."
        buttonText="Gönder"
      />
    </View>
  );
}

export default Messages;

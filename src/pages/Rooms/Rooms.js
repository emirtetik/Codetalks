import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './Rooms.style';
import RoomsCard from '../../components/RoomsCard/RoomsCard';
import FloatButton from '../../components/FloatButton/FloatButton';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { showMessage } from 'react-native-flash-message';
import parseContentData from '../../utils/parseContentData';
import InputModal from '../../components/Modal/ContentInput/InputModal';

const Rooms = ({ navigation }) => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [rooms, setRooms] = useState([]);

  async function handleInputSend(content) {
    handleInputToggle();
    handleInputContent(content);
  }

  async function handleInputContent(content) {
    const userMail = auth().currentUser.email;
    const newRoom = rooms.find((room) => room.text.toLowerCase() === content.toLowerCase());

    if (newRoom > 0) {
      showMessage({
        message: 'Daha önce bu oda oluşturuldu.',
        type: 'warning',
      
      });
      return;
    }

    try {
      const objContent = {
        text: content,
        username: userMail.split('@')[0],
        date: new Date().toISOString(),
      };
      await database().ref('rooms/').push(objContent)
   
    } catch (error) {
      showMessage({
        message: error.message,
        type: 'warning',
      
      });
    }
  }
  useEffect (() => {
    const reference = database().ref('rooms/')
    reference.on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {})
        setRooms(parsedData)
    })
    return () => reference.off('value');
}, [])


  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function DetailRoom(item) {
    navigation.navigate('MessagesPage', item);
  }

  const renderRoomSelect = ({ item }) => <RoomsCard rooms={item} onSelect={() => DetailRoom({item})} />;

  
  return (
    <View style={styles.container}>
      <FlatList data={rooms} renderItem={renderRoomSelect} keyExtractor={({ id }) => id.toString()} numColumns={2} />
      <FloatButton icon="application-braces" onPress={handleInputToggle} />

      <InputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleInputSend}
        placeholderText="Oda oluştur.."
        buttonText="ekle"
      />
    </View>
  );
};

export default Rooms;

import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from 'react-native'

export default Menu = () =>{

  const data = [
    {
      id: 1,
      title: 'You',
      color: '#FF4500',
      members: 8,
      image: 'https://img.icons8.com/color/70/000000/name.png',
    },
    {
      id: 1,
      title: 'Home',
      color: '#87CEEB',
      members: 6,
      image: 'https://img.icons8.com/office/70/000000/home-page.png',
    },
    {
      id: 2,
      title: 'Love',
      color: '#4682B4',
      members: 12,
      image: 'https://img.icons8.com/color/70/000000/two-hearts.png',
    },
    {
      id: 3,
      title: 'Family',
      color: '#6A5ACD',
      members: 5,
      image: 'https://img.icons8.com/color/70/000000/family.png',
    },
    {
      id: 4,
      title: 'Friends',
      color: '#FF69B4',
      members: 6,
      image: 'https://img.icons8.com/color/70/000000/groups.png',
    },
    {
      id: 5,
      title: 'School',
      color: '#00BFFF',
      members: 7,
      image: 'https://img.icons8.com/color/70/000000/classroom.png',
    },
    {
      id: 6,
      title: 'Things',
      color: '#00FFFF',
      members: 8,
      image: 'https://img.icons8.com/dusk/70/000000/checklist.png',
    },
    {
      id: 8,
      title: 'World',
      color: '#20B2AA',
      members: 23,
      image: 'https://img.icons8.com/dusk/70/000000/globe-earth.png',
    },
    {
      id: 9,
      title: 'Remember',
      color: '#191970',
      members: 45,
      image: 'https://img.icons8.com/color/70/000000/to-do.png',
    },
    {
      id: 9,
      title: 'Game',
      color: '#008080',
      members: 13,
      image: 'https://img.icons8.com/color/70/000000/basketball.png',
    },
  ]



  const [options, setOptions] = useState(data)

  const showAlert = () => {
    Alert.alert('Option selected')
  }



  return (
    <View>
      <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={options}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: item.color }]}
              onPress={() => {
                showAlert(item.view)
              }}>
                
              <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.title}</Text>
                <Image
                  style={styles.icon}
                  source={{ uri: 'https://img.icons8.com/ios/40/000000/settings.png' }}
                />
              </View>
              <Image style={styles.cardImage} source={{ uri: item.image }} />
              <View style={styles.cardFooter}>
                <Text style={styles.subTitle}>{item.members} members</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    marginHorizontal: 2,
    marginVertical: 2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: '#FFFFFF',
  },
  icon: {
    height: 20,
    width: 20,
  },
})
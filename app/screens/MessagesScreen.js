import React from 'react'
import {FlatList, View} from 'react-native'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
function MessagesScreen (props) {
  const messages = [
    {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assests/mosh.jpg'),
    },
    {
      id: 2,
      title: 'T2',
      description: 'D2',
      image: require('../assests/mosh.jpg'),
    },
  ]

  return (
    <GestureHandlerRootView>
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={message => message.id.toString()}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log('message selected', item)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </Screen>
    </GestureHandlerRootView>
  )
}

export default MessagesScreen

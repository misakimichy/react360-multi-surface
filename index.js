import { AppRegistry } from 'react-360';
import CurrentPost from './CurrentPost'
import TopPosts from './TopPosts'
import ModelView from './ModelView'
import * as Store from './Store'
import ApiKey from './environment'
Store.initialize(ApiKey)

AppRegistry.registerComponent('CurrentPost', () => CurrentPost)
AppRegistry.registerComponent('TopPosts', () => TopPosts)
AppRegistry.registerComponent('ModelView', () => ModelView)
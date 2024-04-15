import React from 'react';
import {registerRootComponent} from 'expo'
import { AppProvider, UserProvider, RealmProvider } from '@realm/react';
import {OpenRealmBehaviorType, OpenRealmTimeOutBehavior} from 'realm';
// import {SYNC_CONFIG} from './src/sync.config';
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigator from './src/navigation/LoginNavigator';
import HomeNavigator from './src/navigation/HomeNavigator';
const App = () =>
  <NavigationContainer>
    <AppProvider id={'application-0-surqu'}>
        <UserProvider fallback={<LoginNavigator />}>
          <RealmProvider
            sync={{
              flexible: true,
              existingRealmFileBehavior: {
                type: OpenRealmBehaviorType.DownloadBeforeOpen,
                timeOut: 1000,
                timeOutBehavior:
                  // In v11 the enums are not set up correctly, so we need to use the string values
                  OpenRealmTimeOutBehavior?.OpenLocalRealm ?? 'openLocalRealm',
              },
            }}>
            <HomeNavigator />
          </RealmProvider>
        </UserProvider>
      </AppProvider>
  </NavigationContainer>

registerRootComponent(App);
export default App;
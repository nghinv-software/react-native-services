# @nghinv/react-native-services

---

[![Version][version-badge]][package]
[![MIT License][license-badge]][license]
[![All Contributors][all-contributors-badge]][all-contributors]

# Installation

## Installing the package

* Use yarn

```sh
yarn add @nghinv/react-native-services
```

* Use npm

```sh
npm install @nghinv/react-native-services
```


```sh
yarn add react-native-gesture-handler react-native-reanimated react-native-safe-area-context @nghinv/react-native-icons @nghinv/react-native-loading @nghinv/react-native-alert @nghinv/react-native-dropdown-alert @nghinv/react-native-bottom-sheet @nghinv/react-native-action-sheet 
```

* Dependencies 

	- [@nghinv/react-native-loading](https://github.com/nghinv-software/react-native-loading.git)

	- [@nghinv/react-native-alert](https://github.com/nghinv-software/react-native-alert.git)

	- [@nghinv/react-native-dropdown-alert](https://github.com/nghinv-software/react-native-dropdown-alert.git)

	- [@nghinv/react-native-action-sheet](https://github.com/nghinv-software/react-native-action-sheet.git)

	- [@nghinv/react-native-bottom-sheet](https://github.com/nghinv-software/react-native-bottom-sheet.git)

	- [@nghinv/react-native-icons](https://github.com/nghinv-software/react-native-icons.git)

# How to use

1. Wrapper `ServicesProvider` in the `Root Component`

```javascript
  ...
  return (
    <ServicesProvider
      alertProps={{
        titleProps: { color: 'blue' },
        messageProps: { color: 'black' },
        buttonProps: {
          titleColor: 'blue',
        },
      }}
      actionSheetProps={{
        headerProps: {
          titleColor: 'blue',
        },
      }}
      bottomSheetProps={{}}
      dropdownAlertProps={{}}
      loadingProps={{}}
    >
      <RootComponent />
    </ServicesProvider>
  );
  ...
```

2. Use `Services.Loading.show()`, `Services.Alert.alert({})`...

```javascript
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Services } from '@nghinv/react-native-services';

export default function Example() {
  const onShowLoading = () => {
    // More props in @nghinv/react-native-loading
    Services.Loading.show();
    setTimeout(() => {
      Services.Loading.hide();
    }, 2000);
  };

  const onShowAlert = () => {
    // More props in @nghinv/react-native-alert
    Services.Alert.alert({
      title: 'Title',
      message: 'Message',
      actions: [{ text: 'OK' }],
    });
  };

  const onShowActionSheet = () => {
    // More props in @nghinv/react-native-action-sheet
    Services.ActionSheet.show({
      ...actionSheetParams,
    });
  };

  const onShowBottomSheet = () => {
    // More props in @nghinv/react-native-bottom-sheet
    Services.BottomSheet.show({
      ...bottomSheetParams,
    });
  };

  const onShowNotification = () => {
    // More props in @nghinv/react-native-dropdown-alert
    Services.DropdownAlert.show({
      ...dropdownAlertParams,
    });
  };

  return (
    <View style={styles.container}>
      <Button 
        title='Show loading' 
        onPress={onShowLoading} 
      />
      <Button 
        title='Show Alert' 
        onPress={onShowAlert} 
      />
      <Button 
        title='Show ActionSheet' 
        onPress={onShowActionSheet} 
      />
      <Button 
        title='Show BottomSheet' 
        onPress={onShowBottomSheet} 
      />
      <Button 
        title='Show DropDownAlert' 
        onPress={onShowNotification} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});

```

---
## Credits

- [@Nghi-NV](https://github.com/Nghi-NV)

[version-badge]: https://img.shields.io/npm/v/@nghinv/react-native-services.svg?style=flat-square
[package]: https://www.npmjs.com/package/@nghinv/react-native-services
[license-badge]: https://img.shields.io/npm/l/@nghinv/react-native-services.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[all-contributors-badge]: https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square
[all-contributors]: #contributors
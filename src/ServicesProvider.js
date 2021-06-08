/**
 * Created by nghinv on Sat May 15 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import React from 'react';
import equals from 'react-fast-compare';
import WrapLoadingView from '@nghinv/react-native-loading/libs/WrapLoadingView';
import WrapAlertView from '@nghinv/react-native-alert/lib/WrapAlertView';
import WrapActionSheetView from '@nghinv/react-native-action-sheet/lib/WrapActionSheetView';
import WrapBottomSheetView from '@nghinv/react-native-bottom-sheet/lib/WrapBottomSheetView';
import WrapDropdownAlertView from '@nghinv/react-native-dropdown-alert/lib/WrapDropdownAlertView';

interface ServicesProviderType {
  actionSheetProps: Object;
  bottomSheetProps: Object;
  alertProps: Object;
  dropdownAlertProps: Object;
  loadingProps: Object;
}

const Services = {
  Loading: null,
  Alert: null,
  ActionSheet: null,
  BottomSheet: null,
  DropdownAlert: null,
}

function ServicesProvider(props: ServicesProviderType) {
  const {
    actionSheetProps,
    bottomSheetProps,
    alertProps,
    dropdownAlertProps,
    loadingProps,
    children
  } = props;

  return (
    <>
      {children}
      <WrapActionSheetView
        {...actionSheetProps}
        ref={(ref) => { Services.ActionSheet = ref; }}
        nativeModal={false}
      />
      <WrapBottomSheetView
        {...bottomSheetProps}
        nativeModal={false}
        ref={(ref) => { Services.BottomSheet = ref; }}
      />
      <WrapAlertView
        {...alertProps}
        ref={(ref) => { Services.Alert = ref; }}
        nativeModal={false}
      />
      <WrapDropdownAlertView
        {...dropdownAlertProps}
        ref={(ref) => { Services.DropdownAlert = ref; }}
      />
      <WrapLoadingView
        {...loadingProps}
        ref={(ref) => { Services.Loading = ref; }}
      />
    </>
  );
}

export default React.memo(ComponentServices, equals);

export {
  Services,
}

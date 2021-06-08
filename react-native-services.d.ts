import { ActionSheetServiceType } from '@nghinv/react-native-action-sheet';
import { BottomSheetServiceType } from '@nghinv/react-native-bottom-sheet';
import { AlertServiceType } from '@nghinv/react-native-alert';
import { DropdownAlertServiceType } from '@nghinv/react-native-dropdown-alert';
import { SpinnerProps } from '@nghinv/react-native-loading';
import React from 'react';

export interface Services {
  ActionSheet: ActionSheetServiceType;
  BottomSheet: BottomSheetServiceType;
  Alert: AlertServiceType;
  DropdownAlert: DropdownAlertServiceType;
  Loading: SpinnerProps;
}

export interface ServicesProvider extends React.Component { }

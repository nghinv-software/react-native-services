declare module '@nghinv/react-native-services' {
  import React from 'react';
  import { ActionSheetServiceType, ActionSheetViewProps } from '@nghinv/react-native-action-sheet';
  import { BottomSheetServiceType, BottomSheetViewProps } from '@nghinv/react-native-bottom-sheet';
  import { AlertServiceType, AlertViewProps } from '@nghinv/react-native-alert';
  import { DropdownAlertServiceType, DropdownAlertViewProps } from '@nghinv/react-native-dropdown-alert';
  import { SpinnerProps, LoadingViewProps } from '@nghinv/react-native-loading';

  interface ServicesType {
    ActionSheet: ActionSheetServiceType;
    BottomSheet: BottomSheetServiceType;
    Alert: AlertServiceType;
    DropdownAlert: DropdownAlertServiceType;
    Loading: SpinnerProps;
  }

  interface ServiceProviderProps {
    actionSheetProps?: ActionSheetViewProps;
    bottomSheetProps?: BottomSheetViewProps;
    alertProps?: AlertViewProps;
    dropdownAlertProps?: DropdownAlertViewProps;
    loadingProps?: LoadingViewProps;
  }

  export const Services: ServicesType;

  export class ServicesProvider extends React.PureComponent<ServiceProviderProps> {

  }
}

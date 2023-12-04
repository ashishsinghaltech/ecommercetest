import type {NavigationContainerRef} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import * as React from 'react';

export class NavigationService {
  static navigationRef: React.RefObject<NavigationContainerRef<any>> =
    React.createRef<NavigationContainerRef<any>>();

  static navigateTo = (
    name: string,
    params?: Record<string, unknown>,
  ): void => {
    this.navigationRef.current?.navigate(name, params);
  };

  static resetTo = (
    screenName: string,
    params?: Record<string, unknown>,
  ): void => {
    this.navigationRef.current?.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [
          {
            name: screenName,
            params: params,
          },
        ],
      }),
    });
  };
}

import { Platform } from "react-native";
import IProduct from "../model/interface/iProduct";

export const DeSelectItems = (dataSource: IProduct[]): IProduct[] => dataSource?.map(item => ({...item, isSelected: false})) ?? []

export const getTestID = (id: string) => {
    if (Platform.OS === 'ios') {
      return { testID: id }
    }
    return { accessibilityLabel: id, testID: id }
  }
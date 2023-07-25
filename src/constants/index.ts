import {CompositeNavigationProp, ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
export enum ScreensName {
  SIGN_IN = 'SignIn',
  SIGN_UP = 'SignUp',
  STREAM = 'Stream',
  LOGGED_IN_STACK = 'LOGGED_IN_STACK',
  LOGGED_OUT_STACK = 'LOGGED_OUT_STACK',
  FORECAST = 'Forecast', //Gallery
  FINANCE = 'Finance', //Setting
  FAVOURITES = 'Favourites', //Profile
  TAB_BAR_STACK = 'TAB_BAR_STACK',
  DRAWER_STACK = 'DRAWER_STACK',
  PROFILE = 'PROFILE',
  LANGUAGE = 'LANGUAGE',
  FRIEND = 'FRIEND',
}

export type NavigationProp<
  StackParams extends ParamListBase,
  CurrentScreen extends string,
> = CompositeNavigationProp<
  StackNavigationProp<StackParams, CurrentScreen>,
  StackNavigationProp<MainNavigationStack>
>;

export type MainNavigationStack = {
  [ScreensName.LOGGED_OUT_STACK]: {
    screen?: keyof typeof LoggedOutRoutes;
  };
  [ScreensName.LOGGED_IN_STACK]: {
    screen?: keyof typeof LoggedInRoutes;
  };
};

export type LoggedInTypeNavigation = {
  [ScreensName.STREAM]: {params?: {email?: string; name?: string}};
  [ScreensName.DRAWER_STACK]?: {screen?: keyof typeof DrawerRoutes};
};
export type LoggedOutTypeNavigation = {
  [ScreensName.SIGN_IN]: undefined;
  [ScreensName.SIGN_UP]?: {
    registerAs: string;
  };
  screen?: undefined;
};

export type DrawerTypeNavigation = {
  [ScreensName.TAB_BAR_STACK]: {screen?: keyof typeof TabBarRoutes};
};

export type TabTypeNavigation = {
  [ScreensName.FORECAST]: {screen?: ScreensName.FORECAST | undefined};
  [ScreensName.FINANCE]: {screen?: ScreensName.FINANCE | undefined};
  [ScreensName.FAVOURITES]: {screen?: ScreensName.FAVOURITES | undefined};
};

export type ValidScreenNames =
  | ScreensName.FRIEND
  | ScreensName.LANGUAGE
  | ScreensName.PROFILE;

export type UnknownRedirectNavigation = {
  [key in ValidScreenNames]: {
    screen?: keyof typeof UnknownRedirectRoutes;
  };
};

const UnknownRedirectRoutes = {
  [ScreensName.FRIEND]: ScreensName.FRIEND,
  [ScreensName.LANGUAGE]: ScreensName.LANGUAGE,
  [ScreensName.PROFILE]: ScreensName.PROFILE,
};

export const LoggedInRoutes = {
  [ScreensName.STREAM]: ScreensName.STREAM,
  [ScreensName.DRAWER_STACK]: ScreensName.DRAWER_STACK,
};

const LoggedOutRoutes = {
  [ScreensName.SIGN_IN]: ScreensName.SIGN_IN,
  [ScreensName.SIGN_UP]: ScreensName.SIGN_UP,
};

const DrawerRoutes = {
  [ScreensName.TAB_BAR_STACK]: ScreensName.TAB_BAR_STACK,
};

export const TabBarRoutes = {
  [ScreensName.FORECAST]: ScreensName.FORECAST,
  [ScreensName.FINANCE]: ScreensName.FINANCE,
  [ScreensName.FAVOURITES]: ScreensName.FAVOURITES,
};

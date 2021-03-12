export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabParamList = {
  Notifications: undefined;
  Applications: undefined;
  Profile: undefined,
};

export type ApplicationsTabParams = {
  ApplicationsScreen: {
    headerTitle?: string,
    headerStyle?: object,
    headerTintColor?: string,
    headerTitleStyle?: object,
  },
};

export type NotificationsTabParams = {
  NotificationsScreen: undefined;
};

export type ProfileTabParams = {
  ProfileScreen: undefined;
};

export type Status = 'success' | 'rejected' | 'In review' | 'Incomplete data';

export type JobDescription = {
  status?: string;
  jobTitle?: string;
  companyName?: string;
};

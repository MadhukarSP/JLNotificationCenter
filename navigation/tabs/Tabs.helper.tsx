import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export const getTabBarOptions = () => {
    const colorScheme = useColorScheme();
    return {
        activeTintColor: Colors[colorScheme].tabIconSelected,
        inactiveTintColor: Colors[colorScheme].tabIconDefault,
        tabStyle: {
            paddingTop: 4,
            paddingBottom: 20,
            backgroundColor: Colors[colorScheme].tabBackground,
            height: 80,
        },
        labelStyle: {
            fontSize: 12,
        },
        headerStyle: {
            backgroundColor: 'green',
        }
    }
}

export const getHeaderOptions = (headerTitle: string) => {
    const colorScheme = useColorScheme();
    return {
        headerTitle,
        headerStyle: {
            backgroundColor: Colors[colorScheme].headerBackground,
        },
        headerTintColor: Colors[colorScheme].headerTint,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
}

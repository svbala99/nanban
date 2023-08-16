import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { type ParamListBase, type RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../HomeScreen';
import NewsScreen from '../NewsScreen';

export interface HomeStackParamList extends ParamListBase {
    Home: undefined;
    News: undefined;
}

const HomeStack = createStackNavigator<HomeStackParamList>();
function HomeStackScreen(): JSX.Element {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerBackTitle: '' }}>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    );
}

export interface NewsStackParamList extends ParamListBase {
    News: undefined;
}
const NewsStack = createStackNavigator<NewsStackParamList>();
function NewsStackScreen(): JSX.Element {
    return (
        <NewsStack.Navigator
            initialRouteName="News"
            screenOptions={{ headerBackTitle: '' }}>
            <NewsStack.Screen
                name="News"
                component={NewsScreen}
                options={{ headerShown: false }}
            />
        </NewsStack.Navigator>
    );
}

export interface TabParamList extends ParamListBase {
    HomeStack: undefined;
    NewsStack: undefined;
}

const getTabBarIcon = (route: RouteProp<TabParamList, keyof TabParamList>) =>
    function IconProvider(props: { color: string; size: number }): JSX.Element {
        const { color, size } = props;
        let iconName;

        switch (route.name) {
            case 'HomeStack': {
                iconName = 'home';
                break;
            }
            case 'NewsStack': {
                iconName = 'newspaper';
                break;
            }
            default: {
                iconName = 'owl';
                break;
            }
        }
        return <Icon name={iconName} size={size} color={color} />;
    };

const Tab = createBottomTabNavigator<TabParamList>();

function MainScreen(): JSX.Element {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: getTabBarIcon(route),
            })}
            initialRouteName="HomeStack">
            <Tab.Screen
                name="HomeStack"
                component={HomeStackScreen}
                options={{ title: 'Home' }}
            />
            <Tab.Screen
                name="NewsStack"
                component={NewsStackScreen}
                options={{ title: 'News' }}
            />
        </Tab.Navigator>
    );
}

export default MainScreen;

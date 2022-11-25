import { CommonActions } from "@react-navigation/native";

const insertBeforeLast = (routeName, params) => (state) => {
    const routes = [
        ...state.routes.slice(0, -1),
        { name: routeName, params },
        state.routes[state.routes.length - 1],
    ]
    return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
    });
}

export default insertBeforeLast;
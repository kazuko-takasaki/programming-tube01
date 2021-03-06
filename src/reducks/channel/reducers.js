import * as Actions from './actions';
import initialState from '../store/initialState'

export const ChannelReducer = (state = initialState.channel, action) => {
    switch (action.type) {
        case Actions.FETCH_CHANNELS:
            return {
                ...state,
                list: [...action.payload]
            };
        case Actions.DELETE_CHANNELS:
                return {
                    ...state,
                    list: [...action.payload]
                };
        default:
            return state
    }
};
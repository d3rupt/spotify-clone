export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    route: 'Home',
    searchResults: '',
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
                discover_weekly: action.playlists.items[0]
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };
        case 'SET_ROUTE':
            return {
                ...state,
                route: action.route
            };
        case 'SET_SEARCH':
            return {
                ...state,
                searchResults: action.searchResults,
            };
        default:
            return state;
    }
}

export default reducer

export const authEndpont =
'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/callback';


const clientId = 'b4e57e3c448a4bafa65dda31668f22bf';

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'playlist-read-private',
    'app-remote-control',
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial;
        }, {})
}
export const loginUrl =
`${authEndpont}?client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join('%20')}
&response_type=token
&show_dialog=true`;

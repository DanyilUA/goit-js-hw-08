import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


const savedTime = parseInt(localStorage.getItem('videoplayer-current-time'));

if (savedTime) {
    player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000)
);
 


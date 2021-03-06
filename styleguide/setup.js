import '../src/styles/styles.css';
import React from 'react';
import { platform, IOS, ANDROID } from '../src/lib/platform';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Icon24Shuffle from '@vkontakte/icons/dist/24/shuffle';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Story from '@vkontakte/icons/dist/24/story';
import Icon24MoreVertical from '@vkontakte/icons/dist/24/more_vertical';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24About from '@vkontakte/icons/dist/24/info';
import Icon28User from '@vkontakte/icons/dist/24/user';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon24Phone from '@vkontakte/icons/dist/24/phone';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Privacy from '@vkontakte/icons/dist/24/privacy';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon28More from '@vkontakte/icons/dist/28/more';
import pkg from '../package';
import { getRandomInt, getRandomUser } from './utils';

window.uaList = {
  ios: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
  android: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Mobile Safari/537.36'
};

Object.defineProperty(navigator, 'userAgent', {
  get: function () { return window.localStorage.getItem('vkui-styleguide:ua') || window.uaList.ios; }
});

window.osname = platform();
window.IOS = IOS;
window.ANDROID = ANDROID;

window.schemeId = window.localStorage.getItem('vkui-styleguide:schemeId') || pkg.defaultSchemeId;

window.Icon24Cancel = Icon24Cancel;
window.Icon16Add = Icon16Add;
window.Icon24Camera = Icon24Camera;
window.Icon24Shuffle = Icon24Shuffle;
window.Icon24Back = Icon24Back;
window.Icon24Search = Icon24Search;
window.Icon24Add = Icon24Add;
window.Icon28ChevronBack = Icon28ChevronBack;
window.Icon24Story = Icon24Story;
window.Icon24MoreVertical = Icon24MoreVertical;
window.Icon24Done = Icon24Done;
window.Icon24Services = Icon24Services;
window.Icon24About = Icon24About;
window.Icon28User = Icon28User;
window.Icon24Document = Icon24Document;
window.Icon16Like = Icon16Like;
window.Icon16Dropdown = Icon16Dropdown;
window.Icon24Phone = Icon24Phone;
window.Icon24Users = Icon24Users;
window.Icon24Settings = Icon24Settings;
window.Icon24User = Icon24User;
window.Icon24Privacy = Icon24Privacy;
window.Icon24MoreHorizontal = Icon24MoreHorizontal;
window.Icon24Write = Icon24Write;
window.Icon24LogoVk = Icon24LogoVk;
window.Icon28Newsfeed = Icon28Newsfeed;
window.Icon28Search = Icon28Search;
window.Icon28Notifications = Icon28Notifications;
window.Icon28Messages = Icon28Messages;
window.Icon28More = Icon28More;

window.getRandomInt = getRandomInt;
window.getRandomUser = getRandomUser;
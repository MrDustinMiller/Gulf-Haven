import createHeader from './ui/header';
import './assests/style.css';
import checkScreenSizeAdjustment from './events/events';
import loadHomePageOnLoad from './ui/pages/home';

createHeader();
checkScreenSizeAdjustment();
loadHomePageOnLoad();

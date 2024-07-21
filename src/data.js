import tour1 from './images/tour-1.jpg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpg'
import tour4 from './images/tour-4.jpg'
export const pageLinks = [
    {id:1, href:'#home', text: 'home'},
    {id:2, href:'#about', text: 'about'},
    {id:3, href:'#services', text: 'services'},
    {id:4, href:'#tours', text: 'tours'},
]
export const socialLinks = [
    {id:1, href:'https://www.facebook.com', icon: 'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id:3, href:'https://www.myswitzerland.com/en-ch/experiences/summer-autumn/hiking/', icon: 'fas fa-hiking'},
];

export const services = [
    {id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Go hiking with low budgets.'},
    {id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Many many locations to hike to.'},
    {id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Experience amazing and comfortable hikes.'},
];

export const tours = [
    {id:1, image: tour1, date: 'august 26th, 2020', title: 'Aletsch Panoramaweg', info: 'Three days under the spell of the Valais glacier landscape. Sensational scenic tour with many vantage points onto the two longest glaciers in the Alps.The grey-white of ice and rock contrasting with shades of green in the Aletschwald.', location: 'Blatten-Belalp', duration: '9h', cost: 'from 120CHF'},
    {id:2, image: tour2, date: 'october 1th, 2020', title: 'Via Panoramica Val Bregaglia', info: 'A spectacularly scenic high-level trail through the Val Bregaglia. You follow old paths through light mixed forest, over solid granite slabs and always with views of mighty granite spikes touching the sky.', location: 'Soglio', duration: '4h 30min', cost: 'from 100CHF'},
    {id:3, image: tour3, date: 'september 15th, 2020', title: 'Gratweg Stoos', info: 'The two Mythen peaks to the right; to the left, first the Riemenstalden valley, then Lake Uri – a succession of sweeping vistas! Chairlift ascent to the Klingenstock and scenic hike to Fronalpstock.', location: 'Stoos', duration: '4h', cost: 'from 130CHF'},
    {id:4, image: tour4, date: 'june 26th, 2020', title: 'Sentiero Cristallina', info: 'The Sentiero Cristallina links Bignasco in Valle Maggia with Airolo in Val Bedretto. Between them lie steep mountain slopes, a waterfall on a village outskirts, crystalline rock, Alpine lakes/reservoirs.', location: 'Bignasco', duration: '10h', cost: 'from 320CHF'},
];
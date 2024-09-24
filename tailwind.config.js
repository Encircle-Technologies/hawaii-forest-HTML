/**
* Configuration
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: 
            ['./pages/*.html',
            './assets/**/*.js'],
    corePlugins: {
        preflight: false,  
    },
    darkMode: 'class', // or 'media' or 'class' 
    theme: {
        fontFamily: {
            museo: ['"museo",serif'],
            amatic: ['"amatic-sc",sans-serif'],
        },
        
        colors: {
            transparent: 'transparent',
            Orange: '#F68B32',
            Red:'#C65427',
            Beige: '#FAF5ED',  
            White: '#FEFEFE',
            Beige: '#FAF5ED',
            Black:'#000000',
            Font:'#322E2C',
            Grey: '#C7C7C7',
            light_grey: '#D9D9D9',
            Chocolate: '#7E442E',
            Dark_Choco: '#5D4639',
            Tengerine: '#C65427',
            Orange: '#F68B32',  
            Apple_Green: '#B2D234', 
            Mint_Green: '#CFFACB66',
            Moss_Green: '#606B2F',
            green: '#3E7739',
            light_green: '#B2D234',
        },
        flex: {
            '1': '1 1 0%',
            0: '0 0 auto',
            auto: '1 1 auto',
            initial: '0 1 auto',
            inherit: 'inherit',   
            none: 'none',
            '2': '2 2 0%',
        },
       
        zIndex: {
            '1_minus': '-1',
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            9: 9,
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            11: 11,
            12: 12,
            98: 98,
            99: 99,
            100: 100,
            999: 999,
            9999: 9999,
        },
        padding: {
            0: '0px',
            5: '5px',
            10: '10px',
            15: '15px',
            20: '20px',
            24: '24px',
            25: '25px',
            30: '30px',
            35: '35px',
            40: '40px',
            45: '45px',
            50: '50px',
            55: '55px',
            60: '60px',
            70: '70px',
            75: '75px',
            80: '80px',
            100: '100px',
            110: '110px',
            130: '130px',
            150: '150px',
        },
        margin: {
            auto: 'auto',
            0: '0px',
            5: '5px',
            10: '10px',
            15: '15px',
            20: '20px',
            25: '25px',
            30: '30px',
            35: '35px',
            40: '40px',
            45: '45px',
            50: '50px',
            55: '55px',
            60: '60px',
            70: '70px',
            80: '80px',
            90: '90px',
        },
        fontSize: {
            12: '12px',
            13: '13px',
            14: '14px',
            16: '16px',
            17: '17px',
            18: '18px',
            20: '20px',
            22: '22px',
            24: '24px',
            26: '26px',
            28: '28px',
            30: '30px',
            32: '32px',
            34: '34px',
            40: '40px',
            48: '48px',
            56: '56px',
            60: '60px',
            64: '64px',
            76: '76px',
            88: '88px',
        },
        lineHeight: {
            content: '25px',
            0: '0px', 
            15: '15px',
            16: '16px', 
            20: '20px',
            22: '22px', 
            24: '24px', 
            26: '26px', 
            32: '32px',
            34: '34px', 
            38: '38px', 
            40: '40px', 
            44: '44px', 
            56: '56px',  
            60: '60px',
            66: '66px', 
            70: '70px', 
            88: '88px', 
        },      
        fontWeight: {
            100: '100',
            200: '200',
            300: '300',
            400: '400',
            500: '500',
            600: '600',
            700: '700',
            800: '800',
            900: '900',
        },
        backgroundImage: theme => ({
            none: 'none',
            'header_gradient': ' linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3384) 34.83%, rgba(0, 0, 0, 0) 88.39%)',
            'black_gradient': 'linear-gradient(90.01deg, rgba(0, 0, 0, 0.8) 9.83%, rgba(0, 0, 0, 0) 81.91%)',
            'radial': ' radial-gradient(48.15% 50% at 50% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)',
            'travller_gradient' :'linear-gradient(90deg, rgba(0, 0, 0, 0) 19.52%, rgba(0, 0, 0, 0.222701) 27.57%, rgba(0, 0, 0, 0.38205) 35.61%, rgba(0, 0, 0, 0.46566) 43.66%, rgba(0, 0, 0, 0.519385) 51.71%, rgba(0, 0, 0, 0.555943) 59.76%, rgba(0, 0, 0, 0.606742) 71.83%, rgba(0, 0, 0, 0.625742) 79.88%, rgba(0, 0, 0, 0.662238) 91.95%, rgba(0, 0, 0, 0.7) 100%)',
            'cardoverlay': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 29.11%, rgba(0, 0, 0, 0.9) 79.96%)',
            'banner_gradient': ' linear-gradient(0deg, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54))',
            'banner_big_gradient': 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 65.96%)',
            'explore_gradient': 'linear-gradient(90deg, rgba(112, 112, 112, 0) 26.69%, rgba(10, 10, 10, 0.8) 44.2%)',
            'explore_gradient_mobile': 'linear-gradient(180deg, rgba(112, 112, 112, 0) 26.69%, rgba(10, 10, 10, 0.8) 44.2%)',
            'aboutoverlay' :'linear-gradient(180deg, rgba(0, 0, 0, 0) 45.83%, rgba(0, 0, 0, 0.8) 73.77%)',
        }),



        borderRadius: {
            none: '0',
            1: '1px',
            2: '2px',
            5: '5px',
            10: '10px',
            25: '25px',
            30: '30px',
            '50_per': '50%',
            100: '100%',
            999: '999px',
        },
        translate: {
            0: '0px',
            'minus_50': '-50%',
        },
        transitionProperty: {
            common: 'all 300ms',
            all: 'all'
        },
        backgroundSize: {
            100: '100%',
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        dropShadow: {
            'none': 'none',
            'menu': '4px 4px 15px 0px rgba(0, 0, 0, 0.10)',
            'dropdown': '4px 4px 15px 0px rgba(0, 0, 0, 0.10)',
        },
        
        
        borderWidth: {
            1: '1px',
            2: '2px',
            0: '0px',            
        },
        boxShadow: {
            img: '0px 4px 20px rgba(0, 0, 0, 0.20)',
            highlight: ' 4px 4px 14px rgba(0, 0, 0, 0.11);',
        },

        outline: {
            none: 'none',
        },
        extend: {
            width: {
                0: '0px',
                100: '100px',
                120: '120px',
                400: '400px',
            },
            height: {
                15: '15px',
                50: '50px',
                80: '80px',
                100: '100px',
                120: '120px',
                375: '375px',
                425: '425px',
                480: '480px',
                660: '660px', 
                680: '680px',
                700: '700px',
            },
            screens: {
                lg: { 'min': '1024px' },
                xl: { 'min': '1200px' },
                xxl: {'min': '1366px'},
                xxxl: { 'min': '1440px' },
                xl2: { 'min': '1512px' },  
                xl3: { 'min': '1600px' },              
                
                1512: { 'max': '1512px' },  
                1400: { 'max': '1400px' }, 
                1366: { 'max': '1366px' },   
                1279: { 'max': '1279px' },   
                1199: { 'max': '1199.9px' },
                1023: { 'max': '1023px' },
                991: { 'max': '991px' },  
                767: { 'max': '767px' },
                639: { 'max': '639px' },
                575: { 'max': '575px' },  
                479: { 'max': '479px' },
                374: { 'max': '374px' },
                320: { 'max': '320px' },  
                
                min_width_375: {'raw': '(max-width: 479px) and (min-width: 375px)'},
                min_width_480: {'raw': '(max-width: 767px) and (min-width: 480px)'},
                min_width_768: {'raw': '(max-width: 1023px) and (min-width: 768px)'},
                min_width_1024: {'raw': '(max-width: 1199.9px) and (min-width: 1024px)'},
                min_width_1200: {'raw': '(max-width: 1365px) and (min-width: 1200px)'},
                min_width_1200: {'raw': '(max-width: 1509px) and (min-width: 1200px)'}, 
                min_width_1400: {'raw': '(max-width: 1579px) and (min-width: 1400px)'},
            }
        }
    },
    variantOrder: [

    ],
    variants: {
        // extend: {},
    },
    plugins: [
        
    ],
}
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Legal Consultancy Brand Colors
                cream: {
                    DEFAULT: '#f5f5dc',
                    alt: '#f0f0e6',
                },
                navy: '#1e3a8a',
                teal: '#0d9488',
                bronze: {
                    DEFAULT: '#b87333',
                    hover: '#a0622a',
                    light: '#d4a574',
                },
                charcoal: '#2d3748',
                'grey-secondary': '#718096',
            },
            maxWidth: {
                'content': '1200px',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
        },
    },

    plugins: [forms],
};

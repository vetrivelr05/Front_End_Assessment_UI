/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    extend: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',      
      'black-100': '#212427',      
      'black-200': '#212121',      
      'red': '#ff00ff',
      'gray-100': '#DADEDF',
      'gray-200': '#7A7A7A',
      'gray-300': '#D8D8D8',
      'gray-400': '#f2f5f7',
      'gray-500': '#E6E6E6',
      'blue-100': '#00A1FF',
      'red-100': '#D86161'
    },
    container: {
      center: true,
      DEFAULT: '1rem',
      'max-width':'100%',
      padding: {
        DEFAULT: '1rem',
        '30': '1.875rem',
      },
    },
    spacing: {
      '1': '0.3125rem',
      '5px': '0.75rem',
      '4.2': '4.2rem',
      '18': '1.125rem',
      '30': '1.875rem',
      '49': '3.0625rem',
      '79': '4.9375rem',
      '85': '5.3125rem',
    },
    lineHeight: {
      'unset': '0rem',
    },
    minHeight: {
      '18px': '1.125rem',
      '10': '10.6875rem',
      '36': '2.25rem;',
    },
    borderRadius: {
      '5':'0.3125rem',
      '10':'0.625rem',
    },
    
    height: {
      '48': '3rem',
      '20': '1.25rem',
    },
    width: {
      '48': '3rem',
      '577': '36.0625rem',
      '20': '1.25rem',
    },
    fontSize: {
      '24': '1.5rem',
    },
  },
  plugins: [
    require('@tailwindcss/forms',)
  ],
}
}

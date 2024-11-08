/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'],
  theme: {
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      heading: ['Proxima Nova', 'sans-serif'],
    },
    borderRadius: {
      none: '0',
    },
    extend: {
      width: {
        authPageWidth: '370px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        // Primary brand colors
        'brand-primary': '#E2001A',
        'brand-secondary': '#F5F8FA',
        // OEGB Brand Colors
        'oegb-red': '#E2001A',
        'oegb-bg': '#F5F8FA',

        // Text colors
        'text-primary': '#000000',
        'text-secondary': '#868686',
        'text-tertiary': '#474849',

        // UI Component Colors
        'surface-primary': {
          DEFAULT: '#FFFFFF',
          alt: '#F5F8FA',
        },
        'surface-secondary': {
          DEFAULT: '#F5F8FA',
          hover: '#EAEEF1',
        },
        'surface-tertiary': {
          DEFAULT: '#F5F8FA',
          alt: '#E5E6E7',
        },
        // Border colors
        'border-light': '#E5E6E7',
        'border-medium': '#C5C5C5',
        // Border Colors
        'border': {
          light: '#E5E6E7',
          DEFAULT: '#C5C5C5',
        },

        // Specific Component Colors
        'nav': {
          active: '#E2001A',
          hover: '#F5F8FA',
        },
        'button': {
          primary: '#E2001A',
          secondary: '#FFFFFF',
        },
        'input': {
          focus: '#E2001A',
          border: '#E5E6E7',
        },
        'textArea': {
          base: '#FFFFFF',
          alt: '#F5F8FA',
          focus: 'rgba(226, 0, 26, 0.05)', // Light red tint for focus state
        },
        backgroundColor: theme => ({
          'data-panel': '#F5F8FA',
          'nav-active': theme('colors.oegb-red'),
        }),

        borderColor: theme => ({
          'panel': '#C5C5C5',
          'input-focus': theme('colors.oegb-red'),
        }),
        // Button colors
        'button-primary': {
          bg: '#E2001A',
          text: '#FFFFFF',
        },
        'button-secondary': {
          bg: '#FFFFFF',
          text: '#E2001A',
          border: '#E5E6E7',
        },
        'button-tertiary': {
          bg: '#F5F8FA',
          text: '#474849',
        },

        // Link colors
        'link': '#E2001A',

        // Header specific
        'header': {
          bg: 'rgba(255, 255, 255, 0.8)', // For frosted glass effect
          shadow: 'rgba(0, 0, 0, 0.1)',
        }
      },
      backdropFilter: {
        'header': 'blur(10px)',
      },
      boxShadow: {
        'header': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-radix'),
    // Custom plugin for backdrop filters if needed


  ],
};
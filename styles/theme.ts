import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: '#007AFF', // iOS蓝
    secondary: '#34C759', // iOS绿
    warning: '#FF9500', // iOS橙
    danger: '#FF3B30', // iOS红
    gray: {
      50: '#F9F9F9',
      100: '#F2F2F7',
      200: '#E5E5EA',
      300: '#D1D1D6',
      400: '#C7C7CC',
      500: '#AEAEB2',
      600: '#8E8E93',
      700: '#636366',
      800: '#3A3A3C',
      900: '#1C1C1E',
    }
  },
  fonts: {
    sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
  },
  radii: {
    ios: '12px',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'ios',
        fontWeight: 'medium',
      },
      variants: {
        solid: {
          bg: 'primary',
          color: 'white',
          _hover: {
            bg: 'primary',
            opacity: 0.9,
          },
        },
      },
    },
    Card: {
      baseStyle: {
        p: 5,
        borderRadius: 'ios',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      },
    },
  },
});
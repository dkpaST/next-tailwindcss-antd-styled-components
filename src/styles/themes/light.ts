import darkTheme from './dark';

const light: typeof darkTheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    background: '#F4EDE8',
    text: '#2a2537',
  }
};

export default light;

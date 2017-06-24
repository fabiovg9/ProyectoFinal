import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'button-face': {
    'backgroundColor': '#29487d',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'button-face i': {
    'height': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'button-google': {
    'backgroundColor': '#db4437',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'button-google i': {
    'height': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'a': {
    'cursor': 'pointer'
  },
  'register': {
    'marginLeft': [{ 'unit': 'px', 'value': 16 }],
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'register a': {
    'color': '#365899',
    'textDecoration': 'underline',
    'fontStyle': 'italic',
    'display': 'block',
    'textAlign': 'center'
  },
  'button-sigIn': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': 26 }]
  }
});

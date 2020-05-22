import React from 'react';

import {
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function MenuItem({
  children,
  disabled,
  disabledTextColor,
  ellipsizeMode,
  onPress,
  style,
  textStyle,
  ...props
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}

MenuItem.defaultProps = {
  disabled: false,
  disabledTextColor: '#bdbdbd',
  ellipsizeMode: Platform.OS === 'ios' ? 'clip' : 'tail',
  underlayColor: '#e0e0e0',
};

export default MenuItem;

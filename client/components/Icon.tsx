import React from 'react';
import { View } from 'react-native';
import ColorPallette from '../assets/icons/color-pallete.svg';
import Eye from '../assets/icons/eye.svg';
import Forbidden from '../assets/icons/forbidden.svg';
import GroupUsers from '../assets/icons/group-users.svg';
import Notification from '../assets/icons/notification.svg';
import ProtectedChat from '../assets/icons/protected-chat.svg';
import Wallpaper from '../assets/icons/wallpaper.svg';
import Warning from '../assets/icons/warning.svg';

// Define the icons mapping
const icons = {
  'color-palette': ColorPallette,
  'eye': Eye,
  'forbidden': Forbidden,
  'group-users': GroupUsers,
  'notification': Notification,
  'protected-chat': ProtectedChat,
  'wallpaper': Wallpaper,
  'warning': Warning,
} as const;

// Create type for icon names based on the icons object
type IconName = keyof typeof icons;

// Props interface for the Icon component
interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: object;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color = '#000', 
  style 
}) => {
  // Get the SVG component for the icon name
  const SvgIcon = icons[name];

  return (
    <View style={[{ width: size, height: size }, style]}>
      <SvgIcon
        width={size}
        height={size}
        fill={color}
        stroke={color}
      />
    </View>
  );
};

// Export the IconName type for use in other components
export type { IconName };

export default Icon
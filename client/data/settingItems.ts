import { IconName } from "@/components/Icon";

export const settings: SettingItem[] = [
  {
    id: "mute",
    icon: "notification",
    title: "Mute Notification",
    hasSwitch: true,
  },
  {
    id: "custom-notification",
    icon: "notification",
    title: "Custom Notification",
    hasArrow: true,
  },
  {
    id: "protected",
    icon: "protected-chat",
    title: "Protected Chat",
    hasSwitch: true,
  },
  //   {
  //     id: "hide",
  //     icon: "eye",
  //     title: "Hide Chat",
  //     hasSwitch: true,
  //   },
  //   {
  //     id: "history",
  //     icon: "eye",
  //     title: "Hide Chat History",
  //     hasSwitch: true,
  //   },
  {
    id: "color",
    icon: "color-palette",
    title: "Custom Color Chat",
    hasArrow: true,
  },
  {
    id: "background",
    icon: "wallpaper",
    title: "Custom Background Chat",
    hasArrow: true,
  },
  {
    id: "report",
    icon: "warning",
    title: "Report",
    danger: true,
  },
  {
    id: "block",
    icon: "forbidden",
    title: "Block",
    danger: true,
  },
];

export interface SettingItem {
  id: string;
  icon: IconName;
  title: string;
  hasSwitch?: boolean;
  hasArrow?: boolean;
  danger?: boolean;
}

import type { IconType } from "react-icons";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiGrid,
  FiMail,
  FiMapPin,
  FiMenu,
  FiShare2,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa6";

/**
 * Central icon registry — every icon used across the site is registered
 * here by key, so components never import directly from react-icons.
 */
export const icons = {
  arrowUp: FiArrowUp,
  arrowUpRight: FiArrowUpRight,
  mail: FiMail,
  mapPin: FiMapPin,
  menu: FiMenu,
  close: FiX,
  sparkles: HiOutlineSparkles,
  grid: FiGrid,
  share: FiShare2,
  users: FiUsers,
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  linkedin: FaLinkedinIn,
  globe: FaGlobe,
} as const satisfies Record<string, IconType>;

export type IconKey = keyof typeof icons;

/** Resolve an icon component by its registry key. */
export function getIcon(key: IconKey): IconType {
  return icons[key];
}
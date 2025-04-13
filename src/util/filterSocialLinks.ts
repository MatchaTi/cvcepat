import { socialMediaIcons } from '../constant/icons';
import { SocialLinks } from '../type/social';

export function filterSocialMedia(links: SocialLinks) {
  return Object.entries(links)
    .filter(([_, value]) => !!value)
    .map(([key, value]) => {
      const iconObj = socialMediaIcons.find((icon) => icon.name === key);
      return iconObj ? { name: key, icon: iconObj.icon, link: value as string } : null;
    })
    .filter(Boolean) as { name: string; icon: string; link: string }[];
}

import type { MenuItem } from '../types/menu-item.type';
import type { SocialLink } from '../types/social-link.type';

export const menuItems: MenuItem[] = [
   { name: 'About', href: '/#about' },
   { name: 'Blog', href: '/blog' },
   { name: 'Projects', href: '/projects' },
];

export const socialLinks: SocialLink[] = [
   {
      href: 'https://www.linkedin.com/in/simone-sada/',
      icon: 'pi pi-linkedin',
      label: 'LinkedIn',
   },
   {
      href: 'https://github.com/Glabdugrib',
      icon: 'pi pi-github',
      label: 'GitHub',
   },
   {
      href: 'mailto:simone.sada93+website@gmail.com',
      icon: 'pi pi-at',
      label: 'Email',
   },
];

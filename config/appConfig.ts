import type { Feature } from '~/types/feature.type.js';
import type { MenuItem } from '../types/menu-item.type';
import type { SocialLink } from '../types/social-link.type';

export const menuItems: MenuItem[] = [
   { name: 'About', href: '/#about' },
   { name: 'Blog', href: '/blog' },
   { name: 'Projects', href: '/projects' },
];

export const socialLinks: SocialLink[] = [
   {
      id: 1,
      href: 'https://www.linkedin.com/in/simone-sada/',
      icon: 'pi pi-linkedin',
      label: 'LinkedIn',
   },
   {
      id: 2,
      href: 'https://github.com/Glabdugrib',
      icon: 'pi pi-github',
      label: 'GitHub',
   },
   {
      id: 3,
      href: 'mailto:simone.sada93+website@gmail.com',
      icon: 'pi pi-at',
      label: 'Email',
   },
];

export const features: Feature[] = [
   {
      id: 1,
      icon: {
         name: 'pi-wave-pulse',
         color: 'text-accent-primary',
      },
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod.',
   },
   {
      id: 2,
      icon: {
         name: 'pi-bullseye',
         color: 'text-accent-secondary',
      },
      title: 'Dolor Sit Amet',
      description:
         'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
      id: 3,
      icon: {
         name: 'pi-trophy',
         color: 'text-accent-tertiary',
      },
      title: 'Consectetur Adipiscing',
      description:
         'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
   },
];

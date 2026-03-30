import type { Feature } from '~/types/feature.type.js';
import type { MenuItem } from '../types/menu-item.type';
import type { SocialLink } from '../types/social-link.type';

export const menuItems: MenuItem[] = [
   { name: 'About', href: '/#about' },
   // { name: 'Blog', href: '/blog' },
   { name: 'Projects', href: '/#projects' },
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
      href: 'https://github.com/Glabdugrib?tab=repositories',
      icon: 'pi pi-github',
      label: 'GitHub',
   },
   {
      id: 3,
      href: "mailto:simone.sada93+website@gmail.com?subject=Let's%20connect&body=Hi%20Simone,%0A%0A",
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
      title: 'Built End-to-End',
      description: 'From idea to production. Frontend, backend, and everything in between.',
   },
   {
      id: 2,
      icon: {
         name: 'pi-bullseye',
         color: 'text-accent-secondary',
      },
      title: 'Product Over Code',
      description: 'Thinking about users and outcomes, not just the technical solution.',
   },
   {
      id: 3,
      icon: {
         name: 'pi-lightbulb',
         color: 'text-accent-tertiary',
      },
      title: 'Always Tinkering',
      description: 'Exploring new tools, patterns, and ideas to keep the craft sharp.',
   },
];

import type { Collections } from '@nuxt/content';

export const PROJECT_LINK_CONFIG: Record<
   'github' | 'demo',
   { label: string; icon: string; ariaLabel: string }
> = {
   github: {
      label: 'Code',
      icon: 'pi pi-github',
      ariaLabel: 'View source code on GitHub',
   },
   demo: {
      label: 'Demo',
      icon: 'pi pi-external-link',
      ariaLabel: 'View live demo',
   },
};

export type Project = Collections['projects'];

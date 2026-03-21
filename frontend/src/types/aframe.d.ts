import { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { embedded?: boolean };
      'a-sky': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { color?: string; src?: string };
      'a-cylinder': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { position?: string; radius?: string; height?: string; color?: string; segments-radial?: string; material?: string };
      'a-grid-helper': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { size?: string; divisions?: string; color-center-line?: string; color-grid?: string };
      'a-box': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { position?: string; rotation?: string; color?: string; animation?: string };
      'a-sphere': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { position?: string; radius?: string; color?: string; animation?: string };
      'a-torus-knot': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { position?: string; radius?: string; radius-tubular?: string; color?: string; animation?: string };
      'a-light': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { type?: string; color?: string; intensity?: string; position?: string };
      'a-entity': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { camera?: boolean; look-controls?: boolean; position?: string };
      'a-cursor': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { color?: string };
    }
  }
}

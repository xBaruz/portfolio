declare module '*.glb' {
  const src: string;
  export default src;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          'camera-controls'?: boolean;
          'touch-action'?: string;
          'camera-orbit'?: string;
          'interaction-prompt'?: string;
          ar?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

export {};
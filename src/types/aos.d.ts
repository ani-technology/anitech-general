declare module 'aos' {
  interface AosModule {
    init: (options?: Record<string, unknown>) => void;
    refresh: () => void;
    refreshHard: () => void;
  }

  const content: AosModule;
  export default content;
}

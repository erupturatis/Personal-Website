export function startFadeIn(ref: React.RefObject<HTMLElement>) {
  const element = ref.current;
  if (!element) return;
  element.classList.add('animate-fade-in');
}

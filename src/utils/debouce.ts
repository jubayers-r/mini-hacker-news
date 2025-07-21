export function debounce<T extends (...args: any[]) => void>(fn: T, delay = 300) {
  let timeout: NodeJS.Timeout;

  const debounced = (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };

  // Attach cancel method with correct typing
  (debounced as typeof debounced & { cancel: () => void }).cancel = () => {
    clearTimeout(timeout);
  };

  return debounced as typeof debounced & { cancel: () => void };
}
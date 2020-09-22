export function getStyles(enabled) {
  const tags = Object.keys(enabled).reduce((tags, key) => {
    if (enabled[key]) {
      return [...tags, key];
    }
    return tags;
  }, []);

  return tags.join(' ');
}

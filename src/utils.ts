export function proper(stringText: string): string {
  return stringText.replace(/(\w+)/g, (match) =>
    match[0].toUpperCase().concat(match.slice(1)),
  );
}

export function renderScreen<T extends (...args: any[]) => any>(
    title: string,
    screen?: T,
): ReturnType<T> {
    console.clear();
    console.log(title);
    return screen?.();
}

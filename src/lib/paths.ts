const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const imageVersion = "20260827";

export function assetPath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const separator = normalizedPath.includes("?") ? "&" : "?";
  const cacheBustedPath = normalizedPath.startsWith("/images/")
    ? `${normalizedPath}${separator}v=${imageVersion}`
    : normalizedPath;

  return `${basePath}${cacheBustedPath}`;
}

export function appPath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}

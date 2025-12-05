/**
 * Get the correct image path with basePath for GitHub Pages
 */
export function getImagePath(path: string): string {
  // Get basePath from environment variable (set during build)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Return path with basePath if it exists
  return basePath ? `${basePath}${cleanPath}` : cleanPath;
}


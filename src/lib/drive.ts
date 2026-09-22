export function getDriveFileId(url: string): string | null {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export function getDriveEmbedUrl(url: string): string | null {
  const fileId = getDriveFileId(url);
  if (!fileId) return null;
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

export function isDriveLink(url: string): boolean {
  return url.includes('drive.google.com');
}

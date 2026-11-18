/**
 * Formats a date string or Date object into a human-readable format.
 * @param date - The date to format (ISO string or Date object)
 * @returns Formatted date string (e.g., "November 18, 2026")
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(d.getTime())) {
    return 'Invalid Date';
  }

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

/**
 * Formats a date string or Date object into a relative time format.
 * @param date - The date to format (ISO string or Date object)
 * @param now - Optional reference date (defaults to current date/time)
 * @returns Relative time string (e.g., "2 days ago", "in 3 hours")
 */
export function formatRelativeTime(date: string | Date, now: Date = new Date()): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(d.getTime())) {
    return 'Invalid Date';
  }

  const diffMs = now.getTime() - d.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);

  if (diffSec < 60) return 'just now';
  if (diffMin < 60) return `${diffMin} minute${diffMin > 1 ? 's' : ''} ago`;
  if (diffHour < 24) return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`;
  if (diffDay < 7) return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
  if (diffWeek < 4) return `${diffWeek} week${diffWeek > 1 ? 's' : ''} ago`;
  if (diffMonth < 12) return `${diffMonth} month${diffMonth > 1 ? 's' : ''} ago`;
  return `${diffYear} year${diffYear > 1 ? 's' : ''} ago`;
}

/**
 * Validates if a string is a valid ISO date.
 * @param dateString - The string to validate
 * @returns True if valid, false otherwise
 */
export function isValidDate(dateString: string): boolean {
  const d = new Date(dateString);
  return !isNaN(d.getTime());
}
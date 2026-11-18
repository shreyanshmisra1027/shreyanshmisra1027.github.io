import { describe, it, expect, beforeEach } from 'vitest';
import { formatDate, formatRelativeTime, isValidDate } from '../date';

describe('formatDate', () => {
  it('formats a Date object correctly', () => {
    const date = new Date('2026-01-15');
    const result = formatDate(date);
    expect(result).toBe('January 15, 2026');
  });

  it('formats an ISO string correctly', () => {
    const result = formatDate('2026-11-18');
    expect(result).toBe('November 18, 2026');
  });

  it('returns "Invalid Date" for an invalid ISO string', () => {
    const result = formatDate('not-a-date');
    expect(result).toBe('Invalid Date');
  });
});

describe('formatRelativeTime', () => {
  const baseTime = new Date('2026-11-18T12:00:00Z');

  it('returns "just now" for the reference time', () => {
    const result = formatRelativeTime(baseTime, baseTime);
    expect(result).toBe('just now');
  });

  it('returns minutes ago for recent dates', () => {
    const thirtyMinsAgo = new Date('2026-11-18T11:30:00Z');
    const result = formatRelativeTime(thirtyMinsAgo, baseTime);
    expect(result).toBe('30 minutes ago');
  });

  it('returns hours ago for older dates', () => {
    const twoHoursAgo = new Date('2026-11-18T10:00:00Z');
    const result = formatRelativeTime(twoHoursAgo, baseTime);
    expect(result).toBe('2 hours ago');
  });

  it('returns days ago for dates from last week', () => {
    const twoDaysAgo = new Date('2026-11-16T12:00:00Z');
    const result = formatRelativeTime(twoDaysAgo, baseTime);
    expect(result).toBe('2 days ago');
  });

  it('returns weeks ago for older dates', () => {
    const twoWeeksAgo = new Date('2026-11-04T12:00:00Z');
    const result = formatRelativeTime(twoWeeksAgo, baseTime);
    expect(result).toBe('2 weeks ago');
  });

  it('returns months ago for dates from last year', () => {
    const twoMonthsAgo = new Date('2026-09-18T12:00:00Z');
    const result = formatRelativeTime(twoMonthsAgo, baseTime);
    expect(result).toBe('2 months ago');
  });

  it('returns years ago for old dates', () => {
    const tenYearsAgo = new Date('2016-11-18T12:00:00Z');
    const result = formatRelativeTime(tenYearsAgo, baseTime);
    expect(result).toBe('10 years ago');
  });
});

describe('isValidDate', () => {
  it('returns true for a valid ISO date', () => {
    const result = isValidDate('2026-11-18T12:00:00Z');
    expect(result).toBe(true);
  });

  it('returns true for a simple date string', () => {
    const result = isValidDate('2026-11-18');
    expect(result).toBe(true);
  });

  it('returns false for an invalid date string', () => {
    const result = isValidDate('not-a-date');
    expect(result).toBe(false);
  });

  it('returns false for an empty string', () => {
    const result = isValidDate('');
    expect(result).toBe(false);
  });
});
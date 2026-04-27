import { describe, it, expect } from "vitest";
import { formatPostDate, readingTime } from "./format";

describe("formatPostDate", () => {
  it("formats a date as 'YYYY · MMM' uppercase", () => {
    expect(formatPostDate(new Date("2026-04-27T00:00:00Z"))).toBe("2026 · APR");
  });

  it("formats single-digit months correctly", () => {
    expect(formatPostDate(new Date("2026-01-15T00:00:00Z"))).toBe("2026 · JAN");
  });
});

describe("readingTime", () => {
  it("returns at least 1 minute for very short text", () => {
    expect(readingTime("hello world")).toBe(1);
  });

  it("rounds up to nearest minute at ~200 wpm", () => {
    // 401 words → ceil(401/200) = 3
    const text = Array(401).fill("word").join(" ");
    expect(readingTime(text)).toBe(3);
  });

  it("returns 1 for empty input", () => {
    expect(readingTime("")).toBe(1);
  });
});

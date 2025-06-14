/* global process */

import { describe, it, expect } from "vitest";
import { validate } from "../src/index.js";
import "dotenv/config";

describe("Egyptian ID Validator", () => {
  it("should validate a correctly formatted ID", () => {
    const id = process.env.TEST_ID_1;
    if (!id) throw new Error("TEST_ID_1 is not set in environment");

    const result = validate(id);
    expect(result).not.toBeNull();
    expect(result.valid).toBe(true);
  });

  it("should return null for invalid ID format", () => {
    expect(validate("abc")).toBeNull();
    expect(validate("123")).toBeNull();
  });
});

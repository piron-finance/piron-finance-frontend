import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    capital: v.optional(v.string()),
  }).index("by_email", ["email"]),
});

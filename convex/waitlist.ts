import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const AddToWaitlist = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    capital: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // check if fthe email already exists
    const existingWaitlist = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .collect();

    if (existingWaitlist.length > 0) {
      throw new Error("Email already exists");
    }

    const waitlist = ctx.db.insert("waitlist", {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      capital: args.capital,
    });

    return waitlist;
  },
});

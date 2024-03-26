import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    capital: v.optional(v.string()),
  }).index("by_email", ["email"]),

  pools: defineTable({
    poolName: v.string(),
    assetOriginatorName: v.string(),
    targetRaise: v.number(),
    totalRaised: v.number(),
    duration: v.number(),
    yield: v.number(),
    launchDate: v.string(),
    closeDate: v.string(),
    assetType: v.string(),
    poolStatus: v.string(),
  }).index("by_pool_name", ["poolName"]),

  poolDetails: defineTable({
    poolId: v.id("pools"),
    details: v.array(
      v.object({
        property: v.string(),
      })
    ),
    outstandingPrincipal: v.number(),
    outstandingInterest: v.number(),
    totalRepayment: v.number(),
    health: v.string(), // Assuming health is a string representation
    maturityDate: v.string(),
    requirements: v.array(v.string()), // Assuming requirements can be multiple strings
    fees: v.number(),
  }).index("by_pool", ["poolId"]),

  assetOriginators: defineTable({
    poolId: v.id("pools"),
    description: v.string(),
    totalRaised: v.number(),
    dealsLaunched: v.number(),
    health: v.string(),
    contact: v.string(),
    teamDesc: v.string(),
  }).index("by_pool", ["poolId"]),

  teamMembers: defineTable({
    assetOriginatorId: v.id("assetOriginators"),
    name: v.string(),
    image: v.string(),
    role: v.string(),
    social: v.array(v.string()),
  }).index("by_asset_originator", ["assetOriginatorId"]),
});

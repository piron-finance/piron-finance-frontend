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
    details: v.array(
      v.object({
        title: v.string(),
        desc: v.string(),
      })
    ),
    assetOriginatorName: v.string(),
    targetRaise: v.optional(v.number()),
    totalRaised: v.number(),
    outstandingPrincipal: v.optional(v.number()),
    outstandingInterest: v.optional(v.number()),
    totalRepayment: v.optional(v.number()),
    duration: v.number(),
    yield: v.number(),
    launchDate: v.string(),
    closeDate: v.string(),
    vaultAddress: v.string(),
    assetType: v.string(),
    poolStatus: v.string(),
    health: v.string(),
    maturityDate: v.string(),
    requirements: v.array(v.string()),
    fees: v.array(
      v.object({
        protocol: v.string(),
        management: v.string(),
      })
    ),
  })
    .index("by_pool_name", ["poolName"])
    .index("by_asset_originator", ["assetOriginatorName"])
    .index("by_pool_status", ["poolStatus"])
    .index("by_pool_status_and_asset_originator", [
      "poolStatus",
      "assetOriginatorName",
    ])
    .index("by_pool_status_and_asset_type", ["poolStatus", "assetType"]),

  assetOriginators: defineTable({
    poolId: v.id("pools"),
    description: v.string(),
    totalRaised: v.number(),
    dealsLaunched: v.number(),
    health: v.string(),
    contact: v.array(v.string()),
    teamDesc: v.string(),
    team: v.array(
      v.object({
        name: v.string(),
        title: v.string(),
        bio: v.string(),
        image: v.string(),
        socials: v.array(
          v.object({
            platform: v.string(),
            link: v.string(),
          })
        ),
      })
    ),
  }).index("by_pool", ["poolId"]),

  users: defineTable({
    email: v.string(),
    password: v.string(),
    role: v.string(),
    walletAddress: v.string(),
  }).index("by_email", ["email"]),
});

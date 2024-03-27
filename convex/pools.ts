import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";

export const createPool = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const pool = ctx.db.insert("pools", {
      ...args,
    });

    return pool;
  },
});

// add userwallet address as userId

export const addAssetOriginator = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const assetOriginator = ctx.db.insert("assetOriginators", {
      ...args,
    });

    return assetOriginator;
  },
});

export const getPools = query({
  handler: async (ctx) => {
    const pools = await ctx.db.query("pools").collect();
    return pools;
  },
});

export const getPoolsById = query({
  args: {
    poolId: v.id("pools"),
  },
  handler: async (ctx, args) => {
    const pool = await ctx.db.get(args.poolId);
    if (!pool) {
      throw new Error("Document not found");
    }
    return pool;
  },
});

export const getAssetOriginatorByPoolId = query({
  args: {
    poolId: v.id("pools"),
  },
  handler: async (ctx, args) => {
    const assetOriginator = await ctx.db
      .query("assetOriginators")
      .withIndex("by_pool", (q) => q.eq("poolId", args.poolId))
      .unique();

    return assetOriginator;
  },
});

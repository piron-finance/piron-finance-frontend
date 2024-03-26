import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createPool = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const pool = ctx.db.insert("pools", {
      poolName: args.poolName,
      assetOriginatorName: args.assetOriginatorName,
      targetRaise: args.targetRaise,
      totalRaised: args.totalRaised,
      duration: args.duration,
      yield: args.yield,
      launchDate: args.launchDate,
      closeDate: args.closeDate,
      assetType: args.assetType,
      poolStatus: args.poolStatus,
    });

    return pool;
  },
});

// add userwallet address as userId

export const addPoolDetails = mutation({
  args: {
    poolId: v.id("pools"),
    details: v.array(
      v.object({
        property: v.string(),
      })
    ),
    outstandingPrincipal: v.number(),
    outstandingInterest: v.number(),
    totalRepayment: v.number(),
    health: v.string(),
    maturityDate: v.string(),
    requirements: v.array(v.string()),
    fees: v.number(),
  },
  handler: async (ctx, args) => {
    const poolDetails = ctx.db.insert("poolDetails", {
      poolId: args.poolId,
      details: args.details,

      outstandingPrincipal: args.outstandingPrincipal,
      outstandingInterest: args.outstandingInterest,
      totalRepayment: args.totalRepayment,
      health: args.health,
      maturityDate: args.maturityDate,
      requirements: args.requirements,
      fees: args.fees,
    });

    return poolDetails;
  },
});

export const addAssetOriginator = mutation({
  args: {
    poolId: v.id("pools"),
    description: v.string(),
    totalRaised: v.number(),
    dealsLaunched: v.number(),
    health: v.string(),
    contact: v.string(),
    teamDesc: v.string(),
  },
  handler: async (ctx, args) => {
    const assetOriginator = ctx.db.insert("assetOriginators", {
      poolId: args.poolId,
      description: args.description,
      totalRaised: args.totalRaised,
      dealsLaunched: args.dealsLaunched,
      health: args.health,
      contact: args.contact,
      teamDesc: args.teamDesc,
    });

    return assetOriginator;
  },
});

export const addTeamMembers = mutation({
  args: {
    assetOriginatorId: v.id("assetOriginators"),
    name: v.string(),
    image: v.string(),
    role: v.string(),
    social: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const teamMember = ctx.db.insert("teamMembers", {
      assetOriginatorId: args.assetOriginatorId,
      name: args.name,
      image: args.image,
      role: args.role,
      social: args.social,
    });

    return teamMember;
  },
});

export const getPools = query({
  handler: async (ctx) => {
    const pools = await ctx.db.query("pools").collect();
    return pools;
  },
});

export const getPoolDetailById = query({
  args: {
    poolId: v.id("pools"),
  },
  handler: async (ctx, args) => {
    const pool = await ctx.db
      .query("poolDetails")
      .withIndex("by_pool", (q) => q.eq("poolId", args.poolId))
      .unique();

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

export const getTeamMembersByAssetOriginatorId = query({
  args: {
    assetOriginatorId: v.id("assetOriginators"),
  },
  handler: async (ctx, args) => {
    const teamMembers = await ctx.db
      .query("teamMembers")
      .withIndex("by_asset_originator", (q) =>
        q.eq("assetOriginatorId", args.assetOriginatorId)
      )
      .collect();

    return teamMembers;
  },
});

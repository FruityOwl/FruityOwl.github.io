import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { GameState } from "../../app/types"
import type { RootState } from "../../app/store"

export interface TokenUpdate {
  type: string // state key, not Token enum
  value: number
}
const initialState: GameState = {
  health: 14, // default starting HP for middleweight
  healthBars: 1,
  shields: 0,
  extraShields: "",
  challenging: "",
  challengedBy: "",
  tokens: {
    speed: {
      value: 0,
      helpText: `Spend one to move in any direction at any time between actions, or in the middle of your own actions.
        These can be used during enemy turns, but only at the start, end, or when placed over an Edge.
        Speed tokens are usually discarded at the end of every turn (unless your stance says otherwise)`,
    },
    iron: {
      value: 0,
      helpText:
        "For each token spent, make an enemy Action deal 1 less damage to you and move you 1 fewer spaces.",
    },
    power: {
      value: 0,
      helpText: `Spend one to make an Action deal 1 extra damage or push the target back 1 extra space.
        If the Action would normally deal damage and push the target, both effects are increased.
        You can only spend 1 power token per hit`,
    },
    burning: {
      value: 0,
      helpText:
        "At the end of your turn, take [N tokens held] damage, then discard one",
    },
    weakness: {
      value: 0,
      helpText:
        "Whenever you would deal damage to an enemy, reduce the damage by 2, then discard one weakness token.",
    },
    fatigue: {
      value: 0,
      helpText:
        "If you attempt to move or teleport using Free Movement, an Action, or an Ability while you have Fatigue tokens, instead discard one Fatigue token, and reduce the number of spaces you would move or teleport by 2. Swaps and Forced Movement are unaffected by Fatigue Tokens.",
    },
    chaos: { value: 0, helpText: "Use at any time to take a 4+ action" },
    control: {
      value: 0,
      helpText:
        "Spend 1 to negate an action within range, spend 2 to redirect it. The action still originates from that enemy, so use their range for targeting.",
    },
    mentor: {
      value: 0,
      helpText:
        "The active character heals 1, then performs a Unique Action available to their current Stance, without paying its cost. For the purposes of Gates or the value of X, use a value of 4. Usable once per turn, only during allies’ turns. Usable while you are Taken Out",
    },
    training: {
      value: 0,
      helpText: `Spend one before an action to increase all numbers (including cost) by 1. You may only spend 1 per turn.
      NB: Be careful of the wording of the action. Actions that are phrased as "an ally" or "an enemy" still only have one target.`,
    },
    luck: {
      value: 0,
      helpText: "Once per turn, after any Action fully resolves, you may spend 1 Luck Token to Teleport 3 and Heal 1. 1 Luck Token may also be used to pay for (part of) any Token Action, in place of up to 3 Basic Tokens, 3 HP, or 3 Shield. This can be used as often as you have Luck Tokens and costs to reduce.",
    },
  },
}

export const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    setHealth: (state, action: PayloadAction<number>) => {
      state.health = action.payload
    },
    setHealthBars: (state, action: PayloadAction<number>) => {
      state.healthBars = action.payload
    },
    setShields: (state, action: PayloadAction<number>) => {
      state.shields = action.payload
    },
    setExtraShields: (state, action: PayloadAction<string>) => {
      state.extraShields = action.payload
    },
    setChallenging: (state, action: PayloadAction<string>) => {
      state.challenging = action.payload
    },
    setChallengedBy: (state, action: PayloadAction<string>) => {
      state.challengedBy = action.payload
    },
    setToken: (state, action: PayloadAction<TokenUpdate>) => {
      if (Object.hasOwn(state.tokens, action.payload.type)) {
        state.tokens[action.payload.type].value = Math.max(
          0,
          action.payload.value,
        )
      }
    },
  },
})

export const {
  setHealth,
  setHealthBars,
  setShields,
  setExtraShields,
  setChallengedBy,
  setChallenging,
  setToken,
} = gameStateSlice.actions

export const selectGameState = (state: RootState) => state.hero.gameState

import type { Action } from "./types"
import {
  Dice,
  Token,
  type Form,
  type Style,
  type Archetype,
  type Build,
} from "./types"
export const defaultForm: Form = {
  key: "0",
  name: "<unselected>",
  ability: {
    description: "",
  },
  passiveAbility: {
    name: "",
    description: "",
  },
  actionDice: [],
  forbiddenActionDice: [],
  actions: [],
}
export const forms: Form[] = [
  {
    key: "b",
    ability: {
      description:
        "Your Actions may apply to one extra target within range. When you add Blaster Form to a Style, increase that Style's maximum range by 1.",
    },
    passiveAbility: {
      name: "Basically Magic",
      description: "You have an ability that's beyond normal, like lycanthropy, telekinesis, fire magic, ghost powers, or something else. When you take this skill, write down what kind of power you have.",
    },
    actionDice: [Dice.d8, Dice.d8, Dice.d8],
    forbiddenActionDice: [Dice.d8],
    name: "Blaster",
    rangeModifiers: [{ relMaxRange: 1 }],
    actions: [
      {
        name: "Amplify",
        levels: [
          {
            diceCost: [3],
            description:
              "Your next Action this turn has its maximum range increased by 3, and may apply to one additional target.",
          },
        ],
      },
      {
        name: "Shockwave",
        levels: [
          {
            diceCost: [3],
            description: "Unblockable by Armor and Shields. Deal 1 damage to each enemy within range.",
          },
          {
            diceCost: [6],
            description: "6+: Deal 2 damage to one enemy within range.",
          },
        ],
      },
    ],
  },
  {
    key: "c",
    ability: {
      description: `After you spend Control Tokens, you may Push 1 or Pull 1 to the enemy whose Action you Controlled.
                    When you add Control Form to a Style, choose one:
                      Increase that Style's maximum range by 3.
                      Setthat Style's minimum range to 0.`,
    },
    passiveAbility:{
      name: "Professional",
      description: "You always look stylish, cool, and in control. People listen when you make demands of them, and you have some lackeys or followers who will do what you say.",
    },
    actionDice: [Dice.d10, Dice.d8, Dice.d6, Dice.d4],
    forbiddenActionDice: [Dice.d8, Dice.d6],
    name: "Control",
    rangeModifiers: [{ relMaxRange: 3 }, { absMinRange: 1 }],
    actions: [
      {
        name: "Suppression",
        levels: [
          {
            diceCost: [3],
            description: "You gain 1 Control token and may Move 1.",
          },
          {
            diceCost: [6],
            description: "6+: You gain 1 Control token and may Move 1.",
          },
          {
            diceCost: [9],
            description: "9+: You gain 1 Control token and may Move 1.",
          },
        ],
      },
    ],
  },
  {
    key: "d",
    ability: {
      description:
        `After you take damage, pay HP, or are healed, you gain 1 Speed token. 
        When you Bleed, gain 3 Speed tokens. 
        After each Dice Action you perform, if it applied Forced Movement to an enemy, they must discard 1 Basic token, if they have any. If it applied Forced Movement to an ally, they heal 1. If it moved, swapped, or teleported you, you heal 1`,
    },
    passiveAbility: {
      name: "Put On A Show",
      description: "You can draw as much attention as you want, whenever you want it, away from anything else, for any reason.",
    },
    actionDice: [Dice.d10, Dice.d8, Dice.d6],
    forbiddenActionDice: [Dice.d8, Dice.d6],
    name: "Dance",
    actions: [
      {
        name: "Dance Together",
        levels: [
          {
            tokenCost: [
              {
                number: 3,
                tokenType: Token.Speed,
              },
            ],
            description: "Choose someone within range. Pull them 1, then you Move 1, then you Pull them 1 more. Usable once per turn",
          },
        ],
      },
      {
        name: "Tango",
        levels: [
          {
            diceCost: [3],
            description: " Swap spaces with an adjacent enemy, then Push them 1.",
          },
          {
            diceCost: [6],
            description: " 6+: Pull them 2, then deal 2 damage to them.",
          },
          {
            diceCost: [10],
            description: " 10+: Push them 4, then deal 3 damage to them.",
          },
        ],
      },
      {
        name: "Tango",
        levels: [
          {
            diceCost: [4],
            description: " Push 3 to someone within range, then Move 1.",
          },
          {
            diceCost: [7],
            description: " 7+: Move 2 more, then heal.",
          },
        ],
      },
    ],
  },
  {
    key: "i",
    ability: {
      description:
        "You have Armor. When your Armor triggers, you gain 1 Iron token. When you gain Speed tokens, replace half of them (rounded down) with Iron tokens. You may spend 1 Iron token to take 1 less damage from any source (even Reduced Hits).",
    },
    passiveAbility: {
      name: "Immovable",
      description: "When you plant your feet and stand your ground, nothing can get past you or hurt you, not even vehicles or gunfire.",
    },
    actionDice: [Dice.d8, Dice.d6, Dice.d6],
    forbiddenActionDice: [Dice.d6, Dice.d6],
    name: "Iron",
    actions: [
      {
        name: "Secure",
        levels: [
          {
            diceCost: [3],
            description:
              "Choose two: Gain 2 Iron tokens;-or- an ally within range other than yourself gains 2 Iron tokens;-or- give Shield 2 to an ally within range.",
          },
        ],
      },
      {
        name: "Contain",
        levels: [
          {
            diceCost: [3],
            description:
              "Target an enemy within range, then Choose two: Challenge them;-or- Give them 2 Fatigue tokens;-or- place a Trap into their space.",
          },
        ],
      },
      {
        name: "Protect",
        levels: [
          {
            diceCost: [6],
            description: "Choose four from the Secure and Contain lists. Options from the Contain list must target an enemy within range.",
          },
        ],
      },
    ],
  },
  {
    key: "o",
    ability: {
      description:
        "Before each Action you perform, you may Move 1. After your first Action on your turn, Move 1, then deal 2 damage to an enemy within range. At the end of each turn where you performed any Actions, you may deal 1 damage to an enemy within range, then Move 2.",
    },
    passiveAbility: {
      name: "Think Fast",
      description: "You can come up with plans and act on them in an instant. You never lose in games of skill, and you can fast talk anyone into seeing things your way.",
    },   
    actionDice: [Dice.d6, Dice.d6, Dice.d4, Dice.d4],
    forbiddenActionDice: [Dice.d6, Dice.d4],
    name: "One-Two",
    actions: [
      {
        name: "Slide In",
        levels: [
          {
            diceCost: [1],
            description: "Teleport 2 spaces",
          },
          {
            diceCost: [4],
            description: "4+: Teleport 2 more, then you may deal 1 damage to an enemy within range",
          },
        ],
      },
      {
        name: "Left, Right!",
        levels: [
          {
            diceCost: [4],
            description: "Deal 1 damageto an enemy within range, then deal 2 damage to a different enemy within range.",
          },
        ],
      },
    ],
  },
  {
    key: "p",
    ability: {
      description:
        "When you gain Speed tokens, replace half of them (rounded down) with Power tokens. You can Enhance a Hit two additional times.",
    },
    passiveAbility: {
      name: "Unstoppable",
      description: "You can smash through any door, wall, or vehicle.",
    },
    actionDice: [Dice.d10, Dice.d10, Dice.d4],
    forbiddenActionDice: [Dice.d10, Dice.d4],
    name: "Power",
    actions: [
      {
        name: "Yell",
        levels: [
          {
            diceCost: [3],
            description: "You gain Power tokens equal to half of X (rounded up), then you gain a Shield with a value equal to half of X (rounded down).",
          },
        ],
      },
      {
        name: "Crush",
        levels: [
          {
            diceCost: [6],
            description:
              "Unblockable by Abilities and Tokens. Deal 3 damage to an enemy within range.",
          },
          {
            diceCost: [9],
            description:
              " 9+: Deal 5 damage instead, and Crush is Unblockable.",
          },
        ],
      },
    ],
  },
  {
    key: "r",
    ability: {
      description:
        "You have Armor. Unblockable by Control Tokens and Iron Tokens. The first time your Armor triggers each turn, you may Teleport 2. Then, if your Action Pool is empty, add a 3 to your Action Pool",
    },
    passiveAbility: {
      name: " Perfect Timing",
      description: "You are always in the right place at the right time. You can perfectly catch or stop anything coming directly at you with a single, well-placed motion.",
    },
    actionDice: [Dice.d8, Dice.d8, Dice.d6, Dice.d4],
    forbiddenActionDice: [Dice.d8, Dice.d4],
    name: "Reversal",
    actions: [
      {
        name: "Palm Strike",
        levels: [
          {
            diceCost: [3],
            description:
              " Push 3 and deal 1 damage to an adjacent enemy.",
          },
        ],
      },
      {
        name: "Deep Breathing",
        levels: [
          {
            otherCost: ["X"],
            description:
              "Move up to 2. This movement ignores obstacles. At the start of the next turn, add X to your Action Pool. Usable once per turn. Unblockable.",
          },
        ],
      },
      {
        name: "Rupture",
        levels: [
          {
            otherCost: ["X"],
            description:
              "An enemy within range gains X Burning Tokens. This can only target the active character.",
          },
        ],
      },
    ],
  },
  {
    key: "s",
    ability: {
      description:
        "At the start and end of your turn, you gain 2 Speed tokens. At the start of each Movement Phase, you may Move 1. You do not discard any Speed tokens during the End Phase.",
    },
    passiveAbility: {
      name: "Shadow Walker",
      description: "If you don't want to draw attention to yourself, no one will ever notice you sneaking around, even in plain sight.",
    },
    actionDice: [Dice.d4, Dice.d4, Dice.d4, Dice.d4, Dice.d4, Dice.d4],
    forbiddenActionDice: [Dice.d4, Dice.d4, Dice.d4],
    name: "Shadow",
    actions: [
      {
        name: "Stunt",
        levels: [
          {
            tokenCost: [
              {
                number: 3,
                tokenType: Token.Speed,
              },
            ],
            description:
              "Place one Fog, Copy, Pit, or Trap obstacle into an adjacent space, then teleport 2. During enemy turns: usable once per turn.",
          },
        ],
      },
    ],
  },
  {
    key: "S",
    ability: {
      description:
        "At the start of your turn, choose your song: Iron, Power, or Speed. You gain 3 tokens of the chosen type, and each ally (other than yourself) gains 1 token of the chosen type.",
    },
    passiveAbility: {
      name: "Natural Charisma",
      description: "People naturally like you. Anyone who is not your enemy is your friend, even if you've just met them.",
    },
    actionDice: [Dice.d8, Dice.d6, Dice.d6, Dice.d4],
    forbiddenActionDice: [Dice.d8, Dice.d4],
    name: "Song",
    actions: [
      {
        name: "Sing Along",
        levels: [
          {
            diceCost: [2],
            description:
              "Target an ally you can see. Choose one: They discard one token;-or- they heal 2;-or- they gain 2 tokens from your song. Usable once per turn.",
          },
          {
            diceCost: [4],
            description: " 4+: They also choose one from the list.",
          },
          {
            diceCost: [6],
            description:
              " 6+: Add a 4 to their Action Pool.",
          },
        ],
      },
      {
        name: "Diss Track",
        levels: [
          {
            diceCost: [3],
            description:
              "Target an enemy you can see. Choose one to give them: 2 Burning tokens;-or- 2 Fatigue tokens;-or- 2 Weakness Tokens.",
          },
          {
            diceCost: [5],
            description: "5+: They also choose one from the list.",
          },
          {
            diceCost: [6],
            description:
              "6+: Pull 2 and Challenge them.",
          },
        ],
      },
    ],
  },
  {
    key: "v",
    ability: {
      description:
        "At the start and end of your turn, you gain Shield 2. After your Shield absorbs from an enemy Action, you deal 1 damage to them. If it broke your Shield, you deal 2 damage instead.",
    },
    passiveAbility: {
      name: "Rose Heart",
      description: "You can redirect others' anger to more productive ends. Your soothing voice and gentle touch can calm rampaging beasts, unruly mobs, and anyone else acting out of hurt or anger.",
    },
    actionDice: [5, Dice.d6, Dice.d6, Dice.d6],
    forbiddenActionDice: [5, Dice.d6],
    name: " Thorns Form",
    actions: [
      {
        name: "Blossoms",
        levels: [
          {
            diceCost: [3],
            description: "You gain Shield 2 and choose one: Gain 1 Power token;-or- Move 1;-or- heal 1.",
          },
          {
            diceCost: [6],
            description: " 6+: Instead, gain Shield 4 and choose two.",
          },
        ],
      },
      {
        name: "Stand Strong",
        levels: [
          {
            otherCost: ["Destroy Your Shield"],
            description: "Deal 1 damage to up to X enemies within Range 1-X, then gain 1 Power token. X is equal to the value of the destroyed Shield. Usable twice per turn",
          },
        ],
      },
    ],
  },
  {
    key: "v",
    ability: {
      description:
        "At the start of your turn, discard up to 2 Status tokens you hold; then, if you are Bleeding, you heal. At the end of your turn, choose up to two enemies within range and give them each 1 Weakness token.",
    },
    passiveAbility: {
      name: "",
      description: "Your senses are unusually strong. You cannot be surprised by anything, and always have a chance to react first.",
    },
    actionDice: [5, 4, 3, 2, 1],
    forbiddenActionDice: [5, 3],
    name: "Vigilance",
    actions: [
      {
        name: "Bow Down",
        levels: [
          {
            diceCost: [2],
            description: "Give one weakness token to an enemy within range.",
          },
          {
            diceCost: [4],
            description: " 4+: Give 1 Weakness token to each enemy within range.",
          },
        ],
      },
      {
        name: "Stand Strong",
        levels: [
          {
            diceCost: [1],
            description: "Give 1 Power token to an ally within range. Usable once per turn.",
          },
          {
            diceCost: [3],
            description: " 3+: Heal that ally.",
          },
          {
            diceCost: [5],
            description: " 5+: Heal and give 1 Power token to a different ally within range.",
          },
        ],
      },
    ],
  },
  {
    key: "w",
    ability: {
      description:
        "After each Action you perform, if you are not Bleeding, you pay 1 HP. At the start of your turn, you gain 2 Power tokens. When you Bleed, add a 4 toyour Action Pool.",
    },
    passiveAbility: {
      name: "",
      description: "You can leap to anywhere you can see, run along walls, run as fast as a car, and, if you have an explanation, fly.",
    },
    actionDice: [Dice.d10, Dice.d6, Dice.d6],
    forbiddenActionDice: [Dice.d10],
    name: "Wild",
    actions: [
      {
        name: "Pounce",
        levels: [
          {
            otherCost: ["Free"],
            description:
              "Pull yourself 3 towards an enemy you can see. Usable once per turn",
          },
        ],
      },
      {
        name: "Howl",
        levels: [
          {
            diceCost: [4],
            description: "Gain 1 Power token, then heal 4, then give 1 Weakness token to each enemy you can see. Usable once per turn.",
          },
        ],
      },
    ],
  },
]
export const defaultArchetype: Archetype = {
  key: "0",
  name: "<unselected>",
  focusedAbility: {
    description: "",
  },
  fusedAbility: {
    description: "",
  },
  franticAbility: {
    description: "",
  },
}
export const archetypes: Archetype[] = [
  {
    key: "a",
    name: "Angel",
    focusedAbility: {
      description:
        "Your Challenges are Unblockable By Shields. At the start of your turn, you may heal, then if you did, Challenge an enemy you can see and deal 1 damage to them. After you Challenge an enemy, deal 1 damage to them and heal 1.",
    },
    franticAbility: {
      description:
        "Your Challenges are Unblockable By Shields. At the start of this turn, you may heal, then if you did, Challenge an enemy you can see and deal 1 damage to them. Until your next turn, after you Challenge an enemy, deal 1 damage to them and heal 1.",
    },
    fusedAbility: {
      description:
        "Your Challenges are Unblockable By Shields. At the start of your turn, you may heal 2, then if you did, Challenge an enemy you can see. After you Challenge an enemy, you deal 1 damage to them.",
    },
  },
  {
    key: "c",
    name: "Cavalry",
    focusedAbility: {
      description:
        "At the start and end of your turn, you may Move up to 2, then you and each ally within range gains Shield 2.",
    },
    franticAbility: {
      description:
        "At the start and end of this turn, you may Move up to 2, then you and each ally within range gains Shield 2.",
    },
    fusedAbility: {
      description:
        "At the start of your turn, you may Move up to 2, then you and each ally within range gains Shield 2.",
    },
  },
  {
    key: "y",
    name: "Cyborg",
    focusedAbility: {
      description:
        "At the start of your turn, you gain 3 Basic Tokens of one type, 2 Basic tokens of a different type, and 1 Basic token of the final type.",
    },
    franticAbility: {
      description:
        "At the start of this turn, you gain 3 Basic Tokens of one type, 2 Basic tokens of a different type, and 1 Basic token of the final type.",
    },
    fusedAbility: {
      description:
        "At the start of your turn, you gain 2 Basic Tokens of one type, and 1 Basic token of each other type.",
    },
  },
  {
    key: "d",
    name: "Demon",
    focusedAbility: {
      description: "At the end of your turn, you gain 2 Chaos Tokens. At the start of each enemy turn, you may Pull yourself up to X spaces towards the active character, where X is the number of Chaos Tokens you hold.",
    },
    franticAbility: {
      description: "At the end of this turn, you gain 2 Chaos Tokens. Until your next turn, at the start of each enemy turn, you may Pull yourself up to X spaces towards the active character, where X is the number of Chaos Tokens you hold.",
    },
    fusedAbility: {
      description: "At the end of your turn, you gain 1 Chaos Token. At the start of each enemy turn, you may Pull yourself up to X spaces towards the active character, where X is the number of Chaos Tokens you hold.",
    },
  },
  {
    key: "f",
    name: "Flametongue",
    focusedAbility: {
      description:
        "Three times per turn, after you deal damage to an enemy, give them 2 Burning tokens.",
    },
    franticAbility: {
      description:
        "Until your next turn, three times per turn, after you deal damage to an enemy, give them 2 Burning tokens.",
    },
    fusedAbility: {
      description:
        "Three times per turn, after you deal damage to an enemy, give them 1 Burning token.",
    },
  },
  {
    key: "g",
    name: "Gunkata",
    focusedAbility: {
      description:
        "At the start and end of your turn, you perform one Gunslinger Action of your choice without paying its cost, from among those available to you in your current Stance.",
    },
    franticAbility: {
      description:
        "At the start and end of this turn, you perform one Gunslinger Action of your choice without paying its cost, from among those available to you in your current Stance.",
    },
    fusedAbility: {
      description:
        "At the start-or- end of your turn, you perform one Gunslinger Action of your choice without paying its cost, from among those available to you in your current Stance.",
    },
  },
  {
    key: "h",
    name: "Phantom",
    focusedAbility: {
      description:
        " At the start of your turn, you gain 4 Poltergeist Tokens.",
    },
    franticAbility: {
      description:
        "At the start of this turn, you gain 4 Poltergeist Tokens.",
    },
    fusedAbility: {
      description:
        "At the start of your turn, you gain 2 Poltergeist Tokens.",
    },
  },
  {
    key: "p",
    name: "Punk",
    focusedAbility: {
      description:
        "At the start of your turn, add X to your Action Pool. X is equal to the damage on your current health bar, to a maximum of 13. If your health bar is full, X = 3.",
    },
    franticAbility: {
      description:
        "At the start of this turn, add X to your Action Pool. X is equal to the damage on your current health bar, to a maximum of 13. If your health bar is full, X = 3.",
    },
    fusedAbility: {
      description:
        "At the start of your turn, add X to your Action Pool. X is equal to half the damage on your current health bar, rounded up, to a maximum of 9. If your health bar is full, X = 2.",
    },
  },
  {
    key: "t",
    name: "Teacher",
    focusedAbility: {
      description: "At the start of your turn, you gain 2 Mentor Tokens.",
    },
    franticAbility: {
      description: " At the start of this turn, you gain 2 Mentor Tokens.",
    },
    fusedAbility: {
      description: " At the start of your turn, you gain 1 Mentor Token.",
    },
  },
  {
    key: "r",
    name: "Trickster",
    focusedAbility: {
      description:
        "At the start of each turn, you may target 1 non-Unique token held by someone within range of you or your Copies, then choose one or both: Steal the chosen token;-and/or Convert the chosen token into an Iron token.",
    },
    franticAbility: {
      description:
        "Until your next turn, at the start of each turn, you may target 1 non-Unique token held by someone within range of you or your Copies, then choose one or both: Steal the chosen token;-and/or Convert the chosen token into an Iron token.",
    },
    fusedAbility: {
      description:
        "At the start of each allied turn, you may target 1 non-Unique token held by someone within range of you or your Copies, then choose one or both: Steal the chosen token;-and/or Convert the chosen token into an Iron token.",
    },
  },
  {
    key: "u",
    name: "Underdog",
    focusedAbility: {
      description:
        "At the start of your turn, you gain 2 Luck Tokens. The first two times you take damage each turn, you gain 1 Basic token of your choice.",
    },
    franticAbility: {
      description:
        "At the start of this turn, you gain 2 Luck Tokens. Until your next turn, the first two times you take damage each turn, you gain 1 Basic token of your choice.",
    },
    fusedAbility: {
      description:
        "At the start of your turn, you gain 1 Luck Token. The first time you take damage each turn, you gain 1 Basic token of your choice.",
    },
  },
  {
    key: "w",
    name: "Wardancer",
    focusedAbility: {
      description:
        "At the start of the Action Phase of your turn, increase one of your numbers by 3, a different one of your numbers by 2, and one of your remaining numbers by 1. This can only increase a number to a maximum value of 9.",
    },
    franticAbility: {
      description:
        "At the start of the Action Phase of this turn, increase one of your numbers by 3, a different one of your numbers by 2, and one of your remaining numbers by 1. This can only increase a number to a maximum value of 9.",
    },
    fusedAbility: {
      description:
        "At the start of the Action Phase of your turn, increase one of your numbers by 2, and one of your other numbers by 1. This can only increase a number to a maximum value of 5.",
    },
  },
  {
    key: "i",
    name: "Winterblossom",
    focusedAbility: {
      description:
        " At the start of each turn, give 1 Weakness token to one enemy within range of you or your Copies.",
    },
    franticAbility: {
      description:
        "At the start of each turn until your next turn, give 1 Weakness token to one enemy within range of you or your Copies.",
    },
    fusedAbility: {
      description:
        "At the start of each allied turn, give 1 Weakness token to one enemy within range of you or your Copies.",
    },
  },
]
export const bossArchetypes: Archetype[] = [
  {
    key: "1",
    name: "The Blur",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description: "After you perform an Action, you may move one space.",
    },
    franticAbility: {
      description: "",
    },
  },
  {
    key: "2",
    name: "The Immortal",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "The first time you deal damage with an ACtion each turn, you heal.",
    },
    franticAbility: {
      description: "",
    },
  },
  {
    key: "3",
    name: "The Giant",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "You take up a 2x2 space on the battle grid. Your maximum range increasese by 1 in all Stances. Edges do not remove you from play unless your entire 2x2 spaces is over Edge spaces. You can move over Walls. When you do, they become Rubble, and you must discard one Speed token.",
    },
    franticAbility: {
      description: "",
    },
  },
  {
    key: "4",
    name: "The Necromancer",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "At the start of your turn, place a Copy into an empty space you can see. At the end of your turn, each of your Copies may move one space, then each copy deals 1 damage to one adjacent enemy.",
    },
    franticAbility: {
      description: "",
    },
  },
  {
    key: "5",
    name: "The Swarm",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "At the end of your turn, for each Copy you have in play, choose one: You gain 1 Power token; or you gain 1 Iron token; or you may move one space; or each of your Copies may move 1 space; or destroy a Copy to deal 1 damage to each enemy adjacent to it.",
    },
    franticAbility: {
      description: "",
    },
  },
  {
    key: "6",
    name: "The Tank",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "You have Armor. When you are Pushed or Pulled, you move one less space.",
    },
    franticAbility: {
      description: "",
    },
  },
  {
    key: "7",
    name: "The Untouchable",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "At the start of your turn, you gain one Control token. You can spend one Control token to Counter an enemy's Action. When you Counter an Action, that Action targets its user in addition to its other targets.",
    },
    franticAbility: {
      description: "",
    },
  },
  {
    key: "8",
    name: "The Vehicle",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "You take up as much or as little space on the battle grid as you want. Once your shape has been drawn in, it cannot be changed. Enemies and allies can move on top of you. When you move, everyone on top of you moves with you. Spaces inside of you are always within your Range. Edges do not remove you from play unless your entire space is over Edge spaces. You can move over Walls. When you do, they become Rubble, and you must discard a number from your Action Pool.",
    },
    franticAbility: {
      description: "",
    },
  },
]
export const defaultStyle: Style = {
  key: "0",
  name: "<unselected>",
  parentArchetypeName: "<unselected>",
  maxRange: 0,
  minRange: 0,
  ability: {
    description: "",
  },
  actions: [],
}
export const styles = [{
  key: "01",
  parentArchetypeName: "Angel",
  name: "Halcyon",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "At the start of your turn, you may discard one token you hold.\nAfter you discard tokens using an Action or Ability, you gain an equal number of Iron tokens.",
  },
  actions: [{
      name: "Purify",
      levels: [{
          diceCost: [1, 3, 6],
          description: "Discard one token from an ally within range.\n3+: Discard up to two tokens from someone within range.\n6+: Discard up to two tokens from someone within range.",
      }, ],
  }, ],
}, {
  key: "02",
  parentArchetypeName: "Angel",
  name: "Judgment",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "When an enemy with your Challenge token starts their turn, they do not roll their lowest Action Die. It is discarded and unused.\nIf an enemy discards your Challenge token using an enemy Action or Ability, all numbers currently in their Action Pool are reduced by 2 (to a minimum of 1).",
  },
  actions: [{
      name: "Denial",
      levels: [{
          diceCost: [4],
          description: "Teleport into an empty space adjacent to an enemy you can see, then Challenge them.",
      }, ],
  }, ],
}, {
  key: "03",
  parentArchetypeName: "Angel",
  name: "Shining",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "At the start of your turn, Push 1 to all obstacles and enemies adjacent to you.\nEnemies cannot use Action Movement, Free Movement, or teleports to enter a space adjacent to you.\nIf an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held the token takes 3 damage.",
  },
  actions: [{
      name: "Beacon",
      levels: [{
          diceCost: [4],
          description: "Pull up to 4 to an ally you can see, other than yourself.\n4+: Once per turn: You and that ally heal.",
      }, ],
  }, {
      name: "Blinding Light",
      levels: [{
          diceCost: [2, 5],
          description: "Challenge an adjacent enemy, then Push 1 and give them 1 Burning token.\n5+: Instead, Push 3 and give them 3 Burning tokens.",
      }, ],
  }, ],
}, {
  key: "04",
  parentArchetypeName: "Angel",
  name: "Singing",
  minRange: 2,
  maxRange: 4,
  ability: {
      description: "At the start of your turn, choose a Mood: Despair, Sorrow, or Rage.\nDespair: Give 1 Fatigue token to all enemies.\nSorrow: Give 1 Weakness token to all enemies.\nRage: Give 1 Burning token to all enemies.",
  },
  actions: [{
      name: "Rip Chord",
      levels: [{
          diceCost: [2, 5, 8],
          description: "Give one of your Mood's tokens to an enemy within Range.\n5+: Give one of your Mood's tokens to each enemy within Range.\n8+: Give one of your Mood's tokens to each enemy you can see.",
      }, ],
  }, {
      name: "Mood Shift",
      levels: [{
          diceCost: [6],
          description: "Apply all of your Start Effects as this Action’s effects. Usable once per turn, only during your own turn.",
      }, ],
  }, ],
}, {
  key: "05",
  parentArchetypeName: "Angel",
  name: "Winged",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "You do not take Fall Damage.\nRubble does not give you Fatigue tokens.\nAt the end of every turn, you may move 1 space.\nAfter you give an enemy your Challenge token, you may Move 2.",
  },
  actions: [{
      name: "As The Crow Flies",
      levels: [{
          diceCost: [1, 4],
          description: "Teleport 4.\n4+: Challenge an enemy within range, then Teleport 2.",
      }, ],
  }, ],
}, {
  key: "06",
  parentArchetypeName: "Cavalry",
  name: "Charging",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "At the start of your turn, you gain temporary Armor and may Move up to 2.\nAt the start of each ally's turn, that ally may Move up to 2.",
  },
  actions: [{
      name: "Follow My Lead",
      levels: [{
          diceCost: [3, 6],
          description: "You may move 1, then deal 1 damage to an enemy within range.\nAn ally you can see (other than yourself) may move 1, then deal 1 damage to an enemy within their range.\n6+: You may move 1, then deal 1 damage to an enemy within range. An ally you can see (other than yourself) may move 1, then deal 1 damage to an enemy within their range.",
      }, ],
  }, ],
}, {
  key: "07",
  parentArchetypeName: "Cavalry",
  name: "Jumping",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "At the start and end of your turn, you may Teleport 3.\nWhen you Bleed, you may Teleport 3.",
  },
  actions: [{
      name: "Leap In",
      levels: [{
          diceCost: [3],
          description: "Teleport 3. Then, deal 2 damage to an enemy within range.",
      }, ],
  }, {
      name: "Leap Out",
      levels: [{
          diceCost: [5],
          description: "Deal 2 damage to an enemy within range, then teleport 3. Then, choose one: Deal 2 damage to a different enemy within range; -or- heal 2; -or- gain 2 Power tokens.",
      }, ],
  }, ],
}, {
  key: "08",
  parentArchetypeName: "Cavalry",
  name: "Heroic",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "At the start of your turn, you heal 1.\nWhenever an ally within range takes damage, they take half that damage (rounded down) and you take the other half (rounded up).",
  },
  actions: [{
      name: "Burning Heart",
      levels: [{
          otherCost: ["3 HP"],
          description: "Each ally within range gains 2 Iron tokens and 2 Power tokens. Usable once per turn, only while you hold no Power tokens.",
      }, ],
  }, {
      name: "Hero’s Moment",
      levels: [{
          diceCost: [7],
          description: "Deal 4 damage to an adjacent enemy and Push them X.\nX is equal to 2, or to half the damage on your current health bar, rounded up, whichever is higher.",
      }, ],
  }, ],
}, {
  key: "09",
  parentArchetypeName: "Cavalry",
  name: "Rallying",
  minRange: 1,
  maxRange: 3,
  ability: {
      description: "At the start of each ally's turn, if they are within Range of you or your Copies, they may heal.\nAt the end of your turn, choose an ally you can see other than yourself. They heal and gain Shield 2.",
  },
  actions: [{
      name: "Group Up",
      levels: [{
          diceCost: [2, 3, 5],
          description: "Pull up to 3 to one ally you can see.\n3+: Pull up to 3 to one ally you can see.\n5+: Once per turn: Choose one to apply to each ally within range: Heal; -or- Gain 2 Power tokens; -or- Gain Shield 3.",
      }, ],
  }, ],
}, {
  key: "10",
  parentArchetypeName: "Cavalry",
  name: "Unbreakable",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "Your allies within range may spend your tokens.\nAt the start and end of your turn, give 1 Iron token to each ally within range.",
  },
  actions: [{
      name: "Eyes Open",
      levels: [{
          diceCost: [5],
          description: "You gain 4 Iron Tokens and may Move 1.",
      }, ],
  }, {
      name: "Stay Out Of This",
      levels: [{
          otherCost: ["4 Iron Tokens"],
          description: "Give 3 Weakness tokens and Push 3 to an enemy within range.",
      }, ],
  }, ],
}, {
  key: "11",
  parentArchetypeName: "Cyborg",
  name: "Armored",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "After you spend Iron tokens or trigger your Armor, you heal 1. This can heal a maximum of 3 HP per turn.\nIf an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held the token gains 2 Weakness tokens.",
  },
  actions: [{
      name: "Hard Body",
      levels: [{
          diceCost: [2, 6],
          description: "You gain temporary Armor.\n6+: You gain 4 Iron tokens.",
      }, ],
  }, {
      name: "You, Stay",
      levels: [{
          otherCost: ["2 Iron Tokens or 5 Iron Tokens"],
          description: "Challenge an enemy within range. Give that enemy 2 Fatigue tokens.\n5 Iron: Instead, give them 4 Fatigue tokens. You gain Shield 3. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "12",
  parentArchetypeName: "Cyborg",
  name: "Incinerator",
  minRange: 1,
  maxRange: 3,
  ability: {
      description: "After you use a Power token to Enhance a Hit, give 1 Burning token to the target of that hit.\nAfter you take damage from Burning tokens, gain 1 Power token.",
  },
  actions: [{
      name: "Overclock",
      levels: [{
          diceCost: [1, 5],
          description: "Gain 2 Power tokens and 1 Burning token.\n5+: Gain 2 more Power tokens and 1 more Burning token. Usable once per turn.",
      }, ],
  }, {
      name: "Flamethrower",
      levels: [{
          otherCost: ["2 Power Tokens or 4 Power Tokens"],
          description: "Deal 1 damage and give 1 Burning token to an enemy within range.\n4 Power: Instead, deal 2 damage and give 2 Burning tokens, and also, Flamethrower now applies to each target adjacent to the initial target(s). Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "13",
  parentArchetypeName: "Cyborg",
  name: "Machine",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "At the start of your turn, you gain 1 Iron token.\nYou may spend your Iron Tokens as if they were Power tokens or Speed tokens.",
  },
  actions: [{
      name: "High Efficiency",
      levels: [{
          diceCost: [1, 4, 8],
          description: "Choose two: You heal 1; -or- you gain 1 Iron token; -or- you gain 1 Power token; -or- you gain 1 Speed token; -or- you deal 1 damage to an enemy within range.\n4+: Choose all five instead.\n8+: Replace all 1’s in High Efficiency with 2’s.",
      }, ],
  }, ],
}, {
  key: "14",
  parentArchetypeName: "Cyborg",
  name: "Rocket",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "After you Push, you may Teleport to an empty space adjacent to the target of that Push.\nAt the start of your turn, you may Push 3 to an obstacle, ally, or enemy within range.",
  },
  actions: [{
      name: "Nitro Boost",
      levels: [{
          diceCost: [3, 6],
          description: "Teleport 2, then gain 2 Speed tokens.\n6+: Teleport 2, then gain 3 Speed tokens.",
      }, ],
  }, {
      name: "Rocket Tackle",
      levels: [{
          otherCost: ["3 Speed Tokens or 5 Speed Tokens"],
          description: "Push 2 to someone within range.\n5 Speed: If they are an ally, they Move up to 3. If they are an enemy, Push 2 and deal 2 damage to them. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "15",
  parentArchetypeName: "Cyborg",
  name: "Syphon",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "At the start and end of your turn, you may choose 1 token you hold. Either replace it with a Power token, or gain another copy of it.",
  },
  actions: [{
      name: "Power Converter",
      levels: [{
          diceCost: [2, 6],
          description: "Target a single token held by you or someone within range. Choose one or both: You steal the targeted token(s) from them; and/or replace the targeted token(s) with Power tokens.\n6+: Power Converter instead applies to every token they hold of the targeted token’s type.",
      }, ],
  }, ],
}, {
  key: "16",
  parentArchetypeName: "Demon",
  name: "Vampire",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "After you deal damage with an Action or Ability, you heal 1. This Ability cannot heal you more than the Bleed Value in a single turn.\nAfter you give Weakness tokens to an enemy, you gain 1 Power token, to a maximum of 4 Power tokens per turn.",
  },
  actions: [{
      name: "Life Steal",
      levels: [{
          diceCost: [4],
          description: "Deal 2 damage and give 1 Weakness token to an enemy within range.",
      }, ],
  }, {
      name: "Hypnotic Gaze",
      levels: [{
          diceCost: [4],
          description: "Target an enemy you can see. Pull them up to 4, then if they are now within your range, give them 2 Weakness tokens.",
      }, ],
  }, ],
}, {
  key: "17",
  parentArchetypeName: "Demon",
  name: "Slasher",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "After an effect Pushes you, you may Pull yourself up to 2 towards the source of that Push.\nAt the end of every turn, you may Move 1, then you deal 1 damage to an enemy within range.",
  },
  actions: [{
      name: "Suddenly...",
      levels: [{
          diceCost: [4],
          description: "Teleport into an empty space adjacent to someone who is alone, then if they are an enemy, you deal 1 damage to them.\nSomeone is alone if nobody is adjacent to them.",
      }, ],
  }, ],
}, {
  key: "18",
  parentArchetypeName: "Demon",
  name: "Zombie",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "After an enemy destroys any of your Copies, you deal 1 damage to them.\nAt the start of your turn and when you Bleed, place a Copy into a space within range of you or your Copies.\nAt the end of your turn, you deal 1 damage to each enemy adjacent to any of your Copies.",
  },
  actions: [{
      name: "Hunger",
      levels: [{
          diceCost: [4],
          description: "One target within range discards 3 tokens of their choice (or all of their tokens, if they have less). For each token they discarded, place a Copy into an empty space adjacent to them.",
      }, ],
  }, {
      name: "Raise The Dead",
      levels: [{
          diceCost: [4],
          description: "Give 2 Fatigue tokens to an enemy within range, then place 2 Copies in empty spaces adjacent to that enemy.",
      }, ],
  }, ],
}, {
  key: "19",
  parentArchetypeName: "Demon",
  name: "Dark",
  minRange: 2,
  maxRange: 4,
  ability: {
      description: "You can see and target enemies through Fog.\nAt the end of your turn, place a Fog obstacle into your space.",
  },
  actions: [{
      name: "Darkness Dawns",
      levels: [{
          diceCost: [4],
          description: "Place one or two Fog obstacles into empty spaces within range. You may teleport to an empty space within those Fog obstacles.",
      }, ],
  }, {
      name: "Twilight Sorrow",
      levels: [{
          diceCost: [4],
          description: "Each enemy standing within Fog gains 1 Weakness token and 1 Fatigue token. Then, you gain 3 Speed tokens.",
      }, ],
  }, ],
}, {
  key: "20",
  parentArchetypeName: "Demon",
  name: "Ogre",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "Your Throws may target any number of enemies within range.\nAfter you perform an Action that inflicted Forced Movement on any enemies, you deal 1 damage to each enemy moved by that Action.",
  },
  actions: [{
      name: "Gate Guardian",
      levels: [{
          diceCost: [4],
          description: "Pull 2 to all enemies you can see, then deal 1 damage to each enemy within range.",
      }, ],
  }, {
      name: "Watch Your Step",
      levels: [{
          diceCost: [4],
          description: "Target an enemy you can see that moved during this turn. You Push 1 and deal 2 damage to them.",
      }, ],
  }, ],
}, {
  key: "21",
  parentArchetypeName: "Flametongue",
  name: "Blazing",
  minRange: 1,
  maxRange: 3,
  ability: {
      description: "At the start of each allied turn, give 1 Burning token to each enemy within range.",
  },
  actions: [{
      name: "Blazing Speed",
      levels: [{
          otherCost: ["1 HP"],
          description: "Target an enemy you can see that has Burning Tokens. Pull yourself up to X spaces towards them, where X is the number of Burning Tokens they hold. Usable once per enemy turn.",
      }, ],
  }, {
      name: "Ignition",
      levels: [{
          diceCost: [6],
          description: "Deal X damage to an adjacent enemy. X = the number of Burning tokens they hold. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "22",
  parentArchetypeName: "Flametongue",
  name: "Explosion",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "After you perform an Action that destroyed any obstacles, deal 1 damage to all enemies on or adjacent to any of those obstacles.",
  },
  actions: [{
      name: "Demolition",
      levels: [{
          diceCost: [3, 5, 7],
          description: "Choose one: Place a Pit into a space within range; -or- place 2 Traps into spaces within range; -or- destroy up to 3 obstacles within range.\n5+: Choose two instead.\n7+: Choose three instead.",
      }, ],
  }, {
      name: "Ka-Boom!",
      levels: [{
          diceCost: [2, 4, 6],
          description: "Place Rubble into an adjacent space, then destroy it. Push yourself 2 spaces away from that Rubble.\n4+: Rubble into an adjacent space, then destroy it. Push yourself 2 or 3 spaces away from that Rubble.\n6+: Place Rubble into an adjacent space, then destroy it. Push yourself up to 3 spaces away from that Rubble.",
      }, ],
  }, ],
}, {
  key: "23",
  parentArchetypeName: "Flametongue",
  name: "Inferno",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "You have Armor against damage from Burning tokens.\nAfter you Reduce a Hit, give 1 Burning token to your attacker.",
  },
  actions: [{
      name: "Flame Guard",
      levels: [{
          otherCost: ["1 HP"],
          description: "You can only use Flame Guard while you hold no Iron tokens. You gain 2 Iron tokens. Usable once per turn.",
      }, ],
  }, {
      name: "Heat Beam",
      levels: [{
          diceCost: [4],
          description: "Unblockable. Deal 3 damage to an enemy you can see that is holding at least 2 Burning tokens, then they discard 2 Burning tokens.",
      }, ],
  }, ],
}, {
  key: "24",
  parentArchetypeName: "Flametongue",
  name: "Phoenix",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "At the start of your turn, you gain Shield 2, then if you are Bleeding, you heal.\nWhen you Bleed, you heal and gain Shield 3.\nYou do not take damage from Burning Tokens.",
  },
  actions: [{
      name: "Cleansing Fire",
      levels: [{
          diceCost: [4],
          description: "Choose two: Give 2 Burning tokens to an enemy within range; -or- heal an ally within range; -or- discard up to 3 status tokens from an ally within range. Usable once per turn.",
      }, ],
  }, {
      name: "Firebird’s Flight",
      levels: [{
          diceCost: [4],
          description: "Teleport 3, then give 2 Burning tokens to all adjacent enemies.",
      }, ],
  }, ],
}, {
  key: "25",
  parentArchetypeName: "Flametongue",
  name: "Volcanic",
  minRange: 1,
  maxRange: 3,
  ability: {
      description: "At the start and end of your turn, you may place a Trap into a space within range.\nAfter an enemy within range takes damage from a Trap, give that enemy 1 Burning token.\nYou do not take damage from Traps.",
  },
  actions: [{
      name: "Lava Walk",
      levels: [{
          otherCost: ["1 Speed Token"],
          description: "Move 1, then place a Trap into the space you left. Usable twice per turn.",
      }, ],
  }, {
      name: "Pyroclasm",
      levels: [{
          diceCost: [3],
          description: "Place 3 Traps into spaces within range.",
      }, ],
  }, ],
}, {
  key: "26",
  parentArchetypeName: "Gunkata",
  name: "Akimbo",
  minRange: 2,
  maxRange: 4,
  ability: {
      description: "At the start and end of your turn, Move 2.\nAfter each Action you perform, Move 1.",
  },
  actions: [{
      name: "Firing Wild",
      levels: [{
          diceCost: [3, 5, 8],
          description: "Choose one: Deal 1 damage to each adjacent enemy; -or- deal 1 damage to up to 3 enemies within range; -or- deal 1 damage to up to 2 enemies you can see beyond your maximum range.\n5+: Choose two instead.\n8+: Deal 2 damage instead.",
      }, ],
  }, {
      name: "Kneecapper",
      levels: [{
          diceCost: [4],
          description: "Choose one or two enemies within range. Deal 1 damage and give 2 Fatigue tokens to each target.",
      }, ],
  }, ],
}, {
  key: "27",
  parentArchetypeName: "Gunkata",
  name: "Fullmetal",
  minRange: 3,
  maxRange: 6,
  ability: {
      description: "At the start of your turn, choose your Ammo: Incendiary, Toxin, or Tracer.\nIncendiary: After each damage-dealing Action you perform, give each enemy dealt damage by that Action 1 Burning token.\nToxin: After each damage-dealing Action you perform, give each enemy dealt damage by that Action 1 Weakness token.\nTracer: You can see and target enemies through Fog and Walls. You have +2 maximum Range.",
  },
  actions: [{
      name: "Bombardment",
      levels: [{
          diceCost: [5],
          description: "Place a Trap into any space within range. Then, deal 2 damage to each enemy adjacent to, or on, that Trap.",
      }, ],
  }, {
      name: "Bazooka",
      levels: [{
          diceCost: [7],
          description: "Deal 4 damage to an enemy within range, then deal 1 damage and give 2 Burning tokens to an enemy adjacent to you.",
      }, ],
  }, ],
}, {
  key: "28",
  parentArchetypeName: "Gunkata",
  name: "Crosshair",
  minRange: 4,
  maxRange: 5,
  ability: {
      description: "Whenever you deal 3 or more damage to an enemy in a single hit, they gain 1 Weakness token and you gain 1 Power token.",
  },
  actions: [{
      name: "Take Aim",
      levels: [{
          diceCost: [1],
          description: "Your next damage-dealing Action is Unblockable by Armor, Iron Tokens, and Shields.",
      }, ],
  }, {
      name: "Headshot",
      levels: [{
          diceCost: [6],
          description: "Deal 5 damage to an enemy within range. Usable once per Round.",
      }, ],
  }, ],
}, {
  key: "29",
  parentArchetypeName: "Gunkata",
  name: "Quickdraw",
  minRange: 2,
  maxRange: 3,
  ability: {
      description: "Add ⚡ to your Action Dice.\nIf an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held the token gains 2 Fatigue tokens.",
  },
  actions: [{
      name: "Point Blank Shot",
      levels: [{
          diceCost: [1, 4],
          description: "Push 1 and deal 1 damage to an adjacent enemy.\n4+: Instead, Push 3 and deal 3 damage.",
      }, ],
  }, {
      name: "Showdown",
      levels: [{
          diceCost: [4],
          description: "Challenge an enemy within range. If they take the next turn after their side, they cannot discard your Challenge before the end of that turn. If they do not, you deal 3 damage to them. Usable once per turn. Unblockable by Shields.",
      }, ],
  }, ],
}, {
  key: "30",
  parentArchetypeName: "Gunkata",
  name: "Ricochet",
  minRange: 2,
  maxRange: 5,
  ability: {
      description: "After each Action you perform, you may choose one: deal 1 damage to one enemy within range that was not targeted by that Action; -or- replace one obstacle you can see with Rubble.",
  },
  actions: [{
      name: "Trick Shot",
      levels: [{
          diceCost: [3, 6, 9],
          description: "Choose one obstacle within range. Destroy it, then deal 2 damage to one enemy within Range 1-3 of that obstacle.\n6+: Then, deal 2 damage to an enemy within Range 1-3 of that first enemy.\n9+: Then, deal 3 damage to a third enemy within Range 1-3 of that second enemy.",
      }, ],
  }, {
      name: "Scatter Shot",
      levels: [{
          diceCost: [4],
          description: "Place Rubble into a space within range. Then, each enemy on or adjacent to that Rubble takes 1 damage and is pushed 3 spaces away from that Rubble.",
      }, ],
  }, ],
}, {
  key: "31",
  parentArchetypeName: "Phantom",
  name: "Aura",
  minRange: 1,
  maxRange: 3,
  ability: {
      description: "At the start of your turn, you gain Shield 3.\nAfter an enemy within range damages or breaks an ally’s Shield, or has their own Shield damaged or broken, you may Push 1 or Pull 1 that enemy.\nAfter a Shield within range breaks, you gain 1 Power token.",
  },
  actions: [{
      name: "Aura Surge",
      levels: [{
          diceCost: [4],
          description: "Choose one: 1 ally within range gains Shield 3; -or- Remove up to 4 points of Shield from 1 enemy within range. If this breaks their Shield, deal 2 damage to them.",
      }, ],
  }, ],
}, {
  key: "32",
  parentArchetypeName: "Phantom",
  name: "Puppet",
  minRange: 1,
  maxRange: 5,
  ability: {
      description: "After each space you move using Free Movement, you may Move 1 to one ally or obstacle within range. Obstacles you move with this Ability become Rubble.\nAt the end of your turn, each enemy that moved this turn takes 1 damage, and each ally that moved this turn heals 2.",
  },
  actions: [{
      name: "Pull The Strings",
      levels: [{
          diceCost: [2, 4, 7],
          description: "Target an enemy or ally you can see. Pull them 3.\n4+: Target an enemy or ally within range. Push them 3.\n7+: Target an enemy or ally within range. Choose one: Push them up to 4; -or- Pull them up to 4.",
      }, ],
  }, ],
}, {
  key: "33",
  parentArchetypeName: "Phantom",
  name: "Crying",
  minRange: 1,
  maxRange: 4,
  ability: {
      description: "At the start of your turn, give 1 Weakness token to all enemies within range.\nAt the end of your turn, Challenge an enemy within range and give them 1 Weakness token.\nIf an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held it gains 3 Burning tokens.",
  },
  actions: [{
      name: "Banshee’s Wail",
      levels: [{
          diceCost: [6],
          description: "All enemies within range gain 1 Weakness token and take 2 damage. All Traps, Pits, and Walls within range become Rubble.",
      }, ],
  }, ],
}, {
  key: "34",
  parentArchetypeName: "Phantom",
  name: "Spirit",
  minRange: 1,
  maxRange: 3,
  ability: {
      description: "You and your Copies do not take damage from Pits or Traps.\nYou and your Copies treat Walls as if they were Rubble.\nAfter each space of Free Movement you do, any number of your Copies may Move 1.",
  },
  actions: [{
      name: "Now You See Me...",
      levels: [{
          diceCost: [1, 3, 5, 7],
          description: "Place a Copy into an empty space within range.\n3+: Place a Copy into an empty space within range.\n5+: Place a Copy into an empty space within range.\n7+: Each of your Copies may Move up to 3.",
      }, ],
  }, {
      name: "Now You Don’t",
      levels: [{
          otherCost: ["Free"],
          description: "Swap spaces with one of your Copies. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "35",
  parentArchetypeName: "Phantom",
  name: "Vortex",
  minRange: 1,
  maxRange: 4,
  ability: {
      description: "You do not take damage from Pits.\nWhen you are standing on a Pit, every other Pit counts as an adjacent space you can move to. Your range is still calculated only from the space you are currently standing in.",
  },
  actions: [{
      name: "Wormhole",
      levels: [{
          diceCost: [1, 4],
          description: "Place a Pit into your own space.\n4+: Place 1 Pit into an empty space you can see.",
      }, ],
  }, {
      name: "Black Hole",
      levels: [{
          diceCost: [3],
          description: "Target 1 empty space within range. Place a Pit into that space, then target someone within range and Pull them 2 towards the Pit.",
      }, ],
  }, ],
}, {
  key: "36",
  parentArchetypeName: "Punk",
  name: "Brawling",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "At the end of each turn you took damage, you gain Shield 2.\nAfter your Shield absorbs, you gain 1 Power token.",
  },
  actions: [{
      name: "Tough It Out",
      levels: [{
          diceCost: [3, 11],
          description: "Pay 1 HP, then gain a 3 point Shield.\n9+: You instead pay 2 HP and instead gain a 7-point Shield.",
      }, ],
  }, {
      name: "Jab",
      levels: [{
          otherCost: ["Reduce your Shield’s Value by 2"],
          description: "You cannot use Jab unless you have a Shield with value 2+.\nPush 1 and deal 1 damage to an adjacent enemy. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "37",
  parentArchetypeName: "Punk",
  name: "Knockdown",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "After you take damage from an Action, you deal 1 damage to each enemy that dealt damage to you. If that enemy holds your Challenge, you deal 2 damage to them instead.",
  },
  actions: [{
      name: "Slugfest",
      levels: [{
          otherCost: ["Free"],
          description: "Move 1, then Challenge an enemy within range, then they deal 1 damage to you. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "38",
  parentArchetypeName: "Punk",
  name: "Flashy",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "After you roll your Action Dice, you may combine two of your numbers into a single, larger number. Then, you may split one of your numbers in half (one rounded up, one rounded down). You cannot split a 1 – the split number must be 2 or higher.",
  },
  actions: [{
      name: "Show Off",
      levels: [{
          diceCost: [6],
          description: "Choose X: Move 1; -or- Pull 1 to an enemy you can see; -or- deal 1 damage to an enemy within range; -or- give 1 Burning token to an enemy within range; -or- give 1 Weakness token to an enemy within range; -or- give 1 Fatigue token to an enemy within range; -or- Challenge an enemy within range; -or- push 1 to an enemy within range; -or- gain 1 Iron token; -or- gain 1 Power token; -or- gain 1 Speed token; -or- heal 1; -or- gain Shield 1. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "39",
  parentArchetypeName: "Punk",
  name: "Mad",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "At the start of your turn, choose a Weapon: Club, Knife, or Pistol.\nClub: After each damage-dealing Action you perform, give each enemy dealt damage by that Action one Fatigue token.\nKnife: Your Actions and Abilities are Unblockable by Armor and Tokens.\nPistol: You have +3 maximum Range.",
  },
  actions: [{
      name: "Weapon Throw",
      levels: [{
          diceCost: [2],
          description: "Deal 1 damage and give 1 Burning Token to an enemy you can see, then Disable your current Weapon until your next turn and choose a new one to take effect.",
      }, ],
  }, {
      name: "Slice & Smash",
      levels: [{
          diceCost: [2, 5, 8, 11],
          description: "Deal 1 damage up to 2 enemies within range.\n5+: Deal 2 damage and Push 1 instead.\n8+: Deal 3 damage and Push 2 instead.\n11+: Deal 4 damage and Push 3 instead.",
      }, ],
  }, ],
}, {
  key: "40",
  parentArchetypeName: "Punk",
  name: "Taunting",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "After you take damage, you gain 1 Iron token.\nAfter you take damage from an enemy with your Challenge, you may Move 1.\nIf an enemy discards your Challenge token using an enemy Action or Ability, you gain 2 Iron tokens.",
  },
  actions: [{
      name: "Is That All You Got?",
      levels: [{
          diceCost: [1, 6, 12],
          description: "Challenge an enemy you can see. You gain 1 Iron token.\n6+: Challenge another enemy you can see, then gain 2 Iron tokens and heal 2.\n12+: Challenge a third enemy you can see, then give each of those enemies 3 Weakness tokens and Push 2.",
      }, ],
  }, {
      name: "Not Good Enough",
      levels: [{
          otherCost: ["Your Challenge Token"],
          description: "This Action costs your Challenge token held by an enemy within range. You must discard one such token to pay for Not Good Enough.\nNot Good Enough targets the enemy who held the Challenge Token you spent to pay for Not Good Enough. Give them 2 Weakness tokens. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "41",
  parentArchetypeName: "Teacher",
  name: "Decoy",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "At the start of each enemy turn, you may pay 1 HP to Challenge the active character.\nAfter you Challenge an enemy, you deal 2 damage to them.\nIf an enemy discards your Challenge token using an enemy Action or Ability, heal your nearest ally to them, other than yourself.",
  },
  actions: [{
      name: "Leave My Student Alone",
      levels: [{
          otherCost: ["2 HP"],
          description: "Pull 2 and Challenge an enemy you can see. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "42",
  parentArchetypeName: "Teacher",
  name: "Mastermind",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "You cannot perform Actions. Instead, you pay their costs, but make your allies perform them for you.\nEach Action you take uses an ally’s current location, range, and stance bonuses as if they’d taken that Action themselves. You can only give Actions to allies you can see.\nAfter each Action an ally performs during your turn, you may Move 1.",
  },
  actions: [{
      name: "Diabolical Plan",
      levels: [{
          diceCost: [5, 9],
          description: "You teleport 2 and gain 1 Chaos Token.\n9+: You teleport 2 and gain 1 more Chaos Token.",
      }, ],
  }, ],
}, {
  key: "43",
  parentArchetypeName: "Teacher",
  name: "Elder",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "The cost of all Actions you perform are reduced by 1 (to a minimum of 1+ or 2 tokens/HP/Shield).\nThe damage values of all Actions you perform are reduced by 1 (to a minimum of zero).",
  },
  actions: [{
      name: "Show You How It’s Done",
      levels: [{
          diceCost: [5],
          description: "Target a Unique Dice Action available to someone’s current Stance in this fight, other than Show You How It’s Done or an Action you targeted earlier during this turn.\nPerform that Action. For the purposes of Gates or the value of X, use a value of 4.",
      }, ],
  }, ],
}, {
  key: "44",
  parentArchetypeName: "Teacher",
  name: "Patient",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "You have Armor.\nAt the end of each allied turn, you gain 1 Iron token.\nAfter you use Armor or Iron tokens to reduce the damage you would take, one ally you can see other than yourself may heal 1.",
  },
  actions: [{
      name: "Take Your Time",
      levels: [{
          diceCost: [5],
          description: "You gain 2 Iron tokens and 1 Mentor Token. Other Actions cannot be used to perform Take Your Time.",
      }, ],
  }, ],
}, {
  key: "45",
  parentArchetypeName: "Teacher",
  name: "Training",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "At the start of your turn, you gain 1 Training Token, then one ally you can see (other than yourself) heals 2 and gains 2 Power tokens.\nAfter you spend a Training Token, give 1 Training Token to an ally you can see, other than yourself.",
  },
  actions: [{
      name: "Watch Closely",
      levels: [{
          diceCost: [3, 6, 9],
          description: "You gain 1 Training Token.\n6+: You gain 1 Training Token.\n9+: You gain 1 Training Token.",
      }, ],
  }, ],
}, {
  key: "46",
  parentArchetypeName: "Trickster",
  name: "Caged",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "Adjacent enemies cannot gain or spend Speed tokens, and any Action Movement they would take is reduced to zero.",
  },
  actions: [{
      name: "Welcome To My Maze",
      levels: [{
          diceCost: [2],
          description: "Deal 1 damage and Pull 3 to an enemy you can see.",
      }, ],
  }, {
      name: "Rat Trap",
      levels: [{
          diceCost: [4],
          otherCost: ["4 Iron Tokens"],
          description: "Deal 1 damage and give 2 Fatigue tokens to each adjacent enemy. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "47",
  parentArchetypeName: "Trickster",
  name: "Parkour",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "You may move through and stand on top of Walls as though they were empty spaces. You can see and target enemies through Walls. After you end movement within a Wall’s space, you may Move 1.",
  },
  actions: [{
      name: "Take Cover",
      levels: [{
          diceCost: [1, 5],
          description: "Place a Wall into an empty adjacent space.\n5+: Place up to three more Walls into empty spaces within range, then gain 2 Iron tokens.",
      }, ],
  }, {
      name: "From Above!",
      levels: [{
          otherCost: ["3 Iron Tokens"],
          description: "Deal 2 damage to an enemy within range. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "48",
  parentArchetypeName: "Trickster",
  name: "Mirrored",
  minRange: 1,
  maxRange: 3,
  ability: {
      description: "After you spend Iron tokens, you may deal 1 damage to one enemy within range of you or your Copies.\nYour Copies have 2 HP each.\nYou may spend Iron tokens to Reduce Hits to your Copies.",
  },
  actions: [{
      name: "Reflections of the Self",
      levels: [{
          diceCost: [3, 6],
          description: "Place a Copy into an empty space within range, then gain 2 Iron tokens.\n6+: Place a Copy into an empty space within range, then gain 2 Iron tokens.",
      }, ],
  }, {
      name: "Shatter",
      levels: [{
          otherCost: ["2 Iron Tokens"],
          description: "Target one of your Copies. It deals 1 damage to each enemy within its range. At the end of this turn, destroy that Copy. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "49",
  parentArchetypeName: "Trickster",
  name: "Hidden",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "At the start of your turn, place Fog into your space.\nWhile you stand in Fog, you have Armor and your maximum range is increased by 3.",
  },
  actions: [{
      name: "Ghost Walk",
      levels: [{
          otherCost: ["3 Basic Tokens"],
          description: "Place a Fog obstacle into an empty space within range. Then, teleport to an empty space both within Fog and within range.",
      }, ],
  }, ],
}, {
  key: "50",
  parentArchetypeName: "Trickster",
  name: "Whip",
  minRange: 2,
  maxRange: 5,
  ability: {
      description: "Your Throw Actions may target within range. After you Throw or Grapple an enemy, you deal 2 damage to them.",
  },
  actions: [{
      name: "Grapple Hook",
      levels: [{
          diceCost: [5],
          otherCost: ["4 Basic Tokens"],
          description: "Choose one or both: An ally within range teleports to an empty space within range of their choice; -and/or- you teleport to an empty space within range.",
      }, ],
  }, ],
}, {
  key: "51",
  parentArchetypeName: "Underdog",
  name: "Collateral",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "After you deal damage to an enemy with an Action, you may destroy 1 obstacle within range per enemy dealt damage.\nAt the end of your turn, you gain 1 Power token per obstacle you destroyed during that turn.",
  },
  actions: [{
      name: "Roughhousing",
      levels: [{
          diceCost: [4],
          description: "As an additional cost, you may pay 2 or 4 Basic Tokens. Choose one: Place Rubble into up to 3 adjacent spaces; -or- Push 1 and deal 1 damage to up to two enemies within range; -or- Move 3 and deal 1 damage to an adjacent enemy.\n2 Basic Tokens: Choose two instead.\n4 Basic Tokens: Choose three instead.",
      }, ],
  }, ],
}, {
  key: "52",
  parentArchetypeName: "Underdog",
  name: "Lucky",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "Add ⚡ to your Action Dice.\nYou have Armor.",
  },
  actions: [{
      name: "Slip Up",
      levels: [{
          otherCost: ["1 HP or 2 HP or 3 HP"],
          description: "Move 2.\n2 HP: Push 2 to someone within range, then Move 1.\n3 HP: Deal 1 damage to someone within range, then Move 1. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "53",
  parentArchetypeName: "Underdog",
  name: "Distracting",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "After an enemy deals damage to you with an Action, give that enemy 1 Weakness token.\nYour Challenge tokens cannot be discarded by enemy Actions or Abilities.",
  },
  actions: [{
      name: "Flare",
      levels: [{
          diceCost: [1, 5],
          otherCost: ["3 or 6 Basic Tokens"],
          description: "Move 2, then give 1 Weakness token to an enemy within range.\n5+: -or- 6 Basic Tokens: Give them 2 more Weakness tokens, give them 2 Burning tokens, then Challenge them.",
      }, ],
  }, ],
}, {
  key: "54",
  parentArchetypeName: "Underdog",
  name: "Misfortune's",
  minRange: 1,
  maxRange: 3,
  ability: {
      description: "After you take damage from anything other than an Action or an Ability, choose one: You deal 1 damage to an enemy within range; -or- you heal 2.",
  },
  actions: [{
      name: "Bad Luck",
      levels: [{
          otherCost: ["X HP"],
          description: "Place X Traps into empty spaces within range. Usable once per turn. X cannot be greater than 4.",
      }, ],
  }, {
      name: "Karma",
      levels: [{
          otherCost: ["7 Basic Tokens"],
          description: "Deal X damage and give 4 Weakness tokens to the active character. X is equal to the amount of HP you have lost this turn. Usable once per turn. Usable only during enemy turns.",
      }, ],
  }, ],
}, {
  key: "55",
  parentArchetypeName: "Underdog",
  name: "Scrambling",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "At the start of your turn, you gain 1 Power token and 1 Iron token.\nAfter you spend Power tokens, you gain 1 Speed token.\nAfter you spend Iron tokens, you gain 1 Speed token.\nWhen you discard Speed tokens at the end of each turn, you do not discard below 2 Speed tokens.",
  },
  actions: [{
      name: "Think Fast!",
      levels: [{
          otherCost: ["3 or 5 Basic Tokens"],
          description: "Target an enemy within range and Choose one: Give them 1 Weakness token; -or- give them 1 Fatigue token; -or- Push 3.\n4 Basic Tokens: Choose two instead.\n5 Basic Tokens: Choose three instead.",
      }, ],
  }, ],
}, {
  key: "56",
  parentArchetypeName: "Wardancer",
  name: "Artistic",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "At the start of your turn, you gain 2 Iron tokens.\nAfter you deal damage to, or Reduce a Hit from, an enemy, you may spend 1 Iron token to give them 1 Status token of your choice.",
  },
  actions: [{
      name: "Poetry In Motion",
      levels: [{
          diceCost: [2, 4, 7],
          description: "Move 1 and gain 1 Iron token.\n4+: Move up to 2, gain 1 Iron token, and gain 1 Power token.\n7+: Move up to 3, gain 1 Iron token, and gain 1 Power token.",
      }, ],
  }, ],
}, {
  key: "57",
  parentArchetypeName: "Wardancer",
  name: "Relentless",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "Enemies holding your Challenge are within your range.\nAfter you deal damage, Push 1.",
  },
  actions: [{
      name: "Hey.",
      levels: [{
          otherCost: ["Free"],
          description: "Challenge an enemy within range. Usable once per turn.",
      }, ],
  }, {
      name: "Nothing Personal",
      levels: [{
          otherCost: ["Your Challenge Token"],
          description: "This Action costs your Challenge token held by an enemy within range. You must discard one such token to pay for Nothing Personal.\nNothing Personal targets the enemy who held the Challenge Token you spent to pay for Nothing Personal. Teleport to an empty space adjacent to that target, then deal 1 damage to them. Usable once per turn.",
      }, ],
  }, ],
}, {
  key: "58",
  parentArchetypeName: "Wardancer",
  name: "Overwhelming",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "Your Actions and Abilities are Unblockable by Armor.\nAt the start of your turn, you gain 2 Power tokens.\nAfter an enemy deals damage to you with an Action, you may spend a Power token to deal 1 damage and Push 1 to your attacker.",
  },
  actions: [{
      name: "Power Strike",
      levels: [{
          diceCost: [4, 8],
          description: "Deal 2 damage to an enemy within range, then you gain 2 Power tokens.\n8+: Deal 4 damage and gain 4 Power tokens instead.",
      }, ],
  }, ],
}, {
  key: "59",
  parentArchetypeName: "Wardancer",
  name: "Swift",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "Before each Reactive Action you perform, you may Move 1.\nAfter each Action you perform, you gain 1 Speed token.",
  },
  actions: [{
      name: "Deadly Dance",
      levels: [{
          diceCost: [2, 4, 6, 8],
          description: "Teleport 2, then deal 1 damage to an enemy within range.\n4+: Teleport 2, then deal 1 damage to an enemy within range.\n6+: Teleport 2, then deal 1 damage to an enemy within range.\n8+: Teleport 2, then deal 1 damage to an enemy within range.",
      }, ],
  }, {
      name: "Swift Strike",
      levels: [{
          otherCost: ["2 Basic Tokens"],
          description: "Deal 1 damage to an enemy within range. Usable once per turn, only during enemy turns.",
      }, ],
  }, ],
}, {
  key: "60",
  parentArchetypeName: "Wardancer",
  name: "Weightless",
  minRange: 0,
  maxRange: 1,
  ability: {
      description: "You do not take Fall Damage.\nRubble does not give you Fatigue.\nAll spaces are Empty spaces to you. You can move into and share a space with Copies, Walls, and other units.\nAll spaces cost 1 Speed token to enter using Free Movement. Ignore all additional Speed token costs, from leaving Pits or moving diagonally or any other source.",
  },
  actions: [{
      name: "Effortless",
      levels: [{
          diceCost: [3, 6],
          description: "Teleport to an empty space you can see.\n6+: Choose an ally within range. They may teleport to an empty space they can see.",
      }, ],
  }, ],
},

{
  key: "61",
  parentArchetypeName: "Winterblossom",
  name: "Avalanche",
  minRange: 2,
  maxRange: 3,
  ability: {
      description: "At the start of your turn, you may place up to three Walls into empty adjacent spaces.\nYou can see and target enemies through Walls.",
  },
  actions: [{
      name: "Walled In",
      levels: [{
          diceCost: [3, 6],
          description: "Place up to 3 Walls into empty spaces within Range 1-3.\n6+: Place up to 3 Walls into empty spaces within Range 1-3, then you may swap spaces with one Wall placed by Walled In.",
      }, ],
  }, {
      name: "Icicle Fall",
      levels: [{
          diceCost: [3, 7],
          description: "Deal 1 damage to each enemy adjacent to any Walls.\n7+: Deal 2 damage instead, then give 1 Weakness token to each enemy dealt damage by Icicle Fall.",
      }, ],
  }, ],
}, {
  key: "62",
  parentArchetypeName: "Winterblossom",
  name: "Frozen",
  minRange: 1,
  maxRange: 1,
  ability: {
      description: "At the start of your turn, you gain 2 Iron tokens.\nAfter you Reduce a Hit, give 1 Weakness token to your attacker.",
  },
  actions: [{
      name: "Exploit Weakness",
      levels: [{
          diceCost: [3, 7],
          description: "Deal 2 damage to an enemy within range. You may spend Weakness tokens they hold as if they were Power tokens you hold.\n7+: Deal 2 damage to an enemy within range. You may spend Weakness tokens they hold as if they were Power tokens you hold.",
      }, ],
  }, {
      name: "Ice Block",
      levels: [{
          diceCost: [4],
          description: "Gain 3 Iron tokens, then give 1 Weakness token to all adjacent enemies.",
      }, ],
  }, ],
}, {
  key: "63",
  parentArchetypeName: "Winterblossom",
  name: "Crystal",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "After you perform an Action with exactly one target, you deal 1 damage to all enemies adjacent to that target.\nThe first time each turn one of your Copies is destroyed, you may place a Copy within range of your Original.",
  },
  actions: [{
      name: "Splintered Mirror",
      levels: [{
          diceCost: [3],
          description: "Place a Copy into an empty space within range. You may swap spaces with that Copy.",
      }, ],
  }, {
      name: "Crystal Spike",
      levels: [{
          diceCost: [3, 7],
          description: "Target one enemy within range. Deal 1 damage to them and give them 1 Weakness token.\n7+: Deal 2 more damage and give 2 more Weakness tokens.",
      }, ],
  }, ],
}, {
  key: "64",
  parentArchetypeName: "Winterblossom",
  name: "Heartless",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "Whenever you give Tokens to an enemy, you heal 1. This Ability cannot heal you more than the Bleed Value in a single turn.\nYour Actions and Abilities are Unblockable by Shields.",
  },
  actions: [{
      name: "Block This",
      levels: [{
          diceCost: [5],
          description: "An enemy within range gains 1 Iron token, then you deal 4 damage to them. Unblockable by Iron Tokens. Usable once per turn.",
      }, ],
  }, {
      name: "Heart Strike",
      levels: [{
          diceCost: [3, 7],
          description: "An enemy within range pays 2 HP and gains 1 Weakness token.\n7+: That enemy pays 2 more HP and gains 2 Weakness tokens.",
      }, ],
  }, ],
}, {
  key: "65",
  parentArchetypeName: "Winterblossom",
  name: "Pressure",
  minRange: 1,
  maxRange: 2,
  ability: {
      description: "At the start and end of your turn, each enemy within range must pay 1 HP, then gain 1 Weakness token.",
  },
  actions: [{
      name: "Build Pressure",
      levels: [{
          diceCost: [3],
          description: "Give an enemy within range 1 each of three different Status tokens of your choice (Burning, Challenge, Fatigue, or Weakness).",
      }, ],
  }, {
      name: "Apply Pressure",
      levels: [{
          diceCost: [7],
          description: "Target an enemy within range. Deal damage to them equal to the number of Status tokens they hold, to a max of 12 damage. Usable once per turn.",
      }, ],
  }, ],
},
{
  key: "66",
  parentArchetypeName: "Freestyle",
  name: "Silent",
  minRange: 1,
  maxRange: 2,
  ability: {
    description:
      "At the start and end of your turn, you gain 2 Speed tokens.\nAt the start of each Movement Phase, you may Move 1.\nYou do not discard any Speed tokens during the End Phase.",
  },
  actions: [
    {
      name: "Stunt",
      levels: [
        {
          otherCost: ["3 Speed Tokens"],
          description:
            "Place one Fog, Copy, Pit, or Trap obstacle into an adjacent space, then teleport 2.\nDuring enemy turns: usable once per turn.",
        },
      ],
    },
  ],
},
{
  key: "67",
  parentArchetypeName: "Freestyle",
  name: "Chaotic",
  minRange: 1,
  maxRange: 1,
  ability: {
    description:
      "Before each Action you perform, you may Move 1.\nAfter your first Action on your turn, Move 1, then deal 2 damage to an enemy within range.\nAt the end of each turn where you performed any Actions, you may deal 1 damage to an enemy within range, then Move 2.",
  },
  actions: [
    {
      name: "Slide In",
      levels: [
        {
          diceCost: [1, 4],
          description:
            "Teleport 2.\n4+: Teleport 2 more, then you may deal 1 damage to an enemy within range.",
        },
      ],
    },
    {
      name: "Left, Right!",
      levels: [
        {
          diceCost: [4],
          description:
            "Deal 1 damage to an enemy within range, then you may Move 1, then you deal 2 more damage to that enemy.",
        },
      ],
    },
  ],
},
{
  key: "68",
  parentArchetypeName: "Freestyle",
  name: "Circular",
  minRange: 1,
  maxRange: 1,
  ability: {
    description:
      "After you take damage, pay HP, or are healed, you gain 1 Speed token.\nWhen you Bleed, gain 3 Speed tokens.\nAfter each Dice Action you perform, if it applied Forced Movement to an enemy, they must discard 1 Basic token, if they have it. If it applied Forced Movement to an ally, they heal 1. If it moved, swapped, or teleported you, you heal 1.",
  },
  actions: [
    {
      name: "Dance Together",
      levels: [
        {
          otherCost: ["3 Speed Tokens"],
          description:
            "Push someone within range. Pull them 1, then you Move 1, then you Pull them 1 more.\nUsable once per turn.",
        },
      ],
    },
    {
      name: "Dance Apart",
      levels: [
        {
          diceCost: [3, 6, 10],
          description:
            "Swap spaces with an adjacent enemy, then Push them 1.\n6+: Pull them 2, then deal 2 damage to them.\n10+: Push them 4, then deal 3 damage to them.",
        },
        {
          diceCost: [4, 7],
          description:
            "Push 3 to someone within range, then Move 1.\n7+: Move 2 more, then heal.",
        },
      ],
    },
  ],
},
{
  key: "69",
  parentArchetypeName: "Freestyle",
  name: "Dangerous",
  minRange: 1,
  maxRange: 1,
  ability: {
    description:
      "At the start and end of your turn, you gain Shield 2.\nAfter your Shield absorbs from an enemy Action, you deal 1 damage to them. If it broke your Shield, deal 2 damage instead.",
  },
  actions: [
    {
      name: "Blossoms",
      levels: [
        {
          diceCost: [3, 6],
          description:
            "You gain Shield 2 and choose one: Gain 1 Power token; -or- Move 1; -or- heal 1.\n6+: Instead, gain Shield 4 and choose two.",
        },
      ],
    },
    {
      name: "Brambles",
      levels: [
        {
          otherCost: ["Destroy Your Shield"],
          description:
            "Deal 1 damage to up to X enemies within Range 1-X, then gain 1 Power token. X is equal to the value of the destroyed Shield. Usable twice per turn.",
        },
      ],
    },
  ],
},
{
  key: "70",
  parentArchetypeName: "Freestyle",
  name: "Ego",
  minRange: 1,
  maxRange: 1,
  ability: {
    description:
      "Once per turn, when an enemy you can see gains Basic tokens, you gain 1 Power token.\nYou can Enhance a Hit one additional time.",
  },
  actions: [
    {
      name: "Confident Smirk",
      levels: [
        {
          diceCost: [1],
          description: "Unblockable. Gain 1 Power token and heal 1.",
        },
      ],
    },
    {
      name: "Burning Fist",
      levels: [
        {
          diceCost: [5],
          description:
            "Deal 2 damage to an enemy within range, then give them Burning Tokens equal to the damage dealt to them by Burning Fist.",
        },
      ],
    },
  ],
},
{
  key: "71",
  parentArchetypeName: "Freestyle",
  name: "Eternal",
  minRange: 1,
  maxRange: 1,
  ability: {
    description:
      "At the start of your turn, discard up to 2 Status tokens you hold; then, if you are Bleeding, you heal.\nAt the end of your turn, choose up to two enemies within range and give them each 1 Weakness token.",
  },
  actions: [
    {
      name: "Bow Down",
      levels: [
        {
          diceCost: [2, 4],
          description:
            "Give 1 Weakness token to an enemy within range.\n4+: Give 1 Weakness token to each enemy within range.",
        },
      ],
    },
    {
      name: "Stand Strong",
      levels: [
        {
          diceCost: [1, 3, 5],
          description:
            "1+: Give 1 Power token to an ally within range.\n3+: Heal that ally.\n5+: Heal and give 1 Power token to a different ally within range. Usable once per turn.",
        },
      ],
    },
  ],
},
{
  key: "72",
  parentArchetypeName: "Freestyle",
  name: "Grave",
  minRange: 3,
  maxRange: 3,
  ability: {
    description:
      "After you spend Control Tokens, you may Push 1 or Pull 1 to the enemy whose Action you Controlled.\nAt the start of your turn, choose one:\n- Set your Range to 3-6 until your next turn.\n- Set your Range to 0-3 until your next turn.",
  },
  actions: [
    {
      name: "Suppression",
      levels: [
        {
          diceCost: [3, 6, 9],
          description:
            "3+: You gain 1 Control token and may Move 1.\n6+: You gain 1 Control token and may Move 1.\n9+: You gain 1 Control token and may Move 1.",
        },
      ],
    },
  ],
},
{
  key: "73",
  parentArchetypeName: "Freestyle",
  name: "Feral",
  minRange: 1,
  maxRange: 1,
  ability: {
    description:
      "After each Action you perform, if you are not Bleeding, pay 1 HP.\nAt the start of your turn, you gain 2 Power tokens.\nWhen you Bleed, add a d4 to your Action Pool.",
  },
  actions: [
    {
      name: "Pounce",
      levels: [
        {
          diceCost: [],
          description:
            "Pull yourself 3 towards an enemy you can see. Usable once per turn.",
        },
      ],
    },
    {
      name: "Howl",
      levels: [
        {
          diceCost: [4],
          description:
            "Gain 1 Power token, then heal 4, then give 1 Weakness token to each enemy you can see. Usable once per turn.",
        },
      ],
    },
  ],
},
{
  key: "74",
  parentArchetypeName: "Freestyle",
  name: "Mountainous",
  minRange: 1,
  maxRange: 1,
  ability: {
    description:
      "You have Armor.\nWhen your Armor triggers, you gain 1 Iron token.\nWhen you gain Speed tokens, replace half of them (rounded down) with Iron tokens.\nYou may spend 1 Iron token to take 1 less damage from any source (even Reduced Hits).",
  },
  actions: [
    {
      name: "Secure",
      levels: [
        {
          diceCost: [3],
          description:
            "Choose two: Gain 2 Iron tokens; -or- an ally within range other than yourself gains 2 Iron tokens; -or- give Shield 2 to an ally within range.",
        },
      ],
    },
    {
      name: "Contain",
      levels: [
        {
          diceCost: [3],
          description:
            "Target an enemy within range, then Choose two: Challenge them; -or- Give them 2 Fatigue tokens; -or- place a Trap into their space.",
        },
      ],
    },
    {
      name: "Protect",
      levels: [
        {
          diceCost: [6],
          description:
            "Choose four from the Secure and Contain lists. Options from the Contain list must target an enemy within range.",
        },
      ],
    },
  ],
},
{
  key: "75",
  parentArchetypeName: "Freestyle",
  name: "Mythical",
  minRange: 2,
  maxRange: 3,
  ability: {
    description:
      "Whenever you roll a 3 or less on the mythical D12, re-roll it.\nAfter you roll your Action Dice during your turn, you may re-roll one die. Keep the new result, even if it is worse.",
  },
  actions: [
    {
      name: "Beyond Human",
      levels: [
        {
          diceCost: [3, 6, 9, 11],
          description:
            "Choose one: You Heal 2; -or- you gain 2 Power tokens; -or- discard up to 4 Status tokens among allies within range; -or- you gain Shield 3.\n6+: Choose two instead.\n9+: Choose three instead.\n11+: Choose all four instead.",
        },
      ],
    },
  ],
},
{
  key: "76",
  parentArchetypeName: "Freestyle",
  name: "Secret",
  minRange: 1,
  maxRange: 2,
  ability: {
    description:
      "At the start of your turn, add a d6 to your Action Pool, gain Shield 4, and you gain +3 maximum Range until the start of your next turn.\nThis Ability triggers only once per fight.\nThis Ability cannot trigger on Round 1.",
  },
  actions: [
    {
      name: "Say Hello To My Secret Weapon",
      levels: [
        {
          diceCost: [3],
          description:
            "Deal 4 damage to an enemy within range. Usable once per fight.",
        },
      ],
    },
  ],
},
{
  key: "77",
  parentArchetypeName: "Freestyle",
  name: "Persistant",
  minRange: 1,
  maxRange: 1,
  ability: {
    description:
      "At the start of your turn and when you Bleed, add a d3 to your Action Pool.\nWhen you discard numbers from your Action Pool during the End Phase, you may keep up to two of them with a total value of 5 or less.",
  },
  actions: [
    {
      name: "Strut Your Stuff",
      levels: [
        {
          diceCost: [3],
          description:
            "Pull yourself 4 towards the active character. Then, if they are an enemy, deal 1 damage to them. If they are an ally, give them 1 Iron token.\nCannot be used on your own turn.",
        },
      ],
    },
    {
      name: "Palm Strike",
      levels: [
        {
          diceCost: [3],
          description:
            "Push 3 and deal 1 damage to an adjacent enemy.",
        },
      ],
    },
  ],
}
];

export const builds: Build[] = [
  {
    key: "brute",
    name: "Brute",
    description:
      "When you Bleed, you discard up to 6 Status Tokens you hold.\nOnce per turn, after you move into an obstacle’s space, destroy all obstacles in that space and ignore their effects.",
  },
  {
    key: "cryptid",
    name: "Cryptid",
    description:
      "At the start of each Round and when you Bleed, you may place Fog into your space or an adjacent space.",
  },
  {
    key: "fool",
    name: "Fool",
    description:
      "At the start of each Round and when you Bleed, you may Move 3.",
  },
  {
    key: "freak",
    name: "Freak",
    description:
      "When you Bleed, you may Pull yourself 2 towards an enemy you can see, then give 3 Fatigue tokens to an enemy within range.",
  },
  {
    key: "grim",
    name: "Grim",
    description:
      "When you Bleed, you gain temporary Armor.\nOnce per turn, after your Armor was triggered by an enemy Action, you may Push 2 to that enemy.",
  },
  {
    key: "guardian",
    name: "Guardian",
    description:
      "When you Bleed, up to three allies you can see each gain 1 Iron token.\nYou may pay HP equal to the Heal Value to give them each 2 Iron Tokens instead.",
  },
  {
    key: "hero",
    name: "Hero",
    description:
      "When you Bleed, you and one ally you can see each gain Shield 2.",
  },
  {
    key: "leader",
    name: "Leader",
    description:
      "At the start of each Round, you may place up to 2 Copies into empty spaces within Range.\nWhen you Bleed, place a Copy within range, then teleport into an empty space adjacent to one of your Copies that you can see.",
  },
  {
    key: "lightfoot",
    name: "Lightfoot",
    description:
      "At the start of each Round and when you Bleed, you gain 2 Speed tokens and may Move 1.",
  },
  {
    key: "monster",
    name: "Monster",
    description:
      "When you Bleed, give 3 Burning tokens to the enemy that made you Bleed. If this was triggered by damage that was not dealt by an enemy, give these Burning tokens to an enemy that you can see.",
  },
  {
    key: "powerhouse",
    name: "Powerhouse",
    description:
      "When you Bleed, you gain 2 Power tokens.\nAt the start of each Round, you may place Rubble within range.",
  },
  {
    key: "rat",
    name: "Rat",
    description:
      "At the start of each Round, you may place a Trap within range.\nWhen you Bleed, you may place a Pit into an adjacent space.",
  },
  {
    key: "scarred",
    name: "Scarred",
    description:
      "At the start of each Round, you give 1 Weakness token to up to two enemies you can see.\nWhen you Bleed, give 1 Weakness token to each enemy you can see.",
  },
  {
    key: "temple",
    name: "Temple",
    description:
      "When you Bleed, you heal.\nYour first Health Bar has additional HP equal to the Bleed Value.",
  },
]

// TODO endless alternate rules version
export const reinforceAction: Action = {
  name: "Reinforcements",
  levels: [
    {
      description: "Heal, then place a Stooge anywhere in play.",
      diceCost: [1],
    },
  ],
}
export const basicActions: Action[] = [
  {
    name: "Movement",
    levels: [{ description: "You gain X Speed tokens.", otherCost: ["X"] }],
  },
  {
    name: "Damage",
    levels: [
      {
        description: "Deal 1 damage to an enemy within range.",
        diceCost: [1],
      },
      {
        description: "Deal 2 damage instead.",
        diceCost: [3],
      },
      {
        description: "Deal 3 damage instead, and Push 1.",
        diceCost: [5],
      },
      {
        description: "Deal 4 damage instead, and Push 2.",
        diceCost: [7],
      },
      {
        description: "Deal 5 damage instead, and Push 3.",
        diceCost: [9],
      },
    ],
  },
  {
    name: "Throw",
    levels: [
      {
        description: "Push 1 to an adjacent enemy.",
        diceCost: [1],
      },
      {
        description: "Push 2 instead.",
        diceCost: [3],
      },
      {
        description: "Push 3 instead, and deal 1 damage to them.",
        diceCost: [5],
      },
      {
        description: "Push 4 instead, and deal 2 damage.",
        diceCost: [7],
      },
      {
        description: "Push 5 instead, and deal 3 damage.",
        diceCost: [9],
      },
    ],
  },
  {
    name: "Grapple",
    levels: [
      {
        description: "Target someone within Range 1-X. Pull them 2.",
        otherCost: ["X"],
      },
      {
        description: "Pull 1 more and if they are an enemy, give them 1 Fatigue token.",
        diceCost: [4],
      },
      {
        description: "Pull 2 more and if they are an enemy, give them 2 Fatigue tokens.",
        diceCost: [7],
      },
    ],
  },
  {
    name: "Stagger",
    levels: [
      {
        description: "Give 2 Fatigue tokens to an adjacent enemy.",
        diceCost: [3],
      },
      {
        description: "Give them 2 more Fatigue tokens and 2 Weakness tokens.",
        diceCost: [7],
      },
    ],
  },
  {
    name: "A Challenger Approaches",
    levels: [
      {
        description: "Challenge an enemy within Range 1-4.",
        diceCost: [1],
      },
      {
        description: "Challenge up to two more enemies within Range 1-4.",
        diceCost: [4],
      },
    ],
  },
  {
    name: "Put It Out!",
    levels: [
      {
        description: "Discard 1 non-Unique token from someone within range.",
        diceCost: [1],
      },
      {
        description: "Choose one: Discard 1 Unique token from them; -or- Discard up to 2 more non-Unique tokens from them.",
        diceCost: [4],
      },
      {
        description: "Choose one: Discard 1 Unique token from them; -or- Discard up to 2 more non-Unique tokens from them.",
        diceCost: [7],
      },
    ],
  },
  {
    name: "Open The Path",
    levels: [
      {
        description: "Target an obstacle within range and destroy it.",
        diceCost: [1],
      },
      {
        description: "Destroy up to 3 obstacles adjacent to the initial target.",
        diceCost: [4],
      },
      {
        description: "Destroy up to 5 obstacles within Range 1-3 of any previous target.",
        diceCost: [8],
      },
    ],
  },
  {
    name: "Guard",
    levels: [
      {
        description: "You gain temporary Armor.",
        diceCost: [4],
      },
    ],
  },
  {
    name: "Rescue",
    levels: [
      {
        description: "Choose one: Heal an ally within range; -or- heal an ally who is not in play, then return them to play into an empty space within range.",
        diceCost: [5],
      },
    ],
  },
  {
    name: "Light The Fire",
    levels: [
      {
        description: "Activate the ability of your attribute, also allowing the use of Stances and Build.",
        diceCost: [1],
      },
      {
        description: "At the start of your turn, discard 2 Status Tokens",
        otherCost: ["Sky"],
      },
      {
        description: "Three times per turn, after you deal damage to an enemy, give them 1 Burning Token or destroy an Obstacle.",
        otherCost: ["Hurricane"],
      },
      {
        description: "Three times per turn, after you deal damage to an enemy, give them 1 Weakness or Fatigue Token",
        otherCost: ["Rain"],
      },
      {
        description: "At the start of your turn, create an Obstacle within range",
        otherCost: ["Mist"],
      },
      {
        description: "At the start of your turn, if there are no Allies within range, gain 2 Power Tokens",
        otherCost: ["Cloud"],
      },
      {
        description: "You have Armor Sun: At the start of your turn, Heal",
        otherCost: ["Storm"],
      },
    ],
  },
]

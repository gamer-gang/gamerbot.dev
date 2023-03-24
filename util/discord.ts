// import { ApplicationCommandType } from 'discord.js'
// TODO: possible to remove discord.js dependency or make it browser-friendly?

export const applicationCommandTypeName = {
  1: 'CHAT_INPUT',
  2: 'USER',
  3: 'MESSAGE',
} as const

export const applicationCommandOptionTypeName = {
  1: 'SUBCOMMAND',
  2: 'SUBCOMMAND_GROUP',
  3: 'STRING',
  4: 'INTEGER',
  5: 'BOOLEAN',
  6: 'USER',
  7: 'CHANNEL',
  8: 'ROLE',
  9: 'MENTIONABLE',
  10: 'NUMBER',
  11: 'ATTACHMENT',
} as const

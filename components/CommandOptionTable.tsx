/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { H3, H4, HTMLTable } from '@blueprintjs/core'
import assert from 'assert'
import type { ApplicationCommandSubCommandData } from 'discord.js'
import { DocsJson } from 'gamerbot/src/types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { applicationCommandOptionTypeName } from '../util/discord'

interface CommandOptionTableProps {
  command: DocsJson['commands'][number]
}

const Table: React.VFC<{ options: DocsJson['commands'][number]['options'] }> = ({ options }) => (
  <HTMLTable>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required?</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {options.map((option, i) => (
        <tr key={i}>
          <td>{option.name}</td>
          <td>{applicationCommandOptionTypeName[option.type].replace(/_/g, '').toLowerCase()}</td>
          <td>{(option as any).required ? '✅' : '❌'}</td>
          <td>{option.description}</td>
        </tr>
      ))}
    </tbody>
  </HTMLTable>
)

const CommandOptionTable: React.VFC<CommandOptionTableProps> = ({ command: { options, name } }) => {
  if (applicationCommandOptionTypeName[options[0].type] !== 'SUBCOMMAND') {
    return (
      <>
        <H3 className="mt-8">Options</H3>
        <Table options={options} />
      </>
    )
  }
  const elements: JSX.Element[] = [
    <H3 className="mt-8" key="scheader">
      Subcommands
    </H3>,
  ]

  for (const subcommand of options) {
    assert(applicationCommandOptionTypeName[options[0].type] === 'SUBCOMMAND')

    elements.push(
      <H4 key={subcommand.name + 'header'} className="mt-4 mb-2">
        /{name} {subcommand.name}
      </H4>
    )

    elements.push(<ReactMarkdown>{subcommand.description}</ReactMarkdown>)

    if ((subcommand as ApplicationCommandSubCommandData).options?.length) {
      elements.push(
        <Table
          key={subcommand.name}
          options={(subcommand as ApplicationCommandSubCommandData).options!}
        />
      )
    }
  }

  return <>{elements}</>
}

export default CommandOptionTable

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { H3, H4, HTMLTable } from '@blueprintjs/core'
import assert from 'assert'
import React from 'react'
import { DocsJson } from 'src/types'

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
          <td>{option.type.toString().replace(/_/g, '').toLowerCase()}</td>
          <td>{(option as any).required ? '✅' : '❌'}</td>
          <td>{option.description}</td>
        </tr>
      ))}
    </tbody>
  </HTMLTable>
)

const CommandOptionTable: React.VFC<CommandOptionTableProps> = ({ command: { options, name } }) => {
  if (options[0].type !== 'SUB_COMMAND') {
    return (
      <>
        <H3 className="mt-8">Options</H3>
        <Table options={options} />
      </>
    )
  }
  const elements: JSX.Element[] = [<H3 className="mt-8">Subcommands</H3>]

  for (const subcommand of options) {
    assert(subcommand.type === 'SUB_COMMAND')

    elements.push(
      <H4 key={subcommand.name + 'header'} className="mt-4 mb-0">
        /{name} {subcommand.name}
      </H4>
    )

    if (subcommand.options?.length) {
      elements.push(<Table key={subcommand.name} options={subcommand.options} />)
    }
  }

  return <>{elements}</>
}

export default CommandOptionTable

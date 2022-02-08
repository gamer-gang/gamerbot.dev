/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { HTMLTable } from '@blueprintjs/core'
import React from 'react'
import { DocsJson } from 'src/types'

interface CommandOptionTableProps {
  options: DocsJson['commands'][number]['options']
}

const CommandOptionTable: React.VFC<CommandOptionTableProps> = ({ options }) => {
  return (
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
}

export default CommandOptionTable

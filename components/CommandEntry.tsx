import { H2, H3, HTMLDivProps, Tag, Text } from '@blueprintjs/core'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { DocsJson } from 'src/types'
import CommandExample from './CommandExample'
import CommandOptionTable from './CommandOptionTable'

interface CommandEntryProps extends HTMLDivProps {
  command: DocsJson['commands'][number]
}

const CommandEntry: React.VFC<CommandEntryProps> = ({ command, ...props }) => {
  return (
    <div {...props}>
      <div className="flex items-center scroll-m-24" id={`command-${command.name}`}>
        <H2 className={command.type !== 'CHAT_INPUT' ? 'mr-3' : ''}>/{command.name}</H2>
        {command.type !== 'CHAT_INPUT' && (
          <Tag round className="mb-2 tracking-wider">
            {command.type} CTX MENU
          </Tag>
        )}
      </div>
      <ReactMarkdown className="mb-1">{command.longDescription}</ReactMarkdown>
      {command.guildOnly && <Text className="mb-1">✅ Servers only</Text>}
      {command.logUsage && <Text className="mb-1">✅ Usage logged</Text>}
      {command.options.length > 0 && (
        <>
          <H3 className="mt-4">Options</H3>
          <CommandOptionTable options={command.options} />
        </>
      )}
      {command.examples.length > 0 && (
        <>
          <H3 className="mt-4">Examples</H3>
          {command.examples.map((example, i) => (
            <CommandExample key={i} name={command.name} example={example} className="mb-3" />
          ))}
        </>
      )}
    </div>
  )
}

export default CommandEntry

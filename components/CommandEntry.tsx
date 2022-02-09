import { H2, H3, HTMLDivProps, Tag, Text } from '@blueprintjs/core'
import Image from 'next/image'
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
        {command.type === 'CHAT_INPUT' ? (
          <H2 className="mb-4">/{command.name}</H2>
        ) : (
          <H2 className="flex items-center mb-4">
            <Image src="/gamerbot.svg" width={32} height={32} className="rounded-full" />
            <span className="ml-2 mr-4">{command.name}</span>
            <Tag round className="mt-1 font-normal tracking-wider">
              {command.type} CTX MENU
            </Tag>
          </H2>
        )}
      </div>
      <ReactMarkdown className="mb-1">{command.longDescription}</ReactMarkdown>
      {command.guildOnly && <Text className="mb-1">✅ Servers only</Text>}
      {command.logUsage && <Text className="mb-1">✅ Usage logged</Text>}
      {command.userPermissions.length > 0 && (
        <ReactMarkdown className="mb-1">
          {`**User permissions required**: ${command.userPermissions
            .map((p) => `\`${p}\``)
            .join(', ')}`}
        </ReactMarkdown>
      )}
      {command.botPermissions.length > 0 && (
        <ReactMarkdown className="mb-1">
          {`**Bot permissions required**: ${command.botPermissions
            .map((p) => `\`${p}\``)
            .join(', ')}`}
        </ReactMarkdown>
      )}
      {command.options.length > 0 && <CommandOptionTable command={command} />}
      {command.examples.length > 0 && (
        <>
          <H3 className="mt-8">Examples</H3>
          {command.examples.map((example, i) => (
            <CommandExample key={i} name={command.name} example={example} className="mb-3" />
          ))}
        </>
      )}
    </div>
  )
}

export default CommandEntry

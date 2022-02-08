import { HTMLDivProps } from '@blueprintjs/core'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { DocsJson } from 'src/types'

interface CommandExamplesProps extends HTMLDivProps {
  name: string
  example: DocsJson['commands'][number]['examples'][number]
}

const CommandExample: React.VFC<CommandExamplesProps> = ({
  name,
  example: { options, description },
  ...props
}) => {
  return (
    <div {...props}>
      <span className="flex items-center mb-2 font-[Whitney] text-lg">
        <span className="mr-2">/{name}</span>
        {Object.entries(options).map(([key, value], i) => {
          let valueElement
          if (value == null) {
            valueElement = <div className="w-1"></div>
          } else if (typeof value === 'object') {
            valueElement = (
              <span className="inline-flex items-center mr-2 px-1 bg-[#5865f24c] text-[#dee0fc] rounded-[3px]">
                @{value?.mention}
              </span>
            )
          } else {
            valueElement = (
              <span className="inline-flex items-center mr-2 rounded-[3px]">
                <ReactMarkdown>{value.toString()}</ReactMarkdown>
              </span>
            )
          }

          return (
            <React.Fragment key={i}>
              {value != null ? (
                <span className="h-full px-1 mr-0.5 rounded bg-darkgray-2">{key}:</span>
              ) : (
                <span className="h-full mr-0.5">{key}</span>
              )}
              {valueElement}
            </React.Fragment>
          )
        })}
      </span>
      {description && (
        <span>
          <ReactMarkdown className="">{description}</ReactMarkdown>
        </span>
      )}
    </div>
  )
}

export default CommandExample

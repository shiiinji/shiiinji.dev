import React, { useMemo, Dispatch, SetStateAction } from 'react'
import {
  MDXRemote as MDXRemoteComponent,
  MDXRemoteSerializeResult,
} from 'next-mdx-remote'
import { CodeBlock } from '@components/common/MDX/CodeBlock'
import { CustomH1, Headline } from '@components/common/MDX/CustomH1'
import {
  A,
  Div,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
} from '@components/common/MDX/HtmlStyles'
import { BlogMetaData } from '@services/types'

export type Props = {
  setHeadline: Dispatch<SetStateAction<Headline[]>>
  source: MDXRemoteSerializeResult<BlogMetaData>
}

type ComponentProps<T = unknown> = Record<string, T>

export function MDXRemote(props: Props) {
  const components = useMemo(
    () => ({
      code: CodeBlock,
      a: (componentProps: ComponentProps) => <A {...componentProps} />,
      div: (componentProps: ComponentProps) => <Div {...componentProps} />,
      h1: (componentProps: ComponentProps<string>) => (
        <CustomH1
          {...componentProps}
          id={componentProps.id}
          setHeadline={props.setHeadline}
        />
      ),
      h2: (componentProps: ComponentProps) => <H2 {...componentProps} />,
      h3: (componentProps: ComponentProps) => <H3 {...componentProps} />,
      h4: (componentProps: ComponentProps) => <H4 {...componentProps} />,
      h5: (componentProps: ComponentProps) => <H5 {...componentProps} />,
      h6: (componentProps: ComponentProps) => <H6 {...componentProps} />,
      p: (componentProps: ComponentProps) => <P {...componentProps} />,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    <MDXRemoteComponent
      {...props.source}
      components={components}
    ></MDXRemoteComponent>
  )
}

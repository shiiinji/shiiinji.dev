import React, { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { BlogMetaData } from '@services/types'
import { Headlines } from './Headlines'
import { A, Div, H2, H3, H4, H5, H6, P } from './HtmlStyles'
import { CodeBlock } from './CodeBlock'
import { CommentsContainer } from './CommentsContainer'
import { CustomH1, Headline } from './CustomH1'

export type Props = {
  source: MDXRemoteSerializeResult<BlogMetaData>
}

type ComponentProps<T = unknown> = Record<string, T>

const useStyles = makeStyles(() =>
  createStyles({
    headLineContainer: {
      position: 'fixed',
    },
    title: {
      fontWeight: 900,
    },
    view: {
      backgroundColor: 'black',
    },
  }),
)

export function Blog(props: Props) {
  const classes = useStyles()
  const [headlines, setHeadline] = useState<Headline[]>([])

  const components = useMemo(
    () => ({
      code: CodeBlock,
      a: (componentProps: ComponentProps) => <A {...componentProps} />,
      div: (componentProps: ComponentProps) => <Div {...componentProps} />,
      h1: (componentProps: ComponentProps<string>) => (
        <CustomH1
          {...componentProps}
          id={componentProps.id}
          setHeadline={setHeadline}
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
    <Container maxWidth="lg">
      <Box pt={3}>
        <Grid container={true}>
          <Grid item={true} xs={12} sm={9}>
            <Box pt={3}>
              <Typography
                className={classes.title}
                variant="h4"
                variantMapping={{ h4: 'h1' }}
              >
                {props.source.scope?.title}
              </Typography>
              <Typography variant="caption">
                {dayjs(props.source.scope?.date).format('YYYY/MM/DD')}
              </Typography>
            </Box>
            <Box pt={3}>
              <MDXRemote {...props.source} components={components}></MDXRemote>
            </Box>
            <Box pt={5} pb={5}>
              <CommentsContainer />
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={3}>
            {headlines.length > 0 && (
              <Box pt={5}>
                <Headlines headlines={headlines} />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

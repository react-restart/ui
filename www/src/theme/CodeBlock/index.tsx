import { type ReactNode } from 'react';
import { usePrismTheme } from '@docusaurus/theme-common';
// @ts-ignore
import CodeBlock from '@theme-original/CodeBlock';
// @ts-ignore
import type CodeBlockType from '@theme/CodeBlock';
import type { WrapperProps } from '@docusaurus/types';
import { LiveCodeblock } from '../../LiveCodeblock';

type Props = WrapperProps<typeof CodeBlockType>;

function getLanguage(className = '') {
  const [, mode] = className.match(/language-(\w+)/) || [];
  return mode;
}

export default function CodeBlockWrapper(props: Props): ReactNode {
  const prismTheme = usePrismTheme();

  if (props.live) {
    const language = props.language || getLanguage(props.className);

    return <LiveCodeblock theme={prismTheme} language={language} {...props} />;
  }

  return (
    <>
      <CodeBlock {...props} />
    </>
  );
}

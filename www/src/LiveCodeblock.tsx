// @ts-ignore
import BrowserOnly from '@docusaurus/BrowserOnly';

import clsx from 'clsx';
import {
  Editor,
  Error,
  ImportResolver,
  InfoMessage,
  Preview,
  Provider,
} from 'jarle';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as RestartUi from '@restart/ui';
import Button from './Button';
import Dropdown from './Dropdown';
import Tooltip from './Tooltip';
import Transition from 'react-transition-group/Transition';
import scrollParent from 'dom-helpers/scrollParent';
import '../src/css/transitions.css';

// @ts-ignore
import styles from './LiveCodeBlock.module.css';

const Info = (props: any) => (
  <InfoMessage
    {...props}
    className={clsx(props.className, styles.infoMessage)}
  />
);

const LocalImports = {
  react: React,
  'react-dom': ReactDOM,
  '@restart/ui': RestartUi,
  'react-transition-group/Transition': Transition,
  'dom-helpers/scrollParent': scrollParent,
  clsx,
  '../src/Button': Button,
  '../src/Dropdown': Dropdown,
  '../src/Tooltip': Tooltip,
  '../src/css/transitions.css': '',
};

export interface Props
  extends Omit<React.ComponentProps<typeof Provider>, 'children' | 'code'> {
  inline?: boolean;
  children: string;
  className?: string;
  editorClassName?: string;
  previewClassName?: string;
  errorClassName?: string;
  codeFirst?: boolean;
  editor?: 'show' | 'hide' | 'collapse';
  ref?: React.Ref<HTMLDivElement>;
}

const resolveImports: ImportResolver = (requests: string[]) => {
  return Promise.all(
    requests.map((request) => {
      if (request in LocalImports) {
        return LocalImports[request];
      }

      return import(/* webpackIgnore: true */ request);
    }),
  );
};

const scope = { React, ...React };

export function LiveCodeblock({
  children,
  inline = false,
  className,
  editorClassName,
  previewClassName,
  errorClassName,
  codeFirst = false,
  ref,
  editor: editorConfig = 'show',
  ...props
}: Props) {
  const [showEditor, setShowEditor] = React.useState(editorConfig === 'show');

  const showButton = editorConfig === 'collapse' && (
    <div>
      <button
        className={styles.playgroundButton}
        onClick={() => setShowEditor((prev) => !prev)}
      >
        {showEditor ? 'Hide' : 'Show'} Code
      </button>
    </div>
  );

  const editor = showEditor && (
    <Editor
      infoComponent={Info}
      className={clsx(editorClassName, styles.playgroundEditor)}
      style={props.theme?.plain}
    />
  );
  const preview = (
    <BrowserOnly fallback={<div>Loading…</div>}>
      {() => (
        <div className={clsx(previewClassName, styles.playgroundPreview)}>
          <Preview />
          <Error className={clsx(errorClassName, styles.error)} />
        </div>
      )}
    </BrowserOnly>
  );

  return (
    <>
      <div
        ref={ref}
        className={clsx(className, styles.playground, inline && styles.inline)}
      >
        <Provider
          code={children.replace(/\n$/, '')}
          {...props}
          scope={scope}
          resolveImports={resolveImports}
        >
          {!codeFirst ? (
            <>
              {preview}
              {editor}
            </>
          ) : (
            <>
              {editor}
              {preview}
            </>
          )}
        </Provider>
      </div>
      {showButton}
    </>
  );
}

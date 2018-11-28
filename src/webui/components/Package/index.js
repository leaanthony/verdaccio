/**
 * @prettier
 * @flow
 */

import React from 'react';
import type { Element } from 'react';
import { margin } from 'polished';

import Tag from '../Tag';
import { formatDate, formatDateDistance } from '../../utils/package';

import { IProps } from './types';
import { Wrapper, Header, A, Name, Version, Overview, Published, Time, Text, Description, Avatar, Author, Field, Content, Footer } from './styles';

const getInitialsName = (name: string) =>
  name
    .split(' ')
    .reduce((accumulator, currentValue) => accumulator.charAt(0) + currentValue.charAt(0), '')
    .toUpperCase();

const Package = ({ label, version, time, author: { name, avatar, email }, description, keywords }: IProps): Element<Wrapper> => {
  const publisher = name || 'Anonymous';
  return (
    <Wrapper>
      <Header>
        <A to={`detail/${label}`}>
          <Name>{label}</Name>
          {version && <Version>{`${version} version`}</Version>}
        </A>
        <Overview>
          <Published>
            <Time />
            {`Published on ${formatDate(time)} • ${formatDateDistance(time)} ago`}
          </Published>
        </Overview>
      </Header>
      <Content>
        <Field>
          <Text text="Author" modifiers={margin('0px', '0px', '5px', '0px')} />
          <Author>
            <Avatar alt={publisher} src={avatar}>
              {!avatar && publisher && getInitialsName(publisher)}
            </Avatar>
            <Description>
              <Text text={publisher} weight="bold" />
              {email && <Text text={email} />}
            </Description>
          </Author>
        </Field>
        {description && (
          <Field>
            <Text text="Description" modifiers={margin('0px', '0px', '5px', '0px')} />
            <span>{description}</span>
          </Field>
        )}
      </Content>
      {keywords.length > 0 && (
        <Footer>
          {keywords.map((keyword, index) => (
            <Tag key={index}>{keyword}</Tag>
          ))}
        </Footer>
      )}
    </Wrapper>
  );
};

Package.defaultProps = {
  author: {
    name: '',
    avatar: '',
    email: '',
    url: '',
  },
  description: '',
  keywords: [],
};

export default Package;

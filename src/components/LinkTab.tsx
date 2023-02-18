import React from 'react';
import styled from '@emotion/styled'
import Tab from '@mui/material/Tab';
import a11yTabProps from './helpers/a11yTabProps';

const StyledTab = styled(Tab)<{ something: string }>`
  border: 1px solid  ${({ something }): string => something};
`

interface LinkTabProps {
  idx: number;
  label?: string;
  href?: string;
  value?: string;
}

const LinkTab: React.FC<LinkTabProps> = (props: LinkTabProps) => (
  <StyledTab
    onClick={(event: any) => {
      event.preventDefault();
    }}
    {...props}
    {...a11yTabProps(props.idx)}
    something="blue"
  />
);

export default LinkTab;

import React, { useState } from 'react';
import { Layout, Menu, Tooltip } from 'antd';
import { PlusOutlined, BookOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import nullthrows from 'nullthrows';
import Slide from './Slide';
import { SlidesSidebar_lesson } from './__generated__/SlidesSidebar_lesson.graphql';


/*if you want to change the icon preview of the slides, you have to go into
that specific slide type file, then edit the preview font size. and the spcific are with
"Outlined" name on it*/


/* original
  width: 100% !important; //now at 150px 
  height: 100% !important;
  padding: 5px 15px !important;
  background-color: #ffffff !important;
*/
const MenuItem = styled(Menu.Item)`
  width: 150px !important;
  height: 100% !important;
  padding: 5px 10px !important;
  background-color: #ffffff !important;
`;

/*original

height: 190px; **
  background-color: white;
  border-radius: 5px;
  font-weight: 600;
  color: #646464;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    color: #40a9ff;
    border: 1px solid #40a9ff;
    cursor: pointer;
  }
*/
const SlideCard = styled(Layout.Content)`
  height: 100px;
  background-color: white;
  border-radius: 5px;
  font-weight: 600;
  color: #646464;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    color: #40a9ff;
    border: 1px solid #40a9ff;
    cursor: pointer;
  }
`;

type SidebarHeaderProps = {
  title: string;
};
const SidebarHeader = ({ title }: SidebarHeaderProps) => (
  <Tooltip title={title}>
    <p
      style={{
        fontSize: 18,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingLeft: '15px',
      }}
    >
      <BookOutlined />
      {' '}
      {title}
    </p>
  </Tooltip>
);

/*
TODO
while props is not being used
there may be a future use cause for it to be passed
 */
const CreateSlideCard = (props: any) => (
  <Tooltip title="Create a slide">
    <SlideCard style={{ border: '1px solid #ccc' }}>
      <PlusOutlined style={{ fontSize: '40px' }} />
    </SlideCard>
  </Tooltip>
  );

export type SlideMenuItem = {
  id: string;
  component: JSX.Element;
};

const { Sider } = Layout;
type Props = {
  lesson: SlidesSidebar_lesson;
  onCreate?: () => void;
  editing?: boolean;
  onClick: (id: string) => void;
};
const SlidesSidebar = ({
  lesson,
  editing = false,
  onCreate,
  onClick,
}: Props) => {
  const [selected, setSelected] = useState<string | undefined>(
    lesson.slides[0]?.id,
  );

  /* changed sider width={300} to 200 (this is also the width of the aside menu item blocks) */
  return (
    <Sider width={200} theme="light" style={{ overflow: 'auto' }}>
      <SidebarHeader title={lesson.title} />
      <Menu defaultSelectedKeys={[selected?.toString() ?? '']} mode="inline">
        {/* This is the add slide which should always show up on top */}
        {editing && (
          <MenuItem
            key={-1}
            onClick={() =>
              nullthrows(
                onCreate,
                'An onCreate function must be provided if editing is true',
              )()}
          >
            <CreateSlideCard />
          </MenuItem>
        )}

        {/* This is the rest of the slides */}
        {lesson.slides.map((slide, index: number) => (
          <MenuItem
            key={index}
            onClick={() => {
              onClick(slide.id);
              setSelected(slide.id);
            }}
          >
            <div style={{ display: 'flex' }}>
              <h1
                style={{
                  margin: 'auto',
                  paddingRight: '20px',
                  fontWeight: 'bolder',
                }}
              >
                {index + 1}
              </h1>
              <SlideCard>
                <Slide preview selected={slide.id === selected} slide={slide} />
              </SlideCard>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </Sider>
  );
};

export default createFragmentContainer(SlidesSidebar, {
  lesson: graphql`
    fragment SlidesSidebar_lesson on Lesson {
      title
      slides {
        id
        ...Slide_slide
      }
    }
  `,
});

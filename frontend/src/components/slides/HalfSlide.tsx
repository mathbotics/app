import React from 'react';
// import styled from 'styled-components';
// import { UnorderedListOutlined, AlignLeftOutlined } from '@ant-design/icons';
// import { graphql } from 'babel-plugin-relay/macro';
// import nullthrows from 'nullthrows';
// import { createFragmentContainer } from 'react-relay';
// // import { HalfSlide_halfSlide } from './__generated__/HalfSlide_halfSlide.graphql';
// import { Block as BlockType } from '../../types/Block';
// import Block from '../block/Block';

// type BlockWrapperProps = { preview?: boolean };
// const FirstHalfBlockWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   width: 49.5%;
//   overflow: hidden;
//   padding-left: .5em;
//   background-color: ${({ preview }: BlockWrapperProps) => !preview && 'white'};
// `;

// const SecondHalfBlockWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   height: 100%;
//   width: 49.5%;
//   padding-left: .5em;
//   background-color: ${({ preview }: BlockWrapperProps) => !preview && 'white'};
// `;

// type WrapperProps = { preview?: boolean; selected?: boolean };
// const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   justify-content: space-between;
//   align-items: center;
//   display: flex;
//   transition: all 0.15s ease-in-out;
//   background-color: ${({ selected, preview }: WrapperProps) =>
//     selected && preview && '#1990ff'};
//   color: ${({ selected, preview }: WrapperProps) =>
//     selected && preview && 'white'};
//   :hover {
//     background-color: ${({ preview }: WrapperProps) => preview && '#1990ff'};
//     color: ${({ preview }: WrapperProps) => preview && 'white'};
//   }
// `;

/*original preview font size was 50*/

// type BlockComponent = React.ReactElement;
// type Props = {
//   halfSlide?: HalfSlide_halfSlide;
//   BlockA?: BlockComponent;
//   BlockB?: BlockComponent;
//   preview?: boolean;
//   selected?: boolean;
//   onSelectBlock?: (block: BlockType) => void;
// };
// const HalfSlide = ({ onSelectBlock, halfSlide, preview, selected }: Props) => (
//   <Wrapper preview={preview} selected={selected}>
//     <FirstHalfBlockWrapper
//       preview={preview}
//       onClick={() =>
//         onSelectBlock && onSelectBlock(nullthrows(halfSlide?.firstHalfBlock))}
//     >
//       {preview ? (
//         <AlignLeftOutlined style={{ fontSize: 30 }} />
//       ) : (
//         <Block block={nullthrows(halfSlide?.firstHalfBlock)} />
//       )}
//     </FirstHalfBlockWrapper>

//     <SecondHalfBlockWrapper
//       preview={preview}
//       onClick={() =>
//         onSelectBlock && onSelectBlock(nullthrows(halfSlide?.secondHalfBlock))}
//     >
//       {preview ? (
//         <UnorderedListOutlined style={{ fontSize: 30 }} />
//       ) : (
//         <Block block={nullthrows(halfSlide?.secondHalfBlock)} />
//       )}
//     </SecondHalfBlockWrapper>
//   </Wrapper>
// );

// export default createFragmentContainer(HalfSlide, {
//   halfSlide: graphql`
//     fragment HalfSlide_halfSlide on HalfSlide {
//       id
//       firstHalfBlock {
//         ...EditBlockSidebar_block
//         ...Block_block
//       }
//       secondHalfBlock {
//         ...EditBlockSidebar_block
//         ...Block_block
//       }
//     }
//   `,
// });
export {};
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';

const Main = styled.div`
  ${tw`mx-2 mb-4 overflow-hidden bg-white shadow-lg`};
  color: red;

`;

export default function Footer() {
  return (
    <Main className="p-6">
      Footer
    </Main>
  )
}

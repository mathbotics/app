import React from 'react';

export const AppLogo = (props: { height: any }) => (
  <img
    alt="Mathbotics logo"
    style={{
      height: props.height,
      width: props.height,
      objectFit: 'cover',
      borderRadius: 100,
      margin: '10px',
    }}
    src="https://cdn.dribbble.com/users/1209888/screenshots/4782765/ff3.png"
  />
);

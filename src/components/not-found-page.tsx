import React from 'react';

import ImgUrl from '../assets/img/unicorn.jpg';

export default function NotFoundPage() {
  return (
    <div>
      <h3>404</h3>
      <p>Page not found</p>
      <img src={ ImgUrl } />
    </div>
  );
}

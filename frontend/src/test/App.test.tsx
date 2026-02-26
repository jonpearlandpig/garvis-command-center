import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../pages/_app';

describe('App Root Component', () => {
  it('renders without crashing', () => {
    render(<App Component={() => <div>Mock Page</div>} pageProps={{}} />);
    expect(document.body).toBeTruthy();
  });
});

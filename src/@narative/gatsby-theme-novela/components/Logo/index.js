import React from 'react';
import {Link} from 'gatsby';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <Link to="/"><h1 style= {{fontSize: '2.5rem'}}>Shanky</h1></Link>
  );
}
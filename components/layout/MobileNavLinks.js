import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { links, linksWithoutSubs } from '../../utils/mobile-links';

const MobileNavLinks = (props) => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');

  return (
    <>
      <div
        onClick={() =>
          heading === links[0].name ? setHeading('') : setHeading(links[0].name)
        }
      >
        Produktai
      </div>
      <div
        className={`${heading === links[0].name ? 'open-heading' : 'heading'}`}
      >
        {links[0].sublinks.map((sublink, index) => {
          return (
            <div key={index}>
              <div className="sublinks-list">
                <h5
                  onClick={() =>
                    subHeading !== sublink.name
                      ? setSubHeading(sublink.name)
                      : setSubHeading('')
                  }
                >
                  {sublink.name}
                </h5>
                <div
                  className={`${
                    subHeading === sublink.name ? 'open-sublink' : 'sublink'
                  }`}
                >
                  {sublink.sublink.map((slink, index) => (
                    <li key={index} onClick={props.onProductClick}>
                      <Link href={slink.link}>{slink.name}</Link>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        <div className="sublinks-list">
          {linksWithoutSubs.map((prodTitle, index) => (
            <li key={index} onClick={props.onProductClick}>
              <Link href={`${prodTitle.path}`}>{prodTitle.name}</Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavLinks;

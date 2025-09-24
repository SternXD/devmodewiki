// SPDX-FileCopyrightText: 2025 SternXD
// SPDX-License-Identifier: AGPL-3.0

import React from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';

export default function Search() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q') || '';

  return (
    <Layout
      title="Search"
      description="Search the Dev Mode Wiki documentation"
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div style={{ textAlign: 'center' }}>
              <h1>Search Documentation</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Search through our comprehensive Xbox development and emulation guides.
              </p>

              {/* This will be replaced by the search component */}
              <div id="search-container">
                <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>
                  {searchQuery
                    ? `Searching for "${searchQuery}"...`
                    : 'Enter a search term above to find what you need.'
                  }
                </p>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <h3>Popular Search Terms:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {[
                    'Xbox Developer Mode',
                    'XBSX2 setup',
                    'Dolphin emulator',
                    'PPSSPP Xbox',
                    'compile emulator',
                    'USB permissions',
                    'developer account',
                    'BIOS setup'
                  ].map((term) => (
                    <a
                      key={term}
                      href={`/search?q=${encodeURIComponent(term)}`}
                      className="button button--outline button--sm"
                      style={{ margin: '0.25rem' }}
                    >
                      {term}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

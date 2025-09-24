// SPDX-FileCopyrightText: 2025 SternXD
// SPDX-License-Identifier: AGPL-3.0

import React from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

export default function NotFound() {
  const location = useLocation();

  return (
    <Layout
      title="Page Not Found"
      description="The page you're looking for doesn't exist."
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              borderRadius: '12px',
              backgroundColor: 'var(--ifm-color-emphasis-100)',
              border: '1px solid var(--ifm-color-emphasis-200)'
            }}>
              <h1 className="hero__title" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                404
              </h1>
              <h2 style={{ marginBottom: '2rem' }}>
                Page Not Found
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                The page <code>{location.pathname}</code> doesn't exist.
                <br />
                Maybe you mistyped the URL or the page was moved.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro"
                >
                  ← Back to Documentation
                </Link>
              </div>
              <div>
                <h3>Popular Pages:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li><Link to="/docs/xbox-setup/xbox-developer-mode-setup">Xbox Developer Mode Setup</Link></li>
                  <li><Link to="/docs/emulation/xbsx2-guide">XBSX2 (PS2 Emulator)</Link></li>
                  <li><Link to="/docs/emulation/dolphin-guide">Dolphin (GameCube/Wii)</Link></li>
                  <li><Link to="/docs/emulation">All Emulators</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

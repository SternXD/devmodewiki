// SPDX-FileCopyrightText: 2025 SternXD
// SPDX-License-Identifier: AGPL-3.0

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function InfoRow({label, value}) {
  if (!value) return null;
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}

function BulletList({title, items, tone = 'default'}) {
  if (!items || items.length === 0) return null;
  return (
    <div className={clsx(styles.list, tone === 'positive' ? styles.listPositive : styles.listDefault)}>
      <div className={styles.listTitle}>{title}</div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AtAGlance({
  title,
  summary,
  testedOn,
  rows = [],
  works = [],
  issues = [],
  notes,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>At a glance</span>
        {title ? <h3 className={styles.title}>{title}</h3> : null}
      </div>

      {summary ? <p className={styles.summary}>{summary}</p> : null}
      {testedOn ? (
        <div className={styles.tested}>Last tested: {testedOn}</div>
      ) : null}

      {rows?.length ? (
        <div className={styles.grid}>
          {rows.map((row) => (
            <InfoRow key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
      ) : null}

      <div className={styles.lists}>
        <BulletList title="Works" items={works} tone="positive" />
        <BulletList title="Known issues" items={issues} />
      </div>

      {notes ? <p className={styles.notes}>{notes}</p> : null}
    </div>
  );
}

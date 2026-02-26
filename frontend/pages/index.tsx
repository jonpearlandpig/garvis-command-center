import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Garvis PoC</title>
      </Head>
      <main style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '800px', margin: 'auto' }}>
        <h1 style={{ fontSize: '2.5em', color: '#333', marginBottom: '20px' }}>
          GARVIS Governance PoC
        </h1>
        <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
          Welcome to the Garvis Governance Proof of Concept. This demo showcases an intuitive, clean, and simple interface for auditable AI systems, built with truthfulness and provenance at its core.
        </p>
        <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
          Experience the power of governed AI, from data integrity to controllable automation.
        </p>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link href="/demo">
            <button style={{ padding: '12px 24px', fontSize: '1.1em', borderRadius: '8px', cursor: 'pointer', background: '#0070f3', color: 'white', border: 'none' }}>
              Start Demo
            </button>
          </Link>
          {/* Additions for future: link to docs, settings, learn more */}
        </nav>
      </main>
    </>
  );
}

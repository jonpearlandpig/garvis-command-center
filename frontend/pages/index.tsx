import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Garvis PoC</title>
        <meta name="description" content="Garvis Governance Proof of Concept" />
      </Head>
      <main style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3em', color: '#2c5282', marginBottom: '20px', fontWeight: 700 }}>
          GARVIS Governance PoC
        </h1>
        <p style={{ fontSize: '1.1em', color: '#4a5568', lineHeight: '1.6', marginBottom: '30px' }}>
          Welcome to the Garvis Governance Proof of Concept. This demo showcases an auditable, truth-focused AI system. Experience provenance, explainability, and controlled AI actions.
        </p>
        <p style={{ fontSize: '1em', color: '#6b7280', lineHeight: '1.6', marginBottom: '40px' }}>
          {"Let's see the future of AI governance in action."}
        </p>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Link href="/demo">
            <button style={{ padding: '15px 30px', fontSize: '1.1em', borderRadius: '8px', cursor: 'pointer', background: '#0070f3', color: 'white', border: 'none', fontWeight: 600, transition: 'background-color 0.3s ease' }}>
              Start Demo
            </button>
          </Link>
        </nav>
      </main>
    </>
  );
}

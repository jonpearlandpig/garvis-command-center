import React, { useState, useEffect } from 'react';
import Head from 'next/head';
// Placeholder imports for API functions
// import { createAKB, runDemo, fetchDoc, getAvailableAdapters, setLLMAdapter } from '../lib/api';
// import { BACKEND_URL } from '../lib/constants';

interface AKB {
  id: string;
  name: string;
  owner: string;
  created_at: string;
  cac_policy: {
    policy_type: string;
    allowed_akb_ids: string[];
    allow_all_akbs_for_search: boolean;
  };
  linked_akbs: string[];
}

interface DemoResult {
  ok: boolean;
  content: string;
  explainability: string;
  generated_at: string;
}

interface AdapterInfo {
  [key: string]: string;
}

const DemoPage: React.FC = () => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [akbId, setAkbId] = useState<string | null>(null);
  const [demoResult, setDemoResult] = useState<DemoResult | null>(null);

  const [availableAdapters, setAvailableAdapters] = useState<AdapterInfo>({});
  const [selectedAdapter, setSelectedAdapter] = useState<string>('local_mock');
  const [policyType, setPolicyType] = useState<string>('single');
  const [allowedAkbIds, setAllowedAkbIds] = useState<string>('');

  useEffect(() => {
    // Placeholder for loading adapters
    setAvailableAdapters({ local_mock: 'Deterministic mock LLM', openai_like: 'OpenAI-like LLM' });
    setSelectedAdapter('local_mock');
  }, []);

  const handleCreateAKB = async () => {
    if (!name || !owner) {
      alert('Please enter both AKB name and owner.');
      return;
    }
    // Placeholder for AKB creation
    setAkbId('mock-akb-id');
    alert(`AKB "${name}" created successfully with ID: mock-akb-id`);
  };

  const handleSetAdapter = async () => {
    if (!selectedAdapter) return;
    // Placeholder for setting adapter
    alert(`LLM Adapter set to: ${selectedAdapter}`);
  };

  const handleRunDemo = async () => {
    if (!akbId) {
      alert('Please create an AKB first.');
      return;
    }
    // Placeholder for running demo
    setDemoResult({
      ok: true,
      content: '--- Document for AKB: Demo ---\nOwner: DemoOwner\nCreated: 2026-02-25T00:00:00Z\nCAC Policy: single, Linked AKBs: None\n\n--- AI Content ---\nMock output from local LLM.',
      explainability: 'Generated using adapter: local_mock. Sources: local_data, local_mock. Confidence: 1.00. Context Data: None.',
      generated_at: new Date().toISOString(),
    });
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '900px', margin: 'auto' }}>
      <Head>
        <title>GARVIS Demo - Governance PoC</title>
      </Head>
      <h1 style={{ fontSize: '2em', color: '#333', marginBottom: '20px' }}>Garvis Governance Demo</h1>

      <section style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.4em', color: '#666', marginBottom: '15px' }}>1. AKB Configuration</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="AKB Name (e.g., ProjectAlpha)"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', flexGrow: 1 }}
          />
          <input
            type="text"
            placeholder="Owner (e.g., your_team)"
            value={owner}
            onChange={e => setOwner(e.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', flexGrow: 1 }}
          />
          <button onClick={handleCreateAKB} style={{ padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', background: '#28a745', color: 'white', border: 'none' }}>
            Create AKB
          </button>
        </div>
        {akbId && <p style={{ marginTop: '15px', color: 'green' }}>AKB created successfully! ID: <strong>{akbId}</strong></p>}
      </section>

      <section style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.4em', color: '#666', marginBottom: '15px' }}>2. AI Adapter Selection</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <label htmlFor="adapter-select" style={{ marginRight: '10px' }}>Select LLM Adapter:</label>
          <select
            id="adapter-select"
            value={selectedAdapter}
            onChange={(e) => setSelectedAdapter(e.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            {Object.entries(availableAdapters).map(([key, description]) => (
              <option key={key} value={key}>{description} ({key})</option>
            ))}
          </select>
          <button onClick={handleSetAdapter} style={{ padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none' }}>
            Set Adapter
          </button>
        </div>
        <p style={{fontSize: '0.9em', color: '#777', marginTop: '10px'}}>Note: For demo purposes, adapters might simulate or use placeholder keys.</p>
      </section>

      <section style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.4em', color: '#666', marginBottom: '15px' }}>3. Run Governance Demo</h2>
        <button
          onClick={handleRunDemo}
          disabled={!akbId}
          style={{ padding: '12px 24px', fontSize: '1.1em', borderRadius: '8px', cursor: !akbId ? 'not-allowed' : 'pointer', background: !akbId ? '#ccc' : '#007bff', color: 'white', border: 'none' }}
        >
          Run Demo: Evaluate & Generate Document
        </button>
        {!akbId && <p style={{ marginTop: '15px', color: '#999' }}>Create an AKB first to run the demo.</p>}
      </section>

      {docResult && (
        <section style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', background: '#f9f9f9' }}>
          <h2 style={{ fontSize: '1.4em', color: '#333', marginBottom: '15px' }}>Demo Results</h2>
          <div style={{ fontSize: '0.9em', color: '#555', marginBottom: '10px', fontStyle: 'italic' }}>
            Generated at: {new Date(docResult.generated_at).toLocaleString()}
          </div>
          <h3 style={{ fontSize: '1.2em', color: '#444', marginBottom: '10px' }}>Generated Document Content:</h3>
          <pre style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            padding: '15px',
            background: '#fff',
            border: '1px solid #eee',
            borderRadius: '5px',
            fontFamily: 'monospace',
            fontSize: '0.9em'
          }}>
            {docResult.content || 'No content generated.'}
          </pre>
          {docResult.explainability && (
            <div style={{ marginTop: '20px', borderTop: '1px dashed #ccc', paddingTop: '15px' }}>
              <h3 style={{ fontSize: '1.2em', color: '#444', marginBottom: '10px' }}>Explainability:</h3>
              <p style={{ fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>
                {docResult.explainability}
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

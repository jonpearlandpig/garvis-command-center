// --- Adapter Configuration ---

export async function setAdapterApiKey(
  adapterKey: string,
  apiKey: string,
  baseUrl: string = BACKEND_URL
): Promise<void> {
  const res = await fetch(`${baseUrl}/adapters/set_key`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ adapter_key: adapterKey, api_key: apiKey }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Unknown error' }));
    throw new Error(err.detail || 'Failed to set adapter key');
  }
}

export async function setAdapterModel(
  adapterKey: string,
  modelName: string,
  baseUrl: string = BACKEND_URL
): Promise<void> {
  const res = await fetch(`${baseUrl}/adapters/set_model`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ adapter_key: adapterKey, model_name: modelName }),
    id: string;
    name: string;
    owner: string;
    created_at: string;
    entries: any[];
    linked_akbs: string[];
import axios from 'axios';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
    ok: boolean;
    content: string;
    explainability: string;
    generated_at: string;
  name: string;
  owner: string;
  created_at: string;
  entries: any[];
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

export async function createAKB(payload: { name: string; owner: string; }, baseUrl: string = GOVERNANCE_API_BASE): Promise<string> {
  try {
    const response = await axios.post(`${baseUrl}/akb`, payload);
    return response.data.id;
  } catch (error: any) {
    console.error("API Error: createAKB", error.response?.data || error.message);
    throw new Error(error.response?.data?.detail || error.message || "Failed to create AKB");
  }
}

export async function getAKB(akbId: string, baseUrl: string = GOVERNANCE_API_BASE): Promise<AKB> {
  try {
    const response = await axios.get(`${baseUrl}/akb/${akbId}`);
    return response.data;
  } catch (error: any) {
    console.error("API Error: getAKB", error.response?.data || error.message);
    throw new Error(error.response?.data?.detail || error.message || "Failed to get AKB");
  }
}

export async function getAvailableAdapters(baseUrl: string = GOVERNANCE_API_BASE): Promise<AdapterInfo> {
  try {
    const response = await axios.get(`${baseUrl}/adapters/available`);
    return response.data;
  } catch (error: any) {
    console.error("API Error: getAvailableAdapters", error.response?.data || error.message);
    throw new Error(error.response?.data?.detail || error.message || "Failed to get available adapters");
  }
}

export async function setLLMAdapter(adapterKey: string, baseUrl: string = GOVERNANCE_API_BASE): Promise<void> {
  try {
    await axios.post(`${baseUrl}/adapters/set_current`, { adapter_key: adapterKey });
  } catch (error: any) {
    console.error("API Error: setLLMAdapter", error.response?.data || error.message);
    throw new Error(error.response?.data?.detail || error.message || "Failed to set LLM adapter");
  }
}

export async function evaluateAction(akbId: string, action: string, baseUrl: string = GOVERNANCE_API_BASE): Promise<any> {
  try {
    const response = await axios.post(`${baseUrl}/akb/${akbId}/evaluate`, { akb_id: akbId, action: action });
    return response.data;
  } catch (error: any) {
    console.error("API Error: evaluateAction", error.response?.data || error.message);
    throw new Error(error.response?.data?.detail || error.message || `Failed to evaluate action: ${action}`);
  }
}

export async function generateDoc(akbId: string, approve: boolean = true, adapterKey: string = 'openai_like', baseUrl: string = GOVERNANCE_API_BASE): Promise<DemoResult> {
  try {
    const response = await axios.post(`${baseUrl}/akb/${akbId}/generate-doc`, {
      akb_id: akbId,
      approve: approve,
      llm_adapter_key: adapterKey
    });
    return response.data;
  } catch (error: any) {
    console.error("API Error: generateDoc", error.response?.data || error.message);
    throw new Error(error.response?.data?.detail || error.message || "Failed to generate document");
  }
}

export async function runDemo(akbId: string, baseUrl: string = GOVERNANCE_API_BASE, adapterKey: string = 'openai_like'): Promise<DemoResult> {
  const docResult = await generateDoc(akbId, true, adapterKey, baseUrl);
  return docResult;
}

export async function fetchAuditLogs(baseUrl: string = GOVERNANCE_API_BASE): Promise<any[]> {
  try {
    const response = await axios.get(`${baseUrl}/audit/export?format=json`);
    return response.data.data;
  } catch (error: any) {
    console.error("API Error: fetchAuditLogs", error.response?.data || error.message);
    throw new Error(error.response?.data?.detail || error.message || "Failed to fetch audit logs");
  }
}

// Patch bundle typed API client
// See patch bundle for full implementation

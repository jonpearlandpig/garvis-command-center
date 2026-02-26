import axios from 'axios';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
const GOVERNANCE_API_BASE = `${BACKEND_URL}/governance`;

interface AKB {
  id: string;
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

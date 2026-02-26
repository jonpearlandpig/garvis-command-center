import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DemoPage from '../pages/demo';

vi.mock('../lib/api', () => ({
    createAKB: vi.fn().mockResolvedValue('mock-akb-id'),
    runDemo: vi.fn().mockResolvedValue({
        ok: true,
        content: "Mocked document content.",
        explainability: "Mocked explanation.",
        generated_at: new Date().toISOString()
    }),
    getAvailableAdapters: vi.fn().mockResolvedValue({ openai_like: "OpenAI-like LLM", local_mock: "Mock LLM" }),
    setLLMAdapter: vi.fn().mockResolvedValue(undefined),
}));

describe('DemoPage', () => {
    it('renders the demo page elements', () => {
        render(<DemoPage />);
        expect(screen.getByText(/GARVIS Governance Demo/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/AKB Name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Owner/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Create AKB/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Run Demo/i })).toBeDisabled();
    });

    it('allows creating an AKB and enables the Run Demo button', async () => {
        render(<DemoPage />);
        const nameInput = screen.getByPlaceholderText(/AKB Name/i) as HTMLInputElement;
        const ownerInput = screen.getByPlaceholderText(/Owner/i) as HTMLInputElement;
        const createButton = screen.getByRole('button', { name: /Create AKB/i });

        fireEvent.change(nameInput, { target: { value: 'Test AKB' } });
        fireEvent.change(ownerInput, { target: { value: 'Test Owner' } });
        fireEvent.click(createButton);

        await waitFor(() => expect(screen.getByText(/AKB created successfully/i)).toBeInTheDocument());
        expect(screen.getByRole('button', { name: /Run Demo/i })).toBeEnabled();
    });

    it('runs the demo and displays results', async () => {
        render(<DemoPage />);
        const nameInput = screen.getByPlaceholderText(/AKB Name/i) as HTMLInputElement;
        const ownerInput = screen.getByPlaceholderText(/Owner/i) as HTMLInputElement;
        const createButton = screen.getByRole('button', { name: /Create AKB/i });

        fireEvent.change(nameInput, { target: { value: 'Test AKB' } });
        fireEvent.change(ownerInput, { target: { value: 'Test Owner' } });
        fireEvent.click(createButton);

        await waitFor(() => expect(screen.getByText(/AKB created successfully/i)).toBeInTheDocument());

        const runDemoButton = screen.getByRole('button', { name: /Run Demo/i });
        fireEvent.click(runDemoButton);

        await waitFor(() => expect(screen.getByText(/Mocked document content/i)).toBeInTheDocument());
        expect(screen.getByText(/Mocked explanation/i)).toBeInTheDocument();
    });
});

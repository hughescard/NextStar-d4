import { products } from '@/data/products';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const contactMessages = [];

const matchesCriteria = (item, criteria) => {
  if (!criteria || Object.keys(criteria).length === 0) return true;
  return Object.entries(criteria).every(([key, value]) => item[key] === value);
};

const productApi = {
  list: async () => {
    await delay(150);
    return products;
  },
  filter: async (criteria = {}) => {
    await delay(150);
    return products.filter((product) => matchesCriteria(product, criteria));
  },
};

const contactMessageApi = {
  create: async (data) => {
    await delay(150);
    const entry = {
      id: `msg-${contactMessages.length + 1}`,
      createdAt: new Date().toISOString(),
      ...data,
    };
    contactMessages.push(entry);
    return entry;
  },
};

const coreIntegrations = {
  SendEmail: async ({ to, subject, body }) => {
    await delay(200);
    console.info('Mock email sent', { to, subject, body });
    return { ok: true };
  },
  InvokeLLM: async ({ prompt }) => {
    await delay(200);
    return { text: `Mock response for: ${prompt}` };
  },
  UploadFile: async () => {
    await delay(200);
    return { url: 'local://mock-file' };
  },
  GenerateImage: async () => {
    await delay(200);
    return { url: 'local://mock-image' };
  },
  ExtractDataFromUploadedFile: async () => {
    await delay(200);
    return { data: [] };
  },
  CreateFileSignedUrl: async () => {
    await delay(200);
    return { url: 'local://signed-url' };
  },
  UploadPrivateFile: async () => {
    await delay(200);
    return { url: 'local://private-file' };
  },
};

export const apiClient = {
  entities: {
    Product: productApi,
    ContactMessage: contactMessageApi,
  },
  integrations: {
    Core: coreIntegrations,
  },
};

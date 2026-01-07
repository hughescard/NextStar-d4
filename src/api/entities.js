import { apiClient } from './localClient';


export const Product = apiClient.entities.Product;

export const ContactMessage = apiClient.entities.ContactMessage;



// Placeholder for auth-related calls in local dev.
export const User = {
  current: async () => null,
};

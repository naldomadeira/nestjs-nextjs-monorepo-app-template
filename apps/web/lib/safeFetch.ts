import z, { ZodSchema } from 'zod';
import { env } from './env';

export const safeFetch = async <T extends ZodSchema<unknown>>(
  schema: T,
  url: URL | RequestInfo,
  init?: RequestInit,
): Promise<[string | null, z.TypeOf<T>]> => {
  //todo: remover
  console.log(`Fetching ${url} with init:`, init);
  console.log('@Full URL', `${env.API_URL}${url}`);
  const response: Response = await fetch(`${env.API_URL}${url}`, init);

  const res = await response.json();

  if (!response.ok) {
    return [res.message, null];
  }

  const validateFields = schema.safeParse(res);

  if (!validateFields.success) {
    console.log(res);
    console.log('Validation errors:', validateFields.error);
    return [`Validation error: ${validateFields.error.message}`, null];
  }

  return [null, validateFields.data];
};

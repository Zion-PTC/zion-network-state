export interface ListAccounts {
  (provide: any, callbacks: any[]): any;
}

export const listAccounts: ListAccounts = async function (
  provider,
  callbacks: ((...arg: any[]) => any)[]
) {
  const result = await provider.listAccounts();
  if (callbacks) callbacks.forEach((callback) => callback(result));
  return result;
};

import { useRequestContext } from 'hono/jsx-renderer';

export const ErrorPath = () => {
  const { req } = useRequestContext();
  return <h2>Error: {req.query('msg')}</h2>;
};

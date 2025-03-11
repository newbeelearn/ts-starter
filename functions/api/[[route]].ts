import app from '../../packages/server/src/routes'

export const onRequest = (context) => {
  return app.fetch(context.request, context.env, context);
};

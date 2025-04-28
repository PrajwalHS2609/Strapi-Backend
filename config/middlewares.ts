module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['https://strapi-frontend-ruddy.vercel.app'],  // Allow your frontend domain
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

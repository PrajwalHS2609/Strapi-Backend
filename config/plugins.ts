// config/plugins.js
export default ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('ADMIN_JWT_SECRET'),  // Use the value from the .env file
      },
    },
  });
  
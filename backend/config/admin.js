module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2b80ac9352640fb7a4e92fbacfa92830'),
  },
});

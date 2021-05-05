const DATABASE_URI = 'mongodb+srv://dbUserTest:<dbUserPassword>@clustercms.5huzy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const DATABASE_NAME = 'VuejsNews'
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env(DATABASE_URI),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env(DATABASE_NAME),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
})

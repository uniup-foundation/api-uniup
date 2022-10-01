import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  PORT: Joi.number().default(3000).required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  PGADMIN_DEFAULT_EMAIL: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  PGADMIN_DEFAULT_PASSWORD: Joi.string().required(),
  PGADMIN_PORT: Joi.number().default(5050).required(),
  AUTH0_ISSUER_URL: Joi.string().required(),
  AUTH0_AUDIENCE: Joi.string().required(),
});

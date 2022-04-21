import {
  Document,
  SchemaDefinition,
  SchemaDefinitionType,
} from 'mongoose';

export type MongoSchema<T> =
  SchemaDefinition<SchemaDefinitionType<T & Document>>;

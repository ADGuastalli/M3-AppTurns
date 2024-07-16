"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const Credential_1 = require("../entities/Credential");
const CredentialRepositori = data_source_1.AppDataSource.getRepository(Credential_1.Login);
exports.default = CredentialRepositori;

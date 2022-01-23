import { Cliente } from './cliente.iterface';

export interface ClienteResponse {
    clientes:   Cliente[];
    ok:         boolean;
    total:      number;
}
import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'rafaelsql',
    password: 'ejemplodb',
    port: 3306,
    database: 'articulodb'

})

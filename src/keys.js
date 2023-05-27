module.exports = {
    
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'admin',
        database: process.env.DB_NAME || 'database_links',
        port: process.env.DB_PORT || 3306
    }

};
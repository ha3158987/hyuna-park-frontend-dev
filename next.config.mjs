/** @type {import('next').NextConfig} */
// const path = require('path')
import * as path from 'path';

const __dirname = path.resolve();

const nextConfig = {

    sassOptions: {
        includePaths: [path.join(__dirname, '.')],
    },


};

export default nextConfig;

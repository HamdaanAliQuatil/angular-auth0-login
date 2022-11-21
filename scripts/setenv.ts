// const { writeFile } = require('fs');
// const { argv } = require('yargs');

// require('dotenv').config();
// const environment = argv.environment;
// const isProduction = environment === 'prod';

// const targetPath = isProduction 
//    ? `./src/environments/environment.prod.ts`
//    : `./src/environments/environment.ts`;

// const environmentFileContent = `
// export const environment = {
//    production: ${isProduction},
//    AUTH0_DOMAIN: "${process.env["AUTH0_DOMAIN"]}",
//    AUTH0_CLIENT_ID: "${process.env["AUTH0_CLIENT_ID"]}"
// };
// `;
// // write the content to the respective file
// writeFile(targetPath, environmentFileContent, function (err: any) {
//    if (err) {
//       console.log(err);
//    }
//    console.log(`Wrote variables to ${targetPath}`);
// });

// if (!process.env["AUTH0_DOMAIN"] || !process.env["AUTH0_CLIENT_ID"]) {
//    console.error('All the required environment variables were not provided!');
//    process.exit(-1);
// }
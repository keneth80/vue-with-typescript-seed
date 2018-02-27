const chalk = require('chalk');
const {SERVICE, PLATFORM, SERVER} = process.env;
const service = SERVICE ? SERVICE.toLowerCase() : 'page';
const platform = PLATFORM ? SERVICE.toLowerCase() : 'pc';
const server = SERVER ? SERVER.toLowerCase() : 'live';

console.log(chalk`
{bold SERVICE}: {blue ${service}}
{bold PLATFORM}: {blue ${platform}}
{bold SERVER}: {blue ${server}}
`);

module.exports = {
    service,
    platform,
    server
}

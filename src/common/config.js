const baseUrl = 'http://localhost:4001';
//const baseUrl = 'http://192.168.100.19:3000';
//const baseUrl = 'https://my-json-server.typicode.com/pqcuong737/jsonfakeserver/task'

export default {    
    apiGetTaskUrl: `${baseUrl}/api/task`,
    apiGetTypeUrl: `${baseUrl}/api/type`,
    apiGetStatusUrl: `${baseUrl}/api/status`,
    apiGetAssigneeUrl: `${baseUrl}/api/assignee`,
    apiSignUpUrl: `${baseUrl}/api/register`,
    apiSignInUrl: `${baseUrl}/api/login`,
    apiMeUrl: `${baseUrl}/api/me`,
}
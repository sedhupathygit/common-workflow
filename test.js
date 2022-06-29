const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Convert the message and key to Uint8Array's (Buffer implements that interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Encrypt using LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);

// Base64 the encrypted secret
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted);

module.exports = async ({github, context, core}) => {
await github.request('PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}', {
owner: 'sedhupathygit',
repo: 'common-workflow',
secret_name: 'hbcam',
encrypted_value: 'c2VjcmV0',
key_id: '012345678912345678'
})
}

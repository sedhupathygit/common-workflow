const sodium=require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with secret before running the script.
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key.

//Check if libsodium is ready and then proceed.

sodium.ready.then( ()=>{

// Convert Secret & Base64 key to Uint8Array.
let binkey= sodium.from_base64(key, sodium.base64_variants.ORIGINAL) //Equivalent of Buffer.from(key, 'base64')
let binsec= sodium.from_string(secret) // Equivalent of Buffer.from(secret)

//Encrypt the secret using LibSodium
let encBytes= sodium.crypto_box_seal(binsec,binkey) // Similar to tweetsodium.seal(binsec,binkey)

// Convert encrypted Uint8Array to Base64
let output=sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL) //Equivalent of Buffer.from(encBytes).toString('base64')

console.log(output)
});

module.exports = async ({github, context, core}) => {
await github.request('PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}', {
owner: 'sedhupathygit',
repo: 'common-workflow',
secret_name: 'hbcam',
encrypted_value: 'c2VjcmV0',
key_id: '012345678912345678'
})
}

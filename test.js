module.exports = async ({github, context, core}) => {
await github.request('PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}', {
owner: 'sedhupathygit',
repo: 'testrepo',
secret_name: 'hbcam',
encrypted_value: 'c2VjcmV0',
key_id: '012345678912345678'
})
}

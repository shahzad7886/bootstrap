/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    GOOGLE_ID:'252183886492-t5lcq0o06vb914m7tooef70csfe1opqe.apps.googleusercontent.com',
    GOOGLE_SECRET:'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',
    S3_ACCESS_KEY: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKgxwLkqmSkRnTMonKwFsI1fps4pNXe6xYg7Vu4b7qoH asimshahzad6763132 Key',
    S3_SECRET_ACCESS_KEY:'EaxNKbeGwGu55ZAc9FTwtnyPNoqeSdoEmJOT85jV',
  }
}

module.exports = nextConfig

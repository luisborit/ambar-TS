import { run } from '../dist/packages/hosting-runner-vercel-default'

export default async function (req, res) {
  return await run(req, res)
}
import {execSync} from 'child_process'
import watch from 'node-watch'

type testFailure = {
    stderr: Buffer
}

const koans = [
    'Functions',
    'Variables'
]

const parseTestFailure = (e: testFailure) => {
    const lines = e.stderr.toString().split('\n');

    return  lines
        .slice(0, lines.findIndex(l => l.startsWith('Test Suites:')) - 1)
        .join('\n');
}

function runTest(k: string) {
    const command = `jest -- about${k}.test.ts`;
    try {
        execSync(command, {stdio: 'pipe'})
    } catch (e) {
        return parseTestFailure(e)
    }
}

const runKoans = () => {
    const results = koans
        .map(k => runTest(k))
        .filter(r => r !== undefined)

    const message = results.length === 0
    ? 'Congratulations, you have reached enlightenment'
    : `You have not yet reached enlightenment.
Seek wisdom by correcting the test:\n\n${results[0]}`

    console.log(message)
}

runKoans()

watch('koans/', () => {
    console.clear()
    runKoans()
})

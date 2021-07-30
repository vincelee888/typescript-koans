import {execSync} from 'child_process'
import watch from 'node-watch'
import fs from 'fs'

const koans = fs.readdirSync('./koans').sort()

start(koans)

export function start(koans: string[], detailedReporting = false) {
    runKoans(koans, detailedReporting)

    watch('koans/', () => {
        runKoans(koans, detailedReporting)
    })
}

function runKoans(koans: string[], detailedReporting: boolean) {
    console.clear()

    const results: string[][] = koans
        .map(k => runTest(k))
        .filter(r => r !== undefined) as string[][]

    const testOutput = detailedReporting
        ? results[0]
        : parseOutput(results)
        
    const message = results.length === 0
    ? 'Congratulations, you have reached enlightenment'
    : `You have not yet reached enlightenment.
Seek wisdom by correcting the test:\n\n${testOutput}`

    console.log(message)
}

function runTest(k: string) {
    const command = `jest -- ${k}`;
    try {
        execSync(command, {stdio: 'pipe'})
    } catch (e) {
        return parseFailingTests(e)
        .split('●')
    }
}

function parseOutput(results: string[][]) {
    const lines = results[0][1]
        .split('\n')
        .map(l => l.trim())

    return `${lines[0]}\n\n${lines.find(l => l.startsWith('>'))}`
}

type testFailure = {
    stderr: Buffer
}

function parseFailingTests(e: testFailure) {
    const lines = e.stderr.toString().split('\n');

    return lines
        .slice(0, lines.findIndex(l => l.startsWith('Test Suites:')) - 1)
        .join('\n');
}

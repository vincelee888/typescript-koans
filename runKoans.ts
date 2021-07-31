import {execSync} from 'child_process'
import watch from 'node-watch'

export function start(koans: string[], detailedReporting = false) {
    const doRun = () => {
        console.clear()
        console.log(runKoans(koans, detailedReporting))
    }

    doRun()

    watch('koans/', () => {
        doRun()
    })
}

export function runKoans(koans: string[], detailedReporting: boolean, config = {
    successMessage: 'Congratulations, you have reached enlightenment',
    failureMessagePrefix: `You have not yet reached enlightenment.\nSeek wisdom by correcting the test:\n\n`
}) {
    const results: string[][] = koans
        .map(k => runTest(k))
        .filter(r => r !== undefined) as string[][]

    const testOutput = detailedReporting
        ? results[0]
        : parseOutput(results)
        
    return results.length === 0
    ? config.successMessage
    : `${config.failureMessagePrefix}${testOutput}`
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
    if(!results.length) return ''

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

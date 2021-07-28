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

    const result = []

    let lineIndex = 0
    let line = lines[lineIndex]

    while(!line.startsWith('Test Suites:')) {
        result.push(line)

        lineIndex++
        line = lines[lineIndex]
    }

    return result.join('\n');
}

const runKoans = () => {
    const results = koans.map(k => {
        const command = `jest -- about${k}.test.ts`;
        try {
            execSync(command, {stdio: 'pipe'})
        } catch (e) {
            return parseTestFailure(e)
        }
    })
        .filter(r => r !== undefined)

    if (results.length === 0) {
        console.log('Congratulations, you have reached enlightenment')
    } else {
        console.log(`You have not yet reached enlightenment.
Seek wisdom by correcting the test:\n\n${results[0]}`)
    }
}

runKoans()

watch('koans/', (evt, name) => {
    console.clear()
    runKoans()
})

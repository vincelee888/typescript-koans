import {runKoans} from "./runKoans";

const successMessage = 'success'
const failureMessagePrefix = 'failure:'

describe('runKoans', () => {
    describe('given no koans', () => {
        const result = runKoans([], false, { successMessage, failureMessagePrefix })

        it('should return success', () => {
            expect(result).toStrictEqual(successMessage)
        })
    })

})
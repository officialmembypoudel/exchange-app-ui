export const textTrimmer = (text, length) => {
    if (text.length > length) {
        return `${text.slice(0, length)}...`
    } else if (!text) {
        return 'Something Went Wrong...'
    } else {
        return text
    }

}